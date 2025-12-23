"use client";

import * as React from "react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { contactSchema, type ContactFormValues } from "@/lib/schemas";
import { Loader2, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export function Contact() {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [errors, setErrors] = React.useState<Partial<ContactFormValues>>({});

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setErrors({});
    setSuccess(false);

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    const result = contactSchema.safeParse(data);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      const formattedErrors: Partial<ContactFormValues> = {};
      
      if (fieldErrors.name) formattedErrors.name = fieldErrors.name[0];
      if (fieldErrors.email) formattedErrors.email = fieldErrors.email[0];
      if (fieldErrors.message) formattedErrors.message = fieldErrors.message[0];
      
      setErrors(formattedErrors);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setSuccess(true);
      (event.target as HTMLFormElement).reset();
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Section id="contact" className="mb-20">
      <div className="max-w-xl mx-auto space-y-12 text-center">
        <h2 className="text-3xl font-mono font-bold text-primary">
          <span className="text-secondary mr-2">05.</span>Get In Touch
        </h2>

        <p className="text-muted">
          Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-mono text-secondary">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className={cn(
                  "w-full bg-transparent border-b border-primary/30 p-2 focus:border-primary focus:outline-none transition-colors",
                  errors.name && "border-red-500"
              )}
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-xs text-red-500 font-mono">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-mono text-secondary">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className={cn(
                  "w-full bg-transparent border-b border-primary/30 p-2 focus:border-primary focus:outline-none transition-colors",
                  errors.email && "border-red-500"
              )}
              placeholder="yourname@email.com"
            />
             {errors.email && <p className="text-xs text-red-500 font-mono">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-mono text-secondary">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className={cn(
                "w-full bg-transparent border-b border-primary/30 p-2 focus:border-primary focus:outline-none transition-colors resize-none",
                errors.message && "border-red-500"
              )}
              placeholder="Your message here..."
            />
             {errors.message && <p className="text-xs text-red-500 font-mono">{errors.message}</p>}
          </div>

          <Button type="submit" disabled={loading} className="w-full h-12">
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin mr-2" />
            ) : (
              <Send className="w-5 h-5 mr-2" />
            )}
            {loading ? "Sending..." : "Send Message"}
          </Button>

          {success && (
            <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-500 rounded-md text-center font-mono text-sm">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}
        </form>
      </div>
    </Section>
  );
}
