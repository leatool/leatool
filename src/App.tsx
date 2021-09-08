import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Header from './pages/layout/Header'
import routes from './routes'

export default function App() {
  const pages = routes.map((item, index) => {
  })
  return (
      <BrowserRouter>
        <Header/>
        <Switch>
            {pages}
        </Switch>
      </BrowserRouter>
  )
}
