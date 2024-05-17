import { useState, Suspense, lazy, useEffect } from 'react'
import { connect } from 'react-redux'
import './App.css'
import Home from './pages/Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Footer from "./components/Footer"
import { motion, AnimatePresence } from "framer-motion"

const About = lazy(() => (import('./pages/About')))
const Contact = lazy(() => import('./pages/Contact'))
const Rule = lazy(() => import("./pages/Rule"))
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage "))

const ProfilPage = lazy(() => import('./pages/profil/ProfilPage'))
const Basket = lazy(() => import('./pages/Basket'))
const CategoryPage = lazy(() => import('./pages/CategoryPage'))
const Details2 = lazy(() => import('./pages/Details2'))
const Details = lazy(() => import('./pages/Details'))
const Login = lazy(() => import('./pages/loginRegister/Login'))
const Register = lazy(() => import('./pages/loginRegister/Register'))


const fetchURL = " https://api.escuelajs.co/api/v1/products"
const categoryUrl = 'https://api.escuelajs.co/api/v1/categories'

function App({ dispatch }) {
  const { pathname } = useLocation()
  const location = useLocation()
  const [loading, setLoading] = useState(true)
  const [lastPath, setLastPath] = useState("/")
  useEffect(() => {
    fetch(fetchURL).then((a) => (a.json()))
      .then((a) => {
        dispatch({
          type: "SET_PRODUCTS",
          payload: a
        })
      })
    fetch("https://fakestoreapi.com/products").then((a) => (a.json()))
      .then((a) => {
        dispatch({
          type: "SET_V1PRODUCTS",
          payload: a
        })
      })


    fetch(categoryUrl).then((a) => (a.json()))
      .then((a) => {
        a.slice(0, 4).map((t) => (
          dispatch({
            type: "SET_CATEGORY",
            payload: t
          })
        ))

        setLoading(false)

      })
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch({
      type: "SET_LASTPATH",
      payload: lastPath
    })
    setLastPath(pathname)
  }, [pathname])

  const routes = [
    {
      path: '/',
      element: <Home />
    },
    // NavMenu Page section
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/rule',
      element: <Rule />
    },
    {
      path: '/privacy',
      element: <PrivacyPolicyPage />
    },
    // ----------------------------
    {
      path: 'basket',
      element: <Basket />
    },
    {
      path: 'product/:category/:id',
      element: <Details />
    },
    {
      path: 'product_v2/:category/:id',
      element: <Details2 />
    },
    {
      path: '/:category/:id/all',
      element: <CategoryPage />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <Register />
    },
    {
      path: '/profil',
      element: <ProfilPage />
    }
  ]
  return (
    <>
      {!loading && <Header />}
      {!loading ? <main className='pagesContents'>
        <AnimatePresence mode='wait' >
          <Routes location={location} key={pathname} >
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<Suspense fallback={<h1>Loading...</h1>} >
                  <motion.div
                    transition={{ duration: 0.5 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >{route.element}</motion.div>
                </Suspense>} />
            ))}
          </Routes>
        </AnimatePresence>
        <Footer />
      </main > : <h1>Loading...</h1>}
    </>
  )
}

export default connect()(App)
