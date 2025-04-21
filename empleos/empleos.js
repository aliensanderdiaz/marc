// Tu solicitud para el puesto de
// Your Application to 
// Your update from 

let rechazados = [
    {
        empresa: 'ITS Solutions',
        puesto: 'Ing Desarrollador',
        medio: 'linkedin'
    },
    {
        empresa: 'Experis',
        puesto: 'Desarrollador NodeJS',
        medio: 'linkedin'
    },
    {
        empresa: 'NTT DATA Europe & Latam',
        puesto: 'Junior Engineer - Front',
        medio: 'linkedin'
    },
    {
        empresa: 'Mayasoft',
        puesto: 'Desarrollador Software Nodejs',
        medio: 'linkedin'
    },

    {
        empresa: 'foris.ai',
        puesto: 'Back-end Software Engineer Jr Junior',
        medio: 'getonbrd'
    },
    {
        empresa: 'BC Tecnología',
        puesto: 'Desarrollador Full-Stack Angular Home Office Semi Senior',
        medio: 'getonbrd'
    },
    {
        empresa: 'Sophos Solutions',
        puesto: 'Arquitecto de Soluciones Medium Semi Senior',
        medio: 'getonbrd'
    },
    {
        empresa: 'Alegra',
        puesto: 'Back-end Node.js Semi Senior',
        medio: 'getonbrd'
    },
    {
        empresa: 'FULLTIMEFORCE',
        puesto: 'Full-Stack Developer Junior',
        medio: 'getonbrd'
    },
    {
        empresa: 'Enviame',
        puesto: 'Back-end Developer Junior Junior',
        medio: 'getonbrd'
    },
    {
        empresa: 'kualty',
        puesto: '',
        medio: ''
    },
    { empresa: 'TalycapGlobal', puesto: 'Desarrollador NodeJS, Angular Typescrip y Elasticsearch', medio: 'linkedin' },
    { empresa: 'NETWORKINT', puesto: 'Ingeniero de sistemas', medio: 'linkedin' },
    { empresa: 'Bprosys', puesto: 'Desarrollador de Javascript', medio: 'linkedin' },
    { empresa: 'Empresa Confidencial', puesto: 'Desarrollador de aplicaciones para móviles', medio: 'linkedin' },
    { empresa: 'CBTW Americas', puesto: 'Angular Developer', medio: 'linkedin' },
    { empresa: 'Siigo', puesto: 'Full Stack Jr. ', medio: 'linkedin' },
    { empresa: 'Raddar Studios', puesto: 'Ingeniero de Desarollo Angular', medio: 'linkedin' },
    { empresa: 'LeadingDev', puesto: 'Junior Web Developer', medio: 'linkedin' },
]

rechazados.sort((a, b) => {
    const nameA = a.empresa.toUpperCase(); // ignore upper and lowercase
    const nameB = b.empresa.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    // names must be equal
    return 0;
})

let empleos = [
    {
        empresa: 'Bprosys',
        contacto: 'Justo Torrente',
        direcciones: [
            'https://www.linkedin.com/in/justo-torrente-b5bb804/',
            'https://www.linkedin.com/company/bprosys/'
        ]
    },
    {
        empresa: 'kualty',
        contacto: '',
        direcciones: [
            'https://www.careers-page.com/kualty/job/QX3478XR/apply'
        ]
    }
]