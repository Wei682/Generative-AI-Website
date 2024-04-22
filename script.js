AOS.init();

// This animation is referenced from https://tobiasahlin.com/moving-letters/
var textWrapper = document.querySelector('.topic .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.topic',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 1000
  })
  .add({
    targets: '.topic .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 100 * (i+1)
  })
  .add({
    targets: '.topic',
    opacity: 0,
    duration: 1200,
    easing: "easeOutExpo",
    delay: 1500
  });

