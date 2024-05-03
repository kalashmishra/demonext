//--------------UserNumberErrorFocus---------

export const UserNumberErrorFocus = (formik) => {
  if (formik && formik.errors && formik.errors.contactNo) {
    document.getElementById("contactNo").focus();
  } else if (formik && formik.errors && formik.errors.termsAndCondition) {
    document.getElementById("termsAndCondition").focus();
  }
  return false;
};
//-----------VerifyUserErrorFocus-----------
export const VerifyUserErrorFocus = (formik) => {
  if (formik && formik.errors && formik.errors.verifyOtp) {
    document.getElementById("verifyOtp").focus();
  }
  return false;
};
//-----------loanErrorFocus-------------------
export const LoanErrorFocus = (formik) => {
  if (formik && formik.errors && formik.errors.amount) {
    document.getElementById("amount").focus();
  } else if (formik && formik.errors && formik.errors.tenure) {
    document.getElementById("tenure").focus();
  } else if (formik && formik.errors && formik.errors.reason) {
    document.getElementById("reason").focus();
  } else if (formik && formik.errors && formik.errors.otherReason) {
    document.getElementById("otherReason").focus();
  } else if (formik && formik.errors && formik.errors.panCard) {
    document.getElementById("panCard").focus();
  } else if (formik && formik.errors && formik.errors.aadharNo) {
    document.getElementById("aadharNo").focus();
  } else if (formik && formik.errors && formik.errors.emailId) {
    document.getElementById("emailId").focus();
  }
  return false;
};
//----------AddressDetailsErrorFocus---------
export const AddressDetailsErrorFocus = (formik) => {
  if (formik && formik.errors) {
    if (formik.errors.addressLine1) {
      document.getElementById("addressLine1").focus();
    } else if (formik.errors.addressLine2) {
      document.getElementById("addressLine2").focus();
    } else if (formik.errors.pinCode) {
      document.getElementById("pinCode").focus();
    } else if (formik.errors.residenceTypeId) {
      document.getElementById("residenceTypeId").focus();
    } else if (formik.errors.yearsLivingIn) {
      document.getElementById("yearsLivingIn").focus();
    }
  }
  return false;
};
//-------------SelfEmployedDetailsErrorFocus-----------
export const SelfEmployedDetailsErrorFocus = (formik) => {
  if (formik && formik.errors) {
    if (formik.errors.businessOwnedId) {
      document.getElementById("businessOwnedId").focus();
    } else if (formik.errors.yearsWorkingIn) {
      document.getElementById("yearsWorkingIn").focus();
    } else if (formik.errors.businessTypeId) {
      document.getElementById("businessTypeId").focus();
    } else if (formik.errors.industryTypeId) {
      document.getElementById("industryTypeId").focus();
    } else if (formik.errors.companyName) {
      document.getElementById("companyName").focus();
    } else if (formik.errors.address) {
      document.getElementById("address").focus();
    } else if (formik.errors.pinCode) {
      document.getElementById("pinCode").focus();
    } else if (formik.errors.cityId) {
      document.getElementById("cityId").focus();
    } else if (formik.errors.stateId) {
      document.getElementById("stateId").focus();
    } else if (formik.errors.countryId) {
      document.getElementById("countryId").focus();
    } else if (formik.errors.designation) {
      document.getElementById("designation").focus();
    } else if (formik.errors.turnover) {
      document.getElementById("turnover").focus();
    } else if (formik.errors.gst) {
      document.getElementById("gst").focus();
    } else if (formik.errors.monthlyProfit) {
      document.getElementById("monthlyProfit").focus();
    } else if (formik.errors.currentAccountBankId) {
      document.getElementById("currentAccountBankId").focus();
    } else if (formik.errors.savingAccountBankId) {
      document.getElementById("savingAccountBankId").focus();
    }
  }
  return false;
};
export const SalariedErrorFocus = (formik) => {
  if (formik.errors.companyTypeId) {
    document.getElementById("companyTypeId").focus();
  } else if (formik.errors.industryTypeId) {
    document.getElementById("industryTypeId").focus();
  } else if (formik.errors.designation) {
    document.getElementById("designation").focus();
  } else if (formik.errors.companyName) {
    document.getElementById("companyName").focus();
  } else if (formik.errors.address) {
    document.getElementById("address").focus();
  } else if (formik.errors.pinCode) {
    document.getElementById("pinCode").focus();
  } else if (formik.errors.yearsWorkingIn) {
    document.getElementById("yearsWorkingIn").focus();
  } else if (formik.errors.income) {
    document.getElementById("income").focus();
  } else if (formik.errors.salaryMode) {
    document.getElementById("salaryMode").focus();
  } else if (formik.errors.bankId) {
    document.getElementById("bankId").focus();
  }
  return false;
};
//---------- EmployeTypeErrorFocus --------------
export const EmployeTypeErrorFocus = (formik) => {
  if (formik && formik.errors && formik.errors?.employmentType) {
    document.getElementById("employmentType").focus();
  }
  return false;
};
//-----------PersonalDetailsErrorFocus----------------
export const PersonalDetailsErrorFocus = (formik) => {
  if (formik && formik.errors) {
    if (formik.errors.firstName) {
      document.getElementById("firstName").focus();
    } else if (formik.errors.lastName) {
      document.getElementById("lastName").focus();
    } else if (formik.errors.dateOfBirth) {
      document.getElementById("dateOfBirth").focus();
    } else if (formik.errors.genderId) {
      document.getElementById("genderId").focus();
    } else if (formik.errors.maritalStatus) {
      document.getElementById("maritalStatus").focus();
    } else if (formik.errors.qualificationId) {
      document.getElementById("qualificationId").focus();
    }
  }
  return false;
};
//------------OtherDetailsErrorFocus----------
export const OtherDetailsErrorFocus = (formik) => {
  if (formik && formik.errors && formik.errors.totalEmiPaidMonthly) {
    document.getElementById("totalEmiPaidMonthly").focus();
  } else if (
    formik &&
    formik.errors &&
    formik.errors.interestedToGetCreditCard
  ) {
    document.getElementById("interestedToGetCreditCard").focus();
  }
  return false;
};
//-------------SubmitErrorFocus----------------
export const SubmitErrorFocus = (formik) => {
  if (formik && formik.errors && formik.errors.termsAndCondition) {
    document.getElementById("termsAndCondition").focus();
  }
  return false;
};
