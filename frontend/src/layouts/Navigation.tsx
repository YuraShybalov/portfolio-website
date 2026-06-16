import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "../components/logo/logo";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Engineering", path: "/engineering" },
  { name: "Tech Stack", path: "/tech-stack" },
  { name: "Certificates", path: "/certificates" },
  { name: "Blog", path: "/blog" },
  { name: "Architecture", path: "/architecture" },
  { name: "Contact", path: "/contact" },
];

function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Logo />
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`px-4 py-2 rounded-lg transition-all relative ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-white/10 rounded-lg -z-10"
                        transition={{ type: "spring", duration: 0.6 }}
                      />
                    )}
                  </motion.div>
                </Link>
              );
            })}
          </div>
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden glass border-t border-white/10"
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div
                    className={`px-4 py-3 rounded-lg transition-all ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.name}
                  </div>
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navigation;
