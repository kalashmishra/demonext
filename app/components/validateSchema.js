import * as yup from "yup";

export const userNumberSchema = yup.object({
  contactNo: yup
    .string()
    .matches(/^\d{10}$/, "Must be a 10-digit number")
    .test(
      "not-repetitive-digits",
      "Contact number does not consist of repetitive digits",
      (value) => {
        const isRepetitive = /^(.)\1+$/.test(value);
        return !isRepetitive;
      }
    )
    .required("Contact number is required"),
  termsAndCondition: yup
    .boolean()
    .oneOf([true], "You must agree to the terms and conditions"),
});

export const verifyUserSchema = yup.object({
  verifyOtp: yup
    .string()
    .required("OTP is required")
    .matches(/^\d{6}$/, "OTP must be a 6-digit number"),
});

export const loanSchema = yup.object().shape({
  amount: yup
    .number()
    .required("Loan amount is required")
    .test(
      "is-at-least-1-thousand",
      "Loan amount should be atleast 1000",
      (value) => {
        return typeof value === "number" && value >= 1000;
      }
    )
    .test(
      "is-multiple-of-thousand",
      "Loan amount should be a multiple of 1000",
      (value) => {
        return typeof value === "number" && value >= 1000 && value % 1000 === 0;
      }
    )
    .typeError("Loan amount is required"),
  tenure: yup
    .number()
    .required("Loan tenure is required")
    .test(
      "is-at-least-1-thousand",
      "Loan tenure should be from 1 to 60 months",
      (value) => {
        return typeof value === "number" && value >= 1;
      }
    )
    .typeError("Loan tenure is required"),
  reason: yup.mixed().required("Loan Reason is required"),
  otherReason: yup.string().when("reason", {
    is: (reason) => {
      return reason === "Others";
    },
    then: (yup) =>
      yup
        .min(4, "Minimum length should be 4 characters")
        .max(60, "Maximum length should be 60 characters")
        .matches(/^[A-Za-z\s]+$/, "Only Alphabets are allowed")
        .required("Reason for Loan is required"),

    otherwise: (yup) => yup.optional(),
  }),
  panCard: yup
    .string()
    .matches(
      /^([A-Za-z]){5}([0-9]){4}([A-Za-z]){1}?$/,
      "Invalid PAN card number"
    )
    .required("PAN card number is required"),
  aadharNo: yup
    .string()
    .matches(/^\d{4}$/, "Aadhar number must be exactly 4 digits")
    .required("Aadhar number is required"),
  emailId: yup
    .string()
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "Invalid email address"
    )
    .required("Email is required"),
});

export const employmentTypeSchema = yup.object().shape({
  employmentType: yup.string().required("Please select an employment type"),
});

export const salariedSchema = yup.object({
  companyTypeId: yup.mixed().required("Company Type is required"),
  industryTypeId: yup.mixed().required("Industry Type is required"),
  designation: yup
    .string()
    .required("Designation is required")
    .matches(/^[A-Za-z\s]+$/, "Only alphabets are allowed in the designation"),
  companyName: yup.string().required("Company Name is required"),
  address: yup
    .string()
    .test(
      "no-special-characters",
      "Only Alphabets , - , / and numbers are allowed with combinations  in the address ",
      (value) => {
        return /^[A-Za-z0-9\s,/-]*$/.test(value);
      }
    )
    .required("Address is required"),
  pinCode: yup
    .string()
    .min(6, "Pincode must be 6 digits")
    .test(
      "not-000000",
      "Pin code cannot be 000000",
      (value) => value !== "000000"
    )
    .required("Pin Code is required"),

  yearsWorkingIn: yup.mixed().required("Years of Working In is required"),
  income: yup
    .string()
    .test(
      "is-at-least-9-thousand",
      "Monthly income should be at least 9000 or a maximum of 1000000.",
      (value) => {
        return (
          typeof value === "string" &&
          parseInt(value, 10) >= 9000 &&
          parseInt(value, 10) <= 1000000
        );
      }
    )
    .required("Income is required"),
  salaryMode: yup.string().required("Mode of Salary is required"),
  bankId: yup.mixed().required("Bank Name is required"),
});

export const SelfEmployedDetailsSchema = yup.object({
  businessOwnedId: yup.mixed().required("Business Run By is required"),
  yearsWorkingIn: yup.mixed().required("Years Working In is required"),
  businessTypeId: yup.mixed().required("Business Type is required"),
  industryTypeId: yup.mixed().required("Industry is required"),
  companyName: yup.string().required("Company Name is required"),
  address: yup
    .string()
    .test(
      "no-special-characters",
      "Only Alphabets , - , / and numbers are allowed with combinations  in the address ",
      (value) => {
        return /^[A-Za-z0-9\s,/-]*$/.test(value);
      }
    )
    .required("Address is required"),
  pinCode: yup
    .string()
    .required("Pin Code is required")
    .min(6, "Pincode must be 6 digits")
    .test("not-000000", "Pin code cannot be 000000", (value) => {
      return value !== "000000";
    }),
  // cityId: yup.string().required("City Name is required"),
  // stateId: yup.string().required("State Name is required"),
  // countryId: yup.string().required("Country is required"),
  designation: yup
    .string()
    .matches(/^[A-Za-z\s]+$/, "Only alphabets are allowed in the designation")
    .required("Designation is required"),
  turnover: yup
    .string()
    .test(
      "is-at-least-12-lakh",
      "The amount should be atleast 1200000",
      (value) => {
        return typeof value === "string" && value >= 1200000;
      }
    )
    .test(
      "is-under-max-limit",
      "The amount should be less than 1,00,00,00,000",
      (value) => {
        return typeof value === "string" && parseInt(value, 10) <= 1000000000;
      }
    )
    .required("Turnover is required"),
  // gst: yup
  //   .string()
  //   .matches(
  //     /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
  //     "Invalid GST Number"
  //   ),
  gst: yup.string().when("turnover", {
    is: (trunover) => trunover >= 2000000,
    then: (yup) =>
      yup
        .required("Gst number is required")
        .matches(
          /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
          "Invalid GST Number"
        ),
    otherwise: (yup) =>
      yup
        .optional()
        .matches(
          /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
          "Invalid GST Number"
        ),
  }),
  monthlyProfit: yup
    .string()
    .test(
      "is-at-least-1-lakh",
      "Monthly Profit should be at least 100000",
      (value) => {
        return typeof value === "string" && value >= 100000;
      }
    )
    .test(
      "is-under-max-limit",
      "Monthly profit should be less than turnover",
      (value) => {
        return typeof value === "string" && parseInt(value, 10) <= 1200000;
      }
    )
    .required("Monthly Profit is required"),
  currentAccountBankId: yup
    .mixed()
    .required("Current Account Bank is required"),
  savingAccountBankId: yup.mixed().required("Savings Account Bank is required"),
});

export const personalDetailsSchema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  dateOfBirth: yup
    .string()
    .test("minimumAge", "Minimum age should be 18 or older", (value) => {
      const today = new Date();
      const birthDate = new Date(value);
      const age = today.getFullYear() - birthDate.getFullYear();
      return age >= 18;
    })
    .test("maximumAge", "Maximum age should be 105 or younger", (value) => {
      const today = new Date();
      const birthDate = new Date(value);
      const age = today.getFullYear() - birthDate.getFullYear();
      return age <= 105;
    })
    .required("Date of Birth is required"),
  genderId: yup.mixed().required("Gender is required"),
  maritalStatus: yup.string().required("Marital Status is required"),
  qualificationId: yup.mixed().required("Qualification is required"),
});

export const addressDetailsSchema = yup.object({
  addressLine1: yup
    .string()
    .test(
      "no-special-characters",
      "Only Alphabets , - , / and numbers are allowed with combinations  in the address ",
      (value) => {
        return /^[A-Za-z0-9\s,/-]*$/.test(value);
      }
    )
    .required("Address Line 1 is required"),
  addressLine2: yup
    .string()
    .test(
      "no-special-characters",
      "Only Alphabets , - , / and numbers are allowed with combinations  in the address ",
      (value) => {
        return /^[A-Za-z0-9\s,/-]*$/.test(value);
      }
    )
    .required("Landmark is required"),
  pinCode: yup
    .string()
    .min(6, "Pincode must be 6 digits")
    .test("not-000000", "Pin code cannot be 000000", (value) => {
      return value !== "000000";
    })
    .required("Pincode is required"),
  // cityId: yup.string().required("City Name is required"),
  // stateId: yup.string().required("State Name is required"),
  // countryId: yup.string().required("Country Name is required"),
  residenceTypeId: yup.mixed().required("Resident Type is required"),
  yearsLivingIn: yup.mixed().required("Years Living In is required"),
});

export const otherDetailsSchema = yup.object({
  totalEmiPaidMonthly: yup
    .string()
    .required("Total EMI Pay currently Per Month is required"),
  interestedToGetCreditCard: yup
    .mixed()
    .required("Interest in getting a credit card is required"),
});

export const submitSchema = yup.object({
  termsAndCondition: yup
    .boolean()
    .oneOf([true], "You must agree to the terms and conditions"),
});
