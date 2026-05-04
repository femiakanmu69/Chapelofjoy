import { useEffect, useRef } from 'react';
import { Clock, MapPin, Calendar, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import siteData from './content/site.json';

gsap.registerPlugin(ScrollTrigger);

const eventsPage = siteData.events;
const meta = siteData.meta;

export function Events() {
  const headerRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);
  const timesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.events-header-content',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 80%' },
        }
      );

      gsap.fromTo(
        '.event-item',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: eventsRef.current, start: 'top 70%' },
        }
      );

      gsap.fromTo(
        '.service-times-content',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: timesRef.current, start: 'top 80%' },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F2EE] pt-24 lg:pt-32">
      {/* Header */}
      <div ref={headerRef} className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 pb-12">
        <div className="events-header-content max-w-4xl">
          <span className="text-eyebrow text-[#C69B3C] mb-4 block">{eventsPage.header_eyebrow}</span>
          <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-[#111111] mb-4">
            {eventsPage.header_title}
          </h1>
          <p className="text-[#6F6A63] text-lg lg:text-xl leading-relaxed">
            {eventsPage.header_description}
          </p>
        </div>
      </div>

      {/* Events Grid */}
      <div ref={eventsRef} className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventsPage.events.map((event, index) => (
            <div
              key={index}
              className="event-item bg-white rounded-xl overflow-hidden shadow-sm card-hover"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#C69B3C] text-white text-xs font-medium rounded-full">
                    {event.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-[#111111] mb-2">
                  {event.title}
                </h3>
                <p className="text-[#6F6A63] text-sm mb-4">{event.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-[#6F6A63]">
                    <Calendar size={16} className="text-[#C69B3C]" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#6F6A63]">
                    <Clock size={16} className="text-[#C69B3C]" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#6F6A63]">
                    <MapPin size={16} className="text-[#C69B3C]" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Times */}
      <div ref={timesRef} className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 bg-white">
        <div className="service-times-content grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-eyebrow text-[#C69B3C] mb-4 block">{eventsPage.service_times_eyebrow}</span>
            <h2 className="font-serif text-3xl lg:text-4xl text-[#111111] mb-6">
              {eventsPage.service_times_title}
            </h2>
            <p className="text-[#6F6A63] leading-relaxed mb-8">
              {eventsPage.service_times_description}
            </p>
            <div className="space-y-4">
              {eventsPage.service_times.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-[#F4F2EE] rounded-lg"
                >
                  <span className="font-medium text-[#111111]">{service.day}</span>
                  <span className="text-[#6F6A63]">{service.time}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src={eventsPage.service_times_image}
              alt="Worship service"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </div>

      {/* Location CTA */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="relative bg-[#1a1a1a] rounded-2xl overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src={eventsPage.location_map_image}
              alt="Location map"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 py-16 px-8 lg:px-16 text-center">
            <span className="text-eyebrow text-[#C69B3C] mb-4 block">{eventsPage.location_eyebrow}</span>
            <h2 className="font-serif text-3xl lg:text-4xl text-white mb-4">
              {eventsPage.location_title}
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-6">
              {eventsPage.location_address}
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${meta.maps_query}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              <MapPin size={18} className="mr-2" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
