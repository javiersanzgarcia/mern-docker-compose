import './App.css'
import {useState} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

// Screens
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'

// Components
import Navbar from './components/Navbar'
import Backdrop from './components/Backdrop'
import SideDrawer from './components/SideDrawer'

function App() {
  const [sideToggle, setSideToggle] = useState(false)

  return (
    <Router>
      <div className="app">
        <Navbar click={() => setSideToggle(true)} />
        <SideDrawer
          show={sideToggle}
          click={() => setSideToggle(false)}
        />
        <Backdrop
          show={sideToggle}
          click={() => setSideToggle(false)}
        />
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path="/product/:id"
              component={ProductPage}
            />
            <Route exact path="/cart" component={CartPage} />
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App
