import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <>
            {/* <!-- FOOTER START --> */}
            <footer className="sv-mainfooter">
                <div className="container">
                    <div className="row sv-footer">
                        <div className="col-lg-6">
                            <div className="sv-footeritem">
                                <figure>
                                    <img src="/images/logo.png" alt="image description" />
                                </figure>
                                <div className="sv-main-description">
                                    <p>Alame eoluptatem accusantium doloremque laudantium totam rem aperiame eaque ipsa quae ab illo inventore veritatis et quasi architecto beata vitae dicta sunt explicabo ipsam voluptatem quia voluptas..</p>
                                </div>
                                <ul className="sv-socialink">
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank"> <i className="fab fa-facebook-f"></i> /serventostudio</a>
                                    </li>
                                    <li>
                                        <a href="https://www.twitter.com/" target="_blank"> <i className="fab fa-twitter"></i> /serventomanhatan001</a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank"> <i className="fab fa-linkedin-in"></i> /gethired@serventostudio</a>
                                    </li>
                                </ul>
                                <ul className="sv-storeicons">
                                    <li>
                                        <a href="https://play.google.com/store/apps" target="_blank"><img src="/images/applogo/img-01.svg" alt="image" /></a>
                                    </li>
                                    <li>
                                        <a href="https://www.apple.com/app-store/" target="_blank"><img src="/images/applogo/img-02.svg" alt="image" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="sv-footerlinks">
                                <div className="sv-foootertittle">
                                    <h5>Trending categories</h5>
                                </div>
                                <ul className="sv-footerlink">
                                    <li><a href="javascript:void(0);">Website design</a></li>
                                    <li><a href="javascript:void(0);">App design</a></li>
                                    <li><a href="javascript:void(0);">Landing page design</a></li>
                                    <li><a href="javascript:void(0);">Resume design</a></li>
                                    <li><a href="javascript:void(0);">Pattern design</a></li>
                                    <li><a href="javascript:void(0);">Book layout design & typesetting</a></li>
                                    <li><a href="javascript:void(0);">Packaging & label design</a></li>
                                    <li><a href="javascript:void(0);">Social media design</a></li>
                                </ul>
                                <a href="javascript:void(0);" className="sv-explorebtn">Explore all</a>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="sv-footerlinks">
                                <div className="sv-foootertittle">
                                    <h5>Useful links</h5>
                                </div>
                                <ul className="sv-footerlink">
                                    <li><a href="javascript:void(0);">About us</a></li>
                                    <li><a href="javascript:void(0);">How it works</a></li>
                                    <li><a href="javascript:void(0);">Careers</a></li>
                                    <li><a href="javascript:void(0);">What’s useful for me</a></li>
                                    <li><a href="javascript:void(0);">Working policy</a></li>
                                    <li><a href="javascript:void(0);">Terms and conditions</a></li>
                                    <li><a href="javascript:void(0);">Copyright policy</a></li>
                                </ul>
                                <a href="javascript:void(0);" className="sv-explorebtn">Explore all</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sv-footerbtm">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="sv-footerbtmtitle">
                                    <h6>Copyright © All rights reserved. 2022</h6>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <ul className="sv-footetbtmlinks">
                                    <li><a href="javascript:void(0);">Terms of service </a></li>
                                    <li><a href="javascript:void(0);">Privacy policy </a></li>
                                    <li><a href="javascript:void(0);">Content privacy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!-- FOOTER END --> */}
            {/* <!-- Custom Tooltip Render Here --> */}
            <div className="sv-tippysm">
                <span id="sv-verifed" className="d-none">
                    <span className="sv-tippytooltip">
                        <span>Verified</span>
                    </span>
                </span>
            </div>
            <div className="sv-tippysm">
                <span id="sv-trending" className="d-none">
                    <span className="sv-tippytooltip">
                        <span>Trending</span>
                    </span>
                </span>
            </div>
            <div id="sv-industrypro" className="sv-tippytooltip d-none">
                <div className="sv-selecttagtippy">
                    <ul className="sv-posttag sv-posttagv2">
                        <li>
                            <a href="providerlist.html">PHP</a>
                        </li>
                        <li>
                            <a href="providerlist.html">WordPress</a>
                        </li>
                        <li>
                            <a href="providerlist.html">Amazon</a>
                        </li>
                        <li>
                            <a href="providerlist.html">Web responsive</a>
                        </li>
                        <li>
                            <a href="providerlist.html">Customization</a>
                        </li>
                        <li>
                            <a href="providerlist.html">Logo reveal</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}