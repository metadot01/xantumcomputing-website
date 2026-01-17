import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Upload, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { jobApplicationSchema, JobApplicationFormData, sanitizeForMailto } from "@/lib/form-validation";

interface JobApplicationModalProps {
  children: React.ReactNode;
  jobTitle: string;
  location: string;
}

const JobApplicationModal = ({ children, jobTitle, location }: JobApplicationModalProps) => {
  const [open, setOpen] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<JobApplicationFormData>({
    resolver: zodResolver(jobApplicationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      linkedIn: "",
      coverLetter: "",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 5MB",
          variant: "destructive",
        });
        return;
      }
      setResumeFile(file);
    }
  };

  const onSubmit = (data: JobApplicationFormData) => {
    // Sanitize all inputs before using in mailto
    const sanitizedData = {
      firstName: sanitizeForMailto(data.firstName),
      lastName: sanitizeForMailto(data.lastName),
      email: sanitizeForMailto(data.email),
      phone: data.phone ? sanitizeForMailto(data.phone) : "",
      linkedIn: data.linkedIn ? sanitizeForMailto(data.linkedIn) : "",
      coverLetter: data.coverLetter ? sanitizeForMailto(data.coverLetter) : "",
    };

    // Construct email body
    const emailBody = `
Job Application for: ${sanitizeForMailto(jobTitle)}
Location: ${sanitizeForMailto(location)}

APPLICANT DETAILS
-----------------
Name: ${sanitizedData.firstName} ${sanitizedData.lastName}
Email: ${sanitizedData.email}
Phone: ${sanitizedData.phone || "Not provided"}
LinkedIn: ${sanitizedData.linkedIn || "Not provided"}

COVER LETTER
------------
${sanitizedData.coverLetter || "Not provided"}

---
Note: Please attach your resume to this email before sending.
    `.trim();

    // Open email client
    const mailtoLink = `mailto:careers@xantumcomputing.com?subject=${encodeURIComponent(
      `Application for ${sanitizeForMailto(jobTitle)} - ${sanitizedData.firstName} ${sanitizedData.lastName}`
    )}&body=${encodeURIComponent(emailBody)}`;
    
    window.location.href = mailtoLink;

    toast({
      title: "Email client opened",
      description: "Please attach your resume and send the email to complete your application.",
    });

    // Reset form and close modal
    reset();
    setResumeFile(null);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">Apply for {jobTitle}</DialogTitle>
          <DialogDescription>
            Fill out the form below. Your email client will open with the application details pre-filled.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                placeholder="John"
                maxLength={50}
                {...register("firstName")}
              />
              {errors.firstName && (
                <p className="text-sm text-destructive">{errors.firstName.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                placeholder="Doe"
                maxLength={50}
                {...register("lastName")}
              />
              {errors.lastName && (
                <p className="text-sm text-destructive">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="john.doe@example.com"
              maxLength={100}
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+91 98765 43210"
              maxLength={20}
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="linkedIn">LinkedIn Profile</Label>
            <Input
              id="linkedIn"
              type="url"
              placeholder="https://linkedin.com/in/yourprofile"
              maxLength={200}
              {...register("linkedIn")}
            />
            {errors.linkedIn && (
              <p className="text-sm text-destructive">{errors.linkedIn.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="resume">Resume (PDF, DOC, DOCX)</Label>
            <div className="border-2 border-dashed border-border rounded-lg p-4 text-center hover:border-primary/50 transition-colors">
              <input
                id="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
              />
              <label htmlFor="resume" className="cursor-pointer">
                {resumeFile ? (
                  <div className="flex items-center justify-center gap-2 text-primary">
                    <FileText className="w-5 h-5" />
                    <span>{resumeFile.name}</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <Upload className="w-8 h-8" />
                    <span className="text-sm">Click to upload your resume</span>
                    <span className="text-xs">You'll need to attach it to the email manually</span>
                  </div>
                )}
              </label>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="coverLetter">Cover Letter (Optional)</Label>
            <Textarea
              id="coverLetter"
              placeholder="Tell us why you're interested in this role and what makes you a great fit..."
              rows={4}
              maxLength={3000}
              {...register("coverLetter")}
            />
            {errors.coverLetter && (
              <p className="text-sm text-destructive">{errors.coverLetter.message}</p>
            )}
          </div>

          <div className="bg-muted/50 rounded-lg p-4 text-sm text-muted-foreground">
            <p className="flex items-start gap-2">
              <span className="text-primary font-bold">Note:</span>
              <span>
                Clicking submit will open your email client with your application details. 
                Please attach your resume to the email before sending.
              </span>
            </p>
          </div>

          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            <Send className="w-4 h-4 mr-2" />
            Open Email to Apply
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default JobApplicationModal;
