import React, { useState, useEffect, useRef } from 'react';
import '../css/App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Project from './Project';
import { Link } from 'react-router-dom';
import '../readJSON';
import ProjectPage from "./ProjectPage";
import projects from "../projects.json"
import NavButton from './NavButton';

export default function App() {
  const [hello, setHello] = useState("Hello");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [nameIs, setNameIs] = useState("My name is");
  const [revealName, setRevealName] = useState(false);
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
  
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        // Using current from Parallax's internal state
        const currentScroll = parallaxRef.current.current;
        setRevealName(currentScroll >= 0.5);
      }
    };

    const container = parallaxRef.current.container.current;
    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleHelloClick() {
    if (hello === "Hello") setHello("नमस्ते");
    else if (hello === "नमस्ते") setHello("Hola");
    else if (hello === "Hola") setHello("Hello");
  }

  function handleMyNameClick() {
    if (nameIs === "My name is") setNameIs("मेरो नाम");
    else if (nameIs === "मेरो नाम") setNameIs("Me llama");
    else if (nameIs === "Me llama") setNameIs("My name is");
  }

  return (
    <div className="app">
      <NavButton></NavButton>
      <Parallax ref={parallaxRef} pages={2.5}>
        <ParallaxLayer offset={0}>
          <div className="introduction">
            <div className={`text hello ${revealName ? 'fade-out' : 'fade-in'}`} onClick={handleHelloClick}> {hello} </div>
            <div className={`text greeting ${revealName ? 'fade-in' : 'fade-out'}`} onClick={handleMyNameClick}>{nameIs}</div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.8} factor={1.75} speed={0.5}>
          <div className="reveal-background"> 
            <ParallaxLayer horizontal={true} offset={windowWidth * 0.0003} speed={0.8}>
              <div className='reveal-info rajan'>Rajan</div>
              <div className='reveal-info sapkota'>Sapkota</div>
              <div className='reveal-info project'>Software Developer</div>
            </ParallaxLayer>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.7} speed={1.5} factor={1.5} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div className="project-display">
            <h1>Featured Projects</h1>
            <div className="project-list">
            {projects.projects.filter(p => p.featured).map(pro => 
            {return <Project imgSrc={pro.img} projectName={pro.name} projectDescription={pro.description}></Project>})}
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}