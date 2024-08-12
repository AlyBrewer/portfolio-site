// src/components/Home.js
import React from 'react';
import '../styles/App.css';
import OpenInNewTab from '../scripts/scripts.js';

const Home = () => (
    <main className="main">
         <h1>My Home!</h1>
            <h3>Hey! My name is Alyssa. Welcome!</h3>
            
            <h3>To see more projects, checkout my GitHub <OpenInNewTab href="https://github.com/AlyBrewer?tab=repositories">here</OpenInNewTab>!</h3>

    </main>

);

export default Home;