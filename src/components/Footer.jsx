import { NavLink, Link } from "react-router-dom";
import { FaInstagram as Instagram } from "react-icons/fa";
import { FaFacebookF as Facebook } from "react-icons/fa";
import { FaYoutube as Youtube } from "react-icons/fa";
import { useState } from "react";


function Footer() {
    const [Input, setInput] = useState(false)

    return (
        <>
            <footer>
                <section className="top__side" >
                    <div className="div office">
                        <h1>Office</h1>
                        <NavLink to='/about' >About</NavLink>
                        <NavLink to='/contact' >Contact</NavLink>
                    </div>
                    <div className="div account">
                        <h1>Account</h1>
                        <NavLink to='/profil' >My Account</NavLink>
                        <NavLink to='' >Sign Up</NavLink>
                        <NavLink>Orders</NavLink>
                    </div>
                    <div className="div customer">
                        <h1>Customers</h1>
                        <NavLink>FAQ</NavLink>
                        <NavLink to='/rule' >Rules</NavLink>
                        <NavLink to='/privacy' >Privacy policy</NavLink>
                    </div>
                    <div className="div support">
                        <h1>Support</h1>
                        <NavLink>Customer service</NavLink>
                        <NavLink>*6666</NavLink>
                        <NavLink>ruhidmammadzada@gmail.com</NavLink>
                    </div>
                    <div className="div subscribe">
                        <h1>Subscribe</h1>
                        <div className="send" >
                            <div> <input onClick={() => setInput(true)} placeholder="Enter yout gmail " style={Input ? { border: "2px solid black" } : { color: 'white' }} className="finput" type="text" name="" id="" /></div>
                            <div className="btn" ><button>Send</button></div>
                        </div>
                        <div className="media__icon">
                            <Link to="https://www.facebook.com/" ><Facebook className="facebook" /></Link>
                            <Link to="https://www.instagram.com/" ><Instagram className="instagram" /></Link>
                            <Link to="https://www.youtube.com/" ><Youtube className="youtube" /></Link>
                        </div>

                    </div>

                </section>

                <section className="bottom__side">
                    <div><p>@2024 Store App | Ruhid.ML</p></div>
                </section>

            </footer>
        </>

    )
}

export default Footer