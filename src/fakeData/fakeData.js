import { useEffect } from "react";

let fakeData = [
    {
        name:'Jason',
        email:'jasonpearl@gmail.com',
        img : 'https://randomuser.me/api/portraits/men/5.jpg'
    },
    {
        name:'Pierce',
        email:'piercelang@gmail.com',
        img : 'https://randomuser.me/api/portraits/men/3.jpg'
    },
    {
        name:'Darcy',
        email:'darcynotris@gmail.com',
        img : 'https://randomuser.me/api/portraits/women/75.jpg'
    },
    {
        name:'Jonathan',
        email:'joncali@gmail.com',
        img : 'https://randomuser.me/api/portraits/men/66.jpg'
    },
    {
        name:'Ariana',
        email:'arianany@gmail.com',
        img : 'https://randomuser.me/api/portraits/women/34.jpg'
    },
    {
        name:'Luke',
        email:'hamilluke@gmail.com',
        img : 'https://randomuser.me/api/portraits/men/11.jpg'
    },
    {
        name:'Cruz',
        email:'leatocruz@gmail.com',
        img : 'https://randomuser.me/api/portraits/men/81.jpg'
    },
    {
        name:'Robert',
        email:'johnsonrob@gmail.com',
        img : 'https://randomuser.me/api/portraits/men/79.jpg'
    },
    {
        name:'Patrick',
        email:'patrick13tr@gmail.com',
        img : 'https://randomuser.me/api/portraits/men/30.jpg'
    },
    {
        name:'Adam',
        email:'justinelampard@gmail.com',
        img : 'https://randomuser.me/api/portraits/men/72.jpg'
    },
    {
        name:'Jennifer',
        email:'connorjen@gmail.com',
        img : 'https://randomuser.me/api/portraits/women/52.jpg'
    },
    {
        name:'Matt',
        email:'davism564@gmail.com',
        img : 'https://randomuser.me/api/portraits/men/28.jpg'
    },
    {
        name:'Williamson',
        email:'wilsonhert32@hotmail.com',
        img : 'https://randomuser.me/api/portraits/men/21.jpg'
    },
    {
        name:'Samantha',
        email:'molisam408@gmail.com',
        img : 'https://randomuser.me/api/portraits/women/85.jpg'
    },
    {
        name:'Sergio',
        email:'marlonsergio24@yahoo.com.com',
        img : 'https://randomuser.me/api/portraits/men/94.jpg'
    }
];
function amount(min,max)
{
    min = Number(Math.ceil(min));
    max = Number(Math.floor(max));
    return Math.round(Math.random() * (max- min)) + min;
}
fakeData.forEach(obj => obj.annual_salary = amount(65000,80000));
fakeData.forEach(obj => obj.id = amount(110,310));

const shuffle = a =>{
    for(let i = a.length;i>0;i--)
    {
        let j = Math.floor(Math.random() * i);
        [a[i-1],a[j]] = [a[j],a[i-1]];
    }
}
shuffle(fakeData);


export default fakeData;