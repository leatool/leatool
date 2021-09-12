import { lazy } from 'react'
import conversion from './pages/conversion/index';
import overView from './pages/overView/index';

interface router {
    path:string,
    component:any,
    exact?:boolean,
    children?:Array<router>
}

const routers:Array<router> =[
    {
        path: '/',
        exact:true,
        component:  overView,
    },
    {
        path: '/conversion',
        exact:true,
        component: conversion,
    }
]

export default routers
