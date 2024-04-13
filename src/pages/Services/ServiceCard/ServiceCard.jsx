import React from 'react'
import './ServiceCard.css'

const ServiceCard = ({ item }) => {
    return (
        <div class="card">
            <div class="image">
                <img
                    style={{

                        width: '100%',
                        height: '350px'
                    }}
                    src={item?.image} alt="" />
            </div>
            <div class="content">
                <a href="#">
                    <span class="title">
                        {item?.title}
                    </span>
                </a>

                <p class="desc">
                    {
                        item?.desc
                    }
                </p>

                <button type='button' class="action" >
                    Book
                </button>
            </div>
        </div>
    )
}

export default ServiceCard