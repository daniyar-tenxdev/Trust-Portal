import { PageHeader } from "@/components/ui/PageHeader";
import { Database, Cloud, RefreshCw } from "lucide-react";

export default function DataPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader 
        title="Data Management" 
        description="Transparency on where your data lives, how it flows, and how it is preserved."
      />

      <main className="py-16 px-6">
        <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                 <div className="text-center p-6 border border-gray-100 rounded-xl bg-gray-50">
                    <Cloud className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Cloud Infrastructure</h3>
                    <p className="text-gray-600">GCP (europe-west1)</p>
                 </div>
                 <div className="text-center p-6 border border-gray-100 rounded-xl bg-gray-50">
                    <Database className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Database Hosting</h3>
                    <p className="text-gray-600">Managed PostgreSQL (Cloud SQL)</p>
                 </div>
                  <div className="text-center p-6 border border-gray-100 rounded-xl bg-gray-50">
                    <RefreshCw className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Backup Frequency</h3>
                    <p className="text-gray-600">Daily Automated Backups</p>
                 </div>
            </div>

            <div className="max-w-4xl mx-auto space-y-12">
               <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Residency</h2>
                  <p className="text-gray-600 mb-4">
                      Our primary infrastructure is located in the Google Cloud Platform (GCP) <strong>europe-west1</strong> region. This ensures high availability and compliance with regional data standards.
                  </p>
               </div>
               
               <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention & Deletion</h2>
                  <p className="text-gray-600 mb-4">
                      We retain data only as long as necessary to provide our services or as required by law. 
                  </p>
                  <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
                      <li>Client accounts: Retained while active.</li>
                      <li>Deleted accounts: <strong>Retained for 30 days</strong> (soft delete) to allow for accidental deletion recovery, after which they are permanently purged.</li>
                      <li>Backups: Retained for 30 days.</li>
                      <li>Logs: Retained for 90 days for security auditing.</li>
                  </ul>
               </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Disaster Recovery</h2>
                  <p className="text-gray-600 mb-4">
                      We maintain a comprehensive Disaster Recovery Plan (DRP) to ensure business continuity in the event of a widely disruptive event. This includes cross-region data replication and regular recovery drills.
                  </p>
               </div>
            </div>
        </div>
      </main>
    </div>
  );
}
