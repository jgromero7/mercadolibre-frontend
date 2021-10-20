import React from 'react'
import FreeShippingIcon from '../../assets/ic_shipping2x.png'
import './CardItem.scss'


const CardItem = (({ picture, price, title, stateName = "", freeShipping, onClick }) => {

    const handleClick = () => {
        if (onClick) onClick()
    }

	return (
        <div className="card grid" onClick={handleClick}>
            <div className="grid-row">
                <div className="card__thumnail__content grid-col-xs-12 grid-col-md-4 grid-col-lg-4 grid-col-xl-4">
                    <img className="card__thumnail__img" src={picture} alt="avx" />
                </div>
                <div className="card__detail__content grid-col-xs-12 grid-col-md-8 grid-col-lg-8 grid-col-xl-8">
                    <div className="grid" style={{padding: '0px 10px', marginBottom: '32px'}}>
                        <div className="grid-row">
                            <div className="grid-col-xs-12 grid-col-md-8 grid-col-lg-8 grid-col-xl-8" style={{display: 'flex', alignItems: 'center'}}>
                                <p className="card__detail__price">{price}</p>
                                {freeShipping && <img className="card__detail__free_shipping" src={FreeShippingIcon} alt="Free Shipping" />}
                            </div>
                            <div className="grid-col-xs-12 grid-col-md-4 grid-col-lg-4 grid-col-xl-4">
                                <div style={{width: '100%'}}>
                                    <p className="card__detail__state">{stateName}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid" style={{padding: '0px 10px'}}>
                        <div className="grid-row">
                            <div className="grid-col-xs-12 grid-col-md-6 grid-col-lg-6 grid-col-xl-6">
                                <p className="card__detail__description">
                                    {title}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	)
})

export default CardItem