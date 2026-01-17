import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSalesSchema, ContactSalesFormData, sanitizeForMailto } from "@/lib/form-validation";
import { useToast } from "@/hooks/use-toast";

interface ContactSalesModalProps {
  children: React.ReactNode;
}

const ContactSalesModal = ({ children }: ContactSalesModalProps) => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactSalesFormData>({
    resolver: zodResolver(contactSalesSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactSalesFormData) => {
    // Sanitize all inputs before using in mailto
    const sanitizedData = {
      firstName: sanitizeForMailto(data.firstName),
      lastName: sanitizeForMailto(data.lastName),
      email: sanitizeForMailto(data.email),
      company: sanitizeForMailto(data.company),
      message: sanitizeForMailto(data.message),
    };

    const emailBody = `
Contact Request from ${sanitizedData.firstName} ${sanitizedData.lastName}

Company: ${sanitizedData.company}
Email: ${sanitizedData.email}

Message:
${sanitizedData.message}
    `.trim();

    const mailtoLink = `mailto:contact@xantumcomputing.com?subject=${encodeURIComponent(
      `Sales Inquiry from ${sanitizedData.firstName} ${sanitizedData.lastName} - ${sanitizedData.company}`
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;

    toast({
      title: "Email client opened",
      description: "Please send the email to complete your inquiry.",
    });

    reset();
    setOpen(false);
  };

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
        
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="modal-firstName">First Name *</Label>
              <Input 
                id="modal-firstName" 
                placeholder="John" 
                className="h-11"
                maxLength={50}
                {...register("firstName")}
              />
              {errors.firstName && (
                <p className="text-sm text-destructive">{errors.firstName.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="modal-lastName">Last Name *</Label>
              <Input 
                id="modal-lastName" 
                placeholder="Doe" 
                className="h-11"
                maxLength={50}
                {...register("lastName")}
              />
              {errors.lastName && (
                <p className="text-sm text-destructive">{errors.lastName.message}</p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="modal-email">Work Email *</Label>
            <Input 
              id="modal-email" 
              type="email" 
              placeholder="john@company.com" 
              className="h-11"
              maxLength={100}
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="modal-company">Company Name *</Label>
            <Input 
              id="modal-company" 
              placeholder="Your Company" 
              className="h-11"
              maxLength={100}
              {...register("company")}
            />
            {errors.company && (
              <p className="text-sm text-destructive">{errors.company.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="modal-message">How can we help? *</Label>
            <Textarea 
              id="modal-message" 
              placeholder="Tell us about your project or inquiry..."
              className="min-h-[100px] resize-none"
              maxLength={2000}
              {...register("message")}
            />
            {errors.message && (
              <p className="text-sm text-destructive">{errors.message.message}</p>
            )}
          </div>
          <Button type="submit" className="w-full h-12 text-base font-semibold" disabled={isSubmitting}>
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
