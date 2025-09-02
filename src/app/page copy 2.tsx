

const features = [
  { title: "Instant Setup", desc: "Online onboarding. Live in minutes.", icon: "⚡" },
  { title: "Multiple Payment Modes", desc: "Credit/Debit cards, eWallets & PayNow covered.", icon: "💳" },
  { title: "Effortless Integration", desc: "API-first platform. Zero manual work. SDKs, plugins, full docs.", icon: "🔌" },
  { title: "Competitive Pricing", desc: "Save up to 30% on your processing fees.", icon: "💰" },
  { title: "Local Support", desc: "Singapore-based support team, ready to assist.", icon: "🤝" },
  { title: "Fully Secure", desc: "PCI DSS, ISO 27001 certified. Compliance handled for you.", icon: "🛡️" },
];

export default function Home() {

  
  return (
    <main className="min-h-screen bg-white max-w-6xl mx-auto">
      {/* Navbar */}
      <nav className="flex justify-between items-center mb-20">
        <h1 className="text-2xl font-bold text-purple-700">gotipay</h1>
        <div className="flex items-center gap-6">
          <div className="flex gap-4">
            <button className="text-gray-700 hover:text-purple-700">Products</button>
            <button className="text-gray-700 hover:text-purple-700">Solutions</button>
            <button className="text-gray-700 hover:text-purple-700">Developers</button>
            <button className="text-gray-700 hover:text-purple-700">Pricing</button>
          </div>
          <select className="border border-gray-300 rounded px-2 py-1">
            <option>🇧🇩</option>
          </select>
          <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">Login</button>
          <button className="px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-800">
            Register ↗
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center mb-32">
        <h2 className="text-3xl md:text-5xl font-bold text-purple-700 mb-4">
          Empower your Business
        </h2>
        <p className="text-gray-700 mb-6">
          With GotiPay Limited <br />
          Bangladesh’s Number One payment gateway.
        </p>
        <button className="px-6 py-3 bg-purple-700 text-white rounded hover:bg-purple-800">
          Register ↗
        </button>
      </section>

      {/* Features Section */}
      <section className="text-center  mx-auto">
        <p className="text-gray-500 mb-2">Why GotiPay ?</p>
        <h3 className="text-2xl md:text-3xl font-bold mb-6">
          Smart solutions built to scale your online business success
        </h3>
        <p className="text-gray-500 mb-12">
          Whether you’re a growing business aiming to save time and money as you scale, 
          or an ambitious platform ready to create your own payment and financial solutions, 
          GotiPay’s trusted technology empowers you to get there.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-left flex flex-col items-start gap-3">
              <div className="text-3xl">{feature.icon}</div>
              <h4 className="font-bold">{feature.title}</h4>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
    </main>
  );
}
