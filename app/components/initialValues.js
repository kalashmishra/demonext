
//----------UserNumber-----------

export const getInitialUserNumberValues = (formData) => {
    return {
        contactNo: formData.contactNo || "",
        termsAndCondition: formData.termsAndCondition || "",
     
    };
  };

//----------VerifyUser----------

  export const getInitialVerifyUserValues = () => {
    return {
        verifyOtp: "", 
    };
  };


//----------loan------------

  export const getInitialLoanValues = (formData) => {
    return {
        amount: formData?.loan?.amount || "",
        tenure: formData?.loan?.tenure || "",
        reason: formData?.loan?.reason || "",
        otherReason: formData?.loan?.otherReason || "",
        panCard: formData?.panCard || "",
        aadharNo:formData?.aadharNo,
        emailId: formData?.personalInfo?.emailId || "",
     
    };
  };

  //------------EmployeType------------

  export const getInitialEmployeTypeValues = (formData) => {
    return {
        employmentType: formData.employmentType || "",
     
    };
  };


  //--------------salaried----------------

  export const getInitialSalariedValues = (formData) => {
    return {
        companyTypeId: formData.employmentDetails.companyTypeId || "",
        industryTypeId: formData.employmentDetails.industryTypeId || "",
        designation: formData.employmentDetails.designation || "",
        companyName: formData.employmentDetails.companyName || "",
        address: formData.employmentDetails.address || "",
        pinCode: formData.employmentDetails.pinCode || "",
        cityId: formData.employmentDetails.cityId || "",
        stateId: formData.employmentDetails.stateId || "",
        countryId: formData.employmentDetails.countryId || "",
        yearsWorkingIn: formData.employmentDetails.yearsWorkingIn || "",
        income: formData.employmentDetails.income || "",
        salaryMode: formData.employmentDetails.salaryMode || "",
        bankId: formData.employmentDetails.bankId || "",
     
    };
  };

 //--------------SelfEmployed----------

  export const getInitialSelfEmployedValues = (formData) => {
    return {
        businessOwnedId: formData.employmentDetails.businessOwnedId || "",
      yearsWorkingIn: formData.employmentDetails.yearsWorkingIn || "",
      businessTypeId: formData.employmentDetails.businessTypeId || "",
      industryTypeId: formData.employmentDetails.industryTypeId || "",
      companyName: formData.employmentDetails.companyName || "",
      address: formData.employmentDetails.address || "",
      pinCode: formData.employmentDetails.pinCode || "",
      cityId: formData.employmentDetails.cityId || "",
      stateId: formData.employmentDetails.stateId || "",
      countryId: formData.employmentDetails.countryId || "",
      designation: formData.employmentDetails.designation || "",
      turnover: formData.employmentDetails.turnover || "",
      gst: formData.employmentDetails.gst || "",
      monthlyProfit: formData.employmentDetails.monthlyProfit || "",
      currentAccountBankId:
        formData.employmentDetails.currentAccountBankId || "",
      savingAccountBankId: formData.employmentDetails.savingAccountBankId || "",
    };
  };

//-----------------PersonalDetails-------------

  export const getInitialPersonalDetailsValues = (formData) => {
    return {
        firstName: formData.personalInfo.firstName || "",
      lastName: formData.personalInfo.lastName || "",
      dateOfBirth: formData.personalInfo.dateOfBirth || "",
      genderId: formData.personalInfo.genderId || "",
      maritalStatus: formData.personalInfo.maritalStatus || "",
      qualificationId: formData.personalInfo.qualificationId || "",
     
    };
  };

//----------AddressDetails-----------

export const getInitialAddressDetailsValues = (formData) => {
    return {
      addressLine1: formData?.address?.addressLine1 || "",
      addressLine2: formData?.address?.addressLine2 || "",
      pinCode: formData?.address?.pinCode || "",
      cityId: formData?.address?.cityId || "",
      stateId: formData?.address?.stateId || "",
      countryId: formData?.address?.countryId || "",
      residenceTypeId: formData?.address?.residenceTypeId || "",
      yearsLivingIn: formData?.address?.yearsLivingIn || "",
    };
  };


//-----------OtherDetails----------  

export const getInitialOtherDetailsValues = (formData) => {
    return {
        totalEmiPaidMonthly: formData.others.totalEmiPaidMonthly || 0,
        interestedToGetCreditCard:
          formData.others.interestedToGetCreditCard || "Yes",
    };
  };

//-----------SubmitDetails---------

  export const getInitialSubmitValues = (formData) => {
    return {
        termsAndCondition: formData.termsAndCondition,
    };
  };