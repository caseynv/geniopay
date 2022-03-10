import React from 'react';
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import Dashboard2 from "../Components/Dashboard2";


function Wallet(){
    return(
        <div className="wrapper">
            <Header />
            <Menu />
            <Dashboard2 />
        </div>
    )
}
export default Wallet;