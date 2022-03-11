import React from 'react';
import Logo from '../Images/Logo.png';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

function Menu(){
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <Link to="index3.html" className="brand-link">
              <img src={Logo} alt="Geniopay Logo" className="logo-image" />
              
            </Link>
            {/* Sidebar */}
            <div className="sidebar">
              {/* Sidebar user panel (optional) */}
              
              {/* Sidebar Menu */}
              <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                  {/* Add icons to the links using the .nav-icon class
                  with font-awesome or any other icon font library */}
                  <li className='user-panel'>
                    <div className="info-top">
                      <div className='up-top row'>
                        <div className='up-icon col-2'>
                          <Icon icon="clarity:wallet-solid" color="teal"  width="25" height="25" />
                        </div>
                        <div className='up-top--1 col-6'>
                          <h6>Wallet Balance</h6>
                          <p>$15,001.00</p>
                        </div>
                        <div className='up-icon-left col-2'>
                          <Icon icon="el:eye-open" color="white"  width="20" height="20" />
                        </div>
                      </div>
                      <hr className='sidenav--rule'></hr>
                      <div className='up-mid row'>
                        <div className='up-mid--1 col-2'>
                          <Icon icon="emojione:star"  width="25" height="25" />
                        </div>
                        <div className='up-mid--2 col-6'>
                          <h6>Awarded Points</h6>
                          <p>35</p>
                        </div>
                      </div>
                      <hr className='sidenav--rule'></hr>
                      <div className='up-down row'>
                        <button className='sidenav--btn1 col-5'>Pay-In</button>
                        <button className='sidenav--btn2 col-5'>Pay-Out</button>
                        
                      </div>
                    </div>
                  </li>
                  
                  <li className="nav-item item-menu">
                    <Link to="#" className="nav-link nav-item-active">
                      <Icon icon="ph:squares-four-fill" width='25' />
                      <p>
                        Dashboard
                      </p>
                    </Link>
                  </li>  

                  <li className="nav-item item-menu">
                    <Link to="/Wallet" className="nav-link">
                      <Icon icon="clarity:wallet-line" width='25'/>
                      <p>
                        Wallet
                      </p>
                    </Link>
                  </li>

                  <li className="nav-item item-menu">
                    <Link to="#" className="nav-link">
                      <Icon icon="bi:credit-card" width='25'/>
                      <p>Cards</p>
                    </Link>
                  </li>

                  <li className="nav-item item-menu">
                    <Link to="#" className="nav-link">
                      <Icon icon="ri:money-dollar-box-line" width='25' />
                      <p>
                        FX Credit
                      </p>
                    </Link>
                    
                  </li>

                  <li className="nav-item item-menu">
                    <Link to="#" className="nav-link">
                      <Icon icon="fluent:people-28-regular" width="25" />
                      <p>
                        Beneficiaries
                      </p>
                    </Link>
                  </li>

                  <li className="nav-item has-treeview item-menu">
                    <Link to="#" className="nav-link">
                    <Icon icon="cil:tag" width="25" />
                      <p>
                        Perks
                        </p>
                    </Link>
                  </li>
                  
                  <li className='user-panel-down'>
                    <div className="info-down">
                      <div className='down-top row'>
                        <div className='down-icon col-3'>
                          <Icon icon="noto:megaphone" width="40" />
                        </div>
                        <div className='down-top--1 col-8'>
                          <h6>Refer and earn</h6>
                          <p>Use the below link to invite friends</p>
                        </div>
                      </div>
                      <div className='down-down'>
                        <button className='sidenav-down--btn1'>Invite Friends</button>
                        
                      </div>
                    </div>
                  </li>
                  
                </ul>
              </nav>
              {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
      </aside>
    </div>

  )
  
}

export default Menu;
