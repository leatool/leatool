import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Header from './pages/layout/Header'
import './asset/common.scss'

export default function App() {

    return (
      <BrowserRouter>
        <Header/>
        <Switch>
        </Switch>
      </BrowserRouter>
    )
}
