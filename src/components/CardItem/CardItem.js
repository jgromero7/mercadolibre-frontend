import React from 'react'
import FreeShippingIcon from '../../assets/ic_shipping2x.png'
import './CardItem.scss'


const CardItem = (({ picture, price, title, stateName = "", freeShipping, onClick }) => {

    const handleClick = () => {
        if (onClick) onClick()
    }

	return (
        <div className="card grid" onClick={handleClick}>
            <div className="card__thumnail__content grid-2">
                <img className="card__thumnail__img" src={picture} alt="avx" />
            </div>
            <div className="card__detail__content grid-10">
                <div className="grid" style={{padding: '0px 10px', marginBottom: '32px'}}>
                    <div className="grid-10" style={{display: 'flex', alignItems: 'center'}}>
                        <p className="card__detail__price">{price}</p>
                        {freeShipping && <img className="card__detail__free_shipping" src={FreeShippingIcon} alt="Free Shipping" />}
                    </div>
                    <div className="grid-2">
                        <p className="card__detail__state">{stateName}</p>
                    </div>
                </div>
                <div className="grid" style={{padding: '0px 10px'}}>
                    <div className="grid-6">
                        <p className="card__detail__description">
                            {title}
                        </p>
                    </div>
                </div>
            </div>
        </div>
	)
})

export default CardItem