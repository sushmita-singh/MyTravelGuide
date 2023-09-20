import { useState } from 'react'
import './App.css'
import './index.css'
import NavBar from './components/nav'
import Card from './components/card'

const cardData = [{
  imageSrc: 'https://source.unsplash.com/WLxQvbMyfas',
  nameOfCountry: 'Japan',
  googleMaps: 'https://www.google.com/maps/place/Mount+Fuji/@35.360625,138.7273634,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA!5m1!1e4?entry=ttu',
  location: 'Mouth Fuji',
  startDate: '12 Jan, 2021',
  endDate: '24 Jan, 2021',
  about: 'Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.'
},
{
  imageSrc: 'https://source.unsplash.com/JmuyB_LibRo',
  nameOfCountry: 'Australia',
  googleMaps: 'https://www.google.com/maps/place/Sydney+Opera+House/@-33.8567799,151.2127218,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967!16zL20vMDZfbm0!5m1!1e4?entry=ttu',
  location: 'Sydney Opera House',
  startDate: '27 May, 2021',
  endDate: '8 Jun, 2021',
  about: 'The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century\'s most famous and distinctive buildings'
},
{
  imageSrc: 'https://source.unsplash.com/3PeSjpLVtLg',
  nameOfCountry: 'Norway',
  googleMaps: 'https://www.google.com/maps/place/Geirangerfjord/@62.1049045,6.9922384,12z/data=!3m1!4b1!4m6!3m5!1s0x46169d427b268c51:0xb8c99540dcc397fe!8m2!3d62.101506!4d7.0940817!16zL20vMDZ4eXFi!5m1!1e4?entry=ttu',
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
