import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FileText,
  Briefcase,
  Home,
  Plane,
  Heart,
  Shield,
  CheckCircle,
} from "lucide-react";

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Relocation Guide
          </h1>
          <p className="text-lg text-gray-600">
            Everything you need to know about moving to Aruba, organized by
            category
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="max-w-4xl mx-auto space-y-6 mb-12">
          <Card>
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <CardTitle>1. Documentation & Visa Requirements</CardTitle>
                  <CardDescription className="mt-2">
                    Essential documents and permits you&apos;ll need
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Valid Passport</p>
                  <p className="text-sm text-gray-600">
                    Must be valid for at least 6 months beyond your stay
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Residence Permit</p>
                  <p className="text-sm text-gray-600">
                    Apply through DIMAS (Department of Integration, Management &
                    Admission of Foreigners)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">
                    Birth Certificate & Police Clearance
                  </p>
                  <p className="text-sm text-gray-600">
                    Apostilled and translated to Dutch or English
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Proof of Financial Means</p>
                  <p className="text-sm text-gray-600">
                    Bank statements or employment contract showing sufficient
                    income
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Briefcase className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <CardTitle>2. Employment & Business</CardTitle>
                  <CardDescription className="mt-2">
                    Working or starting a business in Aruba
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Work Permit</p>
                  <p className="text-sm text-gray-600">
                    Required for employment - your employer typically handles
                    the application
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Business License</p>
                  <p className="text-sm text-gray-600">
                    Register with the Chamber of Commerce (KvK) to start a
                    business
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Tax Registration</p>
                  <p className="text-sm text-gray-600">
                    Register with the Tax Department for BBO (business tax) and
                    income tax
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Home className="h-6 w-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <CardTitle>3. Housing & Living</CardTitle>
                  <CardDescription className="mt-2">
                    Finding your new home and getting settled
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Rental Market</p>
                  <p className="text-sm text-gray-600">
                    Expect $1,200-$3,000/month for 2-3 bedroom homes. Popular
                    areas include Eagle Beach, Noord, and Oranjestad
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Utilities Setup</p>
                  <p className="text-sm text-gray-600">
                    Register for electricity (Elmar), water (WEB Aruba), and
                    internet (Setar, Digicel)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Transportation</p>
                  <p className="text-sm text-gray-600">
                    Import your vehicle or buy locally. Public transportation is
                    limited, most residents drive
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <CardTitle>4. Healthcare & Insurance</CardTitle>
                  <CardDescription className="mt-2">
                    Medical care and health insurance requirements
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Health Insurance</p>
                  <p className="text-sm text-gray-600">
                    Mandatory for all residents. Main providers: AZV
                    (government), Fatum, and Guardian Group
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Medical Facilities</p>
                  <p className="text-sm text-gray-600">
                    Dr. Horacio E. Oduber Hospital is the main facility with
                    modern healthcare services
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="bg-pink-100 p-3 rounded-lg">
                  <Heart className="h-6 w-6 text-pink-600" />
                </div>
                <div className="flex-1">
                  <CardTitle>5. Lifestyle & Integration</CardTitle>
                  <CardDescription className="mt-2">
                    Adapting to island life and local culture
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Language</p>
                  <p className="text-sm text-gray-600">
                    Official languages are Dutch and Papiamento. English and
                    Spanish are widely spoken
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Cost of Living</p>
                  <p className="text-sm text-gray-600">
                    Higher than US/Europe average. Groceries and imported goods
                    are expensive, but no income tax up to first bracket
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Community</p>
                  <p className="text-sm text-gray-600">
                    Join expat groups, attend local events, and embrace the
                    &ldquo;Dushi&rdquo; lifestyle
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <Plane className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <CardTitle>6. Final Steps Before Moving</CardTitle>
                  <CardDescription className="mt-2">
                    Last preparations before your departure
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Shipping & Logistics</p>
                  <p className="text-sm text-gray-600">
                    Plan container shipping 6-8 weeks in advance. Consider
                    customs duties on household goods
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Banking</p>
                  <p className="text-sm text-gray-600">
                    Open a local bank account (Aruba Bank, Caribbean Mercantile
                    Bank, RBC Royal Bank)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Pet Relocation</p>
                  <p className="text-sm text-gray-600">
                    If bringing pets, ensure vaccinations, microchip, and import
                    permits are in order
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-50 rounded-xl p-8 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Need Personalized Help?</h2>
          <p className="text-gray-600 mb-6">
            Our AI assistant can answer specific questions about your relocation
            situation and help you navigate the process step by step.
          </p>
          <a
            href="/chat"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition-colors"
          >
            Ask the AI Assistant
          </a>
        </div>
      </div>
    </div>
  );
}
