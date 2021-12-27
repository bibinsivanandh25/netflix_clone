import React from 'react'
import LeftNavbar from './LeftNavbar/LeftNavbar'
import RightNavbar from './RightNavbar/RightNavbar'
import "./Navbar.css"

const Navbar = () => {
    return (
        <section id="navbarBlock">
            <article>
                <LeftNavbar/>
                <RightNavbar/>
            </article>
        </section>
    )
}

export default Navbar
