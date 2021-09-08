import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import './layout.scss'

const Header: React.FC = () => {
    return (
        <Fragment>
            <div className="c-header">
                <div className="f-c">
                    <h1 className="logo"><NavLink to="/" className="img" style={{backgroundImage:`url(${require('../../asset/svg/logo.svg').default })`}}>leatool</NavLink></h1>
                </div>
            </div>
        </Fragment>
    )
}

export default Header;
