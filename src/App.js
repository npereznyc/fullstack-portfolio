// import React, { Component } from "react";
// import './App.css';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import { Route, Routes } from 'react-router';
// import Home from './pages/Home';
// import About from './pages/About';
// import Projects from './pages/Projects';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-scroll'
// import { Nav } from 'react-bootstrap';
// import './pages/Home.css'

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Navbar />
//         <Home
//           title="Home"
//           // subtitle={dummyText}
//           dark={true}
//           id="home"
//         />
        
//         <About
//           title="About"
//           // subtitle={dummyText}
//           dark={true}
//           id="about"
//         />
//         <Projects
//           title="Projects"
//           // subtitle={dummyText}
//           dark={false}
//           id="projects"
//         />
//         <Footer />
//       </div>
//     );
//   }
// }

// export default App;

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// IMPORT COMPONENTS
import Navbar from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
// IMPORT PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash
  const URL = "https://natalie-perez-portfolio.herokuapp.com/";

  return (
    <div className="HomePage">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects URL={URL} />}/>
        <Route path="/about" element={<About URL={URL} />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;