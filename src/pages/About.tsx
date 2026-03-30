import { useEffect, useRef } from 'react';
import { Heart, BookOpen, Users, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Heart,
    title: 'Authentic Worship',
    description: 'We believe in worship that comes from the heart, honoring God in spirit and truth.',
  },
  {
    icon: BookOpen,
    title: 'Biblical Teaching',
    description: 'The Bible is our foundation. We teach God\'s Word with clarity and relevance.',
  },
  {
    icon: Users,
    title: 'Loving Community',
    description: 'We are a family that cares for one another, supporting each other through life\'s journey.',
  },
  {
    icon: Sparkles,
    title: 'Purposeful Service',
    description: 'We serve others with joy, using our gifts to make a difference in our community.',
  },
];

const pastors = [
  {
    name: 'Late Rev. Prof. Sunday Oluwafemi',
    role: 'Founder',
    image: '/images/pastor_founder.jpeg',
    description: 'The visionary founder of Chapel Of Joy who laid the foundation for our ministry with unwavering faith and dedication.',
  },
  {
    name: 'Rev. Prof Flora Oluwafemi',
    role: 'General Overseer',
    image: '/images/pastor_overseer.jpeg',
    description: 'Leading with wisdom and grace, she continues to guide our church in fulfilling its mission.',
  },
  {
    name: 'Femi Akanmu',
    role: 'Resident Pastor',
    image: '/images/pastor_resident.jpeg',
    description: 'Passionate about discipling the next generation and helping people grow in their faith.',
  },
  {
    name: 'Rufus Adebayo',
    role: 'Assistant Pastor',
    image: '/images/pastor_assistant.jpeg',
    description: 'Dedicated to nurturing our children and youth in the ways of the Lord.',
  },
];

export function About() {
  const headerRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-header-content',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.story-content',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: storyRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.value-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: valuesRef.current,
            start: 'top 70%',
          },
        }
      );

      gsap.fromTo(
        '.team-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: teamRef.current,
            start: 'top 70%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F2EE] pt-24 lg:pt-32">
      {/* Header */}
      <div ref={headerRef} className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 pb-12">
        <div className="about-header-content max-w-4xl">
          <span className="text-eyebrow text-[#C69B3C] mb-4 block">About Us</span>
          <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-[#111111] mb-4">
            Our Story
          </h1>
          <p className="text-[#6F6A63] text-lg lg:text-xl leading-relaxed">
            Chapel Of Joy has been serving the Ibadan community for over 35 years. 
            We're a diverse group of people united by our love for Jesus and our 
            desire to make a difference.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div ref={storyRef} className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 pb-16">
        <div className="story-content grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/images/img_5.jpeg"
              alt="Church community"
              className="rounded-xl shadow-lg w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#C69B3C] text-white p-6 rounded-xl">
              <p className="font-serif text-3xl font-bold">35+</p>
              <p className="text-sm">Years of Service</p>
            </div>
          </div>
          <div>
            <h2 className="font-serif text-2xl lg:text-3xl text-[#111111] mb-4">
              A Legacy of Faith
            </h2>
            <p className="text-[#6F6A63] leading-relaxed mb-4">
              Founded by Late Rev. Prof. Sunday Oluwafemi, Chapel Of Joy began with a 
              small group of believers meeting in homes, united by a vision to create 
              a church that would be a beacon of hope in Ibadan, Nigeria.
            </p>
            <p className="text-[#6F6A63] leading-relaxed mb-4">
              In 2005, we moved into our current facility at Chapel of Joy Auditorium, 
              Opposite Lanark Hospital, Wuraola Esan Close, opposite Trumed house, new 
              Adeoyo road, ring road Ibadan, which has allowed us to expand our ministries 
              and serve more families in the Ibadan community.
            </p>
            <p className="text-[#6F6A63] leading-relaxed">
              Today, under the leadership of Rev. Prof Flora Oluwafemi, our General Overseer, 
              we continue to grow as a community that loves God, loves people, and serves 
              our city with compassion.
            </p>
          </div>
        </div>
      </div>

      {/* Community of Believers Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-eyebrow text-[#C69B3C] mb-4 block">Who We Are</span>
            <h2 className="font-serif text-3xl lg:text-4xl text-[#111111] mb-6">
              Community of Believers
            </h2>
            <p className="text-[#6F6A63] text-lg leading-relaxed mb-6">
              A Bible believing church, we preach the undiluted word of God, guide people 
              into faith and reach unreached nations.
            </p>
            <p className="text-[#C69B3C] text-lg font-medium italic">
              Chapel of joy - where our joy is full
            </p>
          </div>
          <div className="relative">
            <img
              src="/images/img_3.jpeg"
              alt="Community of Believers"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div ref={valuesRef} className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 bg-[#F4F2EE]">
        <div className="text-center mb-12">
          <span className="text-eyebrow text-[#C69B3C] mb-4 block">Our Values</span>
          <h2 className="font-serif text-3xl lg:text-4xl text-[#111111]">
            What We Believe
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="value-card bg-[#F4F2EE] rounded-xl p-6 text-center"
            >
              <div className="w-14 h-14 bg-[#C69B3C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="text-[#C69B3C]" size={28} />
              </div>
              <h3 className="font-serif text-xl text-[#111111] mb-2">
                {value.title}
              </h3>
              <p className="text-[#6F6A63] text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div ref={teamRef} className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-24">
        <div className="text-center mb-12">
          <span className="text-eyebrow text-[#C69B3C] mb-4 block">Leadership</span>
          <h2 className="font-serif text-3xl lg:text-4xl text-[#111111]">
            Meet Our Pastors
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pastors.map((pastor, index) => (
            <div
              key={index}
              className="team-card bg-white rounded-xl overflow-hidden shadow-sm card-hover"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={pastor.image}
                  alt={pastor.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg text-[#111111] mb-1">
                  {pastor.name}
                </h3>
                <p className="text-[#C69B3C] text-sm font-medium mb-3">
                  {pastor.role}
                </p>
                <p className="text-[#6F6A63] text-sm leading-relaxed">
                  {pastor.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 bg-[#1a1a1a]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <span className="text-eyebrow text-[#C69B3C] mb-4 block">Our Mission</span>
            <h2 className="font-serif text-2xl lg:text-3xl text-white mb-4">
              Helping people find their way back to God
            </h2>
            <p className="text-white/70 leading-relaxed">
              We exist to help people discover the life-changing power of Jesus Christ, 
              grow in their faith, and live out their purpose in serving others. Through 
              authentic worship, biblical teaching, and loving community, we guide people 
              on their spiritual journey.
            </p>
          </div>
          <div>
            <span className="text-eyebrow text-[#C69B3C] mb-4 block">Our Vision</span>
            <h2 className="font-serif text-2xl lg:text-3xl text-white mb-4">
              A church that transforms lives and communities
            </h2>
            <p className="text-white/70 leading-relaxed">
              We envision a church where every person knows they belong, where families 
              are strengthened, where the broken find healing, and where the love of Christ 
              extends beyond our walls to impact Ibadan and beyond.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
