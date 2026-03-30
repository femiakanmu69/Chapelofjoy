import { useEffect, useRef } from 'react';
import { Heart, Landmark, CreditCard, Copy, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const bankDetails = {
  bank: 'First Bank',
  accountNumber: '2001017447',
  accountName: 'Chapel of Joy',
};

export function Give() {
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const waysRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.give-header-content',
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
        '.give-content',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 70%',
          },
        }
      );

      gsap.fromTo(
        '.way-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: waysRef.current,
            start: 'top 70%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-[#F4F2EE] pt-24 lg:pt-32">
      {/* Header */}
      <div ref={headerRef} className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 pb-12">
        <div className="give-header-content max-w-4xl text-center mx-auto">
          <span className="text-eyebrow text-[#C69B3C] mb-4 block">Support Our Ministry</span>
          <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-[#111111] mb-4">
            Give
          </h1>
          <p className="text-[#6F6A63] text-lg lg:text-xl leading-relaxed">
            Your generous giving helps us spread the Gospel, support our community, 
            and reach unreached nations. Every gift makes a difference.
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <div ref={contentRef} className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 pb-16">
        <div className="give-content relative rounded-2xl overflow-hidden">
          <img
            src="/images/serve_giving.jpg"
            alt="Giving to God's work"
            className="w-full h-[400px] lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 text-center">
            <Heart size={48} className="text-[#C69B3C] mx-auto mb-4" />
            <h2 className="font-serif text-3xl lg:text-4xl text-white mb-4">
              Give Cheerfully
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              "Each of you should give what you have decided in your heart to give, 
              not reluctantly or under compulsion, for God loves a cheerful giver." 
              <br /><span className="text-[#C69B3C]">— 2 Corinthians 9:7</span>
            </p>
          </div>
        </div>
      </div>

      {/* Ways to Give */}
      <div ref={waysRef} className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 bg-white">
        <div className="text-center mb-12">
          <span className="text-eyebrow text-[#C69B3C] mb-4 block">How to Give</span>
          <h2 className="font-serif text-3xl lg:text-4xl text-[#111111]">
            Ways to Support
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Bank Transfer */}
          <div className="way-card bg-[#F4F2EE] rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-[#C69B3C]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Landmark className="text-[#C69B3C]" size={32} />
            </div>
            <h3 className="font-serif text-xl text-[#111111] mb-4">
              Bank Transfer
            </h3>
            <div className="space-y-3 text-left bg-white p-4 rounded-lg">
              <div>
                <p className="text-[#6F6A63] text-xs uppercase tracking-wide">Bank</p>
                <p className="text-[#111111] font-medium">{bankDetails.bank}</p>
              </div>
              <div>
                <p className="text-[#6F6A63] text-xs uppercase tracking-wide">Account Number</p>
                <div className="flex items-center justify-between">
                  <p className="text-[#111111] font-medium">{bankDetails.accountNumber}</p>
                  <button
                    onClick={() => copyToClipboard(bankDetails.accountNumber)}
                    className="text-[#C69B3C] hover:text-[#B58A2B] transition-colors"
                  >
                    <Copy size={16} />
                  </button>
                </div>
              </div>
              <div>
                <p className="text-[#6F6A63] text-xs uppercase tracking-wide">Account Name</p>
                <p className="text-[#111111] font-medium">{bankDetails.accountName}</p>
              </div>
            </div>
          </div>

          {/* Online Giving */}
          <div className="way-card bg-[#F4F2EE] rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-[#C69B3C]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CreditCard className="text-[#C69B3C]" size={32} />
            </div>
            <h3 className="font-serif text-xl text-[#111111] mb-4">
              Online Giving
            </h3>
            <p className="text-[#6F6A63] mb-6">
              Secure online giving coming soon. For now, please use bank transfer 
              or give in person during our services.
            </p>
            <div className="flex items-center justify-center gap-2 text-[#C69B3C]">
              <CheckCircle size={18} />
              <span className="text-sm">Secure & Convenient</span>
            </div>
          </div>

          {/* In Person */}
          <div className="way-card bg-[#F4F2EE] rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-[#C69B3C]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="text-[#C69B3C]" size={32} />
            </div>
            <h3 className="font-serif text-xl text-[#111111] mb-4">
              In Person
            </h3>
            <p className="text-[#6F6A63] mb-4">
              You can give in person during any of our services. 
              Offering baskets are available at the sanctuary entrance.
            </p>
            <p className="text-[#C69B3C] text-sm font-medium">
              Sundays at 9:00 AM
            </p>
          </div>
        </div>
      </div>

      {/* Why Give Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <span className="text-eyebrow text-[#C69B3C] mb-4 block">Impact</span>
            <h2 className="font-serif text-3xl lg:text-4xl text-[#111111] mb-6">
              Your Giving Makes a Difference
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#C69B3C] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-medium text-[#111111] mb-1">Spreading the Gospel</h4>
                  <p className="text-[#6F6A63] text-sm">Supporting evangelism and outreach programs</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#C69B3C] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-medium text-[#111111] mb-1">Community Support</h4>
                  <p className="text-[#6F6A63] text-sm">Helping those in need within our community</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#C69B3C] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-medium text-[#111111] mb-1">Church Operations</h4>
                  <p className="text-[#6F6A63] text-sm">Maintaining our facilities and supporting staff</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#C69B3C] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-medium text-[#111111] mb-1">Mission Work</h4>
                  <p className="text-[#6F6A63] text-sm">Reaching unreached nations with the Gospel</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/img_6.jpeg"
              alt="Church community"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </div>

      {/* Thank You */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 bg-[#1a1a1a]">
        <div className="text-center max-w-2xl mx-auto">
          <Heart size={48} className="text-[#C69B3C] mx-auto mb-6" />
          <h2 className="font-serif text-3xl lg:text-4xl text-white mb-4">
            Thank You for Your Support
          </h2>
          <p className="text-white/70">
            Your generosity enables us to continue our mission of spreading God's love 
            and making a difference in our community and beyond. May God bless you abundantly!
          </p>
        </div>
      </div>
    </div>
  );
}
