import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Play, ArrowRight, Users } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const YOUTUBE_URL = 'https://youtube.com/@chapelofjoy?si=xrOo7ih4_TvuP__E';

const upcomingEvents = [
  {
    title: 'Easter Service',
    date: 'Apr 3',
    time: 'Friday • 10:00am • Sanctuary',
    image: '/images/img_11.jpeg',
  },
  {
    title: 'Easter Celebration',
    date: 'Apr 5',
    time: 'Sunday • 9:00am • Sanctuary',
    image: '/images/img_11.jpeg',
  },
  {
    title: 'Midweek Worship',
    date: 'Apr 2',
    time: '7:00pm • Sanctuary',
    image: '/images/event_worship.jpg',
  },
];

const ourMinistries = [
  {
    title: "Men's Fellowship",
    meta: 'Growing together in faith and leadership',
    image: '/images/img_5.jpeg',
  },
  {
    title: "Women's Fellowship",
    meta: 'Sisterhood, support, and spiritual growth',
    image: '/images/img_1.jpeg',
  },
  {
    title: 'Youth Fellowship',
    meta: 'Empowering the next generation',
    image: '/images/img_10.jpeg',
  },
];

export function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);
  const ministriesRef = useRef<HTMLDivElement>(null);
  const welcomeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        '.hero-content',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.3 }
      );

      // Events section
      gsap.fromTo(
        '.events-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: eventsRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.event-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: eventsRef.current,
            start: 'top 70%',
          },
        }
      );

      // Ministries section
      gsap.fromTo(
        '.ministries-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ministriesRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.ministry-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ministriesRef.current,
            start: 'top 70%',
          },
        }
      );

      // Welcome section
      gsap.fromTo(
        '.welcome-content',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: welcomeRef.current,
            start: 'top 80%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F2EE]">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full h-screen min-h-[600px] flex items-end"
      >
        <div
          className="hero-bg absolute inset-0 z-[1]"
          style={{
            backgroundImage: 'url(/images/img_4.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 pb-16 lg:pb-24">
          <div className="hero-content max-w-3xl">
            <span className="text-eyebrow text-white/80 mb-4 block">
              In the name of Jesus Pentecostal mission
            </span>
            <h1 className="font-serif text-4xl lg:text-6xl xl:text-7xl text-white mb-6 leading-tight">
              CHAPEL OF JOY
            </h1>
            <p className="text-white/80 text-lg mb-6 italic">
              Where your job is full.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="flex items-center gap-2 text-white/80 text-sm">
                <Clock size={16} />
                Sundays at 9:00 AM
              </span>
              <span className="flex items-center gap-2 text-white/80 text-sm">
                <MapPin size={16} />
                Ibadan, Nigeria
              </span>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Play size={18} className="mr-2" />
                Watch Latest
              </a>
              <Link to="/contact" className="btn-secondary">
                Plan a visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section ref={eventsRef} className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-24">
        <div className="events-header mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-[#111111] mb-3">
            Upcoming Events
          </h2>
          <p className="text-[#6F6A63] text-lg">Join us this month.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="event-card group relative rounded-xl overflow-hidden aspect-[3/4] cursor-pointer card-hover"
            >
              <div className="image-zoom absolute inset-0">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 border border-[#C69B3C] text-[#C69B3C] text-xs font-medium rounded-full mb-3">
                  {event.date}
                </span>
                <h3 className="font-serif text-xl lg:text-2xl text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-white/70 text-sm">{event.time}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-[#C69B3C] font-medium hover:gap-3 transition-all"
          >
            View All Events
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Welcome Section */}
      <section ref={welcomeRef} className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-24 bg-white">
        <div className="welcome-content grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-eyebrow text-[#C69B3C] mb-4 block">
              About Us
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-[#111111] mb-6">
              Welcome to Chapel Of Joy
            </h2>
            <p className="text-[#6F6A63] text-lg leading-relaxed mb-6">
              Chapel Of Joy has been serving the Ibadan community for over 35 years. 
              We're a diverse group of people united by our love for Jesus and our 
              desire to make a difference in our community.
            </p>
            <p className="text-[#6F6A63] text-lg leading-relaxed mb-8">
              Our mission is to help people find their way back to God through 
              authentic worship, biblical teaching, and loving community. Whether 
              you're new to faith or have been following Jesus for years, there's 
              a place for you here.
            </p>
            <Link to="/about" className="btn-primary">
              Learn More
            </Link>
          </div>
          <div className="relative">
            <img
              src="/images/img_6.jpeg"
              alt="Worship at Chapel Of Joy"
              className="rounded-xl shadow-lg w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#C69B3C] text-white p-6 rounded-xl">
              <p className="font-serif text-3xl font-bold">35+</p>
              <p className="text-sm">Years of Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Ministries Section */}
      <section ref={ministriesRef} className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-24">
        <div className="ministries-header flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="text-eyebrow text-[#C69B3C] mb-4 block">
              Get Involved
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-[#111111]">
              Our Ministries
            </h2>
          </div>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-[#C69B3C] font-medium hover:gap-3 transition-all"
          >
            Learn More
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ourMinistries.map((ministry, index) => (
            <a
              key={index}
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ministry-card group bg-white rounded-xl overflow-hidden shadow-sm card-hover block"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={ministry.image}
                  alt={ministry.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center">
                    <Play size={24} className="text-[#C69B3C] ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Users size={16} className="text-[#C69B3C]" />
                  <p className="text-[#6F6A63] text-sm">Fellowship</p>
                </div>
                <h3 className="font-serif text-xl text-[#111111] group-hover:text-[#C69B3C] transition-colors">
                  {ministry.title}
                </h3>
                <p className="text-[#6F6A63] text-sm mt-2">{ministry.meta}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-24">
        <div className="relative bg-[#1a1a1a] rounded-2xl overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src="/images/img_7.jpeg"
              alt="Community"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 py-16 lg:py-24 px-8 lg:px-16 text-center">
            <span className="text-eyebrow text-[#C69B3C] mb-4 block">
              Get Involved
            </span>
            <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">
              Ready to take the next step?
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
              We'd love to connect with you and help you find your place in our community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Plan a Visit
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
