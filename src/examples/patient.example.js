const patient = {
    userId: '12347676786875', // Reference to the user
    dateOfBirth: '1990-05-15', 
    gender: 'male', 
    socialSecurityNumber: '123456789012345', 
    medicalHistory: [
        {
            condition: 'Hypertension',
            dateDiagnosed: '2015-07-20',
        },
        {
            condition: 'Diabetes',
            dateDiagnosed: '2018-02-10',
        },
    ],
    allergies: [
        {
            allergen: 'Peanuts',
            reaction: 'Anaphylaxis',
        },
        {
            allergen: 'Penicillin',
            reaction: 'Rash',
        },
    ],
    emergencyContact: {
        name: 'Jane Doe',
        phoneNumber: '+9876543210',
        relationship: 'Spouse',
    },
    createdAt: '2023-09-12T10:00:00.000Z',  
    updatedAt: '2023-09-13T15:45:00.000Z', 
}
