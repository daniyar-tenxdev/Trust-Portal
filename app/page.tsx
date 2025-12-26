import Link from "next/link";
import { Shield, Lock, FileText, Database } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1519681393798-2f77f32d94e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80')] opacity-20 bg-cover bg-center" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Trust & Security Center
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
              At LongevityPRO, protecting your data is our top priority. We are committed to transparency, security, and compliance.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/security"
                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                View Security Measures
              </Link>
              <Link href="/compliance" className="text-sm font-semibold leading-6 text-white hover:text-gray-200 cursor-pointer">
                Check Compliance <span aria-hidden="true">→</span>
              </Link>
            </div>
        </div>
      </div>

       {/* Security Commitment Banner */}
       <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
                <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                    </span>
                    <span className="font-semibold text-gray-900">Security First Architecture</span>
                </div>
                <span className="hidden sm:inline text-gray-300">|</span>
                <span className="text-gray-600">Built on GCP • Encrypted by Default • Working towards SOC 2</span>
            </div>
        </div>
      </div>


      {/* Quick Links Grid */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Transparency at the Core
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore our policies, practices, and infrastructure details.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {[
            {
              title: "Security Measures",
              description: "How we encrypt, store, and protect your sensitive health data.",
              href: "/security",
              icon: Lock,
            },
            {
              title: "Compliance & Certifications",
              description: "Details on SOC 2, HIPAA, and GDPR compliance efforts.",
              href: "/compliance",
              icon: Shield,
            },
             {
              title: "Privacy Policy",
              description: "Clear information on how your data is collected and used.",
              href: "/privacy",
              icon: FileText,
            },
            {
              title: "Data Management",
              description: "Where your data lives and how we handle backups.",
              href: "/data",
              icon: Database,
            },
          ].map((item) => (
             <div key={item.title} className="flex gap-x-4 rounded-xl bg-gray-50 p-6 ring-1 ring-inset ring-gray-900/10 hover:bg-gray-100 transition-colors">
                 <item.icon className="h-7 w-5 flex-none text-primary" aria-hidden="true" />
                 <div className="text-base leading-7">
                    <h3 className="font-semibold text-gray-900">
                        <Link href={item.href} className="focus:outline-none">
                            <span className="absolute inset-0" aria-hidden="true" />
                            {item.title}
                        </Link>
                    </h3>
                    <p className="mt-2 text-gray-600">{item.description}</p>
                 </div>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}
