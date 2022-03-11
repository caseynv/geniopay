import React from 'react';
import {Icon} from '@iconify/react';
import Image1 from '../Images/card--1.png';
import Image2 from '../Images/card--2.png';
import Image3 from '../Images/card--3.png';
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";

import Chart from 'chart.js/auto';



function Dashboard (){

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: '',
        fill: true,
        lineTension: 0.3,
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
        pointHoverBorderWidth: 5,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [4600, 3000, 3500, 3000, 2400, 3500, 3200],
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

  return (

    <div>
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6 header-title">
                <h5 className="m-0 text-dark">Wallets(5)</h5>
              </div>{/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><Link to="#">View all wallets</Link></li>
                </ol>
              </div>{/* /.col */}
            </div>{/* /.row */}
          </div>{/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            {/* Small boxes (Stat box) */}
            <div className="row cards">
              <div className="col-lg-3 col-sm-6 card-right">
                {/* small box */}
                <div className="row card-right1">
                  <div className="right--right col-6">
                    <h6>Personal account</h6>
                    <p>USD</p>
                  </div>
                  <div className="right--left col-3">
                    <img src={Image3} alt="flag" className="card--pic" />
                  </div>
                </div>
                <p className="right--p">$10,250.00</p>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-sm-6 card-mid">
                {/* small box */}
                <div className="row card-mid1">
                  <div className="mid--right col-6">
                    <h6>EUR Wallet</h6>
                    <p>EUR</p>
                  </div>
                  <div className="mid--left col-3">
                    <img src={Image2} alt="flag" className="card--pic" />
                  </div>
                </div>
                <p className="mid--p">€4000.53</p>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-sm-6 card-left">
                {/* small box */}
                <div className="row card-left1">
                  <div className="left--right col-6">
                    <h6>School fees</h6>
                    <p>GBP</p>
                  </div>
                  <div className="left--left col-3">
                    <img src={Image1} alt="flag" className="card--pic" />
                  </div>
                </div>
                <p className="left--p">£50.00</p>
              </div>
              {/* ./col */}
              
              {/* ./col */}
            </div>
            {/* /.row */}
            <section className='main--minicards'>
              <div className='cardheader--2'>
                <h6> Quick Links</h6>
                <p>
                  Your frequently used actions for easy access.
                </p>
              </div>
              <div className='mini--cards row'>
                <div className='mcard--1 col-lg-1 col-md-3'>
                  <div className='mcard--icons1'>
                    <Icon icon="clarity:wallet-solid" width="23" color="white" />
                  </div>
                  <p>Add New Wallet</p>
                </div>
                <div className='mcard--2 col-lg-1 col-md-3'>
                  <div className='mcard--icons2'>
                    <Icon icon="bi:credit-card-2-back" width="23" color="white" />
                  </div>
                  <p>Add New Card</p>
                </div>
                <div className='mcard--3 col-lg-1 col-md-3'>
                  <div className='mcard--icons3'>
                    <Icon icon="ri:money-dollar-box-line" width="23" color="white" />
                  </div>
                  <p>Balance Exchange</p>
                </div>
                <div className='mcard--4 col-lg-1 col-md-3'>
                  <div className='mcard--icons4'>
                    <Icon icon="iconoir:data-transfer-both" color="white" width="23" />
                  </div>
                  <p>Transfer to Wallet</p>
                </div>
                <div className='mcard--5 col-lg-1 col-md-3'>
                  <div className='mcard--icons5'>
                    <Icon icon="simple-icons:redbubble" color="white" />
                  </div>
                  <p>Generate Voucher</p>
                </div>
                <div className='mcard--6 col-lg-1 col-md-3'>
                  <div className='mcard--icons6'>
                    <Icon icon="fa-solid:money-bill" width="23" color="white" />
                  </div>
                  <p>Mobile Money</p>
                </div>
                <div className='mcard--7 col-lg-1 col-md-3'>
                  <div className='mcard--icons7'>
                    <Icon icon="ri:links-fill" width="23" color="white" />
                  </div>
                  <p>Payment Link</p>
                </div>
              </div>
            </section>
            <section>
              <div className='graph-header'>
                <div className='gheader--left'>
                  <p className='gheader--2'>
                    Activity
                  </p>
                  <div className='gheader--11'>
                    <span><Link to='#'> Month <Icon icon="ep:arrow-down" /></Link> 
                    </span>
                  </div>
                </div>
                <Link to='#' className='gheader--right '>
                  View Transaction History
                </Link>

              </div>
            </section>
            <section>
              <div className='graph-label--btn'>
                <div className='graph--btn1'>
                  <div className='icon'>
                    <Icon icon="bi:graph-up-arrow" />
                  </div>
                  <div className='right-icon'>
                    <h6>Total transactions</h6>
                    <p>$88,600.00</p>
                  </div>
                </div>
                <div className='graph--btn2'>
                  <div className='icon'>
                    <Icon icon="fluent:arrow-down-left-48-regular" color="green" />
                  </div>
                  <div className='right-icon'>
                    <h6>Pay-In</h6>
                    <p>$4,600.00</p>
                  </div>
                </div>
                <div className='graph--btn3'>
                  <div className='icon'>
                    <Icon icon="carbon:arrow-up-right" color="red" />
                  </div>
                  <div className='right-icon'>
                    <h6>Pay-Out</h6>
                    <p>$72,600.00</p>
                  </div>
                </div>
              </div>
            </section>
            {/* Main row */}
            <section>
              <div className="chart">
                <Line data={lineData} />
              </div>
            </section>
            {/* /.row (main row) */}
          </div>{/* /.container-fluid */}


        </section>
        {/* /.content */}
      </div>

    </div>

  )
    
}

export default Dashboard;
