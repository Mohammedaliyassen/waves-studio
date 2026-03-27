import Link from "next/link";

const mobileServices = [
  {
    title: "Native iOS Applications",
    description: "High-performance iOS apps built with Swift and SwiftUI, optimized for the latest Apple devices.",
    features: ["Swift/SwiftUI development", "App Store optimization", "iOS-specific features", "Performance optimization", "Apple guidelines compliance"]
  },
  {
    title: "Native Android Applications",
    description: "Robust Android apps developed with Kotlin and Jetpack Compose for modern Android experiences.",
    features: ["Kotlin development", "Material Design", "Google Play optimization", "Device compatibility", "Android features integration"]
  },
  {
    title: "Cross-Platform Solutions",
    description: "Single codebase applications that work seamlessly on both iOS and Android platforms.",
    features: ["React Native/Flutter", "Code sharing", "Native performance", "Unified UI/UX", "Faster development"]
  },
  {
    title: "App Store Deployment",
    description: "Complete app store submission process including screenshots, descriptions, and compliance.",
    features: ["App Store submission", "Google Play upload", "App store optimization", "Compliance checks", "Launch support"]
  }
];

const technologies = [
  { name: "React Native", description: "Cross-platform mobile framework" },
  { name: "Flutter", description: "Google's UI toolkit for cross-platform apps" },
  { name: "Swift", description: "Apple's programming language for iOS" },
  { name: "Kotlin", description: "Modern language for Android development" },
  { name: "Firebase", description: "Backend services for mobile apps" },
  { name: "App Store Connect", description: "iOS app distribution platform" },
  { name: "Google Play Console", description: "Android app publishing platform" },
  { name: "RevenueCat", description: "In-app subscription management" }
];

const features = [
  {
    title: "Offline Functionality",
    description: "Apps that work seamlessly without internet connection, syncing data when connectivity returns.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 21.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
    )
  },
  {
    title: "Push Notifications",
    description: "Engage users with timely notifications and personalized messaging.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.868 12.683A17.925 17.925 0 0112 21c7.962 0 12-1.21 12-2.683m-12 2.683a17.925 17.925 0 01-7.132-8.317M12 21V9m0 0l3-3m-3 3l-3-3" />
      </svg>
    )
  },
  {
    title: "In-App Purchases",
    description: "Monetize your app with subscriptions, one-time purchases, and premium features.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    )
  },
  {
    title: "App Analytics",
    description: "Track user behavior, app performance, and business metrics for continuous improvement.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
];

export default function MobileDevelopmentPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Mobile Development</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We create exceptional mobile applications that users love. From native iOS and Android apps
              to cross-platform solutions, we deliver mobile experiences that drive engagement and business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Mobile Solutions We Build
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive mobile development services for iOS, Android, and cross-platform applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {mobileServices.map((service, index) => (
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

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Advanced Mobile Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modern mobile capabilities that enhance user experience and app functionality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technologies & Tools
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Modern tech stack for high-performance, scalable mobile applications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-300">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Launch Your Mobile App?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's turn your mobile app idea into reality. From concept to app store launch,
            we'll guide you through every step of the process.
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