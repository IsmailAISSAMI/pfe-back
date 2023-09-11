const doctor ={
    userId: '5765657545445465', 
    specialty: 'Cardiology',
    qualifications: [
        "Diplôme d'État de Docteur en Médecine",
        "DES de Cardiologie",
    ],
    yearsOfExperience: 10,
    clinicAddress: '123 Main Street',
    consultationFee: 100,
    availableTimes: [
        {
            day: 'Monday',
            startTime: '09:00',
            endTime: '13:00',
            interval: 30,
            breaks: [
                {
                    start: '11:30',
                    end: '12:00',
                },
            ],
        },
        {
            day: 'Tuesday',
            startTime: '10:00',
            endTime: '16:00',
            interval: 20,
            breaks: [
                {
                    start: '13:00',
                    end: '14:00',
                },
            ],
        },
        // Other available time slots with breaks
    ],
    verified: true, 
    createdAt: '2023-09-10T12:00:00.000Z', 
    updatedAt: '2023-09-11T14:30:00.000Z', 
}
