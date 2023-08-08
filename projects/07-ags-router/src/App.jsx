import { Suspense, lazy } from 'react'
import './App.css'
import { Router } from './Router'
import { Route } from './Route'
import { NotFoundPage } from './pages/NotFoundPage'
import { Spinner } from './components/Spinner'

const LazyHomePage = lazy(() => import('./pages/HomePage'))
const LazyAboutPage = lazy(() => import('./pages/AboutPage.jsx'))
const LazySearchPage = lazy(() => import('./pages/SearchPage'))

const appRoutes = [
  {
    path: '/search/:query',
    Component: LazySearchPage
  }
]

function App() {

  return (
    <main>
      <Suspense fallback={<Spinner />}>
        <Router routes={appRoutes} defaultComponent={NotFoundPage}>
          <Route path='/' Component={LazyHomePage} />
          <Route path='/about' Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
