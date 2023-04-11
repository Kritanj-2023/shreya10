import I1 from '../components/images/img/i1.png'
import f1 from '../components/images/img/f1.png'
import c3 from '../components/images/img/c3.png'
import fi1 from '../components/images/img/fi1.png'
import Chicken from '../components/Menu/Chicken'
import { Link } from 'react-router-dom'


const data = [
    { id: 1, name: 'Icecream', decp: 'Chocolate & vanila', price: '5.25', imageSrc: I1 },
    { id: 2, name: 'Strawberries', decp: 'Fresh Strawberries', price: '10.25', imageSrc: f1 },
    { id: 3, name: 'Chicken Kebab', decp: 'Mixed Kebab Plate', price: '8.25', imageSrc: c3 },
    { id: 4, name: 'Fish Kebab', decp: 'Mixed Fish Kebab', price: '5.25', imageSrc: fi1 }
]

export const categories = [
    { id: 1, name: 'Chicken', urlParamName: 'Chicken' },
    { id: 2, name: 'curry', urlParamName: 'curry' },
    { id: 3, name: 'rice', urlParamName: 'rice' },
    { id: 4, name: 'fish', urlParamName: 'fish' },
    { id: 5, name: 'fruits', urlParamName: 'fruits' },
    { id: 6, name: 'Icecream', urlParamName: 'Icecream' },
    { id: 7, name: 'soft drink', urlParamName: 'soft drink' },

];


