import { lazy } from 'react'

const routes = [
    {
        name: 'TOOL',
        path: '/',
        exact:true,
        ico:'home',
        compontent: lazy(() => import('./pages/overView/index'))
    }
]

export default routes
