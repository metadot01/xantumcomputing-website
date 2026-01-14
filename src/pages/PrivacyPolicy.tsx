import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>
          
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Xantum Computing ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We may collect information about you in various ways, including:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Personal Data:</strong> Name, email address, phone number, company name when you contact us or submit forms.</li>
                <li><strong>Usage Data:</strong> Information about how you access and use our website, including IP address, browser type, pages visited.</li>
                <li><strong>Cookies:</strong> Small data files stored on your device. See our Cookie Policy for more details.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Send you updates, marketing communications (with your consent)</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Legal Basis for Processing (GDPR)</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Under GDPR, we process your data based on:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Consent:</strong> When you have given clear consent for processing.</li>
                <li><strong>Contract:</strong> When processing is necessary for a contract with you.</li>
                <li><strong>Legitimate Interests:</strong> When we have a legitimate business interest.</li>
                <li><strong>Legal Obligation:</strong> When we must comply with the law.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Under GDPR, you have the right to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Access your personal data</li>
                <li>Rectify inaccurate data</li>
                <li>Request erasure of your data</li>
                <li>Restrict or object to processing</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, or as required by law. When data is no longer needed, we securely delete or anonymize it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at:
              </p>
              <p className="text-muted-foreground mt-2">
                <strong>Email:</strong> privacy@xantumcomputing.com<br />
                <strong>Address:</strong> Madhugiri, Karnataka, India
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
