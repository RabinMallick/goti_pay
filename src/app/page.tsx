'use client';
import Image from 'next/image';
import React, { FC } from 'react';
import { motion } from 'framer-motion';
import EarthMain from '@/components/Earth/EarthMain';
import { fadeDown, fadeUp, rotateIn, staggerContainer, zoomIn } from '@/utils/VariantsFade';
import Navbar from '@/components/include/Navbar';
import Footer from '@/components/include/Footer';
import Slider from 'react-slick';
import TrustedBrands from '@/components/common/TrustedBrands';
import BenifitsCard from '@/components/common/card/BenifitsCard';
import WhyGotiPayCard from '@/components/common/card/WhyGotiPayCard';

interface Feature {
  title: string;
  desc: string;
  icon: string;
}

const features: Feature[] = [
  { title: 'Instant Setup', desc: 'Online onboarding. Live in minutes.', icon: '⚡' },
  { title: 'Multiple Payment Modes', desc: 'Credit/Debit cards, eWallets & PayNow covered.', icon: '💳' },
  { title: 'Effortless Integration', desc: 'API-first platform. Zero manual work. SDKs, plugins, full docs.', icon: '🔌' },
  { title: 'Competitive Pricing', desc: 'Save up to 30% on your processing fees.', icon: '💰' },
  { title: 'Local Support', desc: 'Singapore-based support team, ready to assist.', icon: '🤝' },
  { title: 'Fully Secure', desc: 'PCI DSS, ISO 27001 certified. Compliance handled for you.', icon: '🛡️' },
];


const benefits = [
  { title: "Quick Activation", description: "GOTIPAY enables rapid activation for transaction acceptance. With a minimum required documentation during its onboarding process is entirely online.", icon: "⚡" },
  { title: "Simple Integration System", description: "The Simple Integration System is readily accessible for all popular platforms and languages to immediately integrate with GOTIPAY.", icon: "🔗" },
  { title: "30+ Payment Plans & 30+ Banks’ EMI", description: "GOTIPAY provides all available payment channels to your consumers, such as credit/debit cards, and also offers an EMI-based payment.", icon: "💳" },
  { title: "Campaign Management", description: "Run offers easily or participate in any campaign organized by payment brands.", icon: "🎯" },
  { title: "Go Global", description: "Increase conversions by enabling international customers to pay in local currency.", icon: "🌍" },
  { title: "Dashboard Reporting", description: "Real-time data and insights on your GOTIPAY Dashboard to make informed business decisions.", icon: "📊" },
  { title: "PSO Licensed", description: "One of only 3 organizations to be prestigiously awarded with the PSO license by Bangladesh Bank.", icon: "🏆" },
  { title: "PCI DSS Certified", description: "GOTIPAY has a highly secure system that complies with PCI DSS Level-1 and removes your burden of regulatory compliance.", icon: "🔒" },
];

const logos = ["visa.svg", "master.svg", "bkash.svg", "nagad.svg", "amex.svg", "rocket.svg", "visa.svg", "master.svg", "bkash.svg", "nagad.svg", "amex.svg", "rocket.svg"];

const testimonials = [
  {
    name: "Rahim Traders",
    review: "GotiPay made our payment process seamless. Excellent support!",
    avatar: "/images/user.png"
  },
  {
    name: "TechHive Ltd",
    review: "Integration was super easy. Transactions are smooth and fast.",
    avatar: "/images/user.png"
  },
  {
    name: "ShopEasy",
    review: "Great pricing and secure platform. Our customers love it.",
    avatar: "/images/user.png"
  },
  {
    name: "Alpha Solutions",
    review: "Fantastic service and easy to use API. Highly recommend!",
    avatar: "/images/user.png"
  },
  {
    name: "Beta Enterprises",
    review: "Reliable and fast transactions. Our team loves it!",
    avatar: "/images/user.png"
  },
];


const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true, dots: true },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true, dots: true },
    },
  ],
};


const Home: FC = () => {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>

      <Navbar />

      {/* Hero Section */}
      <div className=" ">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="relative w-full flex items-center justify-start bg-gray-900 py-20 sm:py-28 md:py-32"
        >
          <div className="absolute inset-0 -z-10">
            <Image src="/hero-bg.jpg" alt="Hero Background" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
            <motion.div className="max-w-xl text-white space-y-4 sm:space-y-6">
              <motion.h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight" variants={zoomIn} custom={0}>
                Empower Your <span className="text-[var(--primary)]">Business</span>
              </motion.h1>
              <motion.p className="text-sm sm:text-base md:text-lg text-gray-200" variants={fadeUp} custom={1}>
                Seamless payment integration, powerful APIs, and instant onboarding to get you started in minutes.
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                className="px-5 py-2 sm:px-6 sm:py-3 bg-[var(--primary)] hover:bg-indigo-700 rounded-full text-sm sm:text-base font-medium shadow-md"
                variants={fadeUp}
                custom={2}
              >
                Get Started
              </motion.button>
            </motion.div>
          </div>
        </motion.section>
      </div>


      {/* Benefits Section */}
      <section className="relative inset-0 bg-gradient-to-b from-indigo-50 via-white to-gray-50 ">
        <div className="py-14 md:py-20 px-3 md:px-6 max-w-6xl mx-auto ">
          <div className="text-center mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Benefits of <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">GOTIPAY</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-md">
              We empower your business with all the right tools to accept digital payments
              and deliver the best customer experience.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.15 }
              }
            }}
          >
            {benefits.map((b, idx) => (
              <BenifitsCard b={b} idx={idx} />
            ))}
          </motion.div>
        </div>
      </section>


      <div className="max-w-6xl mx-auto ">

        {/* Features Section */}
        <motion.section
          className="text-center py-12 sm:py-16 px-4 md:px-20 mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.p
            className="text-gray-500 mb-2 text-xs sm:text-sm uppercase tracking-wider"
            variants={fadeUp}
            custom={0}
          >
            Why GotiPay?
          </motion.p>

          <motion.h3
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6"
            variants={fadeDown}
            custom={1}
          >
            Smart solutions built to scale your online business success
          </motion.h3>

          <motion.p
            className="mt-4 text-gray-600 text-sm md:text-md max-w-3xl mx-auto"
            variants={fadeUp}
            custom={2}
          >
            Whether you’re a growing business aiming to save time and money as you scale,
            or an ambitious platform ready to create your own payment and financial
            solutions, GotiPay’s trusted technology empowers you to get there.
          </motion.p>

          {/* Advanced Feature Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mt-10"
          >
            {features.map((feature, i) => (
             <WhyGotiPayCard feature={feature} i={i} rotateIn={rotateIn}/>
            ))}
          </motion.div>
        </motion.section>


      </div>

      {/* Trusted By Section */}
      <TrustedBrands logos={logos} />

      {/* How It Works */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: "1", title: "Sign Up", desc: "Create your merchant account with easy online onboarding." },
            { step: "2", title: "Integrate", desc: "Use our APIs, SDKs or plugins to connect your platform." },
            { step: "3", title: "Go Live", desc: "Start accepting payments instantly with secure transactions." },
          ].map((s, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.05 }} className="bg-white shadow-md rounded-2xl p-6 text-center">
              <div className="text-indigo-600 text-4xl font-bold mb-4">{s.step}</div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* Stats Section */}
      <section className="bg-indigo-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">{/* Decorative shapes */}</div>
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { label: "Active Merchants", value: "10K+" },
            { label: "Banks & Partners", value: "30+" },
            { label: "Payment Options", value: "50+" },
            { label: "Support", value: "24/7" },
          ].map((stat, idx) => (
            <motion.div key={idx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: idx * 0.2 }}>
              <h3 className="text-4xl font-bold">{stat.value}</h3>
              <p className="text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}

      <section className="py-20 pt-14 bg-indigo-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
          <Slider {...settings}>
            {testimonials.map((t, i) => (
              <div key={i} className="px-3 w-full">
                <div className="bg-white rounded-md p-6 text-left h-full flex flex-col justify-between">
                  <div className="flex items-center mb-2">
                    <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                    <h4 className="font-semibold text-gray-800">{t.name}</h4>
                  </div>
                  <p className="text-gray-600 italic text-[10px] md:text-sm">“{t.review}”</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>



      <EarthMain />

      {/* Footer */}
      <Footer />

    </motion.div>
  );
};


export default Home;