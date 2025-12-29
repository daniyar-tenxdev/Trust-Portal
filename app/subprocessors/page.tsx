import { PageHeader } from "@/components/ui/PageHeader";

export default function SubprocessorsPage() {
  const subprocessors = [
    { name: "Google Cloud Platform (GCP)", services: "Cloud Infrastructure, Database & Hosting", location: "Europe (europe-west1)" },
    { name: "Stripe", services: "Payment Processing", location: "Global" },
    { name: "SendGrid", services: "Email Delivery", location: "USA" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader 
        title="Subprocessors" 
        description="A list of third-party processors we use to provide our services."
      />

      <main className="py-16 px-6">
        <div className="mx-auto max-w-5xl">
            <p className="text-gray-600 mb-8 max-w-3xl">
                LongevityPRO uses third-party subprocessors to assist in providing our services. We maintain a written agreement with each subprocessor that includes data protection obligations.
            </p>

            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Name</th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Services Provided</th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Location</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {subprocessors.map((processor) => (
                            <tr key={processor.name}>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{processor.name}</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{processor.services}</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{processor.location}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            <p className="mt-8 text-sm text-gray-500">
                To receive updates on changes to our subprocessors, please contact <a href="mailto:support@longevitypro.ai" className="text-primary hover:underline">support@longevitypro.ai</a>.
            </p>
        </div>
      </main>
    </div>
  );
}
