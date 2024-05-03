import { Grid, Modal, Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import tickcircle from "@/public/assets/images/tick-circle.png";
import Image from "next/image";
// import { useNavigate } from "react-router-dom";

const ContinueModal = () => {
  //   const navigate = useNavigate();
  //   const [open, setOpen] = useState(true);
  //   const [clicked, setClicked] = useState("");
  //   const handleNavigate = () => {
  //     setClicked("CLICKED");
  //     window.open("/get-registered/marketplace", "_blank");
  //   };
  //   useEffect(() => {
  //     const timerId = setTimeout(() => {
  //       if (clicked === "CLICKED") {
  //         setOpen(false);
  //         navigate("/get-registered/offers");
  //       } else {
  //         setOpen(false);
  //         navigate("/get-registered/marketplace");
  //       }
  //     }, 6000);
  //     return () => clearTimeout(timerId);
  //   }, [clicked, navigate]);
  return (
    <div>
      {" "}
      <Modal
        sx={{ top: "10%", padding: "40px" }}
        // open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid
          container
          bgcolor="white"
          maxWidth={400}
          alignItems={"center"}
          margin="auto"
          p={6}
          sx={{
            display: "flex",
            padding: "36px 40px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            gap: "24px",
            flexShrink: 0,
            alignSelf: "stretch",
          }}
        >
          {" "}
          <Grid item xs={12} display={"flex"} gap={"10px"}>
            <Image
              style={{
                height: "25px",
                borderRadius: " 3.287px",
                background: "rgba(38, 34, 80, 0.05)",
              }}
              src={tickcircle}
              alt=""
            />
            <Typography
              sx={{
                color: "#262250",
                fontSize: "20px",
                letterSpacing: "0px",
                fontStyle: "normal",
                fontWeight: 600,
                textTransform: "capitalize",
                opacity: 1,
                textAlign: "center",
                lineHeight: "normal",
              }}
            >
              Your Loan Match is Ready!
            </Typography>
          </Grid>
          <Grid item xs={12} display={"flex"} gap={"10px"}>
            <Typography
              sx={{
                color: "rgba(38, 34, 80, 0.60)",
                textAlign: "center",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 400,
                textTransform: "capitalize",
                opacity: 1,
                lineHeight: "22px",
              }}
            >
              We've located a lender for you and are just verifying a few
              details. Hold on for a few seconds to get matched, or Click Below
              to speed up the process.
            </Typography>
          </Grid>
          <Button
            sx={{
              display: "flex",
              height: "44px",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              alignSelf: "stretch",
              backgroundColor: "#262250",
              padding: "14px 20px",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#262250",
              },
            }}
            // onClick={handleNavigate}
            variant="contained"
          >
            {" "}
            Click Here
          </Button>
        </Grid>
      </Modal>
    </div>
  );
};

export default ContinueModal;
