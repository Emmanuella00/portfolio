import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initAnimations() {

  // ── Hero Load Animation ──
  const heroTl = gsap.timeline({ delay: 0.2 })

  heroTl
    .from('.eyebrow', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power3.out'
    })
    .from('.hero-title', {
      opacity: 0,
      y: 60,
      duration: 1.2,
      ease: 'power4.out'
    }, '-=0.4')
    .from('.hero-sub', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.6')
    .from('.hero-cta', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.5')
    .from('.hero-geo', {
      opacity: 0,
      scale: 0.8,
      duration: 1.5,
      ease: 'power3.out'
    }, '-=1.2')

  // ── About Section ──
  gsap.from('.about-statement', {
    scrollTrigger: {
      trigger: '#about',
      start: 'top 75%',
    },
    opacity: 0,
    y: 60,
    duration: 1.2,
    ease: 'power4.out'
  })

  gsap.from('.about-body', {
    scrollTrigger: {
      trigger: '#about',
      start: 'top 65%',
    },
    opacity: 0,
    y: 40,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
  })

  gsap.from('.about-quote', {
    scrollTrigger: {
      trigger: '.about-quote',
      start: 'top 80%',
    },
    opacity: 0,
    x: -30,
    duration: 1,
    ease: 'power3.out'
  })

  // ── Work Section Header ──
  gsap.from('.work-header', {
    scrollTrigger: {
      trigger: '#work',
      start: 'top 75%',
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power3.out'
  })

  // ── Project Cards Stagger ──
  gsap.from('.project-card', {
    scrollTrigger: {
      trigger: '.projects-grid',
      start: 'top 75%',
    },
    opacity: 0,
    y: 60,
    duration: 1,
    stagger: 0.15,
    ease: 'power4.out'
  })

  // ── Skills ──
  gsap.from('.skills-col', {
    scrollTrigger: {
      trigger: '#skills',
      start: 'top 70%',
    },
    opacity: 0,
    y: 40,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
  })

  gsap.from('.skills-list li', {
    scrollTrigger: {
      trigger: '#skills',
      start: 'top 65%',
    },
    opacity: 0,
    x: -20,
    duration: 0.6,
    stagger: 0.08,
    ease: 'power3.out'
  })

  // ── Contact ──
  gsap.from('.contact-title', {
    scrollTrigger: {
      trigger: '#contact',
      start: 'top 70%',
    },
    opacity: 0,
    y: 80,
    duration: 1.4,
    ease: 'power4.out'
  })

  gsap.from('.contact-sub, .contact-links', {
    scrollTrigger: {
      trigger: '#contact',
      start: 'top 60%',
    },
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
  })

  // ── Hero Parallax Circle ──
  gsap.to('.hero-geo', {
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.5,
    },
    y: -120,
    ease: 'none'
  })

  // ── Dividers ──
  gsap.from('.divider', {
    scrollTrigger: {
      trigger: '.divider',
      start: 'top 85%',
    },
    scaleX: 0,
    transformOrigin: 'left center',
    duration: 1.2,
    stagger: 0.1,
    ease: 'power4.out'
  })
  
  // ── Custom Cursor ──
  const cursor = document.createElement('div')
  const cursorRing = document.createElement('div')

  cursor.id = 'cursor-dot'
  cursorRing.id = 'cursor-ring'

  document.body.appendChild(cursor)
  document.body.appendChild(cursorRing)

  let ringX = 0, ringY = 0
  let dotX = 0, dotY = 0
  let rafId

  document.addEventListener('mousemove', e => {
    dotX = e.clientX
    dotY = e.clientY
    cursor.style.left = dotX + 'px'
    cursor.style.top = dotY + 'px'
  })

  function animateRing() {
    ringX += (dotX - ringX) * 0.1
    ringY += (dotY - ringY) * 0.1
    cursorRing.style.left = ringX + 'px'
    cursorRing.style.top = ringY + 'px'
    rafId = requestAnimationFrame(animateRing)
  }

  animateRing()

  // Expand ring on hoverable elements
  const hoverTargets = 'a, button, .project-card, .skills-list li, .nav-links a'

  document.querySelectorAll(hoverTargets).forEach(el => {
    el.addEventListener('mouseenter', () => {
     cursorRing.classList.add('cursor-ring--hover')
     cursor.classList.add('cursor-dot--hover')
    })
    el.addEventListener('mouseleave', () => {
     cursorRing.classList.remove('cursor-ring--hover')
     cursor.classList.remove('cursor-dot--hover')
    })
  })

  // Hide on leave, show on enter
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0'
    cursorRing.style.opacity = '0'
  })

  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1'
    cursorRing.style.opacity = '1'
  })
}