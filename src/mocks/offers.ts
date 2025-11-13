import {CITY_MAP} from '../const.ts';
import {Offer} from '../types/offer.ts';

export const offers: Offer[] = [
  {
    id: '8f6a4dbd-6579-4da5-b0b4-67bdefda61d8',
    title: 'Perfectly located Castro',
    description: 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    type: 'apartment',
    price: 251,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/10.jpg',
    images: [
      'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/19.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/11.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/15.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/17.jpg'
    ],
    city: CITY_MAP.Paris,
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16
    },
    goods: [
      'Baby seat',
      'Wi-Fi',
      'Washer',
      'Washing machine'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: true,
    rating: 2.5,
    bedrooms: 4,
    maxAdults: 7
  },
  {
    id: '101cf67d-35bb-4d51-bec2-00658e49e710',
    title: 'Amazing and Extremely Central Flat',
    description: 'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
    type: 'room',
    price: 260,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/5.jpg',
    images: [
      'https://14.design.htmlacademy.pro/static/hotel/15.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/16.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/11.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/7.jpg'
    ],
    city: CITY_MAP.Cologne,
    location: {
      latitude: 50.939361,
      longitude: 6.969974,
      zoom: 16
    },
    goods: [
      'Laptop friendly workspace',
      'Washer',
      'Dishwasher',
      'Wi-Fi',
      'Kitchen',
      'Coffee machine',
      'Breakfast'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: false,
    rating: 4.3,
    bedrooms: 1,
    maxAdults: 3
  },
  {
    id: '183e3f50-27f9-4d2e-bbd1-c1190c884a3c',
    title: 'Wood and stone place',
    description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    type: 'house',
    price: 518,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/10.jpg',
    images: [
      'https://14.design.htmlacademy.pro/static/hotel/14.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/9.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/16.jpg'
    ],
    city: CITY_MAP.Brussels,
    location: {
      latitude: 50.856557,
      longitude: 4.361697,
      zoom: 16
    },
    goods: [
      'Baby seat',
      'Washing machine',
      'Wi-Fi',
      'Breakfast'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: false,
    rating: 2.4,
    bedrooms: 4,
    maxAdults: 2
  },
  {
    id: '98654b55-60c3-4f7f-b03e-10cb3a67a0c7',
    title: 'The house among olive ',
    description: 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    type: 'apartment',
    price: 112,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/2.jpg',
    images: [
      'https://14.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/13.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/7.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/5.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/3.jpg'
    ],
    city: CITY_MAP.Amsterdam,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.939309666406198,
      zoom: 16
    },
    goods: [
      'Air conditioning',
      'Wi-Fi',
      'Coffee machine',
      'Washing machine',
      'Towels',
      'Cable TV'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: false,
    rating: 4.4,
    bedrooms: 2,
    maxAdults: 9
  },
  {
    id: '0af3d9e5-70b2-4f89-9c66-6578718ab2bd',
    title: 'Canal view studio',
    description: 'Cozy studio with canal view, modern amenities and a short walk to museums.',
    type: 'apartment',
    price: 180,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/8.jpg',
    images: [
      'https://14.design.htmlacademy.pro/static/hotel/3.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/8.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/17.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/9.jpg'
    ],
    city: CITY_MAP.Hamburg,
    location: {
      latitude: 53.555341,
      longitude: 10.005654,
      zoom: 16
    },
    goods: [
      'Wi-Fi',
      'Washer',
      'Coffee machine',
      'Towels',
      'Cable TV'
    ],
    host: {
      isPro: false,
      name: 'Max',
      avatarUrl: 'https://14.design.htmlacademy.pro/static/host/avatar-max.jpg'
    },
    isPremium: false,
    isFavorite: true,
    rating: 4.8,
    bedrooms: 1,
    maxAdults: 2
  },
  {
    id: '4cdd715a-7504-4ab2-bcd3-4b4a7cd7f96f',
    title: 'Riverside loft',
    description: 'Light loft with panoramic windows and private workspace, close to the Rhine embankment.',
    type: 'apartment',
    price: 145,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/18.jpg',
    images: [
      'https://14.design.htmlacademy.pro/static/hotel/12.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/13.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/14.jpg'
    ],
    city: CITY_MAP.Dusseldorf,
    location: {
      latitude: 51.235402,
      longitude: 6.786314,
      zoom: 16
    },
    goods: [
      'Air conditioning',
      'Laptop friendly workspace',
      'Washer',
      'Breakfast'
    ],
    host: {
      isPro: true,
      name: 'Klaus',
      avatarUrl: 'https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: false,
    isFavorite: false,
    rating: 4.1,
    bedrooms: 2,
    maxAdults: 4
  }
];
