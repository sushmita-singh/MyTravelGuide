import { Fragment } from 'react';
import addressLogo from '../assets/location-icon.svg';
import '../index.css'

export default function Card({cardData}) {
    const cardComponent = cardData.map((item, i) => {
        return (
            <Fragment key={i}>
                {i > 0 && <hr className='card-divider' />}
                <div className="card-element">
                <div className='card-img'>
                    <img src={item.imageSrc} alt={item.location} className='card-img'/>
                </div>
                <div className="card-secondary">
                    <span className="combined">
                        <img src={addressLogo} alt="addressLogo" />
                        <h2 className='caps'>{item.nameOfCountry}</h2>
                        <a target='_blank' href={item.googleMaps} className='grey'>View on Google Maps</a>
                    </span>
                    <h1 className='heading'>{item.location}</h1>
                    <p className='bold'>{item.startDate} - {item.endDate}</p>
                    <p className='about'>{item.about}</p>
                </div>
            </div>
            </Fragment>
            
        );
    })

    return (
        <div className='card-main'>{cardComponent}</div>
    );
}