import React from 'react'
import './Services.css'
import ServiceCard from './ServiceCard/ServiceCard'
import ServiceCardImg1 from '../../assets/images/ServiceCard1.jpg'
import ServiceCardImg2 from '../../assets/images/ServiceCard2.jpg'
import ServiceCardImg3 from '../../assets/images/ServiceCard3.jpg'

const Services = () => {
    const cardsData = [
        {
            title: 'Private Theatres',
            desc: 'Experience the luxury of our private theatre, offering an intimate and exclusive setting for your viewing pleasure',
            image: ServiceCardImg1,
            path: ''
        },
        {
            title: 'Big Screens',
            desc: 'Immerse yourself in the action with our large screens, delivering a larger-than-life visual experience for your favorite movies and shows.',
            image: ServiceCardImg2,
            path: ''
        },
        {
            title: 'Party Themes',
            desc: 'Let your imagination run wild with our customizable party themes, designed to bring your dream event to life, no matter the occasion',
            image: ServiceCardImg3,
            path: ''
        }
    ]
    return (
        <div>
            {/* top banner starts */}
            <div className='top_banner'>
                <div className='overlay'>
                    <div style={{ color: 'white', }}>Our Services</div>
                </div>
            </div>
            {/* top banner ends */}

            {/* service card starts */}
            <div className='serviceCardWrapper'>
                {
                    cardsData?.map(item => {
                        return <ServiceCard item={item} />
                    })
                }
            </div>
            {/* service card ends */}

            {/* Our Additional Services card starts */}

            <div>

            </div>
            {/* Our Additional Services card ends */}

        </div>
    )
}

export default Services