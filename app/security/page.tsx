import { PageHeader } from "@/components/ui/PageHeader";
import { ShieldCheck, Lock, Server } from "lucide-react";

export default function SecurityPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader 
        title="Security at LongevityPRO" 
        description="We employ enterprise-grade security measures to ensure your data is always protected."
      />

      <main className="py-16 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
               <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6 text-primary" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-3">Data Encryption</h3>
               <p className="text-gray-600">
                 All customer data is encrypted at rest using industry-standard encryption.
                 Data in transit is protected using TLS 1.2+.
               </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
               <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Lock className="w-6 h-6 text-primary" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-3">Access Controls</h3>
               <p className="text-gray-600">
                 Strict role-based access control (RBAC) ensures that only authorized personnel have access to data. Multi-factor authentication (MFA) is enforced for all administrative access.
               </p>
            </div>

             <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
               <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Server className="w-6 h-6 text-primary" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-3">Infrastructure Security</h3>
               <p className="text-gray-600">
                 Hosted on secure cloud infrastructure with 24/7 monitoring, automated threat detection, and regular vulnerability scanning.
               </p>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Security Practices</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <ul className="list-disc space-y-4">
                <li><strong>Regular Audits:</strong> We conduct regular internal and external security audits.</li>
                <li><strong>Incident Response:</strong> A dedicated team is available 24/7 to respond to any security incidents.</li>
                <li><strong>Employee Training:</strong> All employees undergo ongoing security and privacy training.</li>
                <li><strong>Secure Development:</strong> Security is integrated into our software development lifecycle (SDLC).</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
