import { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    content: 'Chapel of Joy Auditorium, Opposite Lanark Hospital, Wuraola Esan Close, opposite Trumed house, new Adeoyo road, ring road Ibadan, Nigeria',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+234 806 897 1709',
    href: 'tel:+2348068971709',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'consultation@chapelofjoychurch.com',
    href: 'mailto:consultation@chapelofjoychurch.com',
  },
  {
    icon: Clock,
    title: 'Consulting Hours',
    content: 'Monday to Saturday 9am to 7pm',
  },
];

const serviceTimes = [
  { day: 'Sunday Service', time: '9:00 AM' },
  { day: 'Midweek Service', time: 'Tuesday 5:00 PM' },
  { day: 'Midweek Fasting', time: 'Every Wednesday' },
  { day: 'Quarterly Vigil', time: 'Last Friday of every quarter' },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const headerRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-header-content',
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
        '.info-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: infoRef.current,
            start: 'top 70%',
          },
        }
      );

      gsap.fromTo(
        '.form-content',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 70%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const encode = (data: any) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      "form-name": "contact",
      ...formData,
    }),
  })
    .then(() => {
      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    })
    .catch(() => toast.error("Failed to send message"));
};

  return (
    <div className="min-h-screen bg-[#F4F2EE] pt-24 lg:pt-32">
      {/* Header */}
      <div ref={headerRef} className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 pb-12">
        <div className="contact-header-content max-w-4xl">
          <span className="text-eyebrow text-[#C69B3C] mb-4 block">Get in Touch</span>
          <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-[#111111] mb-4">
            Contact Us
          </h1>
          <p className="text-[#6F6A63] text-lg lg:text-xl leading-relaxed">
            We'd love to hear from you. Whether you have a question, need prayer, 
            or want to learn more about our church, reach out to us.
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div ref={infoRef} className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="info-card bg-white rounded-xl p-6 shadow-sm"
            >
              <div className="w-10 h-10 bg-[#C69B3C]/10 rounded-lg flex items-center justify-center mb-4">
                <info.icon className="text-[#C69B3C]" size={20} />
              </div>
              <h3 className="font-medium text-[#111111] mb-2">{info.title}</h3>
              {info.href ? (
                <a
                  href={info.href}
                  className="text-[#6F6A63] text-sm hover:text-[#C69B3C] transition-colors"
                >
                  {info.content}
                </a>
              ) : (
                <p className="text-[#6F6A63] text-sm">{info.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form & Map */}
      <div ref={formRef} className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="form-content bg-white rounded-xl p-6 lg:p-8 shadow-sm">
            <h2 className="font-serif text-2xl text-[#111111] mb-6">
              Send a Message
            </h2>
            <form
  name="contact"
  method="POST"
  data-netlify="true"
  onSubmit={handleSubmit}
  className="space-y-4"
>
  <input type="hidden" name="form-name" value="contact" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#111111] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#F4F2EE] border border-transparent rounded-lg text-[#111111] placeholder:text-[#6F6A63]/50 focus:outline-none focus:border-[#C69B3C] transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#111111] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#F4F2EE] border border-transparent rounded-lg text-[#111111] placeholder:text-[#6F6A63]/50 focus:outline-none focus:border-[#C69B3C] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#111111] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#F4F2EE] border border-transparent rounded-lg text-[#111111] placeholder:text-[#6F6A63]/50 focus:outline-none focus:border-[#C69B3C] transition-colors"
                    placeholder="+234 700 000 0000"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#111111] mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#F4F2EE] border border-transparent rounded-lg text-[#111111] focus:outline-none focus:border-[#C69B3C] transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="prayer">Prayer Request</option>
                    <option value="visit">Plan a Visit</option>
                    <option value="serve">Volunteer/Serve</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#111111] mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#F4F2EE] border border-transparent rounded-lg text-[#111111] placeholder:text-[#6F6A63]/50 focus:outline-none focus:border-[#C69B3C] transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button type="submit" className="btn-primary w-full sm:w-auto">
                <Send size={18} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Map & Service Times */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <img
                src="/images/visit_map.jpg"
                alt="Location Map"
                className="w-full h-64 lg:h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="font-serif text-xl text-[#111111] mb-2">
                  Visit Us
                </h3>
                <p className="text-[#6F6A63] text-sm mb-4">
                  Chapel of Joy Auditorium, Opposite Lanark Hospital, Wuraola Esan Close, 
                  opposite Trumed house, new Adeoyo road, ring road Ibadan, Nigeria
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Chapel+of+Joy+Auditorium+Opposite+Lanark+Hospital+Wuraola+Esan+Close+new+Adeoyo+road+ring+road+Ibadan+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#C69B3C] font-medium text-sm hover:gap-3 transition-all"
                >
                  <MapPin size={16} />
                  Get Directions
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-serif text-xl text-[#111111] mb-4">
                Service Times
              </h3>
              <div className="space-y-3">
                {serviceTimes.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 border-b border-[#F4F2EE] last:border-0"
                  >
                    <span className="text-[#111111]">{service.day}</span>
                    <span className="text-[#6F6A63]">{service.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prayer Request CTA */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="relative bg-[#1a1a1a] rounded-2xl overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src="/images/img_5.jpeg"
              alt="Worship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 py-16 px-8 lg:px-16 text-center">
            <span className="text-eyebrow text-[#C69B3C] mb-4 block">Prayer</span>
            <h2 className="font-serif text-3xl lg:text-4xl text-white mb-4">
              Need Prayer?
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">
              We believe in the power of prayer. Our prayer team is ready to stand 
              with you in faith. Submit your prayer request and we'll pray for you.
            </p>
            <a
              href="mailto:consultation@chapelofjoychurch.com?subject=Prayer%20Request"
              className="btn-primary"
            >
              Submit Prayer Request
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
