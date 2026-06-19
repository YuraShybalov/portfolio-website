import { Mail } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";

const socialLinks = [
  { icon: Mail, href: "https://github.com", label: "GitHub" },
  { icon: Mail, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:contact@example.com", label: "Email" },
];

const footerLinks = [
  {
    title: "Pages",
    links: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Projects", path: "/projects" },
      { name: "Blog", path: "/blog" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Tech Stack", path: "/tech-stack" },
      { name: "Architecture", path: "/architecture" },
      { name: "Certificates", path: "/certificates" },
      { name: "Engineering", path: "/engineering" },
    ],
  },
  {
    title: "Connect",
    links: [
      { name: "Contact", path: "/contact" },
      { name: "GitHub", path: "https://github.com" },
      { name: "LinkedIn", path: "https://linkedin.com" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold gradient-text mb-4">
              &lt;DevPortfolio/&gt;
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Full Stack Developer & Software Engineer building modern web
              applications with cutting-edge technologies.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.path.startsWith("http") ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} DevPortfolio. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
