import {
  FaFacebook,
  FaTwitter,
  FaSquarespace,
  FaWallet,
  FaTree,
  FaSocks,
  FaMap,
} from 'react-icons/fa'
import tourImage1 from '../assets/tour-1.jpeg'
import tourImage2 from '../assets/tour-2.jpeg'
import tourImage3 from '../assets/tour-3.jpeg'
import tourImage4 from '../assets/tour-4.jpeg'
import tourImage5 from '../assets/tour-5.jpeg'
import tourImage6 from '../assets/tour-6.jpeg'
export const links = [
  { id: 1, name: 'home', url: '#home' },
  { id: 2, name: 'about', url: '#about' },
  { id: 3, name: 'services', url: '#services' },
  { id: 4, name: 'featured', url: '#featured' },
  { id: 5, name: 'gallery', url: '#gallery' },
]
export const icons = [
  { id: 1, icon: <FaFacebook />, url: 'https://www.facebook.com/' },
  { id: 2, icon: <FaTwitter />, url: 'https://www.twitter.com/' },
  { id: 3, icon: <FaSquarespace />, url: 'https://www.squarespace.com/' },
]
export const services = [
  {
    id: 1,
    name: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
    icon: <FaWallet />,
  },
  {
    id: 2,
    name: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
    icon: <FaTree />,
  },
  {
    id: 3,
    name: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
    icon: <FaSocks />,
  },
]
export const tourCards = [
  {
    id: 1,
    name: 'tibet adventure',
    image: tourImage1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    days: '6 days',
    location: 'china',
    price: 210000,
    date: new Date(2020, 8, 26),
    icon: <FaMap />,
  },
  {
    id: 2,
    name: 'best of java',
    image: tourImage2,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    days: '11 days',
    location: 'indonesia',
    price: 140000,
    date: new Date(2020, 10, 1),
    icon: <FaMap />,
  },
  {
    id: 3,
    name: 'explore hong kong',
    image: tourImage3,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    days: '8 days',
    location: 'hong kong',
    price: 500000,
    date: new Date(2020, 9, 15),
    icon: <FaMap />,
  },
  {
    id: 4,
    name: 'kenya highlights',
    image: tourImage4,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    days: '8 days',
    location: 'kenya',
    price: 330000,
    date: new Date(2019, 12, 5),
    icon: <FaMap />,
  },
]
export const tourImages = [
  { id: 1, name: 'village in valley', image: tourImage1, url: '#' },
  {
    id: 2,
    name: 'tourist posing in the middle of the road',
    image: tourImage2,
    url: '#',
  },
  {
    id: 3,
    name: 'night view of downtown hong kong',
    image: tourImage3,
    url: '#',
  },
  { id: 4, name: 'elephant covered in red sand', image: tourImage4, url: '#' },
  { id: 5, name: 'two zebras in forest', image: tourImage5, url: '#' },
  { id: 6, name: '', image: tourImage6, url: '#' },
  {
    id: 7,
    name: 'village in valley',
    image: tourImage1,
    url: '#',
  },
  {
    id: 8,
    name: 'tourist posing in the middle of the road',
    image: tourImage2,
    url: '#',
  },
]
