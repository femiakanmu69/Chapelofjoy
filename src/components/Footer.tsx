import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Youtube, Facebook, Instagram, Twitter } from 'lucide-react';

const YOUTUBE_URL = 'https://youtube.com/@chapelofjoy?si=xrOo7ih4_TvuP__E';
const FACEBOOK_URL = 'https://www.facebook.com/share/1C17RQ3B35/';
const INSTAGRAM_URL = 'https://www.instagram.com/chapel.ofjoy?igsh=a2E0azM3Y29leml0';
const TWITTER_URL = 'https://x.com/chapelofjoy';
const TIKTOK_URL = 'https://www.tiktok.com/@chapelofjoy1?_r=1&_d=ejamgk78839j37&sec_uid=MS4wLjABAAAAx7Ak0mTi8yEYnhQKveVZddvQOSY1ep5VpPo6K4zX03A4dnShVIWUNkNDXRT1tRqv&share_author_id=7621240835627156481&sharer_language=en&source=h5_m&u_code=f2hg32253al35d&timestamp=1774510711&user_id=7621240835627156481&sec_user_id=MS4wLjABAAAAx7Ak0mTi8yEYnhQKveVZddvQOSY1ep5VpPo6K4zX03A4dnShVIWUNkNDXRT1tRqv&item_author_type=1&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7611064980997719815&share_link_id=d6e99a14-20d2-42a0-bd67-d97036764a92&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb7360&social_share_type=5&enable_checksum=1';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Events', path: '/events' },
  { name: 'Sermons', path: '/sermons' },
  { name: 'Contact', path: '/contact' },
  { name: 'Give', path: '/give' },
];

const serviceTimes = [
  { day: 'Sunday Service', time: '9:00 AM' },
  { day: 'Midweek Service', time: 'Tuesday 5:00 PM' },
  { day: 'Midweek Fasting', time: 'Every Wednesday' },
  { day: 'Quarterly Vigil', time: 'Last Friday of every quarter' },
];

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img
                src="/images/new_logo.png"
                alt="Chapel Of Joy"
                className="h-10 w-auto"
              />
              <span className="font-serif text-xl font-semibold">
                Chapel Of Joy
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Where your joy is full.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C69B3C] transition-colors"
              >
                <Youtube size={18} />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C69B3C] transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C69B3C] transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href={TWITTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C69B3C] transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C69B3C] transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/70 text-sm hover:text-[#C69B3C] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="font-serif text-lg mb-6">Service Times</h3>
            <ul className="space-y-3">
              {serviceTimes.map((service) => (
                <li key={service.day} className="text-white/70 text-sm">
                  <span className="text-white">{service.day}:</span>
                  <br />
                  {service.time}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#C69B3C] mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  Chapel of Joy Auditorium, Opposite Lanark Hospital, Wuraola Esan Close, 
                  opposite Trumed house, new Adeoyo road, ring road Ibadan, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#C69B3C] flex-shrink-0" />
                <a
                  href="tel:+2348068971709"
                  className="text-white/70 text-sm hover:text-[#C69B3C] transition-colors"
                >
                  +234 806 897 1709
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#C69B3C] flex-shrink-0" />
                <a
                  href="mailto:consultation@chapelofjoychurch.com"
                  className="text-white/70 text-sm hover:text-[#C69B3C] transition-colors"
                >
                  consultation@chapelofjoychurch.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-[#C69B3C] flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  Consulting Hours: Monday to Saturday 9am to 7pm
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Chapel Of Joy. All rights reserved.
            </p>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 text-sm hover:text-[#C69B3C] transition-colors"
            >
              Watch us on YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
