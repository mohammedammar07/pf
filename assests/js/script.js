burger = document.querySelector('.burger')
navList = document.querySelector('.nav-list')
navbar = document.querySelector('.navbar')



burger.addEventListener('click', ()=>{
  // navbar.classList.toggle('v-class-resp')
  navList.classList.toggle('v-class-resp')
  navbar.classList.toggle('h-nav-resp')
})


// const scroll = new LocomotiveScroll({
//   el: document.querySelector('#main'),
//   smooth: true
// });

gsap.from("#logonav, #navlink", {
  y: -200,
  duration: 1,
  stagger: 0.1
})

gsap.from(".left-div h1, #btnc", {
  y: 100,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.5
})

gsap.from("#zimg", {
  x: -400,
  opacity: 0,
  duration: 1,
  delay: 2
})

gsap.from("#skills, #iconsk", {
  y: -100,
  opacity: 0,
  duration: 1,
  delay: 1,
  stagger: true,
  scrollTrigger:{
    trigger: "#skills, #iconsk",
    scroller: "body"
  }
})
