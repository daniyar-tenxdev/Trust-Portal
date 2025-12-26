import { PageHeader } from "@/components/ui/PageHeader";
import { Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader 
        title="Contact Us" 
        description="Get in touch with our security and privacy teams."
      />

      <main className="py-16 px-6">
        <div className="mx-auto max-w-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm text-center">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Mail className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email Support</h3>
                    <p className="text-gray-600 mb-6">
                        For general questions, security concerns, or privacy requests.
                    </p>
                    <a href="mailto:support@longevitypro.ai" className="text-primary font-semibold hover:underline">
                        support@longevitypro.ai
                    </a>
                 </div>

                 <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm text-center">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <MapPin className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Office Address</h3>
                    <p className="text-gray-600 mb-2">
                        longevityPRO
                    </p>
                    <p className="text-gray-600">
                        3101 Park Blvd 1st Floor<br />
                        Palo Alto, CA 94306<br />
                        United States
                    </p>
                 </div>
            </div>

            <div className="mt-16 bg-gray-50 p-8 rounded-xl border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Reporting a Security Vulnerability?</h3>
                <p className="text-gray-600 mb-4">
                    If you believe you have discovered a security vulnerability in LongevityPRO, please let us know immediately.
                </p>
                <div className="flex gap-4">
                    <a href="mailto:security@longevitypro.ai" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 shadow-sm">
                        Contact Security Team
                    </a>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}
