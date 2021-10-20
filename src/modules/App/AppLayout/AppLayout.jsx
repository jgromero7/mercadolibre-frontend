import React, {memo} from 'react'
import AppHeader from '../AppHeader'
import './AppLayout.scss'

export default memo(({ children }) => {
	return (
		<div>
			<AppHeader />
			<div className="container">
				{children}
			</div>
		</div>
	)
})
