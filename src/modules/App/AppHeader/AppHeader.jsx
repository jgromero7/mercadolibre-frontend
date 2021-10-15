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
				<div className="grid-1"></div>
				<div className="grid-1">
					<img className="header__logo" src={LogoML} alt="Logo Mercado Libre" onClick={handleGoToHome} />
				</div>
				<div className="grid-9">
					<SearchBar />
				</div>
				<div className="grid-1"></div>
			</div>
		</div>
	)
})
