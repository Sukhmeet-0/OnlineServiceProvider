import Footer from '../components/Footer'
import PublicNavbar from '../components/PublicNavbar'
export default function Home() {
    return (
        <>
            {/* <!-- preloader start --> */}
            <div className="preloader-outer">
                <div className="sv-loader">
                    <img className="fa-spin" src="/images/circle-loader.png" alt="" />
                </div>
            </div>


            <PublicNavbar />


            {/* <!-- BANNER START --> */}
            <div className="sv-banner">
                <span className="sv-shade"></span>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <div className="sv-banner_title">
                                <h1>Let’s work with each other & create</h1>
                                <h2>Great Opportunities</h2>
                            </div>
                            <ul className="sv-mainbtnlist">
                                <li><a href="providerlist.html" className="sv-pb">I’m looking for a talent</a></li>
                                <li><a href="providerlist.html" className="sv-pb sv-sp-white-border">I’m looking for a work</a></li>
                            </ul>
                            <ul className="sv-explore-categories">
                                <li>
                                    <div className="sv-explore-content">
                                        <figure>
                                            <img src="/images/indexv1/img-02.png" alt="images" />
                                        </figure>
                                        <div className="sv-explore-info">
                                            <h6>Automotive</h6>
                                            <span>321247 Listings</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="sv-explore-content">
                                        <figure>
                                            <img src="/images/indexv1/img-03.png" alt="images" />
                                        </figure>
                                        <div className="sv-explore-info">
                                            <h6>Beauty & Care</h6>
                                            <span>321247 Listings</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="sv-explore-content">
                                        <figure>
                                            <img src="/images/indexv1/img-04.png" alt="images" />
                                        </figure>
                                        <div className="sv-explore-info">
                                            <h6>Marketing</h6>
                                            <span>321247 Listings</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="sv-explore-content">
                                        <figure>
                                            <img src="/images/indexv1/img-05.png" alt="images" />
                                        </figure>
                                        <div className="sv-explore-info">
                                            <h6>Child Care</h6>
                                            <span>321247 Listings</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="sv-explore-content ">
                                        <figure>
                                            <img src="/images/indexv1/img-06.png" alt="images" />
                                        </figure>
                                        <div className="sv-explore-info">
                                            <h6>House Cleaning</h6>
                                            <span>321247 Listings</span>

                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="sv-explore-content sv-exploremore-two">
                                        <div className="sv-explore-info">
                                            <h5>Explore more categories</h5>
                                            <a href="providerlist.html" className="sv-pb-sm">Explore all</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="sv-author-name">
                    <span>Spartan’s long waves,</span>
                    <em>James Cornor</em>
                </div>
            </div>
            {/* <!-- BANNER END --> */}

            {/* <!-- MAIN START --> */}
            <main className="sv-main">
                {/* <!-- CLIENTS START --> */}
                <div className="sv-main-section">
                    <div className="container">
                        <ul className="sv-clients">
                            <li><img src="/images/indexv1/clients/img-01.png" alt="image description"/></li>
                            <li><img src="/images/indexv1/clients/img-02.png" alt="image description"/></li>
                            <li><img src="/images/indexv1/clients/img-03.png" alt="image description"/></li>
                            <li><img src="/images/indexv1/clients/img-04.png" alt="image description"/></li>
                            <li><img src="/images/indexv1/clients/img-05.png" alt="image description"/></li>
                            <li><img src="/images/indexv1/clients/img-06.png" alt="image description"/></li>
                            <li><img src="/images/indexv1/clients/img-07.png" alt="image description"/></li>
                        </ul>
                    </div>
                </div>
                {/* <!-- CLIENTS END --> */}
                {/* <!-- SERVICES START --> */}
                <section className="sv-main-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="sv-main-title-holder">
                                    <div className="sv-maintitle">
                                        <h2>Top featured collections</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div id="sv-trendingserviceslider" className="splide sv-trendingserviceslider sv-sliderarrow">
                                    <div className="splide__track">
                                        <ul className="splide__list">
                                            <li className="splide__slide">
                                                <div className="sv-trendingserviceslider_content">
                                                    <figure className="sv-trendingserviceslider_img">
                                                        <a href="provider-details.html"><img src="/images/indexv1/slider/img-01.jpg" alt="img-description"/></a>
                                                        <figcaption>
                                                            <a href="provider-details.html"><img src="/images/indexv1/slider/thumnails/img-01.jpg" alt="images"/></a>
                                                            <a href="provider-details.html"><img src="/images/indexv1/slider/thumnails/img-02.jpg" alt="images"/></a>
                                                            <a href="provider-details.html"><img src="/images/indexv1/slider/thumnails/img-03.jpg" alt="images"/></a>
                                                            <a href="provider-details.html"><img src="/images/indexv1/slider/thumnails/img-04.jpg" alt="images"/></a>
                                                            <a href="provider-details.html"><img src="/images/indexv1/slider/thumnails/img-05.jpg" alt="images"/></a>
                                                        </figcaption>
                                                    </figure>
                                                    <div className="sv-trendingserviceslider_title">
                                                        <h4>
                                                            <a href="provider-details.html">Micheal J</a>
                                                            <i className="icon-zap sv-icongreen" data-tippy-trigger="mouseenter" data-tippy-html="#sv-trending" data-tippy-interactive="true" data-tippy-placement="top"></i>
                                                            <i className="icon-check-circle sv-linkblue" data-tippy-trigger="mouseenter" data-tippy-html="#sv-verifed" data-tippy-interactive="true" data-tippy-placement="top"></i>
                                                        </h4>
                                                        <p>Creating idea into true reality for everyone</p>
                                                        <div className="sv-featureRating">
                                                            <span className="sv-featureRating__stars"><span></span></span>
                                                            <h6>4.5 <em>/5.0</em></h6>
                                                            <em>User review</em>
                                                        </div>
                                                        <address><i className="icon-map-pin"></i>730 Burning Vale, Long Beach, MD 36855</address>
                                                        <ul className="sv-serviceslist">
                                                            <li>
                                                                <a href="providerlist.html">PHP development</a>
                                                            </li>
                                                            <li>
                                                                <a href="providerlist.html">Laravel</a>
                                                            </li>
                                                            <li>
                                                                <a href="providerlist.html">PSD to HTML</a>
                                                            </li>
                                                            <li>
                                                                <a href="providerlist.html">iOS</a>
                                                            </li>
                                                            <li>
                                                                <a href="providerlist.html">Clean coding</a>
                                                            </li>
                                                            <li>
                                                                <a href="providerlist.html">Admin panel</a>
                                                            </li>
                                                            <li>
                                                                <a href="providerlist.html">Networking</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0);" className="sv-tippytooltip" data-tippy-trigger="click" data-tippy-html="#sv-industrypro" data-tippy-interactive="true" data-tippy-placement="top-start">...</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="splide__slide">
                                                <div className="sv-trendingserviceslider_content">
                                                    <figure className="sv-trendingserviceslider_img">
                                                        <a href="provider-details.html"><img src="/images/indexv1/slider/img-02.jpg" alt="img-description"/></a>
                                                        <figcaption>
                                                            <a href="provider-details.html"><img src="/images/indexv1/slider/thumnails/img-06.jpg" alt="images"/></a>
                                                            <a href="provider-details.html"><img src="/images/indexv1/slider/thumnails/img-07.jpg" alt="images"/></a>
                                                            <a href="provider-details.html"><img src="/images/indexv1/slider/thumnails/img-08.jpg" alt="images"/></a>
                                                            <a href="provider-details.html"><img src="/images/indexv1/slider/thumnails/img-09.jpg" alt="images"/></a>
                                                            <a href="provider-details.html"><img src="/images/indexv1/slider/thumnails/img-10.jpg" alt="images"/></a>
                                                        </figcaption>
                                                    </figure>
                                                    <div className="sv-trendingserviceslider_title">
                                                        <h4>
                                                            <a href="provider-details.html">Jullian H</a>
                                                            <i className="icon-zap sv-icongreen" data-tippy-trigger="mouseenter" data-tippy-html="#sv-trending" data-tippy-interactive="true" data-tippy-placement="top"></i>
                                                            <i className="icon-check-circle sv-linkblue" data-tippy-trigger="mouseenter" data-tippy-html="#sv-verifed" data-tippy-interactive="true" data-tippy-placement="top"></i>
                                                        </h4>
                                                        <p>Cleaning and maintaining housekeeping</p>
                                                        <div className="sv-featureRating">
                                                            <span className="sv-featureRating__stars"><span></span></span>
                                                            <h6>4.5 <em>/5.0</em></h6>
                                                            <em>User review</em>
                                                        </div>
                                                        <address><i className="icon-map-pin"></i>730 Burning Vale, Long Beach, MD 36855</address>
                                                        <ul className="sv-serviceslist">
                                                            <li>
                                                                <a href="providerlist.html">Homedecor</a>
                                                            </li>
                                                            <li>
                                                                <a href="providerlist.html">Cleaning business</a>
                                                            </li>
                                                            <li>
                                                                <a href="providerlist.html">Detailing</a>
                                                            </li>
                                                            <li>
                                                                <a href="providerlist.html">Love</a>
                                                            </li>
                                                            <li>
                                                                <a href="providerlist.html">Home sweet home</a>
                                                            </li>
                                                            <li>
                                                                <a href="providerlist.html">Service</a>
                                                            </li>
                                                            <li>
                                                                <a href="providerlist.html">Power washing </a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0);" className="sv-tippytooltip" data-tippy-trigger="click" data-tippy-html="#sv-industrypro" data-tippy-interactive="true" data-tippy-placement="top-start">...</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="splide__slide">
                                                <div className="sv-trendingserviceslider_content">
                                                    <figure className="sv-trendingserviceslider_img">
                                                        <a href="provider-details.html"><img src="/images/indexv1/slider/img-03.jpg" alt="img-description"/></a>
                                                        <figcaption>
                                                            <a href="provider-details.html"><img src="/images/indexv1/slider/thumnails/img-11.jpg" alt="images"/></a>
                                                            <a href="provider-details.html"><img src="/images/indexv1/slider/thumnails/img-12.jpg" alt="images"/></a>
                                                            <a href="provider-details.html"><img src="/images/indexv1/slider/thumnails/img-13.jpg" alt="images"/></a>
                                                            <a href="provider-details.html"><img src="/images/indexv1/slider/thumnails/img-14.jpg" alt="images"/></a>
                                                            <a href="provider-details.html"><img src="/images/indexv1/slider/thumnails/img-15.jpg" alt="images"/></a>
                                                        </figcaption>
                                                    </figure>
                                                    <div className="sv-trendingserviceslider_title">
                                                        <h4>
                                                            <a href="provider-details.html">Petterson S</a>
                                                            <i className="icon-zap sv-icongreen" data-tippy-trigger="mouseenter" data-tippy-html="#sv-trending" data-tippy-interactive="true" data-tippy-placement="top"></i>
                                                            <i className="icon-check-circle sv-linkblue" data-tippy-trigger="mouseenter" data-tippy-html="#sv-verifed" data-tippy-interactive="true" data-tippy-placement="top"></i>
                                                        </h4>
                                                        <p>Creating idea into true reality for everyone</p>
                                                        <div className="sv-featureRating">
                                                            <span className="sv-featureRating__stars"><span></span></span>
                                                            <h6>4.5 <em>/5.0</em></h6>
                                                            <em>User review</em>
                                                        </div>
                                                        <address><i className="icon-map-pin"></i>730 Burning Vale, Long Beach, MD 36855</address>
                                                        <ul className="sv-serviceslist">
                                                            <li>
                                                                <a href="providerlist.html">Legal action</a>
                                                            </li>
                                                            <li>
                                                                <a href="providerlist.html">Personal injury</a>
                                                            </li>
                                                            <li>
                                                                <a href="providerlist.html">Law business</a>
                                                            </li>
                                                            <li>
                                                                <a href="providerlist.html">Law</a>
                                                            </li>
                                                            <li>
                                                                <a href="providerlist.html">Attorney</a>
                                                            </li>
                                                            <li>
                                                                <a href="providerlist.html">Lawyer firms</a>
                                                            </li>
                                                            <li>
                                                                <a href="providerlist.html">Lawyers man</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0);" className="sv-tippytooltip" data-tippy-trigger="click" data-tippy-html="#sv-industrypro" data-tippy-interactive="true" data-tippy-placement="top-start">...</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- SERVICES END --> */}
                {/* <!-- MobileApp START --> */}
                <section className="sv-main-section">
                    <div className="sv-sectionappdark">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-sm-12 col-lg-6">
                                    <div className="sv-sectionapptitle">
                                        <div className="sv-maintitle">
                                            <h2>Stay connected to work with our mobile application</h2>
                                        </div>
                                        <div className="sv-main-description">
                                            <p>Accusamus et iusto odiotations dignissimos ducimus quistam blanditiis praesentium voluptatum deleniti atquetisers corrupti quos dolores et quas molestias.</p>
                                        </div>
                                        <a href="https://www.apple.com/app-store/" target="_blank" className="sv-pb-lg">Download mobile app <i className="icon-download"></i></a>
                                        <div className="sv-appcompat">
                                            <h6><i className="icon-bell"></i><span> This app is compatible with</span> Android and iOS devices</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="align-self-lg-end col-md-6 col-sm-12 d-lg-block d-none">
                                    <figure className="sv-appiamge">
                                        <img src="/images/indexv1/mobile.png" alt="images-descp"/>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- MobileApp END --> */}
                {/* <!-- Our core motivation --> */}
                <section className="sv-main-section overflow-hidden">
                    <div className="container">
                        <div className="sv-howitworkv2">
                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="sv-main-title-holder">
                                        <div className="sv-maintitle">
                                            <h5 className="sv-hyperlinkclr">Our core motivation</h5>
                                            <h2>Making things smoother everytime for everyone</h2>
                                        </div>
                                        <div className="sv-main-description">
                                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis aesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sintecti cupiditate non provident, similique sunt in culpa qui officia.</p>
                                        </div>
                                        <ul className="sv-mainlist">
                                            <li>Accusantium doloremque laudantium totam rem aperiam.</li>
                                            <li>Eicta sunt explicaboemo enim ipsam voluptatemuia</li>
                                            <li>Voluptas sit aspernatur aut odit aut fugited</li>
                                            <li>Quia consequuntur magni dolores eos qui ratione</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="sv-itworksitem">
                                        <figure>
                                            <img src="/images/indexv1/Img-07.png" alt="image"/>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Our core motivation --> */}
            </main>
            {/* <!-- MAIN END --> */}
            <Footer />
        </>
    )
}