import { useState, useEffect } from "react";
import { Link } from 'react-scroll'
import "../styles/About.css"



function About(props) {
  // create state to hold about data
  const [about, setAbout] = useState(null);

  // create function to make api call
  const getAboutData = async () => {

    // make api call and get response - refactor this to fetch from heroku backend
    const response = await fetch("./about.json");

    // turn response into javascript object
    const data = await response.json();

    // set the about state to the data
    setAbout(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => getAboutData(), []);

  // define a function that will return the JSX needed once we get the data
  // const loaded = () => (
  //   <div className={"section" + (props.dark ? "section-dark" : "")}>
  //     <div className="section-content" id={props.id}>
  //       {/* <h2>{about.name}</h2> */}
  //       <img className="headshot" src={about.headshot} />
  //       <h3>{about.email}</h3>
  //       <p>{about.bio}</p>
  //     </div>
  //   </div>
  // );

  const loaded = () => (
    <div className="AboutContainer">
      <div>
        <div className="headshot"><img className="headshot" src={about.headshot} /></div>
        
        <p className="AboutBio">{about.bio}</p>
      </div>
      
      <div className="SkillsSection">
        <div className="Languages">
            <h4>Languages learned:</h4>
            <p>HTML, CSS, JavaScript, Ruby, SQL</p>
        </div>
            <div className="Libraries">
            <h4>Libraries/Frameworks learned:</h4>
            <p>Bootstrap, Sass, jQuery, React.js, Redux, Node.js, Express.js, Mongoose, Rails, Handlebars.js</p>
            </div> 
            <div className="Tools">
            <h4>Tools/Technologies learned:</h4>
            <p>Git/Github, Atom, RESTful APIs, MongoDB, PostgreSQL, Heroku, AWS</p>
            </div>
        </div>
    </div>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;