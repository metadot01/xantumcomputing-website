import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>
          
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using the services provided by Xantum Computing ("Company", "we", "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Xantum Computing provides enterprise AI, blockchain, and technology consulting services. Our services include but are not limited to software development, data analytics, machine learning solutions, and blockchain implementation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">When using our services, you agree to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not interfere with or disrupt our services</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content, trademarks, and intellectual property on our website and in our services are owned by Xantum Computing or our licensors. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed">
                Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of our business relationship. This obligation survives the termination of any agreement between us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, Xantum Computing shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount paid by you for the services in question.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify and hold harmless Xantum Computing, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our services or violation of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to terminate or suspend your access to our services at any time, with or without cause, and with or without notice. Upon termination, your right to use our services will immediately cease.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Karnataka, India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of significant changes by posting a notice on our website. Your continued use of our services after such changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-muted-foreground mt-2">
                <strong>Email:</strong> legal@xantumcomputing.com<br />
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

export default TermsOfService;
