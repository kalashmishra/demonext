// "use client";
// import React, { useEffect, useState } from "react";
// import CasheLogo from "@/public/assets/images/Leanders/cashe.png";
// import FaircentLogo from "@/public/assets/images/Leanders/faircent.png";
// import FibeLogo from "@/public/assets/images/Leanders/fibe.png";
// import KisshtLogo from "@/public/assets/images/Leanders/kissht.png";
// import LendingkartLogo from "@/public/assets/images/Leanders/lendingkart.png";
// import LoantapLogo from "@/public/assets/images/Leanders/loantap.png";
// import MoneytapLogo from "@/public/assets/images/Leanders/moneytap.png";
// import MoneyviewLogo from "@/public/assets/images/Leanders/moneyview.png";
// import MoneywideLogo from "@/public/assets/images/Leanders/moneywide.png";
// import MpocketLogo from "@/public/assets/images/Leanders/mpocket.png";
// import NiraLogo from "@/public/assets/images/Leanders/nira.png";
// import PaysenseLogo from "@/public/assets/images/Leanders/paysense.png";
// import ProtiumLogo from "@/public/assets/images/Leanders/protium.png";
// import StashfinLogo from "@/public/assets/images/Leanders/stashfin.png";
// import ZypeLogo from "@/public/assets/images/Leanders/zype.png";
// import Indifi from "@/public/assets/images/Leanders/indifi.png";
// import Truebalance from "@/public/assets/images/Leanders/truebalance.png";
// import Incred from "@/public/assets/images/Leanders/incred.svg";
// import Upwards from "@/public/assets/images/Leanders/upwards.png";
// import prefr from "@/public/assets/images/Leanders/prefr.webp";
// import fatakPay from "@/public/assets/images/Leanders/fatak_pay.png";
// import abfl from "@/public/assets/images/Leanders/abfl.png";
// import privo from "@/public/assets/images/Leanders/privoLogo.png";
// import sbl from "@/public/assets/images/Leanders/sbl.png";
// import {
//   Box,
//   Button,
//   Container,
//   Grid,
//   Typography,
//   List,
//   ListItem,
//   useTheme,
// } from "@mui/material";
// import Kreditbee from "@/public/assets/images/Leanders/kreditbee.png";
// import CheckIcon from "@mui/icons-material/Check";
// import olyv from "@/public/assets/images/Leanders/olyv.png";
// import experian from "@/public/assets/images/Leanders/experian.png";
// import Link from "next/link";
// import Image from "next/image";
// import ReactECharts from "echarts-for-react";
// import { useApiCallMutation } from "@/lib/services/apiCallServices";
// import { useRouter } from "next/navigation";
// import apiEndPointsConfig from "@/lib/config/apiEndPoints";

// const Marketplace = (props) => {
//   const theme = useTheme();
//   const router = useRouter();
//   const [open, setOpen] = useState(false);
//   const [incorrectId, setIncorrectId] = useState(false);
//   const [lenderData, setLenderData] = useState({});
//   // const [LenderDetails, setLenderDetails] = useState(sessionStorage.getItem("Lenders")? JSON.parse(sessionStorage.getItem("Lenders")): "");
//   const [LenderDetails, setLenderDetails] =useState();
//   useEffect(() => {
//     if(sessionStorage.getItem("Lenders")!== undefined){
//       setLenderDetails(JSON.parse(sessionStorage.getItem("Lenders")))
//     } 
//   }, [])
  
//   const leadId = (() => {
//     const params = new URLSearchParams(window.location.search);
//     return params.get("id");
//   })();
  
//   //GetLenderLeadStatus api call
//   const [GetLenderPublicLeadApi, getLenderPublicLeadApiData] = useApiCallMutation();
//   useEffect(() => {
//     if (getLenderPublicLeadApiData?.isSuccess) {
//       const employmentType =
//         getLenderPublicLeadApiData?.data?.data?.employmentType;
//       sessionStorage.setItem("employmentType", employmentType);

//       if (getLenderPublicLeadApiData?.data?.status?.code === 404) {
//         setIncorrectId(true);
//       }
//       if (getLenderPublicLeadApiData?.data?.data?.status?.length === 0) {
//         navigate("/get-registered/offers");
//       }
//       const response = JSON.stringify(getLenderPublicLeadApiData);
//       sessionStorage.setItem("Lenders", response);
//       const LenderDetailss = sessionStorage.getItem("Lenders")
//         ? JSON.parse(sessionStorage.getItem("Lenders"))
//         : "";
//       setLenderDetails({ ...LenderDetailss });
//     }
//   }, [getLenderPublicLeadApiData?.isSuccess]);
//   const getLendersPublicLeadStatus = () => {
//     const data = {
//       leadId: leadId,
//     };
//     GetLenderPublicLeadApi({
//       endPoint: apiEndPointsConfig?.PublicLeadStatus,
//       method: "POST",
//       data: { data },
//     });
//   };
//   useEffect(() => {
//     if (LenderDetails?.data?.data?.status?.length === 0) {
//       router.push("/get-registered/offers");
//     }
//     if (leadId) {
//       getLendersPublicLeadStatus();
//     }
//   }, []);

//   //get Lead details api call
//   const [LeadDetailsApi, leadDetailsApiData] = useApiCallMutation();
//   const getLeadDetails = () => {
//     const data = {
//       leadId: leadId,
//     };
//     LeadDetailsApi({
//       endPoint: apiEndPointsConfig?.LeadDetails,
//       method: "POST",
//       data: { data },
//     });
//   };
//   useEffect(() => {
//     if (leadDetailsApiData?.isSuccess) {
//       const response = JSON.stringify(leadDetailsApiData?.data?.data);
//       sessionStorage.setItem("leadData", response);
//     }
//   }, [leadDetailsApiData?.isSuccess]);
//   useEffect(() => {
//     getLeadDetails();
//     if (sessionStorage.getItem("leadId")) {
//       MarketPlaceImpressionAsync();
//     }
//   }, [LenderDetails]);

//   //marketplace impression api call
//   const [MarketPlaceImpressionApi, marketPlaceImpressionApiData] =
//     useApiCallMutation();
//   const MarketPlaceImpressionAsync = () => {
//     const data = {
//       leadId: sessionStorage.getItem("leadId"),
//     };
//     MarketPlaceImpressionApi({
//       endPoint: apiEndPointsConfig?.MarketPlaceImpression,
//       method: "POST",
//       data: { data },
//     });
//   };
//   useEffect(() => {
//     localStorage.removeItem("loanType");
//     window.onpopstate = () => {
//       router.push("/");
//     };
//   }, []);

//   //marketplace click api call
//   const [MarketPlaceClickApi, marketPlaceClickApiData] = useApiCallMutation();
//   const MarketplaceClickAsync = async (LenderId, redirectionLink) => {
//     const data = {
//       lenderId: LenderId,
//       leadId: sessionStorage.getItem("leadId"),
//     };
//     MarketPlaceClickApi({
//       endPoint: apiEndPointsConfig?.MarketplaceClick,
//       method: "POST",
//       data: { data },
//     });

//     window.open(redirectionLink, "_blank");
//   };

//   const applyNow = (lenderId, redirectionLink) => {
//     const accessToken = sessionStorage.getItem("accessToken")
//       ? sessionStorage.getItem("accessToken")
//       : "undefined";

//     if (accessToken !== "undefined") {
//       MarketplaceClickAsync(lenderId, redirectionLink);
//     } else {
//       setLenderData({
//         lenderId: lenderId,
//         redirectionLink: redirectionLink,
//       });
//       setOpen(true);
//     }
//   };

//   const logo = (lender) => {
//     const lowercaseName = lender?.name?.toLowerCase();
//     return lowercaseName === "cashe"
//       ? CasheLogo
//       : lowercaseName === "mpocket"
//       ? MpocketLogo
//       : lowercaseName === "fibe"
//       ? FibeLogo
//       : lowercaseName === "kreditbee"
//       ? Kreditbee
//       : lowercaseName === "moneytap"
//       ? MoneytapLogo
//       : lowercaseName === "lendingkart"
//       ? LendingkartLogo
//       : lowercaseName === "paysense"
//       ? PaysenseLogo
//       : lowercaseName === "moneyview"
//       ? MoneyviewLogo
//       : lowercaseName === "loantap"
//       ? LoantapLogo
//       : lowercaseName === "zype"
//       ? ZypeLogo
//       : lowercaseName === "moneywide"
//       ? MoneywideLogo
//       : lowercaseName === "stashfin"
//       ? StashfinLogo
//       : lowercaseName === "faircent"
//       ? FaircentLogo
//       : lowercaseName === "nira"
//       ? NiraLogo
//       : lowercaseName === "kissht"
//       ? KisshtLogo
//       : lowercaseName === "protium"
//       ? ProtiumLogo
//       : lowercaseName === "indifi"
//       ? Indifi
//       : lowercaseName === "truebalance"
//       ? Truebalance
//       : lowercaseName === "incred"
//       ? Incred
//       : lowercaseName === "upwards"
//       ? Upwards
//       : lowercaseName === "prefr"
//       ? prefr
//       : lowercaseName === "fatakpay"
//       ? fatakPay
//       : lowercaseName === "abfl"
//       ? abfl
//       : lowercaseName === "privo"
//       ? privo
//       : lowercaseName === "sbl"
//       ? sbl
//       : lowercaseName === "olyv"
//       ? olyv
//       : "";
//   };

//   const checkName = (Lender) => {
//     return Lender === "mpocket" ? "mpokket" : Lender;
//   };

//   useEffect(() => {
//     dispatch(
//       setFormData({
//         leadId: "",
//         stage: "",
//         contactNo: "",
//         termsAndCondition: true,
//         loan: {
//           reason: null,
//           amount: 1000,
//           tenure: 1,
//         },
//         panCard: "",
//         aadharNo: "",
//         emailId: "",
//         employmentType: "",
//         employmentDetails: {
//           companyTypeId: "",
//           industryTypeId: "",
//           companyName: "",
//           designation: "",
//           address: "",
//           pinCode: "",
//           countryId: "",
//           stateId: "",
//           cityId: "",
//           yearsWorkingIn: "",
//           businessTypeId: "",
//           professionTypeId: "",
//           turnover: "",
//           monthlyProfit: "",
//           income: "",
//           salaryMode: "",
//           bankId: "",
//           currentAccountBankId: "",
//           savingAccountBankId: "",
//           businessOwnedId: "",
//           gst: "",
//         },
//         personalInfo: {
//           emailId: "",
//           firstName: "",
//           lastName: "",
//           genderId: "",
//           dateOfBirth: "",
//           qualificationId: "",
//           maritalStatus: "",
//         },
//         address: {
//           addressLine1: "",
//           addressLine2: "",
//           pinCode: "",
//           countryId: "",
//           stateId: "",
//           cityId: "",
//           residenceTypeId: "",
//           yearsLivingIn: "",
//         },
//         finance: {
//           panCard: "",
//           aadharNo: "",
//         },
//         others: {
//           totalEmiPaidMonthly: 0,
//           interestedToGetCreditCard: true,
//         },
//         utm: {
//           id: "",
//           url: "",
//           source: "",
//           medium: "",
//           campaign: "",
//           term: "",
//           content: "",
//           clickId: "",
//         },
//       })
//     );
//   }, []);

//   //lead status api call
//   const [LeadStatusApi, leadStatusApiData] = useApiCallMutation();
//   const handleLoadMore = () => {
//     const data = {
//       leadId: sessionStorage?.getItem("leadId") || leadId,
//     };
//     LeadStatusApi({
//       endPoint: apiEndPointsConfig?.LeadStatus,
//       method: "POST",
//       data: { data },
//     });
//   };
//   useEffect(() => {
//     if(leadStatusApiData?.isSuccess){
//       const response = JSON.stringify(leadStatusApiData?.data);
//       sessionStorage.setItem("Lenders", response);
//       const LenderDetailss = sessionStorage.getItem("Lenders")
//         ? JSON.parse(sessionStorage.getItem("Lenders"))
//         : "";
//       setLenderDetails({ ...LenderDetailss });
//     }
    
//   }, [leadStatusApiData?.isSuccess])

//   const cibil = {
//     scoreName: "EXPERIAN",
//     score: 870,
//     scoringFactors: null,
//   };
//   const gaugeOptions = {
//     series: [
//       {
//         type: "gauge",
//         startAngle: 180,
//         endAngle: 0,
//         center: ["50%", "75%"],
//         radius: "80%",
//         min: 0,
//         max: 10,
//         splitNumber: 8,
//         axisLine: {
//           lineStyle: {
//             width: 6,
//             color: [
//               [0.25, "#E70033"],
//               [0.5, "#F58020"],
//               [0.75, "#98CA3C"],
//               [1, "#159B48"],
//             ],
//           },
//         },
//         pointer: {
//           icon: "path://M12.8,0.7l12,40.1H0.7L12.8,0.7z",
//           length: "10%",
//           width: 10,
//           offsetCenter: [0, "-60%"],
//           itemStyle: {
//             color: "auto",
//           },
//         },
//         axisTick: {
//           length: 10,
//           lineStyle: {
//             color: "auto",
//             width: 1,
//           },
//         },
//         splitLine: {
//           length: 15,
//           lineStyle: {
//             color: "auto",
//             width: 3,
//           },
//         },
//         axisLabel: {
//           color: "#464646",
//           fontSize: 14,
//           distance: -40,
//           rotate: "tangential",
//           formatter: function (value) {
//             if (value === 8.75) {
//               return "Excellent";
//             } else if (value === 6.25) {
//               return "Good";
//             } else if (value === 3.75) {
//               return "Fair";
//             } else if (value === 1.25) {
//               return "Poor";
//             }
//             return "";
//           },
//         },
//         title: {
//           offsetCenter: [0, "-19%"],
//           fontSize: 14,
//         },
//         detail: {
//           fontSize: 17,
//           offsetCenter: [0, "-40%"],
//           valueAnimation: true,
//           formatter: function (value) {
//             return Math.round(value * 100) + "";
//           },
//           color: "inherit",
//         },
//         data: [
//           {
//             value: LenderDetails?.data?.data?.cibil.score || 50 / 100,
//             name: "Credit Score",
//           },
//         ],
//       },
//     ],
//   };

//   if (isLoading === true) {
//     return <Loader />;
//   }
//   const CheckIconStyling = {
//     color: "#5ab56b",
//     fontSize: "18px",
//     fontWeight: 900,
//   };
//   const ListStyling = {
//     padding: "0px",
//     fontSize: { xs: "16px", sm: "12px" },
//     margin: { xs: "0px 0px 5px" },
//     fontFamily: "Inter,sans-serif",
//     color: "#404040",
//     fontWeight: 500,
//   };
//   return (
//     <Box sx={{ position: "relative" }}>
//       {incorrectId === true ? (
//         <Box className="marketplace_head mt-5">
//           <Typography>
//             The provided lead id is incorrect, Please provide the correct Lead
//             ID
//           </Typography>
//         </Box>
//       ) : (
//         <Box>
//           <Container
//             maxWidth={"xl"}
//             pt={5}
//             pb={5}
//             sx={{ padding: { md: "0 7%" }, pt: 5, pb: 5 }}
//           >
//             <Grid container>
//               <Grid
//                 item
//                 xs={12}
//                 textAlign={"center"}
//                 sx={{
//                   paddingTop: "42px",
//                   marginBottom: "25px",
//                   display: "flex",
//                   justifyContent: "flex-end",
//                   [theme.breakpoints.down("sm")]: {
//                     flexDirection: "column-reverse",
//                     justifyContent: "center",
//                     alignItems: "center",
//                   },
//                 }}
//               >
//                 <Grid item sm={12}>
//                   <Typography
//                     sx={{
//                       fontWeight: "700",
//                       fontSize: "34px",
//                       color: "#243771",
//                       fontStyle: "normal",
//                       lineHeight: "normal",
//                       mb: 3,
//                     }}
//                   >
//                     Congratulations !
//                   </Typography>
//                   <Typography
//                     sx={{
//                       fontWeight: "400",
//                       fontSize: "18px",
//                       color: "#243771",
//                       fontStyle: "normal",
//                       lineHeight: "normal",
//                     }}
//                   >
//                     You've been successfully matched with the following lenders:
//                   </Typography>
//                 </Grid>
//                 <Grid
//                   item
//                   sm={12}
//                   xl={3}
//                   sx={{
//                     display: "flex",
//                     justifyContent: { sm: "center", md: "flex-end" },
//                   }}
//                 >
//                   {LenderDetails?.data?.data?.cibil && (
//                     <Box
//                       className="gauge"
//                       style={{
//                         position: "relative",
//                       }}
//                     >
//                       <ReactECharts
//                         style={{
//                           marginTop: "-80px",
//                           height: "250px",
//                           width: "270px",
//                           "@media (max-width: 768px)": {
//                             width: "auto",
//                             marginTop: "-50%",
//                           },
//                         }}
//                         option={gaugeOptions}
//                       />

//                       <img
//                         style={{
//                           position: "absolute",
//                           top: "59%",
//                           left: " 36%",
//                           width: " 80px ",
//                         }}
//                         src={experian}
//                         alt="Logo"
//                         class="gauge-logo"
//                       />
//                     </Box>
//                   )}
//                 </Grid>
//               </Grid>
//               {LenderDetails?.data?.data?.status?.length > 0 ? (
//                 <Grid item xs={12}>
//                   <Box sx={{ marginBottom: "50px" }}>
//                     <Typography
//                       sx={{
//                         color: "#243771",
//                         fontWeight: 800,
//                         fontSize: "22px",
//                         marginBottom: "10px",
//                         fontStyle: "normal",
//                       }}
//                     >
//                       Best Match-
//                     </Typography>
//                     <Box
//                       sx={{
//                         background: "#f7d64a",
//                         alignItems: "center",
//                         border: "1px solid #243771",
//                         borderRadius: "10px",
//                         boxShadow: "0 3px 6px #0000001c",
//                         display: "flex",
//                         marginBottom: "30px",
//                         padding: "20px 15px 18px",
//                         transition: "all .4s ease",
//                         [theme.breakpoints.down("md")]: {
//                           flexDirection: "column",
//                           justifyContent: "center",
//                           alignItems: "center",
//                           width: "45%",
//                           display: "inline-block",
//                         },
//                         [theme.breakpoints.down("sm")]: {
//                           width: "100%",
//                         },
//                       }}
//                     >
//                       <Box sx={{ minWidth: "20%", textAlign: "center" }}>
//                         <Image
//                           style={{ maxWidth: "120px" }}
//                           src={logo(LenderDetails?.data?.data?.status[0])}
//                           alt="Logo"
//                         />
//                       </Box>
//                       <Box sx={{ minWidth: "20%", textAlign: "center" }}>
//                         <Typography
//                           sx={{
//                             fontSize: "18px",
//                             fontWeight: 900,
//                             marginBottom: 0,
//                             textTransform: "uppercase",
//                             color: "#243771",
//                           }}
//                         >
//                           {checkName(
//                             LenderDetails?.data?.data?.status[0]?.name
//                           )}
//                         </Typography>
//                       </Box>
//                       <Box
//                         sx={{
//                           minWidth: "20%",
//                           textAlign: "left",
//                           fontSize: "12px",
//                           [theme.breakpoints.down("sm")]: {
//                             textAlign: "center",
//                             marginTop: "32px",
//                           },
//                         }}
//                       >
//                         <Typography
//                           sx={{
//                             fontSize: "17px",
//                             fontWeight: "bold",
//                             color: "#243771",
//                           }}
//                         >
//                           Features
//                         </Typography>
//                         <List
//                           sx={{
//                             fontSize: "14px",
//                             listStyle: "none",
//                             marginBottom: 0,
//                             marginLeft: 0,
//                             paddingLeft: 0,
//                           }}
//                         >
//                           {LenderDetails?.data?.data?.status[0]?.features?.map(
//                             (list) => (
//                               <ListItem
//                                 sx={{
//                                   ...ListStyling,
//                                   [theme.breakpoints.down("sm")]: {
//                                     alignItems: "flex-start",
//                                   },
//                                 }}
//                               >
//                                 <CheckIcon sx={{ ...CheckIconStyling }} />
//                                 <Typography
//                                   sx={{
//                                     marginLeft: "10px",
//                                     fontFamily: "Inter,sans-serif",
//                                     color: "#404040",
//                                     fontWeight: 500,
//                                     fontSize: "13px",
//                                   }}
//                                 >
//                                   {list.title}
//                                 </Typography>
//                               </ListItem>
//                             )
//                           )}
//                         </List>
//                       </Box>
//                       <Box
//                         sx={{
//                           minWidth: "20%",
//                           textAlign: "center",
//                           [theme.breakpoints.down("md")]: {
//                             marginBottom: "16px",
//                           },
//                         }}
//                       >
//                         <Typography
//                           sx={{
//                             fontSize: "16px",
//                             fontWeight: "bold",
//                             marginBottom: "10px",
//                             color: "#243771",
//                             fontStyle: "normal",
//                           }}
//                         >
//                           Self Rating
//                         </Typography>
//                         <span
//                           style={{
//                             fontSize: "24px",
//                             fontWeight: 800,
//                             marginBottom: "10px",
//                             fontStyle: "normal",
//                           }}
//                         >
//                           {LenderDetails?.data?.data?.status[0]?.rating}
//                         </span>
//                       </Box>
//                       <Box sx={{ minWidth: "20%", textAlign: "center" }}>
//                         <Link
//                           href=""
//                           style={{
//                             color: "#f7d64a",
//                             textDecoration: "none",
//                           }}
//                           onClick={(e) => {
//                             e.preventDefault();
//                             applyNow(
//                               LenderDetails?.data?.data?.status[0]?.lenderId,
//                               LenderDetails?.data?.data?.status[0]
//                                 ?.redirectionLink
//                             );
//                           }}
//                         >
//                           <Button
//                             sx={{
//                               "&:hover": {
//                                 backgroundColor: "#243771",
//                                 color: "#f7d64a",
//                               },
//                               padding: "7px 32px",
//                               boxShadow: "0px 3px 6px #00000029",
//                               borderRadius: "10px",
//                               backgroundColor: "#243771",
//                               color: "#f7d64a",
//                               transition: ".4s all ease-in-out",
//                               textTransform: "capitalize ",
//                             }}
//                           >
//                             Apply Now
//                           </Button>
//                         </Link>
//                       </Box>
//                     </Box>
//                   </Box>
//                   {LenderDetails?.data?.data?.status?.length > 1 && (
//                     <Box sx={{ marginBottom: "50px" }}>
//                       <Typography
//                         sx={{
//                           color: "#243771",
//                           fontWeight: 800,
//                           fontSize: "22px",
//                           marginBottom: "10px",
//                           fontStyle: "normal",
//                         }}
//                       >
//                         Recommended-
//                       </Typography>

//                       {Array.isArray(LenderDetails?.data?.data?.status) &&
//                         LenderDetails?.data?.data?.status?.map((val, i) => (
//                           <>
//                             {i !== 0 ? (
//                               <Box
//                                 sx={{
//                                   alignItems: "center",
//                                   border: "1px solid #243771",
//                                   borderRadius: "10px",
//                                   boxShadow: "0 3px 6px #0000001c",
//                                   display: "flex",
//                                   marginBottom: "30px",
//                                   padding: "20px 15px 18px",
//                                   transition: "all .4s ease",
//                                   [theme.breakpoints.down("md")]: {
//                                     flexDirection: "column",
//                                     justifyContent: "center",
//                                     alignItems: "center",
//                                     width: "45%",
//                                     display: "inline-block",
//                                     margin: "0 22px 25px 0",
//                                   },
//                                   [theme.breakpoints.down("sm")]: {
//                                     width: "100%",
//                                   },
//                                 }}
//                               >
//                                 <Box
//                                   sx={{
//                                     minWidth: "20%",
//                                     textAlign: "center",
//                                   }}
//                                 >
//                                   <img
//                                     style={{ maxWidth: "120px" }}
//                                     src={logo(val)}
//                                     alt="Logo"
//                                   />
//                                 </Box>
//                                 <Box
//                                   sx={{
//                                     minWidth: "20%",
//                                     textAlign: "center",
//                                   }}
//                                 >
//                                   <Typography
//                                     sx={{
//                                       fontSize: "18px",
//                                       fontWeight: 900,
//                                       marginBottom: 0,
//                                       textTransform: "uppercase",
//                                       color: "#243771",
//                                     }}
//                                   >
//                                     {checkName(val?.name)}
//                                   </Typography>
//                                 </Box>
//                                 <Box
//                                   sx={{
//                                     minWidth: "20%",
//                                     textAlign: "left",
//                                     fontSize: "12px",
//                                     [theme.breakpoints.down("sm")]: {
//                                       textAlign: "center",
//                                       marginTop: "32px",
//                                     },
//                                   }}
//                                 >
//                                   <Typography
//                                     sx={{
//                                       fontSize: "17px",
//                                       fontWeight: "bold",
//                                       color: "#243771",
//                                     }}
//                                   >
//                                     Features
//                                   </Typography>
//                                   <List
//                                     sx={{
//                                       fontSize: "14px",
//                                       listStyle: "none",
//                                       marginBottom: 0,
//                                       marginLeft: 0,
//                                       paddingLeft: 0,
//                                     }}
//                                   >
//                                     {val?.features?.map((list) => (
//                                       <ListItem
//                                         sx={{
//                                           ...ListStyling,
//                                           [theme.breakpoints.down("sm")]: {
//                                             alignItems: "flex-start",
//                                           },
//                                         }}
//                                       >
//                                         <CheckIcon
//                                           sx={{ ...CheckIconStyling }}
//                                         />
//                                         <Typography
//                                           sx={{
//                                             marginLeft: "10px",
//                                             fontFamily: "Inter,sans-serif",
//                                             color: "#404040",
//                                             fontWeight: 500,
//                                             fontSize: "13px",
//                                           }}
//                                         >
//                                           {list.title}
//                                         </Typography>
//                                       </ListItem>
//                                     ))}
//                                   </List>
//                                 </Box>
//                                 <Box
//                                   sx={{
//                                     minWidth: "20%",
//                                     textAlign: "center",
//                                     [theme.breakpoints.down("md")]: {
//                                       marginBottom: "16px",
//                                     },
//                                   }}
//                                 >
//                                   <Typography
//                                     sx={{
//                                       fontSize: "16px",
//                                       fontWeight: "bold",
//                                       marginBottom: "10px",
//                                       color: "#243771",
//                                       fontStyle: "normal",
//                                     }}
//                                   >
//                                     Self Rating
//                                   </Typography>
//                                   <span
//                                     style={{
//                                       fontSize: "24px",
//                                       fontWeight: 800,
//                                       marginBottom: "10px",
//                                       fontStyle: "normal",
//                                     }}
//                                   >
//                                     {val?.rating}
//                                   </span>
//                                 </Box>
//                                 <Box
//                                   sx={{
//                                     minWidth: "20%",
//                                     textAlign: "center",
//                                   }}
//                                 >
//                                   <Link
//                                     href=""
//                                     style={{
//                                       color: "#f7d64a",
//                                       textDecoration: "none",
//                                     }}
//                                     onClick={(e) => {
//                                       e.preventDefault();
//                                       applyNow(
//                                         val.lenderId,
//                                         val.redirectionLink
//                                       );
//                                     }}
//                                   >
//                                     <Button
//                                       sx={{
//                                         "&:hover": {
//                                           backgroundColor: "#243771",
//                                           color: "#f7d64a",
//                                         },
//                                         padding: "7px 32px",
//                                         boxShadow: "0px 3px 6px #00000029",
//                                         borderRadius: "10px",
//                                         backgroundColor: "#243771",
//                                         color: "#f7d64a",
//                                         transition: ".4s all ease-in-out",
//                                         textTransform: "capitalize ",
//                                       }}
//                                     >
//                                       Apply Now
//                                     </Button>
//                                   </Link>
//                                 </Box>
//                               </Box>
//                             ) : (
//                               ""
//                             )}
//                           </>
//                         ))}
//                     </Box>
//                   )}
//                 </Grid>
//               ) : (
//                 ""
//               )}
//               {LenderDetails?.data?.data?.loadMore && (
//                 <Grid
//                   item
//                   xs={12}
//                   mt={2}
//                   sx={{
//                     display: "flex",
//                     width: "100%",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   <Button
//                     onClick={handleLoadMore}
//                     sx={{
//                       width: "176px",
//                       height: "35px",
//                       flexShrink: 0,
//                       backgroundColor: "#243771",
//                       gap: " 8.723px",
//                       ":hover": {
//                         backgroundColor: "#243771",
//                         color: "#FFF",
//                       },
//                     }}
//                   >
//                     <Typography
//                       sx={{
//                         color: "#FFF",
//                         fontsize: "18px",
//                         fontStyle: "normal",
//                         fontWeight: 500,
//                         lineHeight: "normal",
//                       }}
//                     >
//                       Load More
//                     </Typography>
//                   </Button>
//                 </Grid>
//               )}
//             </Grid>
//           </Container>
//         </Box>
//       )}

//       <MyModal
//         setOpen={setOpen}
//         open={open}
//         MarketplaceClickAsync={MarketplaceClickAsync}
//         lenderData={lenderData}
//       />
//     </Box>
//   );
// };

// export default Marketplace

import React from 'react'

function Marketplace() {
  return (
    <div>Marketplace</div>
  )
}

export default Marketplace