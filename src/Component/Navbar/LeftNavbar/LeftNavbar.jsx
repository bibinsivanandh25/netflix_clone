import React from 'react'
import { Link } from 'react-router-dom'
import { Fragment, useContext } from 'react/cjs/react.development'
import { AuthContext } from '../../../ContextApi/AuthContext'

const LeftNavbar = () => {
    let USER = useContext(AuthContext)
    return (
        <div className="leftNavbar">
            <div className="logoBlock">
                <img src="netflix.png" alt="logo" />
            </div>
            <div className="menuBlock">
                {USER ? (
                    <Fragment>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">TV Shows</a></li>
                    <li><a href="/">Movies</a></li>
                    <li><Link to="/upload-video">Upload movie</Link></li>
                    <li><a href="/">New & Popular</a></li>
                    <li><a href="/">My List</a></li>
                </ul>
                    </Fragment>
                ) : (
                    ""
                )}
            
            </div>
        </div>
    )
}

export default LeftNavbar
