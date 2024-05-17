import { FaInstagram } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { useState, useEffect } from 'react'
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";


function NewHeader({ basketCount, allCategories, allPages, logo }) {
    const [scrolled, setScrolled] = useState(window.scrollY > 20)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrolled(window.scrollY > 20)
        })
    }, [])
    return (
        <header className="header">
            {scrolled || <div className="topBar">
                <ul className="icon-list">
                    <li><AiOutlineFacebook /></li>
                    <li><FaInstagram /></li>
                </ul>
                <div className="image"><img className="logoImg" src={logo} alt="" /></div>
                <ul className="icon-list">
                    <li><IoSearchOutline /></li>
                    <li><NavLink to='/basket' ><SlBasket />{basketCount > 0 && basketCount}</NavLink></li>
                </ul>
            </div>}



            <div style={scrolled ? { padding: "26px 10px" } : {}} className="bottomBar">
                <img className="logoImg" style={scrolled ? { opacity: 1 } : { opacity: 0 }} src={logo} alt="" />
                {/* <ul className="PagesName">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li>Categoryes</li>
                    <ul className="header__categories">
                        <li>a1</li>
                        <li>a2</li>
                        <li>a3</li>
                    </ul>
                    <li>w2d</li>
                    <li>gfr</li>
                </ul> */}
                <ul className="subMenu">
                    <li><NavLink to='/' >Home</NavLink></li>
                    <li>
                        <NavLink to='/' >Categories</NavLink>
                        <ul className="dropdown">
                            {allCategories.map((a, i) => (<li key={i} ><NavLink to={a.path}>{a.name}</NavLink> </li>))}
                        </ul>
                    </li>
                    <li>
                        <NavLink to='/' >Pages</NavLink>
                        <ul className="dropdown">
                            {allPages.map((a, i) => (<li key={i} ><NavLink to={a.path}>{a.name}</NavLink> </li>))}
                        </ul>
                    </li>
                </ul>
                <ul style={scrolled ? { opacity: 1 } : { opacity: 0 }} className="icon-list">
                    <li><IoSearchOutline /></li>
                    <li><NavLink to="basket" ><SlBasket /> {basketCount > 0 && basketCount} </NavLink></li>
                </ul>

            </div>
        </header>
    )
}
const t = (a) => {
    return {
        basketCount: a.basket.length,
        allCategories: a.AllCategories,
        allPages: a.AllPages,
        logo: a.logo[0]

    }
}
export default connect(t)(NewHeader)