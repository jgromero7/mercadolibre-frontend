import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import CardItem from '../../components/CardItem'
import Spinner from '../../components/Spinner'
import { formatCurrency } from '../../utils/formatCurrency'
import { scenes } from '../scenes'
import './ResultItems.scss'
import MercadoLibreService from '../../services/mercadolibre.service'

const LIMIT_RESULTS = 4

const ResultItems = ({location}) => {
	const history = useHistory()
	const [loading, setLoading] = useState(true)
	const [items, setItems] = useState([])
	const query = new URLSearchParams(location.search).get('q')
	const handleGoToItem = (id) => history.push(`${scenes.items.url}/${id}`)

	useEffect(() => {
		if (query && query.trim()) {
			setLoading(true)
			setItems([])
			search(query, LIMIT_RESULTS)
				.then(data => data && data.items && data.items.length > 0 && setItems(data.items))
				.catch(err => console.error)
				.finally(() => setLoading(false))
		}
	}, [query])

	const search = async (query, limit = null) => {
		return await MercadoLibreService.search(query, limit)
	}

	return (
		<div className="container">
			<div className="grid">
				<div className="grid-12">
					<div className="container__navigation">
						<p></p>
					</div>
				</div>
			</div>
			<div className="grid">
				<div className="grid-12">
					<div className="container__items">
						{
							items.length > 0 && items.map((item, key) => (
								<CardItem
									key={key}
									picture={item.picture}
									price={formatCurrency(item.price.amount, item.price.currency)}
									freeShipping={item.free_shipping}
									stateName={item.state_name}
									title={item.title}
									onClick={() => handleGoToItem(item.id)}
								/>
							))
						}

						{!loading && items.length === 0 && <h2 style={{textAlign: 'center', padding: 80}}>No se encontraron resultados <br/> Escribe en el buscador lo que quieres encontrar.</h2>}
						{loading && items.length === 0 && <Spinner />}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ResultItems