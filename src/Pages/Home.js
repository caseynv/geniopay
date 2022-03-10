import React from "react";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import Dashboard from "../Components/Dashboard";

function Home(){
    return(
        <div className="wrapper">
            <Header/>
            <Menu/>
            <Dashboard/>
        </div>
    )
}

export default Home;