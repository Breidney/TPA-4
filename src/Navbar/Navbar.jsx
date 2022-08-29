import React from 'react';
import About from '../komponen/About';
import Blog from '../komponen/Blog';
import Home from '../komponen/Home';
import Skillpage from '../komponen/Skillpage';
import { Link, Route, Routes } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">MySite</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <Link to='/'>Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/about'>About</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/skillpage'>Skillpage</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/blog'>Blog</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skillpage" element={<Skillpage />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </div>
    );
}

export default Navbar;