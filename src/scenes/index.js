import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import AppLayout from '../modules/App/AppLayout'
import { scenes } from './scenes'

const ResultItemsScene = lazy(() => import('./ResultItems'))
const DetailItemScene = lazy(() => import('./DetailItem'))

const MainScenes = () => {
	return (
		<Switch>
			<AppLayout>
				<Suspense fallback={null}>
					<Route
						exact
						path={scenes.items.pattern}
						component={ResultItemsScene}
					/>
					<Route
						exact
						path={scenes.itemsId.pattern}
						component={DetailItemScene}
					/>
				</Suspense>
			</AppLayout>
		</Switch>
	)
}

const AppScenes = () => {
	return (
		<BrowserRouter>
			<MainScenes />
		</BrowserRouter>
	)
}

export default AppScenes
