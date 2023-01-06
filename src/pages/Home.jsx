import "../styles/Home.css"
import React from 'react';
import { Typewriter, Cursor } from 'react-simple-typewriter';

// IMPORT COMPONENTS
import About from './About';
import Projects from './Projects';
// import Contact from '../components/Contact';

// IMPORT PAGES
// import About from "./About";
// import Projects from "./Projects";

function Home(props) {


  return (
    <div className="HomePage">

      <div className="HomePageContainer" id="home">
        <h1 className="Heading">Hello World,<br/>
          My Name is Natalie Perez.
          </h1>
        <h2 className="SubHeading">
        <span className="noun">I am a {""}
        <Typewriter
          words={['Software Engineer.', 'Web Developer.', 'Yoga Enthusiast.', 'Lifelong Learner.']}
          loop={false}
          cursor
          cursorStyle=''
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
        <Cursor/>
        </span>
        </h2>
      </div>

      <div className="AboutContainer" id="about">
        <About />
      </div>

      <div className="ProjectsContainer" id="projects">
        <Projects />
      </div>
  
      {/* <div className="ContactContainer" id="contact">
        <Contact />
      </div> */}
    </div>
  )
}

export default Home;




// function Home(props) {
//   return (
//     <div className="Home">
//       <div className="intro">
//         <h2 className="iAm">I AM NATALIE <span className="Perez"><span className="toggled">PEREZ.</span></span></h2>
//         <h1 className="title"></h1>
//       </div>
//     </div>
//   );
//   }
  
//   export default Home;