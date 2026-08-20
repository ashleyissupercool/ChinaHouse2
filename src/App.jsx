import HomePage from './pages/HomePage.jsx'
import MenuPage from './pages/MenuPage.jsx'
import OrderListPage from './pages/OrderListPage.jsx'
import { OrderProvider } from './context/OrderContext.jsx'

const routes = {
  '/': HomePage,
  '/menu': MenuPage,
  '/order-list': OrderListPage,
}

function App() {
  const Page = routes[window.location.pathname] ?? HomePage

  return (
    <OrderProvider>
      <Page />
    </OrderProvider>
  )
}

export default App
