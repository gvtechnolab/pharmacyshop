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
        name: 'Medicines',
        url: '/medicines',
        icon: <MedicalInformation />
    },
    {
        id: 3,
        name: 'Healthcare',
        url: '/healthcare',
        icon: <Medication />
    },
    {
        id: 4,
        name: 'Contact',
        url: '/contact',
        icon: <ContactPage />
    },
    {
        id: 5,
        name: 'About',
        url: '/about',
        icon: <Info />
    },
];

export const HomeCarouselData = [
    {
        id: 1,
        name: "Health Care",
        desc: 'We care like a mother.',
        image: "/assets/images/img1healthcare.jpg"
    },
    {
        id: 2,
        name: "Most Trusted Medicines",
        desc: 'Preferred by our best doctors.',
        image: "/assets/images/img2medicinesandpharmacist.jpg"
    },
    {
        id: 3,
        name: "Fitness Trackers",
        desc: 'Your fitness is in your hands.',
        image: "/assets/images/img3fitnesstracker.jpg"
    },
    {
        id: 4,
        name: "Health Products",
        desc: 'Machines that cares your health.',
        image: "/assets/images/img4healthequipment.jpg"
    },
    {
        id: 5,
        name: "Thanks Giving",
        desc: 'Thankfulness is the quickest path to joy.',
        image: "/assets/images/img5thanksgiving.jpg"
    },
];

export const CategoryCarouselData = [
    {
        name: 'Personal Hygiene',
        img: '/assets/images/personalhygiene.png'
    },
    {
        name: 'Cold & Flu',
        img: '/assets/images/coldandflu.png'
    },
    {
        name: 'Oral Care',
        img: '/assets/images/oralcare.png'
    },
    ,
    {
        name: 'Sun Care',
        img: '/assets/images/suncare.png'
    },
    {
        name: 'First Aid',
        img: '/assets/images/firstaid.png'
    },
    {
        name: 'Health Tips',
        img: '/assets/images/healthtips.png'
    },
    {
        name: 'Healthy Eating',
        img: '/assets/images/healthyeating.png'
    },
    {
        name: 'Ortho',
        img: '/assets/images/ortho.png'
    }
];

export const ColumnBannerData = [
    {
        title: 'Personal Hygiene',
        desc: `Basic personal need for all.`,
        img: '/assets/images/personalhygienebannerimg.jpg',
        btnText: 'Shop Now'
    },
    {
        title: 'Any Questions?',
        desc: 'Meet our health expert.',
        img: '/assets/images/anyquestion.jpg',
        btnText: 'Book Now'
    }
];

export const Products = [
    {
        id: '1',
        name: 'dental_care_kit_for_adult_simish_hc',
        img: '/assets/images/dental_care_kit_hc.jpg',
        category: 'healthcare',
        price: '350',
        originalPrice: '500',
        ratings: '',
        reviews: '',
    },
    {
        id: '2',
        name: 'bio_muscle_cream_250mg_hc',
        img: '/assets/images/bio_muscle_cream_250mg_hc.jpg',
        category: 'healthcare',
        price: '450',
        originalPrice: '750',
        ratings: '',
        reviews: '',
    },
    {
        id: '3',
        name: 'piyapong_injections_with_niddle_m',
        img: '/assets/images/piyapong_injections_with_niddle_m.jpg',
        category: 'medicines',
        price: '50',
        originalPrice: '75',
        ratings: '',
        reviews: '',
    },
    {
        id: '4',
        name: 'piyapong_facial_disposible_mask_hc',
        img: '/assets/images/piyapong_facial_disposible_mask_hc.jpg',
        category: 'healthcare',
        price: '15',
        originalPrice: '20',
        ratings: '',
        reviews: '',
    },
    {
        id: '5',
        name: 'moisolo_hair_serum_antiedad_hc',
        img: '/assets/images/moisolo_hair_serum_hc.jpg',
        category: 'healthcare',
        price: '175',
        originalPrice: '250',
        ratings: '',
        reviews: '',
    },
    {
        id: '6',
        name: 'groundedgodess_stethoscope_black_white_hc',
        img: '/assets/images/groundedgodess_stethoscope_black_white_hc.jpg',
        category: 'healthcare',
        price: '1300',
        originalPrice: '1700',
        ratings: '',
        reviews: '',
    },
    {
        id: '7',
        name: 'correxiko_collagen_vitamin_c_2kg_m',
        img: '/assets/images/correxiko_collagen_vitamin_c_2kg_m.jpg',
        category: 'medicines',
        price: '3500',
        originalPrice: '4700',
        ratings: '',
        reviews: '',
    },
    {
        id: '8',
        name: 'correxiko_collagen_vitamin_c_1kg_m',
        img: '/assets/images/correxiko_collagen_vitamin_c_1kg_m.jpg',
        category: 'medicines',
        price: '2500',
        originalPrice: '2700',
        ratings: '',
        reviews: '',
    },
    {
        id: '9',
        name: 'correxiko_collagen_unflavoured_2kg_m',
        img: '/assets/images/correxiko_collagen_unflavoured_2kg_m.jpg',
        category: 'medicines',
        price: '3400',
        originalPrice: '4600',
        ratings: '',
        reviews: '',
    },
    {
        id: '10',
        name: 'correxiko_collagen_unflavoured_1kg_m',
        img: '/assets/images/correxiko_collagen_unflavoured_1kg_m.jpg',
        category: 'medicines',
        price: '2300',
        originalPrice: '2600',
        ratings: '',
        reviews: '',
    },
    {
        id: '11',
        name: 'correxiko_collagen_unflavoured_500mg_m',
        img: '/assets/images/correxiko_collagen_unflavoured_500mg_m.jpg',
        category: 'medicines',
        price: '899',
        originalPrice: '1199',
        ratings: '',
        reviews: '',
    },
    {
        id: '12',
        name: 'charlotte_candillier_detox_facial_oil_50mg_m',
        img: '/assets/images/charlotte_candillier_detox_facial_oil_50mg_m.jpg',
        category: 'medicines',
        price: '300',
        originalPrice: '400',
        ratings: '',
        reviews: '',
    },
    {
        id: '13',
        name: 'bakytzhan_baurzhanov_operational_instruments_m',
        img: '/assets/images/bakytzhan_baurzhanov_operational_instruments_m.jpg',
        category: 'medicines',
        price: '6000',
        originalPrice: '7500',
        ratings: '',
        reviews: '',
    },
    {
        id: '14',
        name: 'gear_fitbit_charge_4_fitness_activity_tracker_hc',
        img: '/assets/images/gear_fitbit_charge_hc.jpg',
        category: 'healthcare',
        price: '3499',
        originalPrice: '3999',
        ratings: '',
        reviews: '',
    },
    {
        id: '15',
        name: 'vvm_flexible_digital_thermometer_DT/2H_hc',
        img: '/assets/images/vvm_digital_thermometer_hc.jpg',
        category: 'healthcare',
        price: '199',
        originalPrice: '249',
        ratings: '',
        reviews: '',
    },
    {
        id: '16',
        name: 'vandelay_infrared_digital_thermometer_hc',
        img: '/assets/images/vandelay_thermometer_hc.jpg',
        category: 'healthcare',
        price: '450',
        originalPrice: '550',
        ratings: '',
        reviews: '',
    },
    {
        id: '17',
        name: 'fingertip_pulse_oximeter_NL_50_OLED_hc',
        img: '/assets/images/finger_pulse_oximeter_hc.jpg',
        category: 'healthcare',
        price: '1200',
        originalPrice: '1400',
        ratings: '',
        reviews: '',
    },
    {
        id: '18',
        name: 'blood_pressure_monitor_upper_arms_hc',
        img: '/assets/images/blood_pressure_monitor_upper_arms_hc.jpg',
        category: 'healthcare',
        price: '4500',
        originalPrice: '5500',
        ratings: '',
        reviews: '',
    },
    {
        id: '19',
        name: 'aneroid_sphygmomanometer_110_hc',
        img: '/assets/images/aneroid_sphygmomanometer_hc.jpg',
        category: 'healthcare',
        price: '2999',
        originalPrice: '3449',
        ratings: '',
        reviews: '',
    },
    {
        id: '20',
        name: 'paracetamol_med_tablet_10s_500mg_strip_m',
        img: '/assets/images/paracetamol_med_500mg_strip_m.jpg',
        category: 'medicines',
        price: '89',
        originalPrice: '129',
        ratings: '',
        reviews: '',
    },
    {
        id: '21',
        name: 'paracetamol_dolo_650mg_tablet_m',
        img: '/assets/images/paracetamol_dolo_650mg_tablet_strip_m.jpg',
        category: 'medicines',
        price: '139',
        originalPrice: '169',
        ratings: '',
        reviews: '',
    },
    {
        id: '22',
        name: 'oxycodone_rab_mck_hydrochloride_m',
        img: '/assets/images/oxycodone_rab_mick_m.jpg',
        category: 'medicines',
        price: '7999',
        originalPrice: '9999',
        ratings: '',
        reviews: '',
    },
    {
        id: '23',
        name: 'deep_heat_heal_spray_for_pain_relief_m',
        img: '/assets/images/deep_heat_heal_spray_for_pain_relief_m.jpg',
        category: 'medicines',
        price: '249',
        originalPrice: '299',
        ratings: '',
        reviews: '',
    },
    {
        id: '24',
        name: 'cotton_cripe_bandage_pati_1mtr_m',
        img: '/assets/images/cotton_cripe_bandage_pati_1mtr_m.jpg',
        category: 'medicines',
        price: '99',
        originalPrice: '125',
        ratings: '',
        reviews: '',
    },
    {
        id: '25',
        name: 'cotton_cripe_bandage_12_pieces_pack_m',
        img: '/assets/images/cotton_cripe_bandage_12_pieces_pack_m.jpg',
        category: 'medicines',
        price: '30',
        originalPrice: '49',
        ratings: '',
        reviews: '',
    },
];

export const ProductFilterOptions = [
    {
        id: 1,
        title: 'Categories',
        options: ['medicine', 'syrup', 'device'],
    },
    {
        id: 2,
        title: 'Brands',
        options: ['brand1', 'brand2', 'brand3'],
    },
    {
        id: 3,
        title: 'Price',
        options: ['aama','slider', 'avse']
    }
];