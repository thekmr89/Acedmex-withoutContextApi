import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from './Modelscontext';

export const Header = (props) => {

    const modelState = props.modelState;
    const modelInquiry = props.modelInquiry;
    const modelCart = props.modelCart;
    const { cartItems } = useCart();
    return (
        <header>
            <div className="container-fluid">
                <div className="header-wrapper">
                    <div className="flex">
                        <div className="colA">
                            <div className="logo"><Link to=""><img src={require('../assets/images/logo.png')} alt="Logo" /></Link></div>
                        </div>
                        <div className="colB">
                            <nav>
                                <ul>
                                    <li><NavLink to="/about" activeclassname="active">About Us</NavLink></li>
                                    <li><NavLink to="/pricing" activeclassname="active">Pricing</NavLink></li>
                                    <li><NavLink to="/instructors" activeclassname="active">Instructors</NavLink></li>
                                    <li><NavLink to="/contact" activeclassname="active">Contact Us</NavLink></li>
                                </ul>
                                <div className="account-btn">
                                    <button onClick={() => { modelInquiry.current.show_inquirymodel() }}>Enquire Now</button>
                                </div>
                                <div className="add-to-cart">
                                    <button onClick={() => { modelCart.current.show_cartmodel() }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" /></svg>
                                        <span className={`cart-dot ${cartItems.length > 0 ? 'active' : ''}`}></span>
                                    </button>
                                </div>
                                <div className="ham-btn" onClick={() => { modelState.current.show_hammodel() }}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>

                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}