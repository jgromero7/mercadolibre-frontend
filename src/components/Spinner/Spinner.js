import React, { memo } from 'react'
import './Spinner.scss'

export default memo(() => {
	return (
		<div className="spinner">
            <span className="spinner-inner-1"></span>
            <span className="spinner-inner-2"></span>
            <span className="spinner-inner-3"></span>
        </div>
	)
})
