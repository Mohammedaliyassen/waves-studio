import Link from "next/link";

const webServices = [
  {
    title: "Custom Web Applications",
    description: "Tailored web solutions built from the ground up to meet your specific business requirements.",
    features: ["Custom functionality", "Scalable architecture", "Database integration", "User authentication", "Admin panels"]
  },
  {
    title: "E-commerce Platforms",
    description: "Full-featured online stores with payment processing, inventory management, and customer portals.",
    features: ["Payment gateways", "Shopping cart", "Order management", "Customer accounts", "Analytics integration"]
  },
  {
    title: "Progressive Web Apps (PWAs)",
    description: "Web applications that work offline and provide native app-like experiences.",
    features: ["Offline functionality", "Push notifications", "App-like interface", "Fast loading", "Cross-platform compatibility"]
  },
  {
    title: "API Development",
    description: "RESTful and GraphQL APIs that power your applications and integrate with third-party services.",
    features: ["REST/GraphQL APIs", "Documentation", "Authentication", "Rate limiting", "Versioning"]
  }
];

const technologies = [
  { name: "React", description: "Modern UI library for interactive interfaces" },
  { name: "Next.js", description: "Full-stack React framework with SSR/SSG" },
  { name: "TypeScript", description: "Type-safe JavaScript for better development experience" },
  { name: "Node.js", description: "Server-side JavaScript runtime" },
  { name: "PostgreSQL", description: "Advanced open-source relational database" },
  { name: "MongoDB", description: "NoSQL document database for flexible data models" },
  { name: "AWS", description: "Cloud infrastructure and deployment services" },
  { name: "Vercel", description: "Frontend deployment and hosting platform" }
];

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We analyze your requirements, define project scope, and create a detailed roadmap."
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description: "UI/UX design, wireframes, and interactive prototypes to visualize the solution."
  },
  {
    step: "03",
    title: "Development",
    description: "Agile development with regular updates, testing, and quality assurance."
  },
  {
    step: "04",
    title: "Deployment & Support",
    description: "Launch, monitoring, maintenance, and ongoing support for your application."
  }
];

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Web Development</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We build modern, scalable web applications that drive business growth.
              From responsive websites to complex web platforms, we deliver solutions
              that combine cutting-edge technology with exceptional user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What We Build
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive web development services tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {webServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modern tech stack for reliable, scalable, and maintainable web applications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A proven methodology that ensures quality, transparency, and successful delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your Web Application?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a custom solution
            that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/start-project"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
            >
              Start Your Project
            </Link>
            <Link
              href="/projects"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}