import React from 'react'
import { BoxItem } from '../components/BoxItem';
import portrail from '../img/portrait.jpg';

const data = [
  { id: 'job-1', title: '123 Webshop', subTitle: 'Full Stack Developer', description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt magni nam nisi quae vitae? Quod molestiae ipsa autem natus eum vel ducimus nulla harum voluptatem eligendi! Unde, reiciendis? Praesentium, laborum." },
  { id: 'job-2', title: 'Designers ABC', subTitle: 'Front End Developer', description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt magni nam nisi quae vitae? Quod molestiae ipsa autem natus eum vel ducimus nulla harum voluptatem eligendi! Unde, reiciendis? Praesentium, laborum." },
  { id: 'job-3', title: 'Webworks', subTitle: 'Graphic Designer', description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt magni nam nisi quae vitae? Quod molestiae ipsa autem natus eum vel ducimus nulla harum voluptatem eligendi! Unde, reiciendis? Praesentium, laborum." }
];

const About = () => (
  <main id="about">
    <h1 className="lg-heading"> About <span className="text-secondary">Me</span> </h1>
    <h2 className="sm-heading"> Let me tell you a few things... </h2>
    <div className="about-info">
      <img src={portrail} alt="John Doe" className="bio-image" />
      <div className="bio">
        <h3 className="text-secondary">BIO</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt magni nam nisi quae vitae? Quod molestiae ipsa
          autem natus eum vel ducimus nulla harum voluptatem eligendi! Unde, reiciendis? Praesentium, laborum.</p>
      </div>

      {data.map(item => <BoxItem data={item} key={item.id} />)}

    </div>
  </main>
)

export default About