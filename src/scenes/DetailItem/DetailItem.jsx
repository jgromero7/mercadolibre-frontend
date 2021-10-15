import React, { useEffect, useState } from 'react'
import { formatCurrency } from '../../utils/formatCurrency'
import './DetailItem.scss'
import MercadoLibreService from '../../services/mercadolibre.service'
import Spinner from '../../components/Spinner/Spinner'

const DetailItem = ({match}) => {
	const { id } = match.params
	const [loading, setLoading] = useState(true)
	const [item, setItem] = useState()

	useEffect(() => {
		if (id && id.trim()) {
			setLoading(true)
			getItem(id)
				.then(({item = null}) => item && setItem(item))
				.catch(err => console.error)
				.finally(() => setLoading(false))
		}
			
	}, [id])

	const getItem = async (id) => {
		return await MercadoLibreService.getItem(id)
	}

	return (
		<div className="container">
			<div className="grid">
				<div className="grid-1"></div>
				<div className="grid-10">
					<div className="container__navigation">
						<p>Electrónica, Audio y Video {'>'} iPod {'>'} Reproductores {'>'} iPod	touch {'>'} <b>32 GB</b></p>
					</div>
				</div>					
				<div className="grid-1"></div>
			</div>
			<div className="grid">
				<div className="grid-1"></div>
				<div className="container__viewer__item grid-10">
					{ item && (
						<React.Fragment>
							<div className="grid" style={{padding: '0px 30px'}}>
								<div className="container__viewer__item__gallery grid-8">
									<img src={item.picture} alt="asd" style={{maxWidth: '680px'}} />
								</div>					
								<div className="grid-1"></div>
								<div className="grid-3">
									<p className="container__viewer__item__paragraph">{item.condition ? 'Nuevo -' : ''} {item.sold_quantity || 0} vendidos</p>
									<h1 className="container__viewer__item__title">{item.title}</h1>
									<p className="container__viewer__item__price">{formatCurrency(item.price.amount, item.price.currency)}</p>
									<button className="container__viewer__item__button">Comprar</button>
								</div>
							</div>
							<div className="grid">
								<div className="grid-8">
									<h2 className="container__viewer__item__description__title">Descripción del producto</h2>
									<p className="container__viewer__item__description__paragraph">
										{item.description}
									</p>
								</div>
							</div>
						</React.Fragment>
					)}
					{!item && loading && <Spinner />}
					{!item && !loading && <h2 style={{textAlign: 'center', padding: 80}}>No se encontraron resultados <br/> Escribe en el buscador lo que quieres encontrar.</h2>}
				</div>
				<div className="grid-1"></div>
			</div>
		</div>
	)
}

export default DetailItem