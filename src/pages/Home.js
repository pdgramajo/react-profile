import React from 'react'
import 'font-awesome/css/font-awesome.min.css';

const Home = () => (
  <main id="home">
    <h1 className="lg-heading">
      Pablo
      <span className="text-secondary"> Gramajo </span>
    </h1>
    <h2 className="sm-heading">
      Full Stack Developer
    </h2>
    <div className="icons">
      <a href="https://twitter.com/pdgramajo" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-twitter fa-2x"></i>
      </a>
      <a href="https://www.facebook.com/pablo.gramajo.10" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-facebook fa-2x"></i>
      </a>
      <a href="https://ar.linkedin.com/in/pablo-gramajo-b99655109" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-linkedin fa-2x"></i>
      </a>
      <a href="https://github.com/pdgramajo" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-github fa-2x"></i>
      </a>
    </div>
  </main>
)

export default Home
