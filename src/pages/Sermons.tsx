import { useEffect, useRef } from 'react';
import { Play, Clock, Calendar, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import siteData from './content/site.json';

gsap.registerPlugin(ScrollTrigger);

const sermonsPage = siteData.sermons;
const YOUTUBE_URL = siteData.meta.youtube_url;

export function Sermons() {
  const headerRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const recentRef = useRef<HTMLDivElement>(null);
  const seriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.sermons-header-content',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 80%' },
        }
      );

      gsap.fromTo(
        '.featured-content',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: featuredRef.current, start: 'top 70%' },
        }
      );

      gsap.fromTo(
        '.sermon-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: recentRef.current, start: 'top 70%' },
        }
      );

      gsap.fromTo(
        '.series-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: seriesRef.current, start: 'top 70%' },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F2EE] pt-24 lg:pt-32">
      {/* Header */}
      <div ref={headerRef} className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 pb-12">
        <div className="sermons-header-content max-w-4xl">
          <span className="text-eyebrow text-[#C69B3C] mb-4 block">{sermonsPage.header_eyebrow}</span>
          <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-[#111111] mb-4">
            {sermonsPage.header_title}
          </h1>
          <p className="text-[#6F6A63] text-lg lg:text-xl leading-relaxed">
            {sermonsPage.header_description}
          </p>
        </div>
      </div>

      {/* Featured Sermon */}
      <div ref={featuredRef} className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 pb-16">
        <div className="featured-content bg-white rounded-2xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative aspect-video lg:aspect-auto">
              <img
                src={sermonsPage.featured_image}
                alt={sermonsPage.featured_title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors group"
                >
                  <Play size={32} className="text-[#C69B3C] ml-1 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <span className="text-eyebrow text-[#C69B3C] mb-4 block">Latest Sermon</span>
              <h2 className="font-serif text-3xl lg:text-4xl text-[#111111] mb-4">
                {sermonsPage.featured_title}
              </h2>
              <p className="text-[#6F6A63] leading-relaxed mb-6">
                {sermonsPage.featured_description}
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="text-sm text-[#6F6A63]">{sermonsPage.featured_pastor}</span>
                <span className="w-1 h-1 bg-[#C69B3C] rounded-full" />
                <span className="flex items-center gap-1 text-sm text-[#6F6A63]">
                  <Calendar size={14} />
                  {sermonsPage.featured_date}
                </span>
                <span className="w-1 h-1 bg-[#C69B3C] rounded-full" />
                <span className="flex items-center gap-1 text-sm text-[#6F6A63]">
                  <Clock size={14} />
                  {sermonsPage.featured_duration}
                </span>
              </div>
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-fit"
              >
                <Play size={18} className="mr-2" />
                Watch Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Sermons */}
      <div ref={recentRef} className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 pb-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <span className="text-eyebrow text-[#C69B3C] mb-2 block">{sermonsPage.recent_eyebrow}</span>
            <h2 className="font-serif text-2xl lg:text-3xl text-[#111111]">
              {sermonsPage.recent_title}
            </h2>
          </div>
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#C69B3C] font-medium hover:gap-3 transition-all"
          >
            View All
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sermonsPage.recent_sermons.map((sermon, index) => (
            <a
              key={index}
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="sermon-card bg-white rounded-xl overflow-hidden shadow-sm card-hover cursor-pointer block"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={sermon.image}
                  alt={sermon.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center">
                    <Play size={24} className="text-[#C69B3C] ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg text-[#111111] mb-2 hover:text-[#C69B3C] transition-colors">
                  {sermon.title}
                </h3>
                <p className="text-[#6F6A63] text-sm mb-3">{sermon.pastor}</p>
                <div className="flex items-center gap-3 text-xs text-[#6F6A63]">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {sermon.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {sermon.duration}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Sermon Series */}
      <div ref={seriesRef} className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 bg-white">
        <div className="text-center mb-12">
          <span className="text-eyebrow text-[#C69B3C] mb-4 block">{sermonsPage.series_eyebrow}</span>
          <h2 className="font-serif text-3xl lg:text-4xl text-[#111111]">
            {sermonsPage.series_title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sermonsPage.sermon_series.map((series, index) => (
            <a
              key={index}
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="series-card group relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer block"
            >
              <img
                src={series.image}
                alt={series.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white/70 text-sm mb-1">{series.count} Messages</p>
                <h3 className="font-serif text-xl text-white group-hover:text-[#C69B3C] transition-colors">
                  {series.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Subscribe CTA */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="relative bg-[#1a1a1a] rounded-2xl overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src={sermonsPage.subscribe_image}
              alt="Worship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 py-16 px-8 lg:px-16 text-center">
            <span className="text-eyebrow text-[#C69B3C] mb-4 block">{sermonsPage.subscribe_eyebrow}</span>
            <h2 className="font-serif text-3xl lg:text-4xl text-white mb-4">
              {sermonsPage.subscribe_title}
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">
              {sermonsPage.subscribe_description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Play size={18} className="mr-2" />
                Subscribe on YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
