const initialValues = {
    applicationInfo: {
        department: '',
        jobTitle: '',
        jobCode: '',
        reasonForApplication: '',
        requestedSalary: '',
        startDate: '',
        currentlyWorking: '',
        currentCompanyDetails: '',
        overtimeAcceptance: '',
    },
    personalInfo: {
        firstName: '',
        lastName: '',
    },
    healthInfo: {
        height: '',
        weight: '',
        chronicDisease: '',
        physicalDisability: '',
        phobias: '',
    },
    citizenshipInfo: {
        turk_vatandasi: '',
        tcKimlikNo: '',
        otherCitizenshipDetails: '',
        yurtdisi_engel: '',
        engelAciklama: '',
    },
    educationInfo: [
        {
            schoolName: '',
            startDate: '',
            endDate: '',
            department: '',
            graduationDegree: '',
        },
        {
            schoolName: '',
            startDate: '',
            endDate: '',
            department: '',
            graduationDegree: '',
        },
        {
            schoolName: '',
            startDate: '',
            endDate: '',
            department: '',
            graduationDegree: '',
        },
        {
            schoolName: '',
            startDate: '',
            endDate: '',
            department: '',
            graduationDegree: '',
        },
        {
            schoolName: '',
            startDate: '',
            endDate: '',
            department: '',
            graduationDegree: '',
        },
    ],
    certificatesInfo: {
        certificates: '',
    },
    languageSkills: {
        nativeLanguage: '',
        languages: [
            { konuşma: '', okuma: '', yazma: '' }, // İngilizce
            { konuşma: '', okuma: '', yazma: '' }, // Fransızca
            { konuşma: '', okuma: '', yazma: '' }, // Almanca
            { konuşma: '', okuma: '', yazma: '' }, // Rusça
            { konuşma: '', okuma: '', yazma: '' }, // Arapça
        ],
        otherLanguages: '',
    },
    computerSkills: [
        { seviye: '', pratik: '', hız: '' }, // Microsoft Word
        { seviye: '', pratik: '', hız: '' }, // Microsoft Excel
        { seviye: '', pratik: '', hız: '' }, // Power Point
        { seviye: '', pratik: '', hız: '' }, // Microsoft Access
        { seviye: '', pratik: '', hız: '' }, // Ms Project
        { seviye: '', pratik: '', hız: '' }, // Primavera P6
        { seviye: '', pratik: '', hız: '' }, // Asta Powerproject
        { seviye: '', pratik: '', hız: '' }, // Synchro
    ],
    computerSkillsOther: '', // Diğer bilgisayar becerileri için
    referenceInfo: {
        references: [
            { name: '', workplace: '', position: '', phone: '' }, // Referans 1
            { name: '', workplace: '', position: '', phone: '' }, // Referans 2
            { name: '', workplace: '', position: '', phone: '' }, // Referans 3
            { name: '', workplace: '', position: '', phone: '' }, // Referans 4
        ],
    },
    workExperience: {
        experiences: [
            {
                companyName: '',
                city: '',
                position: '',
                monthlySalary: '',
                startDate: '',
                endDate: '',
                managerName: '',
                managerPosition: '',
                managerPhone: '',
                reasonForLeaving: '',
            },
            {
                companyName: '',
                city: '',
                position: '',
                monthlySalary: '',
                startDate: '',
                endDate: '',
                managerName: '',
                managerPosition: '',
                managerPhone: '',
                reasonForLeaving: '',
            },
            {
                companyName: '',
                city: '',
                position: '',
                monthlySalary: '',
                startDate: '',
                endDate: '',
                managerName: '',
                managerPosition: '',
                managerPhone: '',
                reasonForLeaving: '',
            },
        ],
    },
    fileUpload: {
        file: null, // Yüklenecek dosya
        isChecked: false, // Onay kutusu durumu
    },
    applicationDate: new Date().toISOString(), 
};

export default initialValues;
