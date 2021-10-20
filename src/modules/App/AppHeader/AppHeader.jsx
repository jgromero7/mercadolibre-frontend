import React, { memo } from 'react'
import './AppHeader.scss'
import LogoML from '../../../assets/Logo_ML.png'
import SearchBar from '../../../components/SearchBar/SearchBar'
import { useHistory } from 'react-router'

export default memo(({location}) => {
	const history = useHistory()
	const handleGoToHome = () => history.push('/')

	return (
		<div className="header">
			<div className="grid">
				<div className="grid-row" style={{flexWrap: 'nowrap'}}>
					<div className="grid-col-default-1" style={{textAlign: 'center', padding: '5px'}}>
						<img className="header__logo" src={LogoML} alt="Logo Mercado Libre" onClick={handleGoToHome} />
					</div>
					<div className="grid-col-default-11" style={{padding: '5px'}}>
						<SearchBar />
					</div>
				</div>
			</div>
		</div>
	)
})
