import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Header from './pages/layout/Header'
import Index from './pages/overView/index'
import './asset/common.scss'
import routes from './routes'

export default function App() {
    const pages = routes.map((router,index) => {
        return <Route
            exact={ router.exact }
            key={index}
            path={router.path}
            render={ (props)=>{
                return (
                    <div>
                        <router.component { ...props }>
                            {
                                router.children?.map((item,itemIndex)=>{
                                    return (
                                        <Route
                                            exact={ item.exact }
                                            key={itemIndex}
                                            path={item.path}
                                            component = { item.component }
                                        />
                                    )
                                })
                            }
                        </router.component>
                    </div>
                )
            } }
        />
    })

    return (
      <BrowserRouter>
        <Header/>
          {pages}
      </BrowserRouter>
    )
}
