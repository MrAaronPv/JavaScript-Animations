const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const javaCap = document.querySelector('.javaCap');
const imgjavaScript = document.querySelector('.imgjavaScript');

const bck = new TimelineMax();

bck.fromTo(
    javaCap,
    1,
    { height: "0%" }, { height: "80%", ease: Power2.easeInOut }
).fromTo(
    javaCap,
    1.2,
    { width : '100%' }, { width: '80%', ease: Power2.easeInOut }
).fromTo(
    slider,
    1.2,
    { x:'-100%' }, { x:'0%', ease: Power2.easeInOut }
).fromTo(
    logo,
    0.5,
    { opacity: 0, x: 30 }, { opacity: 1, x:0 }, ".=0.5"
).fromTo(
    imgjavaScript,
    0.5,
    { opacity: 0, x:30 }, { opacity: 1, x:0, clearProps:"all" }, "-=0.5")