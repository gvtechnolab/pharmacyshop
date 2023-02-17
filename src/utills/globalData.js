import { Home, AdminPanelSettings, Info, ContactPage, Medication, MedicalInformation } from '@mui/icons-material';

// LeftMenuBar Items
export const LeftBarMenus = [
    {
        id: 1,
        name: 'Home',
        url: '/',
        icon: <Home />
    },
    {
        id: 2,
        name: 'Ayush',
        url: '/ayush',
        icon: <AdminPanelSettings />
    },
    {
        id: 3,
        name: 'Medicines',
        url: '/medicines',
        icon: <MedicalInformation />
    },
    {
        id: 4,
        name: 'Healthcare',
        url: '/healthcare',
        icon: <Medication />
    },
    {
        id: 5,
        name: 'Contact',
        url: '/contact',
        icon: <ContactPage />
    },
    {
        id: 6,
        name: 'About',
        url: '/about',
        icon: <Info />
    },
];

export const HomeCarouselData = [
    {
        id: 1,
        name: "Title one",
        desc: 'hi111',
        image: "https://images.pexels.com/photos/2383010/pexels-photo-2383010.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id: 2,
        name: "Title two",
        desc: 'hi222',
        image: "https://images.pexels.com/photos/7615563/pexels-photo-7615563.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id: 3,
        name: "Title three",
        desc: 'hi333',
        image: "https://images.pexels.com/photos/2383010/pexels-photo-2383010.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id: 4,
        name: "Title 4",
        desc: 'hi111',
        image: "https://images.pexels.com/photos/12585760/pexels-photo-12585760.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id: 5,
        name: "Title 5",
        desc: 'hi222',
        image: "https://images.pexels.com/photos/7615563/pexels-photo-7615563.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id: 6,
        name: "Title 6",
        desc: 'hi333',
        image: "https://images.pexels.com/photos/12585760/pexels-photo-12585760.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
];

export const CategoryCarouselData = [
    {
        name:'Personal Hygiene',
        img:'/assets/images/personalhygiene.png'
    },
    {
        name:'Cold & Flu',
        img:'/assets/images/coldandflu.png'
    },
    {
        name:'Oral Care',
        img:'/assets/images/oralcare.png'
    },
    ,
    {
        name:'Sun Care',
        img:'/assets/images/suncare.png'
    },
    {
        name:'First Aid',
        img:'/assets/images/firstaid.png'
    },
    {
        name:'Health Tips',
        img:'/assets/images/healthtips.png'
    },
    {
        name:'Healthy Eating',
        img:'/assets/images/healthyeating.png'
    },
    {
        name:'Ortho',
        img:'/assets/images/ortho.png'
    }
]