import React from 'react';
import {Icon} from '@iconify/react';
import Image1 from '../Images/card--1.png';
import Image2 from '../Images/card--2.png';
import Image3 from '../Images/card--3.png';
import { Line } from "react-chartjs-2";

function Dashboard2(){

    const lineData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: '',
            fill: true,
            lineTension: 0.1,
            backgroundColor: '#edfce9',
            borderColor: '#017189',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#017189',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#017189',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [4200, 3000, 3500, 3000, 2400, 3500, 3200],
            showLine: true
          }
        ],
        options: {
          scales: {
            yAxes: {
              gridLines: {
                display: false
             } }
            ,
            xAxes: {
              gridLines: {
                display: false
              }
            }
          },
          legend: {
            display: false
          }
        }
      };

    return(
        <>
            <div className="content-wrapper">
                <div className="wallet-header">
                    <p>Your Wallet(s)</p>
                    <div className="left-header">
                        <button className="left-header--btn">
                        + Create New Wallet
                        </button>
                    </div>
                </div>
                <div className="wallet row container-fluid">
                    <div className="wallet-left col-lg-6 col-md-6">
                        <div className="wallet-left-header">
                            <div className="">
                                <form className="form-inline wh-left">
                                    <div className="input-group input-group-sm input-nav">
                                        <div className="input-group-append">
                                        <button className="btn btn-navbar" type="submit">
                                            <i className="fas fa-search" />
                                        </button>
                                        </div>
                                        <input className="form-control new form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                                    </div>
                                </form>
                            </div>
                            <div className="wh-right">
                                <p>All <Icon icon="ep:arrow-down" color="teal" /></p>
                            </div>
                        </div>
                        <div className="wh-header">
                            <div className="wh-header- putt">
                                <p>Active (3)</p>
                            </div>
                            <div className="wh-header-">
                                <p>Inactive (2)</p>
                            </div>
                            <div className="wh-header-">
                                <p>Closed (0)</p>
                            </div>
                        </div>
                        <div className="wh-body">
                            <div className="wh-body1 highlight">
                                <div className="wh-body-left">
                                    <div className="wh-body-left-">
                                        <img src={Image2} className="wh-pic" alt="image" />
                                        <div className='img-cap'>
                                            <h6>EUR Wallet</h6>
                                            <p>EUR</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="wh-body-right">
                                    <div className='img-cap2'>
                                        <h6>€2,000,000.50</h6>
                                        <p>Default</p>
                                    </div>
                                </div>
                            </div>
                            <div className="wh-body1">
                                <div className="wh-body-left">
                                    <div className="wh-body-left-">
                                        <img src={Image3} className="wh-pic" alt="image" />
                                        <div className='img-cap'>
                                        <h6>Personal account</h6>
                                        <p>USD</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="wh-body-right">
                                    <div className='img-cap2'>
                                        <h6>$10,250.00</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="wh-body1">
                                <div className="wh-body-left">
                                    <div className="wh-body-left-">
                                        <img src={Image1} className="wh-pic" alt="image" />
                                        <div className='img-cap'>
                                            <h6>School savings</h6>
                                            <p>GBP</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="wh-body-right">
                                <div className='img-cap2'>
                                    <h6>£500</h6>
                                    <p>Default</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wallet-right col-lg-6 col-md-10">
                        <div className='wh-right-header'>
                            <div className='wh-right-left'>
                                <div className='wh-right-active'>
                                    <Icon icon="ci:dot-01-xs" width="25" color="#22C55E"/>
                                    Active
                                </div>
                                <h6>EUR Wallet</h6>
                                <p>EUR</p>
                            </div>
                            <div className='wh-right-right'>
                                €2,000,000.50
                            </div>
                        </div>
                        <div className="wallet-ledger">
                            <div className="wallet-ledger1">
                                <div className="wl w1">
                                    <p>Ledger Balance</p>
                                    <p>Blocked Balance</p>
                                </div>
                                <div className="wl">
                                    <p>€2,000,000.50</p>
                                    <p>€0.00</p>
                                </div>
                            </div>
                            <div className="wallet-ledger2">
                                <div className="wl1 w1">
                                    <p>Total Incoming</p>
                                    <p>Total Outgoing</p>
                                </div>
                                <div className="wl1">
                                    <p>€2,000,000.50</p>
                                    <p>€5,000,000.50</p>
                                </div>
                            </div>
                        </div>
                        <div className="wallet-btn">
                            <button className="w-btn">
                            <div><Icon icon="carbon:send-alt" /></div>
                                <p>Payment</p>
                            </button>
                            <button className="w-btn">
                            <div><Icon icon="bi:arrow-down-left" /></div>
                                <p>Pay In</p>
                            </button>
                            <button className="w-btn">
                                <div>
                                    <Icon icon="la:exchange-alt" />
                                </div>
                                <p>Exchange</p>
                            </button>
                        </div>
                        <div className="wh--h">
                            <p>
                                More Options
                                <Icon icon="ep:arrow-down" color="teal" />
                            </p>
                        </div>
                        <div className='wallet--chart--header'>
                            <p className="putt">Activity</p>
                            <p>Transactions</p>
                            <p>Invoices</p>
                        </div>
                        <div className='wallet--chart-filter'>
                            <p>
                                Month
                                <Icon icon="ep:arrow-down" color="teal" />
                            </p>
                        </div>
                        <div className='wgraph-label--btn'>
                            <div className='wgraph--btn1'>
                                <div className='icon wgraph--icon'>
                                    <Icon icon="bi:graph-up-arrow" />
                                </div>
                                <div className='wright-icon'>
                                    <h6>Total transactions</h6>
                                    <p>$88,600.00</p>
                                </div>
                            </div>
                            <div className='wgraph--btn2'>
                                <div className='icon wgraph--icon'>
                                    <Icon icon="fluent:arrow-down-left-48-regular" color="green" />
                                </div>
                                <div className='wright-icon'>
                                    <h6>Pay-In</h6>
                                    <p>$4,600.00</p>
                                </div>
                            </div>
                            <div className='wgraph--btn3'>
                                <div className='icon wgraph--icon'>
                                    <Icon icon="carbon:arrow-up-right" color="red" />
                                </div>
                                <div className='wright-icon'>
                                    <h6>Pay-Out</h6>
                                    <p>$72,600.00</p>
                                </div>
                            </div>
                        </div>
                        <section>
                            <div className="chart">
                                <Line data={lineData} />
                            </div>
                        </section>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Dashboard2;