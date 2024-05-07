import React from 'react';
import Footer from "../components/Footer";
import PublicNavbar from "../components/PublicNavbar";

export default function Contact() {
    return (
        <>
            {/* Mouse cursor area start here */}
            <div className="mouse-cursor cursor-outer"></div>
            <div className="mouse-cursor cursor-inner"></div>
            {/* Mouse cursor area end here */}

            <PublicNavbar />

            <main>
                {/* Page banner area start here */}
                <section className="banner__inner-page bg-image pt-180 pb-180 bg-image"
                    data-background="/assets/images/banner/banner-inner-page.jpg">
                    <div className="shape2 wow slideInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <img src="/assets/images/banner/inner-banner-shape2.png" alt="shape"/>
                    </div>
                    <div className="shape1 wow slideInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <img src="/assets/images/banner/inner-banner-shape1.png" alt="shape"/>
                    </div>
                    <div className="shape3 wow slideInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <img className="sway__animationX" src="/assets/images/banner/inner-banner-shape3.png" alt="shape"/>
                    </div>
                    <div className="container">
                        <h2 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Contact Us</h2>
                        <div className="breadcrumb-list wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <a href="/">Home</a><span><i className="fa-regular fa-angles-right mx-2"></i>Contact Us</span>
                        </div>
                    </div>
                </section>
                {/* Page banner area end here */}

                {/* Contact area start here */}
                <section className="contact-area pt-120 pb-120">
                    <div className="container">
                        {/* Your contact form or information can go here */}
                    </div>
                </section>
                {/* Contact area end here */}

                {/* Contact map area start here */}
                <div className="contact__map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122897.88733150701!2d-48.09324971503908!3d-15.721541570017282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3d18df9ae275%3A0x738470e469754a24!2sBras%C3%ADlia%20-%20Brasilia%2C%20Federal%20District%2C%20Brazil!5e0!3m2!1sen!2sbd!4v1703471804969!5m2!1sen!2sbd"
                        width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                {/* Contact map area end here */}
            </main>

            <Footer />
        </>
    );
}
