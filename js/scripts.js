const movementReductionValue = 50;
const body = document.querySelector('body');
const banner = document.querySelector('#banner');

body.addEventListener('mousemove', (e) => {
  let backgroundPositionX = (e.clientX - (window.innerWidth / 2)) / movementReductionValue;
  let backgroundPositionY = (e.clientY - (window.innerHeight / 2)) / movementReductionValue;
  banner.style.transitionDuration = "0.1s";
  banner.style.backgroundPositionX = backgroundPositionX + "px";
  banner.style.backgroundPositionY = backgroundPositionY + "px";
});

body.addEventListener('mouseout', (e) => {
  banner.style.transitionDuration = "1s";
  banner.style.backgroundPositionX = "0px";
  banner.style.backgroundPositionY = "0px";
});