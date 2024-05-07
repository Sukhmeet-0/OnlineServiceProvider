import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <>
            {/* <!-- Footer area start here --> */}
            <footer className="footer-area secondary-bg">
                <div className="footer__shape-regular-left wow slideInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                    <img src="/assets/images/shape/footer-regular-left.png" alt="shape"/>
                </div>
                <div className="footer__shape-solid-left wow slideInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <img className="sway_Y__animation" src="/assets/images/shape/footer-solid-left.png" alt="shape"/>
                </div>
                <div className="footer__shape-solid-right wow slideInRight" data-wow-delay="00ms" data-wow-duration="1500ms">
                    <img className="sway_Y__animation" src="/assets/images/shape/footer-regular-right.png" alt="shape"/>
                </div>
                <div className="footer__shape-regular-right wow slideInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <img src="/assets/images/shape/footer-solid-right.png" alt="shape"/>
                </div>
                <div className="footer__shadow-shape">
                    <img src="/assets/images/shape/footer-shadow-shape.png" alt="shodow"/>
                </div>
                <div className="container">
                    <div className="footer__wrp pt-100 pb-100">
                        <div className="footer__item item-big wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <a href="index.html" className="logo mb-30">
                                <img src="/assets/images/logo/logo.svg" alt="image"/>
                            </a>
                            <p>Phasellus ultricies aliquam volutpat
                                ullamcorper laoreet neque, a lacinia
                                curabitur lacinia mollis</p>
                            <div className="social-icon">
                                <a href="#0"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="#0"><i className="fa-brands fa-twitter"></i></a>
                                <a href="#0"><i className="fa-brands fa-linkedin-in"></i></a>
                                <a href="#0"><i className="fa-brands fa-youtube"></i></a>
                            </div>
                        </div>
                        <div className="footer__item item-sm wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <h3 className="footer-title">IT Solution</h3>
                            <ul>
                                <li><a href="service-details.html"><i className="fa-regular fa-angles-right me-1"></i> IT
                                    Management</a></li>
                                <li><a href="service-details.html"><i className="fa-regular fa-angles-right me-1"></i> SEO
                                    Optimization</a>
                                </li>
                                <li><a href="service-details.html"><i className="fa-regular fa-angles-right me-1"></i> Web
                                    Development</a>
                                </li>
                                <li><a href="service-details.html"><i className="fa-regular fa-angles-right me-1"></i> Cyber
                                    Security</a></li>
                                <li><a href="service-details.html"><i className="fa-regular fa-angles-right me-1"></i> Data
                                    Security</a></li>
                            </ul>
                        </div>
                        <div className="footer__item item-sm wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <h3 className="footer-title">Quick Link</h3>
                            <ul>
                                <li><a href="about.html"><i className="fa-regular fa-angles-right me-1"></i> About Gratech</a></li>
                                <li><a href="service.html"><i className="fa-regular fa-angles-right me-1"></i> Our Services</a>
                                </li>
                                <li><a href="pricing.html"><i className="fa-regular fa-angles-right me-1"></i> Pricing Plan</a>
                                </li>
                                <li><a href="case.html"><i className="fa-regular fa-angles-right me-1"></i> Our Projects</a></li>
                                <li><a href="team.html"><i className="fa-regular fa-angles-right me-1"></i> Our Team</a></li>
                            </ul>
                        </div>
                        <div className="footer__item item-big wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <h3 className="footer-title">Contact Us</h3>
                            <p className="mb-20">4517 Washington Ave. Manchester, Kentucky 39495</p>
                            <ul className="footer-contact">
                                <li>
                                    <i className="fa-regular fa-clock"></i>
                                    <div className="info">
                                        <h5>
                                            Opening Hours:
                                        </h5>
                                        <p>Mon - Sat: 10.00 AM - 4.00 PM</p>
                                    </div>
                                </li>
                                <li>
                                    <i className="fa-duotone fa-phone"></i>
                                    <div className="info">
                                        <h5>
                                            Phone Call:
                                        </h5>
                                        <p>208-6666-0112, 308-5555-0113</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer__copyright">
                    <div className="container">
                        <div
                            className="d-flex gap-1 flex-wrap align-items-center justify-content-md-between justify-content-center">
                            <p className="wow fadeInDown" data-wow-delay="00ms" data-wow-duration="1500ms">&copy; All Copyright 2024
                                by <a href="#0">Gratech</a></p>
                            <ul className="d-flex align-items-center gap-4 wow fadeInDown" data-wow-delay="200ms"
                                data-wow-duration="1500ms">
                                <li><a href="#0">Terms & Condition</a></li>
                                <li><a href="#0">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!-- Footer area end here --> */}
            

            {/* <!-- Back to top area start here --> */}
            <div className="scroll-up">
                <svg className="scroll-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>
            {/* <!-- Back to top area end here --> */}
        </>
    )
}