import { createSlice } from "@reduxjs/toolkit";

// Initial state definition
const initialState = {
  formData: {
    leadId: "",
    stage: "",
    contactNo: "",
    termsAndCondition: true,
    loan: {
      reason: "",
      otherReason: "",
      amount: 1000,
      tenure: 1,
    },
    panCard: "",
    aadharNo:'',
    emailId: "",
    employmentType: "",
    employmentDetails: {
      companyTypeId: "",
      industryTypeId: "",
      companyName: "",
      designation: "",
      address: "",
      pinCode: "",
      countryId: "",
      stateId: "",
      cityId: "",
      yearsWorkingIn: "",
      businessTypeId: "",
      professionTypeId: "",
      turnover: "",
      monthlyProfit: "",
      income: "",
      salaryMode: "",
      bankId: "",
      currentAccountBankId: "",
      savingAccountBankId: "",
      businessOwnedId: "",
      gst: "",
    },
    personalInfo: {
      emailId: "",
      firstName: "",
      lastName: "",
      genderId: "",
      dateOfBirth: "",
      qualificationId: "",
      maritalStatus: "",
    },
    address: {
      addressLine1: "",
      addressLine2: "",
      pinCode: "",
      countryId: "",
      stateId: "",
      cityId: "",
      residenceTypeId: "",
      yearsLivingIn: "",
    },
    finance: {
      panCard: "",
      aadharNo: "",
    },
    others: {
      totalEmiPaidMonthly: 0,
      interestedToGetCreditCard: true,
    },
    utm: {
      id: "",
      url: "",
      source: "",
      medium: "",
      campaign: "",
      term: "",
      content: "",
      clickId: "",
    },
    employmentDetails: {
      companyTypeId: "",
      industryTypeId: "",
      companyName: "",
      designation: "",
      address: "",
      pinCode: "",
      countryId: "",
      stateId: "",
      cityId: "",
      yearsWorkingIn: "",
      businessTypeId: "",
      professionTypeId: "",
      turnover: "",
      monthlyProfit: "",
      income: "",
      salaryMode: "",
      bankId: "",
      currentAccountBankId: "",
      savingAccountBankId: "",
      businessOwnedId: "",
      gst:"",
    },
    extras: {
      browser: "",
      operatingSystem: "",
      ipAddress: "",
      timestamp: "",
      userAgent: "",
      location: "",
    },
  },
  isLoading: false,
  companyTypeList: [],
  businessOwnedList: [],
  businessTypeList: [],
  industryTypeList: [],
  bankList: [],
  qualificationsList: [],
  genderTypesList: [],
  residenceTypesList: [],
  loanReasonList: [],
  companyAddress: { city: "", state: "", country: "" },
  personalAddress: { city: "", state: "", country: "" },
  LendersDetails: {},
  loanType: "",
  employType: "",
  pinCodeError: { companyPincode: "", addressPincode: "" },
};

// Create a slice of the store
const formSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {
    setFormData(state, action) {
      state.formData = { ...state.formData, ...action.payload };
    },
    setBusinessOwned(state, action) {
      state.businessOwnedList = action.payload;
    },
    setBusinessType(state, action) {
      state.businessTypeList = action.payload;
    },
    setIndustryType(state, action) {
      state.industryTypeList = action.payload;
    },
    setBanks(state, action) {
      state.bankList = action.payload;
    },
    setCompanyType(state, action) {
      state.companyTypeList = action.payload;
    },
    setLoanReason(state, action) {
      state.loanReasonList = action.payload;
    },
    setQualifications(state, action) {
      state.qualificationsList = action.payload;
    },
    setGenderType(state, action) {
      state.genderTypesList = action.payload;
    },
    setResidenceType(state, action) {
      state.residenceTypesList = action.payload;
    },
    setCompanyAddress(state, action) {
      state.companyAddress = action.payload;
    },
    setPersonalAddress(state, action) {
      state.personalAddress = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setLenderDetails(state, action) {
      state.LendersDetails = action.payload;
    },
    setLoanType(state, action) {
      state.loanType = action.payload;
    },
    setEmployType(state, action) {
      state.employType = action.payload;
    },
    setPincodeError(state, action) {
      state.pinCodeError = action.payload;
    },
  },
});

export const {
  setFormData,
  setBusinessOwned,
  setBusinessType,
  setIndustryType,
  setBanks,
  setCompanyType,
  setLoanReason,
  setQualifications,
  setGenderType,
  setResidenceType,
  setCompanyAddress,
  setPersonalAddress,
  setIsLoading,
  setLenderDetails,
  setLoanType,
  setEmployType,
  setPincodeError,
} = formSlice.actions;

export default formSlice.reducer;
