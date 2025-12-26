"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

const privacyPolicySections = [
  {
    id: 'who-we-are',
    title: '1. Who We Are & How to Contact Us',
    content: `**LongevityPRO** is a software platform that helps longevity and preventive-health practitioners manage their client lifecycle and deliver personalized plans, and provides clients with tools to access their data and plans.

**Data Controller (where applicable):**

LongevityPRO
3101 Park Blvd 1st Floor, Palo Alto, CA 94306
United States

**Contact email:** support@longevitypro.ai

If you have questions about this Privacy Policy or our data practices, you can reach us at the address or email above.`
  },
  {
    id: 'coverage',
    title: '2. What This Policy Covers',
    content: `This Privacy Policy applies to:

• Visitors to **longevitypro.ai**
• Registered **practitioners** and clinic staff using LongevityPRO
• **Clients** using the LongevityME app at the invitation of their practitioner

This policy does **not** cover:

• Independent privacy practices of your practitioner, clinic, or any third-party services they use
• Third-party websites, apps, or services linked from our platform

Your practitioner or clinic may have their own privacy notices or legal obligations (including health privacy laws) in addition to this policy.`
  },
  {
    id: 'information-collected',
    title: '3. Information We Collect',
    subsections: [
      {
        subtitle: '3.1 Information You Provide Directly',
        content: `**Account & profile information (Practitioners & Clients)**

• Name, email address, password (hashed), phone number
• Professional details (for practitioners): clinic name, specialty, role, license information (if provided)
• Demographic details you choose to share (e.g., date of birth, gender)

**Health, wellness & lifestyle information (Clients)**

Provided through intake forms, questionnaires, or updates from your practitioner, such as:

• Health goals, lifestyle preferences, sleep patterns, stress levels, diet, exercise habits
• Longitudinal data related to your longevity plan and progress
• Notes your practitioner records about you within the platform

**Lab & biomarker data (Clients)**

Depending on how your practitioner uses the platform, this may include:

• Lab test names, dates, and results
• Biomarker values (e.g., blood, urine, toxicity, other diagnostics)
• Summaries and interpretations prepared by practitioners or experts

**Communication & support**

• Messages exchanged via in-platform messaging between you and your practitioner or clinic
• Emails or messages you send to our support team
• Feedback, survey responses, or feature requests

**Billing & payment-related information**

We do not typically process full payment card numbers ourselves. However, we may collect:

• Billing contact details
• Subscription details, invoices, and transaction metadata

Payment processing is handled by third-party providers (e.g., Stripe or similar), who collect and process card data in accordance with their own privacy policies and applicable standards (e.g., PCI-DSS).`
      },
      {
        subtitle: '3.2 Information Collected Automatically',
        content: `When you use our Services, we and our service providers may automatically collect:

• **Device information:** device type, operating system, browser type, language settings
• **Log data:** IP address, access times, pages viewed, referring pages/URLs
• **Usage data:** features used, clicks, time on pages or screens, error logs, performance data

We may use cookies and similar technologies (e.g., local storage, pixels, SDKs) to support core functionality (e.g., login, session management) and to understand how the Services are used.`
      },
      {
        subtitle: '3.3 Information from Third Parties',
        content: `We may receive information about you from:

• **Your practitioner or clinic** (for clients): when they invite you, update your profile, or upload lab/biomarker information
• **Third-party tools or integrations** authorized by your practitioner or clinic (e.g., lab systems, scheduling tools, payment providers)
• **Analytics and infrastructure providers** who help us monitor performance and usage in a privacy-conscious way

We process this information in line with this Privacy Policy and any applicable agreements with your practitioner or clinic.`
      }
    ]
  },
  {
    id: 'how-we-use',
    title: '4. How We Use Your Information',
    subsections: [
      {
        subtitle: '4.1 To Provide and Maintain the Services',
        content: `• Creating and managing user accounts and profiles
• Enabling practitioners to onboard clients and manage their lifecycle
• Displaying lab results, biomarker data, and personalized plans to clients
• Supporting communication between practitioners and clients
• Providing secure access to the LongevityPRO and LongevityME applications`
      },
      {
        subtitle: '4.2 To Personalize and Improve the Experience',
        content: `• Tailoring content and recommendations within the platform
• Improving our features, user interface, and workflows
• Analyzing usage trends to inform product development`
      },
      {
        subtitle: '4.3 To Communicate with You',
        content: `• Transactional emails and notifications (e.g., account verification, invitations, appointment reminders, plan updates, security alerts)
• Service and feature updates when relevant to your account
• Responding to support requests and feedback

You can control certain non-essential communications via settings or unsubscribe links where provided.`
      },
      {
        subtitle: '4.4 Security, Legal, and Compliance',
        content: `• Protecting the security and integrity of our Services
• Detecting, investigating, and preventing fraud, abuse, or security incidents
• Complying with legal obligations and responding to lawful requests (e.g., from regulators or law enforcement, where applicable)
• Enforcing our Terms of Use and other agreements`
      }
    ]
  },
  {
    id: 'legal-bases',
    title: '5. Legal Bases for Processing (EEA/UK Users)',
    content: `If you are located in the European Economic Area (EEA) or the United Kingdom (UK), we process your personal data under the following legal bases:

• **Contractual necessity:** to provide the Services to you or your clinic/practitioner
• **Legitimate interests:** to secure and improve our Services, prevent abuse, and understand usage, provided these interests are not overridden by your rights and interests
• **Consent:** where required (e.g., certain marketing communications or cookies); you can withdraw consent at any time
• **Compliance with legal obligations:** where we must process data to comply with applicable law`
  },
  {
    id: 'sharing',
    title: '6. How We Share Your Information',
    content: `We do **not** sell your personal information.

We may share your information with:`,
    subsections: [
      {
        subtitle: '6.1 Your Practitioner or Clinic (for Clients)',
        content: `Your practitioner/clinic and their authorized staff can view your information within the platform to provide you with care, coaching, and longevity planning, consistent with how they use the Services.`
      },
      {
        subtitle: '6.2 Service Providers',
        content: `Trusted third parties that support our operations, such as:

• Cloud hosting and infrastructure providers
• Email delivery providers (e.g., for transactional/notification emails)
• Payments and billing providers
• Analytics and monitoring tools
• Customer support and communication tools

These providers are authorized to process your information only as necessary to provide their services to us, under appropriate contractual and security safeguards.`
      },
      {
        subtitle: '6.3 Business Transfers',
        content: `If we are involved in a merger, acquisition, financing, reorganization, or sale of all or part of our business, your information may be transferred as part of that transaction, subject to continued protection consistent with this policy.`
      },
      {
        subtitle: '6.4 Legal and Safety',
        content: `We may disclose information if we believe in good faith that it is reasonably necessary to:

• Comply with applicable law, regulation, or legal process
• Respond to valid requests from public authorities (e.g., law enforcement, regulators)
• Protect the rights, property, or safety of LongevityPRO, our users, or the public`
      }
    ]
  },
  {
    id: 'international-transfers',
    title: '7. International Data Transfers',
    content: `We are based in the United States. If you are accessing the Services from outside the U.S., your information may be processed in the U.S. and other countries where our service providers are located.

Where required, we implement appropriate safeguards for international data transfers (such as standard contractual clauses or equivalent mechanisms) in line with applicable data protection laws.`
  },
  {
    id: 'data-retention',
    title: '8. Data Retention',
    content: `We retain your information for as long as:

• Your account is active, or
• We have a legitimate business need to do so (e.g., to provide the Services, comply with legal obligations, resolve disputes, or enforce our agreements)

When we no longer have a legitimate need to process your information, we will delete, anonymize, or securely store it until deletion is possible. In many cases, the retention of client data is driven by the practitioner's or clinic's legal and professional obligations.

If you request deletion, we will also coordinate with your practitioner or clinic where appropriate (see **Your Rights** below).`
  },
  {
    id: 'your-rights',
    title: '9. Your Rights & Choices',
    content: `Depending on your location and applicable law, you may have some or all of the following rights:

• **Access:** request a copy of the personal data we hold about you
• **Correction:** request that we correct inaccurate or incomplete data
• **Deletion:** request deletion of your personal data, subject to legal and contractual requirements
• **Restriction:** request limitation of our processing in certain circumstances
• **Portability:** request a structured, commonly used, machine-readable copy of certain data
• **Objection:** object to processing based on our legitimate interests or to direct marketing
• **Withdraw consent:** where processing is based on consent, you may withdraw it at any time

If you are a **client** of a practitioner or clinic using LongevityPRO, many aspects of your record are controlled by your practitioner/clinic. In such cases, we may direct you to contact your practitioner/clinic to exercise certain rights, and we will assist them as needed.

To exercise your rights, contact us at **support@longevitypro.ai**. We may need to verify your identity before fulfilling your request.

If you are located in the EEA/UK and believe your rights have been violated, you also have the right to lodge a complaint with your local data protection authority.`
  },
  {
    id: 'cookies',
    title: '10. Cookies and Similar Technologies',
    content: `We use cookies and similar technologies to:

• Keep you logged in and maintain session security
• Understand how our website and apps are used
• Improve performance and user experience

Where required by law, we will provide a cookie banner or settings to manage certain cookie preferences.`
  },
  {
    id: 'children',
    title: "11. Children's Privacy",
    content: `Our Services are intended for use by **adults and authorized practitioners**. Clients may be minors in some jurisdictions, but their accounts are typically managed by practitioners and/or their legal guardians.

We do not knowingly collect personal information from children directly without appropriate consent consistent with applicable laws. If you believe we have collected personal information from a child in a way that is not permitted, please contact us at **support@longevitypro.ai**, and we will take appropriate steps.`
  },
  {
    id: 'third-party-links',
    title: '12. Third-Party Links',
    content: `Our Services may contain links to third-party websites, apps, or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing them with your information.`
  },
  {
    id: 'security',
    title: '13. Security',
    content: `We use reasonable technical and organizational measures designed to protect your information, including:

• Encryption in transit (e.g., HTTPS/TLS)
• Access controls and authentication for our systems
• Regular monitoring and logging

No system can be 100% secure. If you have reason to believe your account or interaction with us is no longer secure, please contact us immediately.`
  },
  {
    id: 'changes',
    title: '14. Changes to This Privacy Policy',
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, or legal requirements.

When we make material changes, we will update the "Last updated" date at the top and may provide additional notice (e.g., via email or in-app notification). Your continued use of the Services after any changes indicates your acceptance of the updated policy.`
  },
  {
    id: 'subscriptions',
    title: '15. Subscription & Billing',
    content: `LongevityPRO offers two types of subscriptions to access the full range of platform features:`,
    subsections: [
      {
        subtitle: '15.1 Client Annual Subscription (£60/year)',
        content: `**What is the Client Subscription?**

When a practitioner creates a diagnostic test order or quote for a client, an annual subscription fee of **£60** is automatically added to the total price. This subscription unlocks the full LongevityME experience for one year, including access to test results, personalized plans, and health tracking.

**Free Trial for Practitioners**

Practitioners receive **3 complimentary client subscriptions** when they start using the platform. This means the first 3 clients for whom a test order or quote is created will not be charged the subscription fee. After the trial quota is exhausted, subsequent orders and quotes will include the £60 annual subscription.

**Renewal**

• After 12 months, the client's annual subscription must be renewed to continue accessing premium features
• Even clients who were covered under the practitioner's free trial quota will need to pay the subscription fee upon renewal
• The renewal fee will be added to the next test order or quote for that client`
      },
      {
        subtitle: '15.2 Practitioner Monthly Subscription (£50/month)',
        content: `**What is the Practitioner Subscription?**

Practitioners must subscribe to the **LongevityPRO practitioner platform** to access all practitioner tools, including client management, diagnostic ordering, quote creation, plan generation, and billing features. The subscription costs **£50 per month**.

**Free Trial**

• New practitioners receive a **30-day free trial** upon registration
• Your payment method is saved but will not be charged until the trial period ends
• You may cancel at any time during the trial to avoid billing

**What Happens If You Don't Subscribe?**

• New practitioners who have not yet subscribed cannot access the practitioner workspace tools
• If a subscription lapses (e.g., payment fails or is not renewed), the practitioner can still **view existing data** (clients, orders, plans) but **cannot create new items** until the subscription is reactivated

**Managing Your Subscription**

You can manage your subscription, update payment methods, and view billing history from the **Subscription** section in your practitioner dashboard. For assistance, contact **support@longevitypro.ai**.`
      }
    ]
  },
  {
    id: 'contact',
    title: '16. How to Contact Us',
    content: `If you have questions or concerns about this Privacy Policy or our data practices, you can contact us at:

**LongevityPRO**
3101 Park Blvd 1st Floor, Palo Alto, CA 94306
United States

**Email:** support@longevitypro.ai`
  }
];

function PolicyContent({ text }: { text: string }) {
  if (!text) return null;
  return (
        <div className="prose prose-sm sm:prose-base text-gray-600 max-w-none">
        {text.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('•')) {
            const items = paragraph.split('\n').filter(item => item.trim());
            return (
                <ul key={idx} className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
                {items.map((item, itemIdx) => (
                    <li key={itemIdx} className="leading-relaxed">
                    {item.replace(/^• /, '')}
                    </li>
                ))}
                </ul>
            );
            }
            
            // Simple bold replacement
            const parts = paragraph.split(/(\*\*.*?\*\*)/g);
            return (
            <p key={idx} className="mb-4 text-gray-700 leading-relaxed">
                {parts.map((part, partIdx) => 
                   part.startsWith('**') && part.endsWith('**') ? 
                   <strong key={partIdx} className="font-semibold text-gray-900">{part.slice(2, -2)}</strong> : 
                   part
                )}
            </p>
            );
        })}
        </div>
  )
}


export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="relative bg-gray-900 py-16 sm:py-24">
         <div className="absolute inset-0 overflow-hidden">
             <div className="absolute inset-0 bg-gray-900/90" />
         </div>
         <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Privacy Policy</h1>
            <p className="mt-4 text-lg text-gray-300">
                Last updated: 18 Nov 2025
            </p>
         </div>
      </div>

      <main className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 xl:grid-cols-[280px_1fr] gap-12">
            {/* Sidebar Navigation */}
            <aside className="hidden xl:block xl:sticky xl:top-24 xl:self-start xl:max-h-[calc(100vh-8rem)] xl:overflow-y-auto pr-4">
              <nav className="mb-8">
                <ul className="space-y-1 relative border-l border-gray-200 ml-3">
                  {privacyPolicySections.map((section) => (
                    <li key={section.id} className="-ml-px">
                      <Link
                        href={`#${section.id}`}
                        className="block py-2 px-4 text-sm text-gray-500 hover:text-primary hover:border-l-2 hover:border-primary transition-all border-l-2 border-transparent"
                      >
                        {section.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Main Content */}
            <div className="max-w-4xl">
              <div className="mb-12">
                 <p className="text-gray-700 leading-relaxed mb-4">
                  Welcome to <strong className="font-semibold text-gray-900">LongevityPRO</strong>. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our services.
                </p>
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 text-sm text-gray-500 italic">
                  <strong>Important:</strong> This document is for general informational purposes only and is not legal advice.
                </div>
              </div>

              <div className="space-y-20">
                {privacyPolicySections.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-24">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-3">
                      {section.title}
                    </h2>
                    
                    {section.content && <PolicyContent text={section.content} />}

                    {section.subsections && (
                      <div className="space-y-8 mt-6">
                        {section.subsections.map((subsection, subIdx) => (
                          <div key={subIdx} className="pl-6 border-l-2 border-gray-100">
                            <h3 className="text-xl font-bold mb-4 text-gray-900">{subsection.subtitle}</h3>
                             <PolicyContent text={subsection.content} />
                          </div>
                        ))}
                      </div>
                    )}
                  </section>
                ))}
              </div>

              {/* Contact CTA */}
              <div className="mt-16 bg-white border border-gray-200 rounded-xl shadow-sm p-8">
                  <h2 className="text-2xl font-bold mb-4">Questions About Your Privacy?</h2>
                  <p className="text-gray-600 mb-6">
                    If you have any questions or concerns about this Privacy Policy or how we handle your data, 
                    we&apos;re here to help.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Email us at</p>
                        <a href="mailto:support@longevitypro.ai" className="font-semibold text-gray-900 hover:text-primary transition-colors">
                          support@longevitypro.ai
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Visit us at</p>
                        <p className="font-semibold text-gray-900">3101 Park Blvd 1st Floor</p>
                        <p className="text-sm text-gray-600">Palo Alto, CA 94306, USA</p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
