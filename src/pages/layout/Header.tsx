import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import './layout.scss'
import routes from "../../routes";

const Header = () => {

    const nav = routes.map((item, index) => {
        return index < 3 && <NavLink exact={item.exact} activeClassName="selected" className="nav-link" to={item.path} key={index} >
            <i className={ `ico-${item.ico}`} />
            <span>{item.name}</span>
        </NavLink>
    })

    return (
        <Fragment>
            <div className="c-header">
                <div className="f-c">
                    <h1 className="logo"><NavLink to="/" className="img" style={{backgroundImage:`url(${require('../../asset/svg/logo.svg').default })`}}>leatool</NavLink></h1>
                    <div className="c-nav">
                        { nav }
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default Header;
