import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Mail, Phone } from "lucide-react";

interface ContactSalesModalProps {
  children: React.ReactNode;
}

const ContactSalesModal = ({ children }: ContactSalesModalProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
        <div className="bg-gradient-to-br from-primary to-primary/90 p-6 text-primary-foreground">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display font-bold text-white">
              Contact Sales
            </DialogTitle>
            <p className="text-primary-foreground/80 text-sm mt-2">
              Get in touch with our team to discuss your project requirements.
            </p>
          </DialogHeader>
          <div className="flex gap-6 mt-4">
            <a href="mailto:contact@xantumcomputing.com" className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              contact@xantumcomputing.com
            </a>
            <a href="tel:+919741263932" className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              +91-9741263932
            </a>
          </div>
        </div>
        
        <form className="p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="modal-firstName">First Name *</Label>
              <Input 
                id="modal-firstName" 
                placeholder="John" 
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="modal-lastName">Last Name *</Label>
              <Input 
                id="modal-lastName" 
                placeholder="Doe" 
                className="h-11"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="modal-email">Work Email *</Label>
            <Input 
              id="modal-email" 
              type="email" 
              placeholder="john@company.com" 
              className="h-11"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="modal-company">Company Name *</Label>
            <Input 
              id="modal-company" 
              placeholder="Your Company" 
              className="h-11"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="modal-message">How can we help? *</Label>
            <Textarea 
              id="modal-message" 
              placeholder="Tell us about your project or inquiry..."
              className="min-h-[100px] resize-none"
            />
          </div>
          <Button type="submit" className="w-full h-12 text-base font-semibold">
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            We'll get back to you within 24 hours.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactSalesModal;