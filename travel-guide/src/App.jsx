import { useState } from 'react'
import './App.css'
import NavBar from './components/nav'
import Card from './components/card'

const cardData = [{
  imageSrc: 'https://source.unsplash.com/WLxQvbMyfas',
  nameOfCountry: 'Japan',
  location: 'Mouth Fuji',
  startDate: '12 Jan, 2021',
  endDate: '24 Jan, 2021',
  about: 'Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.'
},
{
  imageSrc: 'https://source.unsplash.com/JmuyB_LibRo',
  nameOfCountry: 'Australia',
  location: 'Sydney Opera House',
  startDate: '27 May, 2021',
  endDate: '8 Jun, 2021',
  about: 'The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century\'s most famous and distinctive buildings'
},
{
  imageSrc: 'https://source.unsplash.com/3PeSjpLVtLg',
  nameOfCountry: 'Norway',
  location: 'Geirangerfjord',
  startDate: '1 Oct, 2021',
  endDate: '18 Nov, 2021',
  about: 'The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.'
}]

function App() {

  return (
    <div className='main'>
      <NavBar />
      <Card cardData = {cardData}/>
    </div>
  )
}

export default App
