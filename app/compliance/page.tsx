import { PageHeader } from "@/components/ui/PageHeader";
import { CheckCircle2, Clock } from "lucide-react";

export default function CompliancePage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader 
        title="Compliance & Certifications" 
        description="We are committed to meeting the highest standards of regulatory compliance."
      />

      <main className="py-16 px-6">
        <div className="mx-auto max-w-4xl">
           
           {/* Security Commitment Banner */}
           <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mb-12">
              <div className="flex items-start gap-4">
                 <div className="p-3 bg-blue-100 rounded-full">
                    <Clock className="w-6 h-6 text-blue-700" />
                 </div>
                 <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Committed to Security & Compliance</h2>
                    <p className="text-gray-700 mb-4">
                      As a security-first startup, LongevityPRO is actively building its infrastructure and processes to align with SOC 2 Type II standards. We are committed to achieving formal certification as we scale.
                    </p>
                    <div className="flex items-center gap-2 text-sm font-medium text-blue-800">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
                        </span>
                        Security First Approach
                    </div>
                 </div>
              </div>
           </div>

           <div className="space-y-12">
              <div>
                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-4">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                      HIPAA Compliance
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                      We adhere to the Health Insurance Portability and Accountability Act (HIPAA) standards to protect sensitive patient health information (PHI). Our platform is designed to ensure the confidentiality, integrity, and availability of electronic PHI.
                  </p>
              </div>

              <div>
                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-4">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                      GDPR Compliance
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                      For our users in the EEA/UK, we comply with the General Data Protection Regulation (GDPR). We respect your rights to data privacy and have implemented measures to ensure lawful data processing and cross-border data transfer safeguards.
                  </p>
              </div>

               <div>
                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-4">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                      CCPA/CPRA
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                      We comply with the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), giving California residents control over their personal information.
                  </p>
              </div>
           </div>

        </div>
      </main>
    </div>
  );
}
