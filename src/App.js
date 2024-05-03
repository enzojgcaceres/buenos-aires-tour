import React from 'react';
import './app.css';
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';

const App = () => {
    return (
        <>
        <NavBar />
        <Home />
        <Main />
        <Footer />
        </>
    )
}

export default App