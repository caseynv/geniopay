import React from 'react';
import {Icon} from '@iconify/react';
import Admin from '../Images/Admin.png';
import { Link } from 'react-router-dom';

function Header() {
    
        return (
           <div>
                <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                    {/* Left navbar links */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" data-widget="pushmenu" to="#"><i className="fas fa-bars" /></Link>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block welcome">
                            Welcome, Huss Smith
                        </li>
                    </ul>
                    
                    {/* Right navbar links */}
                    <ul className="navbar-nav ml-auto">
                        {/* Messages Dropdown Menu */}
                        <li className="nav-item">
                            {/* SEARCH FORM */}
                            <form className="form-inline ml-3 nav-form">
                                <div className="input-group input-group-sm input-nav">
                                    <div className="input-group-append">
                                        <button className="btn btn-navbar" type="submit">
                                            <i className="fas fa-search" />
                                        </button>
                                    </div>
                                    <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                                </div>
                            </form>
                        </li>
                        <li className="nav-item">
                            <Icon icon="noto:deciduous-tree" width="25" />
                            <span>0 planted</span>
                        </li>
                        <li className="nav-item">
                        <Icon icon="clarity:bell-line" width="25"/>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link" data-toggle="dropdown" to="#">
                            <img src={Admin} alt='Admin'/>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <Link to="#" className="dropdown-item">
                                {/* Message Start */}
                                <div className="media">
                                <img src="dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                                <div className="media-body">
                                    <h3 className="dropdown-item-title">
                                    Brad Diesel
                                    <span className="float-right text-sm text-danger"><i className="fas fa-star" /></span>
                                    </h3>
                                    <p className="text-sm">Call me whenever you can...</p>
                                    <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                                </div>
                                </div>
                                {/* Message End */}
                            </Link>
                            <div className="dropdown-divider" />
                            <Link to="#" className="dropdown-item">
                                {/* Message Start */}
                                <div className="media">
                                <img src="dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                                <div className="media-body">
                                    <h3 className="dropdown-item-title">
                                    John Pierce
                                    <span className="float-right text-sm text-muted"><i className="fas fa-star" /></span>
                                    </h3>
                                    <p className="text-sm">I got your message bro</p>
                                    <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                                </div>
                                </div>
                                {/* Message End */}
                            </Link>
                            <div className="dropdown-divider" />
                            <Link to="#" className="dropdown-item">
                                {/* Message Start */}
                                <div className="media">
                                <img src="dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                                <div className="media-body">
                                    <h3 className="dropdown-item-title">
                                    Nora Silvester
                                    <span className="float-right text-sm text-warning"><i className="fas fa-star" /></span>
                                    </h3>
                                    <p className="text-sm">The subject goes here</p>
                                    <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                                </div>
                                </div>
                                {/* Message End */}
                            </Link>
                            <div className="dropdown-divider" />
                            <Link to="#" className="dropdown-item dropdown-footer">See All Messages</Link>
                            </div>
                        </li>
                        {/* Notifications Dropdown Menu */}
                        <li className="nav-item dropdown">
                            <Link className="nav-link" data-toggle="dropdown" to="#">
                                <h6>Verified</h6>
                                <p>Huss Smith</p>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <span className="dropdown-item dropdown-header">15 Notifications</span>
                            <div className="dropdown-divider" />
                            <Link to="#" className="dropdown-item">
                                <img src={Admin} alt="user" />
                            </Link>
                            <div className="dropdown-divider" />
                            <Link to="#" className="dropdown-item">
                                <i className="fas fa-users mr-2" /> 8 friend requests
                                <span className="float-right text-muted text-sm">12 hours</span>
                            </Link>
                            <div className="dropdown-divider" />
                            <Link to="#" className="dropdown-item">
                                <i className="fas fa-file mr-2" /> 3 new reports
                                <span className="float-right text-muted text-sm">2 days</span>
                            </Link>
                            <div className="dropdown-divider" />
                            <Link to="#" className="dropdown-item dropdown-footer">See All Notifications</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Icon icon="ep:arrow-down-bold" />
                        </li>
                    </ul>
                </nav>
            </div>

        )
    }
export default Header;
