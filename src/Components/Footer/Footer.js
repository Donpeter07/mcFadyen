import React from 'react'
import "./Footer.css"
import { BiPhone } from "react-icons/bi"
import { AiOutlineMail, AiFillFacebook,AiFillPlaySquare,AiOutlineLinkedin } from "react-icons/ai"
import { IoLocationOutline } from "react-icons/io5"
import { RiVisaLine, RiPaypalLine } from "react-icons/ri"
import {CgTwitter} from 'react-icons/cg'
import {SiRazorpay} from 'react-icons/si'
import {FaCcAmazonPay,FaGooglePay} from 'react-icons/fa'
import { Fragment } from 'react/cjs/react.production.min'


const Footer = () => {
    return (
       
        <Fragment>
            <div className="footer-main-parent">
                <div className='newsletter-mobile'>
                <div style={{ fontWeight: "700" }}>SUBSCRIBE NEWSLETTER</div>
                    <div style={{ display: "flex" }}>
                        <div>
                            <input type="text" placeholder='Enter your email address' style={{ backgroundColor: "white", padding: "8px 6px", borderRadius: "5px" }} />
                        </div>
                        <div>
                            <button className="button-submit">Submit</button>
                        </div>
                    </div>
                </div>
                {/* Sec1 */}
                <div className="footer-sec1">
                    <div style={{ fontWeight: "700", marginBottom: "10px" }} className="conatct-head">CONTACT</div>
                    <div className="footer-sec1-a">
                        <div style={{ display: "flex", marginBottom: "10px" }}>
                            <span className='footer-sec1-a-icon'><BiPhone /></span>
                            <span>1800 420 0707</span>
                        </div>
                        <div style={{ display: "flex", marginBottom: "10px" }}>
                            <span className='footer-sec1-a-icon'><AiOutlineMail /></span>
                            <span>customercare@company.com</span>
                        </div>
                        <div style={{ display: "flex", marginBottom: "10px" }}>
                            <span className='footer-sec1-a-icon'><IoLocationOutline /></span>
                            <span>Address line 1Address line 2</span>
                        </div>
                    </div>

                    <div className='social-mobile'>
                        <span><AiFillFacebook fontSize={30} /></span>
                        <span><AiFillPlaySquare fontSize={30} /></span>
                        <span><AiOutlineLinkedin fontSize={30} /></span>
                        <span><CgTwitter fontSize={30} /></span>
                    </div>

                    <div className="footer-sec1-b">
                        <div style={{ fontWeight: "700" }}>
                            PAYMENT METHODS
                        </div>
                        <div style={{ marginTop: "5px" }}>
                            <span style={{ marginRight: "10px" }}>
                                <RiVisaLine fontSize={30} />
                            </span>
                            <span style={{ marginRight: "10px" }}>
                                <RiPaypalLine fontSize={30} />
                            </span>
                            <span style={{ marginRight: "10px" }}>
                                <SiRazorpay fontSize={30} />
                            </span>
                            <span style={{ marginRight: "10px" }}>
                                <FaCcAmazonPay fontSize={30} />
                            </span>
                            <span style={{ marginRight: "10px" }}>
                                <FaGooglePay fontSize={30} />
                            </span>
                        </div>
                    </div>
                </div>
                {/* Sec 2 */}
                <div className="footer-sec2">
                    <div style={{ fontWeight: "700", marginBottom: "10px" }}>
                        COMPANY
                    </div>
                    <div className='footer-styled'>
                        About Us
                    </div>
                    <div className='footer-styled'>
                        Sell With Us
                    </div>
                    <div className='footer-styled'>
                        Our Sellers
                    </div>
                </div>

                {/* Sec 3 */}
                <div className="footer-sec3">
                    <div style={{ fontWeight: "700", marginBottom: "10px" }}>
                        INFORMATION
                    </div>
                    <div className='footer-styled'>
                        Privacy Policy
                    </div>
                    <div className='footer-styled'>
                        Exchange and Returns policy
                    </div>
                    <div className='footer-styled'>
                        Terms and Conditions
                    </div>
                    <div className='footer-styled'>
                        Common Questions
                    </div>
                </div>

                {/* sec 4 */}
                <div className="footer-sec4">
                    <div style={{ fontWeight: "700" }}>SUBSCRIBE NEWSLETTER</div>
                    <div style={{ display: "flex" }}>
                        <div>
                            <input type="text" placeholder='Enter your email address' style={{ backgroundColor: "white", padding: "8px 6px", borderRadius: "5px" }} />
                        </div>
                        <div>
                            <button className="button-submit">Submit</button>
                        </div>
                    </div>
                    <div className='social'>
                        <span><AiFillFacebook fontSize={30} /></span>
                        <span><AiFillPlaySquare fontSize={30} /></span>
                        <span><AiOutlineLinkedin fontSize={30} /></span>
                        <span><CgTwitter fontSize={30} /></span>
                    </div>

                </div>
                <div className="footer-payment-mobile">
                    <div style={{ fontWeight: "700" }}>
                        PAYMENT METHODS
                    </div>
                    <div style={{ marginTop: "5px", color: " #707070" }}>
                        <span style={{ marginRight: "10px" }}>
                            <RiVisaLine fontSize={30} />
                        </span>
                        <span style={{ marginRight: "10px" }}>
                            <RiPaypalLine fontSize={30} />
                        </span>
                        <span style={{ marginRight: "10px" }}>
                            <SiRazorpay fontSize={30} />
                        </span>
                        <span style={{ marginRight: "10px" }}>
                            <FaCcAmazonPay fontSize={30} />
                        </span>
                        <span style={{ marginRight: "10px" }}>
                            <FaGooglePay fontSize={30} />
                        </span>
                    </div>
                </div>
            </div>

            <div className='footer-main'>
                Copyrights © 2021 Company Ltd. All rights reserved.
            </div>
        </Fragment>
    )
}

export default Footer



