"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Shield, Lock, FileText, Database, Users, Mail } from "lucide-react";
import { clsx } from "clsx";

const navItems = [
  { name: "Overview", href: "/", icon: Shield },
  { name: "Security", href: "/security", icon: Lock },
  { name: "Compliance", href: "/compliance", icon: FileText },
  { name: "Privacy", href: "/privacy", icon: Users }, // Using Users for Privacy as it relates to people
  { name: "Data", href: "/data", icon: Database },
  { name: "Subprocessors", href: "/subprocessors", icon: Users }, // Or maybe another icon
  { name: "Contact", href: "/contact", icon: Mail },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex w-full justify-between items-center">
            <div className="flex flex-shrink-0 items-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight text-gray-900">
                  Trust Center
                </span>
                <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded-full w-fit font-medium">
                  Security First
                </span>
              </div>
            </div>
            
            <div className="hidden md:ml-6 md:flex md:space-x-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={clsx(
                      "inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200",
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
            
             <div className="flex items-center">
                <a 
                  href="https://longevitypro.ai" 
                  className="text-sm font-medium text-gray-500 hover:text-primary transition-colors"
                >
                  Return onto longevitypro.ai
                </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
