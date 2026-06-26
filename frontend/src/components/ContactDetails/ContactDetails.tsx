import React from "react";
import { GlassCard } from "../ui/GlassCard";
import { contactInfo } from "../../data/contactInfo";

export function ContactDetails() {
  return (
    <GlassCard hover={false}>
      <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
      <div className="space-y-6">
        {contactInfo.map((info) => (
          <div key={info.label} className="flex items-start">
            <div className="w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center mr-4 flex-shrink-0">
              <info.icon className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">{info.label}</p>
              {info.href ? (
                <a
                  href={info.href}
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-white">{info.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
