import addressLogo from '../assets/location-icon.svg';

export default function Card([cardData]) {
    const cardComponent = cardData.map((item) => {
        return (
            <div className="card-main">
                <img src={item.imageSrc} alt={item.location} />
                <div className="card-secondary">
                    <span className="combined">
                        <img src={addressLogo} alt="addressLogo" />
                        <h2 className='caps'>{item.nameOfCountry}</h2>
                        <h3 className='grey'>View on Google Maps</h3>
                    </span>
                    <h1 className='heading'>{item.location}</h1>
                    <p className='bold'>{item.startDate}-{item.endDate}</p>
                    <p className='about'>{item.about}</p>
                </div>
            </div>
        );
    })
}