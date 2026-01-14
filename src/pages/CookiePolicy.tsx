import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">Cookie Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>
          
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. What Are Cookies?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners. Cookies help us enhance your browsing experience and understand how you interact with our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Types of Cookies We Use</h2>
              
              <div className="space-y-4">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Essential Cookies</h3>
                  <p className="text-muted-foreground text-sm">
                    These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas. The website cannot function properly without these cookies.
                  </p>
                </div>
                
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Analytics Cookies</h3>
                  <p className="text-muted-foreground text-sm">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the website's functionality and user experience.
                  </p>
                </div>
                
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Functional Cookies</h3>
                  <p className="text-muted-foreground text-sm">
                    These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings. They may be set by us or by third-party providers whose services we have added to our pages.
                  </p>
                </div>
                
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Marketing Cookies</h3>
                  <p className="text-muted-foreground text-sm">
                    These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for individual users. We only use these with your explicit consent.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. How to Manage Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You can control and manage cookies in various ways:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or accept cookies through their settings. Check your browser's help section for instructions.</li>
                <li><strong>Our Cookie Banner:</strong> When you first visit our website, you can choose which types of cookies to accept through our cookie consent banner.</li>
                <li><strong>Withdraw Consent:</strong> You can withdraw your consent at any time by clearing your browser cookies and revisiting our website.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Third-Party Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Some cookies on our website are placed by third parties, such as analytics providers. These third parties have their own privacy policies governing how they use your information. We recommend reviewing the privacy policies of these third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Cookie Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies have different retention periods. Session cookies are deleted when you close your browser, while persistent cookies remain on your device for a set period or until you delete them. Our cookies typically expire within 12 months.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights Under GDPR</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Under the General Data Protection Regulation (GDPR), you have the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Be informed about what cookies we use and why</li>
                <li>Give or withdraw consent for non-essential cookies</li>
                <li>Access information about cookies stored on your device</li>
                <li>Request deletion of cookie data we hold about you</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Updates to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about our use of cookies, please contact us at:
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

export default CookiePolicy;
