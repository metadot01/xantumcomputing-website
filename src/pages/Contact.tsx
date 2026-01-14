import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send, Building2, Globe, ArrowRight } from "lucide-react";

const Contact = () => {
  const offices = [
    {
      name: "Madhugiri Office",
      address: "KSRTC Bus Stand Road, Madhugiri 572132",
      country: "India",
      type: "Headquarters",
    },
    {
      name: "Bangalore Office",
      address: "1772, Judicial Layout, Near Kempegowda International Airport, Bangalore 560065",
      country: "India",
      type: "Branch Office",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Enterprise Solutions Partner</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Let's Build the <span className="text-gradient">Future Together</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Partner with us to transform your business with cutting-edge AI and blockchain solutions. 
              Our team of experts is ready to help you innovate.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="py-6 bg-primary/5 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <a href="mailto:contact@xantumcomputing.com" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                contact@xantumcomputing.com
              </span>
            </a>
            <a href="tel:+919741263932" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                +91-9741263932
              </span>
            </a>
            <a href="tel:08137200387" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                08137-200387
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            
            {/* Contact Form - Takes 3 columns */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Send className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                      Send us a Message
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                  
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-foreground font-medium">First Name *</Label>
                        <Input 
                          id="firstName" 
                          placeholder="John" 
                          className="h-12 bg-background/50 border-border focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-foreground font-medium">Last Name *</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Doe" 
                          className="h-12 bg-background/50 border-border focus:border-primary"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground font-medium">Email Address *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="john@company.com" 
                          className="h-12 bg-background/50 border-border focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-foreground font-medium">Phone Number</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="+91 98765 43210" 
                          className="h-12 bg-background/50 border-border focus:border-primary"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-foreground font-medium">Company Name *</Label>
                      <Input 
                        id="company" 
                        placeholder="Your Company" 
                        className="h-12 bg-background/50 border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-foreground font-medium">Subject *</Label>
                      <Input 
                        id="subject" 
                        placeholder="How can we help your business?" 
                        className="h-12 bg-background/50 border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground font-medium">Message *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your project requirements, timeline, and any specific challenges you're facing..."
                        className="min-h-[150px] bg-background/50 border-border focus:border-primary resize-none"
                      />
                    </div>
                    <Button type="submit" className="w-full h-12 text-base font-semibold" size="lg">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Info - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              {/* Office Locations */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-secondary" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground">
                    Our Offices
                  </h2>
                </div>
                <div className="space-y-4">
                  {offices.map((office) => (
                    <div 
                      key={office.name}
                      className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-foreground">{office.name}</h3>
                            <span className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">
                              {office.type}
                            </span>
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                            {office.address}
                          </p>
                          <span className="inline-flex items-center gap-1 text-xs font-medium text-primary">
                            <MapPin className="w-3 h-3" />
                            {office.country}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Details Card */}
              <div className="bg-gradient-to-br from-primary/10 via-card to-secondary/10 rounded-2xl p-8 border border-border relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
                
                <div className="relative z-10">
                  <h3 className="font-display text-xl font-bold text-foreground mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-5">
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <a href="mailto:contact@xantumcomputing.com" className="text-foreground font-medium hover:text-primary transition-colors">
                          contact@xantumcomputing.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone (Primary)</p>
                        <a href="tel:+919741263932" className="text-foreground font-medium hover:text-primary transition-colors">
                          +91-9741263932
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone (Landline)</p>
                        <a href="tel:08137200387" className="text-foreground font-medium hover:text-primary transition-colors">
                          08137-200387
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Business Hours</p>
                        <span className="text-foreground font-medium">Mon - Sat: 9:00 AM - 6:00 PM IST</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-6 text-primary-foreground">
                <h3 className="font-display text-lg font-bold mb-2">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  Schedule a free consultation with our experts to discuss your project requirements.
                </p>
                <Button variant="secondary" className="w-full">
                  Schedule a Call
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
