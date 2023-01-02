import React, { Component } from "react";
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-scroll'
import { Nav } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <About
          title="About"
          // subtitle={dummyText}
          dark={true}
          id="about"
        />
        <Projects
          title="Projects"
          // subtitle={dummyText}
          dark={false}
          id="projects"
        />
        <Footer />
      </div>
    );
  }
}

export default App;
