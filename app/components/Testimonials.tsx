import React, { useState, useEffect, useRef } from 'react'
import '../styles/testimonials.css'

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  initials: string
  rating: number
  company?: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'Exceptional service! The team was professional, courteous, and completed everything on schedule. Our home has never looked so spotless — I couldn\'t recommend them more highly.',
    initials: 'SJ',
    rating: 5,
    company: 'Manhattan, NY',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Business Owner',
    content: 'We switched to First Choice for our office cleaning and haven\'t looked back. Reliable and thorough every single time. Our workspace morale has genuinely improved.',
    initials: 'MC',
    rating: 5,
    company: 'Brooklyn, NY',
  },
  {
    id: 3,
    name: 'Emma Williams',
    role: 'Property Manager',
    content: 'Managing multiple properties is tough, but First Choice makes it simple. Their attention to detail is unmatched and my tenants have never been happier.',
    initials: 'EW',
    rating: 5,
    company: 'Queens, NY',
  },
  {
    id: 4,
    name: 'David Rodriguez',
    role: 'Restaurant Owner',
    content: 'Professional deep cleaning for our restaurant. They understand commercial hygiene standards and deliver consistently. Inspectors have praised our cleanliness since we hired them.',
    initials: 'DR',
    rating: 5,
    company: 'Manhattan, NY',
  },
  {
    id: 5,
    name: 'Jessica Lee',
    role: 'Busy Professional',
    content: 'Finally found a cleaning service I can trust! They transformed my apartment and I couldn\'t be happier. Booking is easy and the team is always on time.',
    initials: 'JL',
    rating: 5,
    company: 'Long Island, NY',
  },
]

const AVATAR_COLORS = ['#667eea', '#48bb78', '#ed8936', '#e53e3e', '#9f7aea']

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imageVisible, setImageVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const currentTestimonial = TESTIMONIALS[currentIndex]
  const relatedTestimonials = TESTIMONIALS.filter(t => t.id !== currentTestimonial.id).slice(0, 2)

  // Intersection observer — slide image in from right on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setImageVisible(true) },
      { threshold: 0.25 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const startAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % TESTIMONIALS.length)
    }, 6000)
  }

  useEffect(() => {
    startAutoPlay()
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current) }
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    startAutoPlay()
  }

  const handlePrev = () => goToSlide((currentIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const handleNext = () => goToSlide((currentIndex + 1) % TESTIMONIALS.length)

  return (
    <section className="testimonials-section" ref={sectionRef}>
      <div className="testimonials-container">
        {/* Header */}
        <div className="testimonials-header">
          <span className="section-label ">Testimonials</span>
          <h2>What Our Clients Say</h2>
          <p>Join thousands of satisfied customers who trust First Choice Domestic</p>
        </div>

        {/* Main two-column layout */}
        <div className="testimonials-body">

          {/* LEFT — Slider + Stats */}
          <div className="testimonials-left">

            {/* Carousel */}
            <div className="carousel-wrapper">
              <div className="carousel-slide fade-in" key={currentIndex}>
                <div className="quote-mark">"</div>
                <p className="testimonial-content">{currentTestimonial.content}</p>

                <div className="testimonial-meta">
                  <div
                    className="testimonial-avatar"
                    style={{ background: AVATAR_COLORS[(currentIndex) % AVATAR_COLORS.length] }}
                  >
                    {currentTestimonial.initials}
                  </div>
                  <div className="testimonial-info">
                    <h4>{currentTestimonial.name}</h4>
                    <p className="testimonial-role">{currentTestimonial.role}</p>
                    {currentTestimonial.company && (
                      <p className="testimonial-location">📍 {currentTestimonial.company}</p>
                    )}
                  </div>
                  <div className="testimonial-stars">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Controls row */}
              <div className="carousel-controls">
                <div className="carousel-dots">
                  {TESTIMONIALS.map((_, index) => (
                    <button
                      key={index}
                      className={`dot ${index === currentIndex ? 'active' : ''}`}
                      onClick={() => goToSlide(index)}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="carousel-arrows">
                  <button className="arrow-btn" onClick={handlePrev} aria-label="Previous">&#8592;</button>
                  <button className="arrow-btn" onClick={handleNext} aria-label="Next">&#8594;</button>
                </div>
              </div>
            </div>

            {/* Stats Box */}
            <div className="testimonials-stats">
              <div className="stat">
                <h4>500+</h4>
                <p>Happy Clients</p>
              </div>
              <div className="stat">
                <h4>5.0★</h4>
                <p>Average Rating</p>
              </div>
              <div className="stat">
                <h4>100%</h4>
                <p>Satisfaction</p>
              </div>
              <div className="stat">
                <h4>8+</h4>
                <p>Years Experience</p>
              </div>
            </div>
          </div>

          {/* RIGHT — Image + side picks stacked on top */}
          <div className={`testimonials-right ${imageVisible ? 'slide-in-right' : ''}`}>
            {/* Related / side-pick cards sit above the photo */}
            <div className="side-picks">
              {relatedTestimonials.map((t, i) => (
                <div
                  key={t.id}
                  className="side-card"
                  onClick={() => goToSlide(TESTIMONIALS.findIndex(x => x.id === t.id))}
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => e.key === 'Enter' && goToSlide(TESTIMONIALS.findIndex(x => x.id === t.id))}
                >
                  <div
                    className="side-avatar"
                    style={{ background: AVATAR_COLORS[(TESTIMONIALS.findIndex(x => x.id === t.id)) % AVATAR_COLORS.length] }}
                  >
                    {t.initials}
                  </div>
                  <div className="side-body">
                    <div className="side-name-row">
                      <strong>{t.name}</strong>
                      <span className="side-stars">{'★'.repeat(t.rating)}</span>
                    </div>
                    <p className="side-excerpt">"{t.content.substring(0, 72)}…"</p>
                    <span className="side-role">{t.role} · {t.company}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* The hero image */}
            <div className="testimonial-image-frame">
              <img
                src="/testimonial.avif"
                alt="Happy First Choice Domestic customer"
                className="testimonial-hero-img"
              />
        
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Testimonials
