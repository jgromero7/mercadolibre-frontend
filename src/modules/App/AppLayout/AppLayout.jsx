import React, {memo} from 'react'
import AppHeader from '../AppHeader'

export default memo(({ children }) => {
	return (
		<div>
			<div className="content">
				<div className="content__container">
					<AppHeader />
					<div className="content__container__children" >{children}</div>
				</div>
			</div>
		</div>
	)
})
