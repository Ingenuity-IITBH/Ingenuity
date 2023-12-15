import React from 'react'
import "../styles/home.css"
import AboutUS from './AboutUs'
const Home = () => {
    return(
        <>
        <div className='Home_page'>
            <img src="./images/logo.png" alt="logo"/>
            <h1>INGENUITY</h1>
            <h3>The Official Programming Club of IIT Bhilai</h3>
        </div>
        <AboutUS />
        </>
    )
}

export default Home;