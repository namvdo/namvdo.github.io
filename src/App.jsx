import { useState, useEffect } from 'react'
import { InlineMath } from 'react-katex'
import 'katex/dist/katex.min.css'
import './App.css'

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
)

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
)

const BlogIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15M9 11l3 3m0 0l3-3m-3 3V8" />
  </svg>
)

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [showDocuments, setShowDocuments] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'education', 'research', 'projects', 'writing', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (showDocuments && !e.target.closest('.avatar-dropdown')) {
        setShowDocuments(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [showDocuments])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Navigation */}
      <nav className="sticky top-0 bg-[#fafafa]/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="section-container">
          <div className="flex items-center justify-between h-16">
            <span className="font-sans font-semibold text-lg text-gray-900">Nam Do</span>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {['About', 'Experience', 'Education', 'Research', 'Projects', 'Writing', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`nav-link font-sans text-sm transition-colors ${activeSection === item.toLowerCase()
                    ? 'text-gray-900'
                    : 'text-gray-500 hover:text-gray-900'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 -mr-2 text-gray-600 hover:text-gray-900 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-[#fafafa]/95 backdrop-blur-sm border-b border-gray-200 px-4 py-4 space-y-3 z-50 shadow-lg">
              {['About', 'Experience', 'Education', 'Research', 'Projects', 'Writing', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(item.toLowerCase());
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 font-sans text-base rounded-md transition-colors ${activeSection === item.toLowerCase()
                    ? 'bg-gray-100 text-gray-900 font-semibold'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero / About Section */}
      <section id="about" className="pt-24 pb-20">
        <div className="section-container">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
            {/* Avatar with document links */}
            <div className="relative avatar-dropdown flex-shrink-0">
              <button
                onClick={() => setShowDocuments(!showDocuments)}
                className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full block mx-auto md:mx-0"
              >
                <img
                  src="/namdo.jpg"
                  alt="Nam Do"
                  className="w-40 h-40 md:w-[200px] md:h-[200px] rounded-full object-cover border-4 border-white shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                />
              </button>
              {showDocuments && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 py-2 min-w-[220px] z-50">
                  <a
                    href="/CV_2025_08_12.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zm-3 9h4v1h-4v-1zm0 2h4v1h-4v-1zm0-4h2v1h-2V11z" />
                    </svg>
                    <span className="text-gray-700 text-sm">View CV (PDF)</span>
                  </a>
                  <a
                    href="/set-valued-viz-presentation-with-professor_edited.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z" />
                    </svg>
                    <span className="text-gray-700 text-sm">Research Presentation</span>
                  </a>
                </div>
              )}
            </div>

            <div className="max-w-2xl">
              <h1 className="font-sans text-4xl font-semibold text-gray-900 mb-6">
                Nam Do
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Currently a Graduate Research Assistant in Edge Intelligence at the University of Oulu.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                I have developed scientific computing tools for pattern analysis using Normalized
                Compression Distance (NCD), WebAssembly, and 3D visualization. My experience spans
                data compression, computer graphics, scientific computing, and low-level optimizations.
                I've designed and implemented complete software solutions from inception to fully
                automated releases.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                My current research focuses on two areas: visualization of set-valued dynamical
                systems with additive bounded noise, and edge orchestration simulation in distributed computing environments. I also
                maintain an active technical blog documenting implementations across computer
                science fundamentals.
              </p>
              <div className="flex gap-4 justify-center md:justify-start flex-wrap">
                <a
                  href="https://github.com/namvdo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
                >
                  <GitHubIcon />
                  <span className="font-sans text-sm">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/nam-v-do"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
                >
                  <LinkedInIcon />
                  <span className="font-sans text-sm">LinkedIn</span>
                </a>
                <a
                  href="mailto:nam.do@oulu.fi"
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
                >
                  <MailIcon />
                  <span className="font-sans text-sm">Email</span>
                </a>
                <a
                  href="https://namvdo.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
                >
                  <BlogIcon />
                  <span className="font-sans text-sm">Blog</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white border-y border-gray-100">
        <div className="section-container">
          <h2 className="font-sans text-2xl font-semibold text-gray-900 mb-10">Experience</h2>

          <div className="space-y-8">
            <div className="border-l-2 border-gray-200 pl-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-0">
                <div>
                  <h3 className="font-sans text-lg font-medium text-gray-900">
                    Graduate Research Assistant
                  </h3>
                  <p className="text-gray-600 mt-1">University of Oulu - Edge Intelligence: Future Computing Group</p>
                  <p className="text-gray-500 text-sm mt-2">
                    Working on edge orchestration simulation under the supervision of Prof. Lauri Lovén
                    at the Center for Ubiquitous Computing (UBICOMP).
                  </p>
                </div>
                <span className="font-sans text-sm text-gray-500 whitespace-nowrap sm:ml-4">
                  Jan 2026 - Present
                </span>
              </div>
            </div>

            <div className="border-l-2 border-gray-200 pl-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-0">
                <div>
                  <h3 className="font-sans text-lg font-medium text-gray-900">
                    Software Engineer
                  </h3>
                  <p className="text-gray-600 mt-1">Petabyte Storage - California, USA (Remote)</p>
                  <p className="text-gray-500 text-sm mt-2">
                    Built CompLearn 2.0, a web-based scientific programming tool using NCD for
                    pattern analysis. Compiled C++ to WebAssembly, implemented 3D tree visualizations
                    with ThreeJS, and integrated multiple compression algorithms.
                  </p>
                </div>
                <span className="font-sans text-sm text-gray-500 whitespace-nowrap sm:ml-4">
                  Oct 2024 - Oct 2025
                </span>
              </div>
            </div>

            <div className="border-l-2 border-gray-200 pl-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-0">
                <div>
                  <h3 className="font-sans text-lg font-medium text-gray-900">
                    Software Engineer
                  </h3>
                  <p className="text-gray-600 mt-1">CompaxDigital - Hanoi, Vietnam</p>
                  <p className="text-gray-500 text-sm mt-2">
                    Designed and built CI/CD pipelines, queue and data migration services.
                  </p>
                </div>
                <span className="font-sans text-sm text-gray-500 whitespace-nowrap sm:ml-4">
                  Sep 2023 - Aug 2025
                </span>
              </div>
            </div>

            <div className="border-l-2 border-gray-200 pl-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-0">
                <div>
                  <h3 className="font-sans text-lg font-medium text-gray-900">
                    Software Engineer
                  </h3>
                  <p className="text-gray-600 mt-1">Coc Coc - Hanoi, Vietnam</p>
                  <p className="text-gray-500 text-sm mt-2">
                    Developed vertical search services for Coc Coc Search Engine. Built monitoring systems with anomaly detection.
                  </p>
                </div>
                <span className="font-sans text-sm text-gray-500 whitespace-nowrap sm:ml-4">
                  Sep 2021 - Jul 2023
                </span>
              </div>
            </div>

            <div className="border-l-2 border-gray-200 pl-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-0">
                <div>
                  <h3 className="font-sans text-lg font-medium text-gray-900">
                    Software Engineer
                  </h3>
                  <p className="text-gray-600 mt-1">Giao Hang Tiet Kiem - Hanoi, Vietnam</p>
                  <p className="text-gray-500 text-sm mt-2">
                    Developed GCall audio call software using WebRTC and media streaming technologies.
                    Implemented both business logic (Spring Boot) and media services (ion-sfu).
                  </p>
                </div>
                <span className="font-sans text-sm text-gray-500 whitespace-nowrap sm:ml-4">
                  Feb 2021 - Sep 2021
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="section-container">
          <h2 className="font-sans text-2xl font-semibold text-gray-900 mb-10">Education</h2>

          <div className="space-y-8">
            <div className="border-l-2 border-gray-200 pl-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-0">
                <div>
                  <h3 className="font-sans text-lg font-medium text-gray-900">
                    University of Oulu, Finland
                  </h3>
                  <p className="text-gray-600 mt-1">M.Sc. in Computer Science and Engineering</p>
                  <p className="text-gray-500 text-sm mt-2">
                    Research projects: Visualization of set-valued dynamical systems,
                    Benchmarking localization algorithms with learning-based algorithms
                  </p>
                </div>
                <span className="font-sans text-sm text-gray-500 whitespace-nowrap sm:ml-4">
                  2025 - 2027
                </span>
              </div>
            </div>

            <div className="border-l-2 border-gray-200 pl-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-0">
                <div>
                  <h3 className="font-sans text-lg font-medium text-gray-900">
                    FPT University, Vietnam
                  </h3>
                  <p className="text-gray-600 mt-1">Bachelor of Computer Software Engineering</p>
                </div>
                <span className="font-sans text-sm text-gray-500 whitespace-nowrap sm:ml-4">
                  2018 - 2023
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 bg-white border-y border-gray-100">
        <div className="section-container">
          <h2 className="font-sans text-2xl font-semibold text-gray-900 mb-10">Research</h2>

          <div className="space-y-12">
            {/* Main Research Project */}
            <div>
              <h3 className="font-sans text-lg font-medium text-gray-900 mb-4">
                Visualization of Set-Valued Dynamical Systems
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Developing a computational and visualization toolbox for analyzing dynamical
                systems with additive bounded noise. The project combines a high-performance
                Rust backend with an interactive web-based visualization interface.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full font-sans">Rust</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full font-sans">WebAssembly</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full font-sans">React</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full font-sans">Numerical Methods</span>
              </div>

              <p className="text-sm text-gray-500 mb-3">
                Supervised by Dr. Kalle Timperi (University of Oulu). Presented to Prof. Jeroen Lamb
                and researchers at Imperial College London, February 2026.
              </p>
              <a
                href="/set-valued-viz-presentation-with-professor_edited.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z" />
                </svg>
                View Presentation Slides
              </a>
            </div>

            {/* EISim Research */}
            <div>
              <h3 className="font-sans text-lg font-medium text-gray-900 mb-4">
                Edge Orchestration Simulation
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Contributing to EISim, a simulation framework for edge computing orchestration.
                Working on improvements to resource allocation algorithms and performance modeling
                for distributed edge environments.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full font-sans">Distributed Systems</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full font-sans">Simulation</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full font-sans">Edge Computing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white border-y border-gray-100">
        <div className="section-container">
          <h2 className="font-sans text-2xl font-semibold text-gray-900 mb-10">Projects</h2>

          <div className="grid gap-6">
            {/* Set-Valued Dynamics Visualizer */}
            <div className="project-card border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-900 flex items-center justify-center">
                <img
                  src="/boundary_map_demo.gif"
                  alt="Boundary Map Evolution Demo"
                  className="w-full max-h-80 object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="font-sans text-lg font-medium text-gray-900 mb-2">
                  Set-Valued Dynamics Visualizer
                </h3>
                <p className="text-gray-600 mb-4">
                  Interactive browser-based tool for visualizing boundary map evolution,
                  periodic orbits, and minimal invariant sets in 2D dynamical systems with bounded noise.
                </p>

                <div className="bg-gray-50 rounded-lg p-5 mb-5">
                  <h4 className="font-sans text-sm font-medium text-gray-700 mb-3 uppercase tracking-wide">
                    Mathematical Foundations
                  </h4>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-3">-</span>
                      <span><strong>Boundary Map Evolution:</strong> Computing the n-fold composition <InlineMath math="E^n(x, y, n_x, n_y)" /> for iterative boundary evolution</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-3">-</span>
                      <span><strong>Davidchack-Lai Algorithm:</strong> Stabilized Newton iterations: <InlineMath math="p_{k+1} = p_k + (\beta \|g\| I - Dg)^{-1}g" /></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-3">-</span>
                      <span><strong>GAIO-based Ulam Method:</strong> Probability transition matrix <InlineMath math="P_{ij}" />; left eigenvector <InlineMath math="P^T v^l = v^l" /> for MIS approximation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-3">-</span>
                      <span><strong>Unstable Manifold Approximation:</strong> Adaptive point insertion from saddle points along unstable eigenvector direction</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="/set-valued-viz/"
                    className="font-sans text-sm text-blue-600 hover:text-blue-800"
                  >
                    Live Demo <ExternalLinkIcon />
                  </a>
                </div>
              </div>
            </div>

            {/* CompLearn 2.0 */}
            <div className="project-card border border-gray-200 rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="font-sans text-lg font-medium text-gray-900 mb-2">
                  CompLearn 2.0
                </h3>
                <p className="text-gray-600 mb-4">
                  Web-based scientific programming tool for finding similarity patterns in any kind of data
                  using Normalized Compression Distance (NCD). Built with WebAssembly for efficient browser-based
                  execution and 3D quartet tree visualizations.
                </p>

                <div className="bg-gray-50 rounded-lg p-5 mb-5">
                  <h4 className="font-sans text-sm font-medium text-gray-700 mb-3 uppercase tracking-wide">
                    Mathematical Foundations
                  </h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-3">-</span>
                      <span><strong>Normalized Compression Distance:</strong> <InlineMath math="NCD(x,y) = \frac{C(xy) - \min(C(x), C(y))}{\max(C(x), C(y))}" /> where <InlineMath math="C(x)" /> is compressed size</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-3">-</span>
                      <span><strong>QSearch Algorithm:</strong> Quartet tree optimization using simulated annealing for phylogenetic clustering</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-3">-</span>
                      <span><strong>K-Grid Clustering:</strong> Grid-based visualization with simulated annealing optimization</span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center gap-4 flex-wrap">
                  <a
                    href="https://openscienceresearchpark.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-blue-600 hover:text-blue-800"
                  >
                    Live Demo <ExternalLinkIcon />
                  </a>
                  <a
                    href="https://github.com/rudi-cilibrasi/libqsearch-clean"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-blue-600 hover:text-blue-800"
                  >
                    GitHub <ExternalLinkIcon />
                  </a>
                </div>
              </div>
            </div>

            {/* Jen */}
            <div className="project-card border border-gray-200 rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="font-sans text-lg font-medium text-gray-900 mb-2">
                  Jen - Generative Photography
                </h3>
                <p className="text-gray-600 mb-4">
                  Image processing and generative art system for creating algorithmic artwork from images.
                  Features a C++20 Lux Vitae renderer compiled to WebAssembly for real-time browser-based
                  animation and a React-based interactive interface.
                </p>

                <div className="bg-gray-50 rounded-lg p-5 mb-5">
                  <h4 className="font-sans text-sm font-medium text-gray-700 mb-3 uppercase tracking-wide">
                    Mathematical Foundations
                  </h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-3">-</span>
                      <span><strong>Cellular Automata:</strong> Rule-based grid transformations extended to color images with nonlocal neighborhoods</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-3">-</span>
                      <span><strong>L-Systems:</strong> Recursive cluster generation creating branching, fractal-like patterns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-3">-</span>
                      <span><strong>Vector Fields:</strong> Directional data grids for image warping and element positioning</span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center gap-4 flex-wrap">
                  <a
                    href="https://joyhughes.github.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-blue-600 hover:text-blue-800"
                  >
                    Live Demo <ExternalLinkIcon />
                  </a>
                  <a
                    href="https://github.com/joyhughes/Jen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-blue-600 hover:text-blue-800"
                  >
                    GitHub <ExternalLinkIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Writing Section */}
      <section id="writing" className="py-20">
        <div className="section-container">
          <h2 className="font-sans text-2xl font-semibold text-gray-900 mb-10">Writing</h2>

          <div className="max-w-2xl">
            <div className="mb-6">
              <h3 className="font-sans text-lg font-medium text-gray-900 mb-3">
                Technical Blog
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                I maintain an active technical blog with 100+ posts covering computer science fundamentals,
                programming tutorials, and software engineering topics. The blog documents my learning journey
                and explores topics I find interesting in depth.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Topics include low-level systems programming, algorithms, computer architecture,
                and performance optimization techniques.
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-lg p-5 mb-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏆</span>
                <div>
                  <h4 className="font-sans font-medium text-gray-900 mb-1">
                    Featured: #1 on r/programming
                  </h4>
                  <p className="text-gray-600 text-sm">
                    My post explaining <strong>Branch Prediction</strong> reached #1 on the r/programming
                    subreddit (6M+ members) and received over 160K views on Reddit.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://namvdo.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
            >
              <span className="font-sans text-sm">Visit Blog</span>
              <ExternalLinkIcon />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white border-t border-gray-100">
        <div className="section-container">
          <h2 className="font-sans text-2xl font-semibold text-gray-900 mb-10">Contact</h2>

          <div className="max-w-xl">
            <p className="text-gray-600 mb-8 leading-relaxed">
              I'm always interested in discussing research collaborations, especially in
              dynamical systems, scientific visualization, and computational methods.
              Feel free to reach out.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:nam.do@oulu.fi"
                className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <MailIcon />
                <span>nam.do@oulu.fi</span>
              </a>
              <a
                href="https://github.com/namvdo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <GitHubIcon />
                <span>github.com/namvdo</span>
              </a>
              <a
                href="https://linkedin.com/in/nam-v-do"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <LinkedInIcon />
                <span>linkedin.com/in/nam-v-do</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-100">
        <div className="section-container">
          <p className="text-center text-gray-500 text-sm font-sans">
            Nam Do - University of Oulu
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
