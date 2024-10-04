import './style.css'
import { parallaxEffect } from './parallax.js';

document.querySelector('#app').innerHTML = `
  <div id="parallax"><h1>Parallax</h1></div>

  <div id="content">
  Scroll Up and Down this page to see the parallax scrolling effect.
  This div is just here to enable scrolling.
  </div>
`


parallaxEffect();

// Add event listener for scroll
window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY; // Get the scroll position
  const parallaxText = document.querySelector('h1');

  // Move the text based on the scroll position - control the speed of the text relative to the scroll
  const scrollSpeedFactor = 0.4; // Adjust this value for more or less effect
  parallaxText.style.transform = `translate(-50%, calc(-50% + ${scrollPosition * scrollSpeedFactor}px))`;
});