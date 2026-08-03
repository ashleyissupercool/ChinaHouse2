import HomePage from './pages/HomePage.jsx'
import ManagePage from './pages/ManagePage.jsx'
import MenuPage from './pages/MenuPage.jsx'
import OrderListPage from './pages/OrderListPage.jsx'

const routes = {
  '/': HomePage,
  '/menu': MenuPage,
  '/order-list': OrderListPage,
  '/manage': ManagePage,
}

function App() {
  const Page = routes[window.location.pathname] ?? HomePage

  return <Page />
}

export default App
