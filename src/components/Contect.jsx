import React from 'react'

export default function Contect() {
    return (
        <footer id="fh5co-footer" role="contentinfo">
            <div className="container">
                <div className="row copyright">
                    <div className="col-md-12 text-center">
                        <h3 style={{fontWeight:"bold",fontFamily:"book, Arial, serif",color:"#F14E95"}}>THE EVENTIA</h3>
                        <div className="fh5co-contact-info">
                            <ul>
                                <div className="aligning">
                                <li className="phone"><a href="tel://1234567920">+92 4545368 92</a></li>
                                <li className="email"><a href="mailto:info@yoursite.com">admin@eventia.com</a></li>
                                </div>
                                <li class="address">Next to your localhood, it's global</li>
                            </ul>
                        </div>
                        <p style={{padding:"10px"}}>
                            <ul class="fh5co-social-icons">
                                <li><a href="# "><i className="icon-twitter"></i></a></li>
                                <li><a href="# "><i className="icon-facebook"></i></a></li>
                                <li><a href="# "><i className="icon-linkedin"></i></a></li>
                                <li><a href="# "><i className="icon-dribbble"></i></a></li>
                            </ul>
                        </p>
                        <p>
                            <small className="block" style={{fontWeight:"bold",fontSize:"16px"}}>&copy; All Rights Reserved.</small>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
