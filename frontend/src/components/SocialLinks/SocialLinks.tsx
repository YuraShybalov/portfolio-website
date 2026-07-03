import { GlassCard } from "../ui/GlassCard";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const socialLinks = [
  {
    icon: FaLinkedin,
    label: "FaLinkedin",
    href: "https://linkedin.com",
    color: "blue",
  },
  {
    icon: FaGithub,
    label: "FaGithub",
    href: "https://github.com",
    color: "purple",
  },
  {
    icon: FaTwitter,
    label: "FaTwitter",
    href: "https://twitter.com",
    color: "cyan",
  },
];

export function SocialLinks() {
  return (
    <GlassCard hover={false}>
      <h3 className="text-2xl font-bold mb-6">Connect on Social</h3>
      <div className="space-y-4">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 glass rounded-lg hover:bg-white/10 transition-all group"
          >
            <div
              className={`w-12 h-12 rounded-lg bg-${social.color}-600/20 flex items-center justify-center mr-4`}
            >
              <social.icon className={`w-6 h-6 text-${social.color}-500`} />
            </div>
            <div className="flex-1">
              <p className="font-medium group-hover:text-blue-400 transition-colors">
                {social.label}
              </p>
              <p className="text-sm text-gray-400">@yourhandle</p>
            </div>
            <div className="text-gray-400 group-hover:text-white transition-colors">
              →
            </div>
          </a>
        ))}
      </div>
    </GlassCard>
  );
}
