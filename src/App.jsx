import Navbar from './assets/Components/navbar';
import Cursor from './assets/Components/Cursor';
import Home from './assets/Components/Home';
import About from './assets/Components/About';
import Skill from './assets/Components/Skill';
import Education from './assets/Components/Education';
import { useEffect } from 'react';
import { injectSpeedInsights } from '@vercel/speed-insights';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from './assets/Components/Footer';
import Projects from './assets/Components/Projects';
import Contact from './assets/Components/Contact';
const App = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  gsap.registerPlugin();
  injectSpeedInsights();
  useGSAP(() => {
    let homeLine = gsap.timeline();
    homeLine.from('#navbar', {
      y: -50,
      opacity: 0,
      duration: 1
    })
    homeLine.from('.logo svg', {
      x: -50,
      opacity: 0
    }, "nav")
    homeLine.from('.nav-link', {
      x: 50,
      opacity: 0,
      stagger: .1
    }, "nav")
    homeLine.from('#home', {
      y: -50,
      opacity: 0,
      delay: -.5
    })
    homeLine.from('.home-left', {
      x: -50,
      opacity: 0
    }, "home")
    homeLine.from('.imageBx img', {
      opacity: 0,
      x: 50
    }, "home")
    homeLine.from('.home-left #downloadBtn', {
      scale: 0,
      duration: .25
    })
    homeLine.from('.media-link', {
      x: 50,
      opacity: 0,
      stagger: .2
    })
    const aboutLine = gsap.timeline({
      scrollTrigger: {
        trigger: '#about',
        start: 'top 60%',
        end: 'top 20%'
      }
    })
    aboutLine.from('#about .fadedLabel', {
      y: 100,
      opacity: 0,
      duration: 1
    })
    aboutLine.from('.picDiv', {
      x: -100,
      opacity: 0,
      duration: 1,
    }, "about")
    aboutLine.from('.detailCont p', {
      x: 100,
      opacity: 0,
      duration: .6,
      stagger: 0.2
    }, "about")
    aboutLine.from('.detailCont #downloadBtn', {
      scale: 0,
      duration: .25
    })
    const skillLine = gsap.timeline({
      scrollTrigger: {
        trigger: '#skill',
        scroller: 'body',
        start: 'top 60%',
        end: 'top 20%'
      }
    })
    skillLine.from('#skill .fadedLabel', {
      y: 150,
      opacity: 0,
      duration: .4
    }, 'scroll')

    gsap.to('.slide', {
      scrollTrigger: {
        trigger: '.h-scroll',
        start: 'top 0%',
        end: 'bottom 50%',
        scrub: .5
      },
      x: '-100%'
    })
    skillLine.from('.imgBx img', {
      scale: 0,
      stagger: .25,
      duration: 0.5
    })
    const resume = gsap.timeline({
      scrollTrigger: {
        trigger: '#education',
        // markers:true,
        start: 'top 50%',
        end: " top 0%",
      }
    })
    resume.from('#education .fadedLabel', {
      y: 100,
      opacity: 0,
      duration: .4,
    }, 'summary')
    resume.from('.cardContainer', {
      y: 100,
      opacity: 0,
      duration: 1
    }, 'summary')
    gsap.from('.education .card', {
      x: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: '.summary',
        scroller: 'body',
        // markers:true,
        start: 'top 50%'
      },
      stagger: .5,
      duration: .7
    }, "cards")
    gsap.from('.courses .card', {
      x: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: '.summary',
        scroller: 'body',
        // markers:true,
        start: 'top 50%'
      },
      stagger: .5,
      duration: .7
    }, "cards")
  }, []);
  useEffect(() => {
    const aboutSection = document.querySelector('.aboutContent');
    const cursor = document.querySelector('.cursor');
    window.addEventListener('mousemove', (dets) => {
      gsap.to(cursor, {
        x: dets.x + 20,
        y: dets.y + 20,
        duration: .5,
        zIndex: 9,
        ease: 'CustomEase.create("custom", "M0,0 C0,0 0.083,0.007 0.083,0.007 0.378,0.007 0.835,0.749 1,1 ")'
      })
    })
    aboutSection.addEventListener('mouseenter', () => {
      cursor.textContent = "About"
      gsap.to(cursor, {
        scale: 6,
        border: 1,
        duration: .5
      })
    })
    aboutSection.addEventListener('mouseleave', () => {
      cursor.textContent = ""
      gsap.to(cursor, {
        scale: 1,
        border: 10,
        duration: .5
      })
    })

    window.addEventListener('wheel', (dets) => {
      if (dets.deltaY > 0) {
        gsap.to('.marquee', {
          transform: 'translateX(-300vw)',
          duration: 5,
          repeat: -1,
          ease: "none"
        })
      }
      else {
        gsap.to('.marquee', {
          transform: 'translateX(0vw)',
          duration: 5,
          repeat: -1,
          ease: "none"
        })
      }
    })
  }, [])

  return (
    <>
      <Cursor />
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Education />
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App