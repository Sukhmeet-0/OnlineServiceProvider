import { Link } from 'react-router-dom';

export default function PublicNavbar() {
    return (
        <>
        
        {/* <!-- HEADER START --> */}
	<header className="navbar navbar-expand-lg sv-navbar sv-navbar-two">
		<div className="container-fluid">
            <a className="navbar-brand" href="index.html">
                <strong><img src="/images/logo.png" alt="image description"/></strong>
            </a>
            <div className="sv-navbar-right">
                <form className="sv-themeform sv-headerform">
                    <fieldset>
                        <div className="sv-themeform__wrap">
                            <div className="sv-inputhasicon ">
                                <i className="icon-search"></i>
                                <input type="text" placeholder="What are you looking for?" className="form-control sv-input-field" required="required" />
                            </div>
                            <div className="sv-select">
                                <select id="select" data-placeholderinput="Search keyword" data-placeholder="Select category" className="form-control sv-input-field">
                                    <option label="Select category"></option>
                                    <option value="Marketing management">Marketing management</option>
                                    <option value="Web development">Web development</option>
                                    <option value="Content writing">Content writing</option>
                                    <option value="Web optimization">Web optimization</option>
                                    <option value="User counciling">User counciling</option>
                                    <option value="Staff management">Staff management</option>
                                </select>
                            </div>
                            <a href="providerlist.html" className="sv-btnblack-sm">Search now</a>
                        </div>
                        <div className="sv-formcloseicon"><a href="javascript:void(0);"><i className="icon-x"></i></a></div>
                    </fieldset>
                </form>
                <div className="sv-formicon"><a href="javascript:void(0);" className="sv-pb-lg"><i className="icon-search"></i></a></div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="fa fa-bars"></span>
                </button>
                <nav className="collapse navbar-collapse sv-navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav sv-navbar-nav">
                        <li>
                            <a href="db-index.html">Dashboard </a>
                        </li>
                        <li className="menu-item-has-children">
                            <a href="javascript:void(0);">My works</a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="db-mybooking.html"> My booking </a>
                                </li>
                                <li>
                                    <a href="db-mybookings-empty.html"> My booking empty</a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children">
                            <a href="javascript:void(0);">Pages</a>
                            <ul className="sub-menu">
                                <li className="menu-item-has-children">
                                    <a href="javascript:void(0)">Home pages</a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li>
                                            <a href="indexv2.html">Home v2 <em className="sv-menutag">without login</em></a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="javascript:void(0)">Provider listings</a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="providerlist.html">Provider listings v1</a>
                                        </li>
                                        <li>
                                            <a href="providerlist-v2.html">Provider listings v2</a>
                                        </li>
                                        <li>
                                            <a href="providerlist-v3.html">Provider listings v3</a>
                                        </li>
                                        <li>
                                            <a href="providerlist-v4.html">Provider listings v4</a>
                                        </li>
                                        <li>
                                            <a href="providerlist-empty.html">Empty provider listings</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="javascript:void(0)">Service providers</a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="provider-details.html">Provider details</a>
                                        </li>
                                        <li>
                                            <a href="empty-provider.html">Empty provider</a>
                                        </li>
                                        <li>
                                            <a href="edit-provider.html">Edit provider</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="javascript:void(0);">Blogs</a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="blog.html">Blog</a>
                                        </li>
                                        <li>
                                            <a href="blog-detail.html">Blog detail</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="javascript:void(0);">Other pages</a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="how-it-work.html">How it work</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact</a>
                                        </li>
                                        <li>
                                            <a href="signin.html">Sign in</a>
                                        </li>
                                        <li>
                                            <a href="signup.html">Sign up</a>
                                        </li>
                                        <li>
                                            <a href="lost-password.html">Lost password</a>
                                        </li>
                                        <li>
                                            <a href="reset-password.html">Reset password</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div className="nav-item sv-afterlogin">
                    <a className="nav-link" href="db-inbox.html"><span className="icon-message-square"><i className="sv-messagenoti">9+</i></span></a>
                    <a className="nav-link" href="db-notifications.html"><span className="icon-bell"><i className="sv-messagenoti">3</i></span></a>
                    <div className="sv-nav-link-dropdown">
                        <a className="nav-link" href="javascript:void(0);">
                            <img src="/images/freelancerdetail/img-27.jpg" alt="image-description"/>
                        </a>
                        <ul className="sv-dbnavlist sv-dbnavlist-nav">
                            <li className="active"> <a href="db-index.html"> <i className="icon-home"></i> Dashboard</a>  </li>
                            <li> <a href="db-mybooking.html"> <i className="icon-folder"></i> My bookings</a><em className="sv-linknotification">9+</em> </li>
                            <li> <a href="db-inbox.html"> <i className="icon-message-square"></i> Inbox</a> <em className="sv-linknotification">9+</em> </li>
                            <li> <a href="edit-provider.html"> <i className="icon-user"></i> Manage profile</a><i className="icon-external-link"></i> </li>
                           <li className="sv-sidebar-dropdown"> <a href="javascript:void(0);"> <i className="icon-credit-card"></i> Transaction & invoices</a>
                                <div className="sv-sidebar-submenu">
                                    <ul className="sv-nestedmenu">
                                        <li> <a href="db-transaction-invoices.html"> My earnings</a></li>
                                        <li> <a href="db-invoices.html">Invoices</a></li>
                                        <li> <a href="db-invoice-detail.html"> Invoices details</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li> <a href="db-pricing-plan.html"> <i className="icon-package"></i> Price plans</a>
                            </li>
                            <li className="sv-sidebar-dropdown"> <a href="javascript:void(0);"> <i className="icon-settings"></i> Settings</a>
                                <div className="sv-sidebar-submenu">
                                    <ul className="sv-nestedmenu">
                                        <li> <a href="db-identity-verification.html"> Identity verification</a></li>
                                        <li className="sv-deactiveaccount"> <a href="db-account-deactive.html"> Deactivate account</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li> <a href="db-saved-items.html"> <i className="icon-heart"></i> Saved items</a> </li>
                            <li> <a href="db-notifications.html"> <i className="icon-volume-2"></i> Notifications</a> <em className="sv-linknotification">1</em> </li>
                            <li> <a href="db-help_support.html"> <i className="icon-alert-circle"></i> Help & support</a> </li>
                            <li className="sv-poweroff"> <a href="index.html"> <i className="icon-power"></i> Logout</a> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
	</header>
	{/* <!-- HEADER END --> */}
        </>
    );
}
