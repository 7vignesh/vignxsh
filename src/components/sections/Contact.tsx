'use client';

import React, { useState } from 'react';
import { Section, Button, Card } from '@/components/ui';
import { Input, Textarea } from '@/components/ui/Input';
import Icon from '@/components/ui/Icon';
import { socialLinks, personalInfo } from '@/data/portfolio';
import { ContactFormData } from '@/types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Have a project in mind or want to collaborate? Let's talk!"
      className="bg-gradient-to-b from-background via-card/20 to-background"
    >
      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Let&apos;s work together
            </h3>
            <p className="text-muted leading-relaxed">
              I&apos;m always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-accent/10 text-accent">
                <Icon name="email" size={24} />
              </div>
              <div>
                <p className="text-sm text-muted">Email</p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-white hover:text-accent transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            {personalInfo.location && (
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-accent/10 text-accent">
                  <Icon name="location" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted">Location</p>
                  <p className="text-white">{personalInfo.location}</p>
                </div>
              </div>
            )}
          </div>

          {/* Social Links */}
          <div>
            <p className="text-sm text-muted mb-4">Connect with me</p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-card border border-border text-muted hover:text-white hover:border-white/20 hover:bg-card-hover transition-all duration-300 hover:-translate-y-1"
                  aria-label={link.name}
                >
                  <Icon name={link.icon} size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <Card variant="glass" className="p-6 md:p-8" hover={false}>
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center h-full py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                <Icon name="check" size={32} className="text-green-500" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
              <p className="text-muted">
                Thanks for reaching out. I&apos;ll get back to you soon!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
              <Input
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
              <Textarea
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={5}
                required
              />
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                isLoading={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <Icon name="send" size={18} className="ml-2" />}
              </Button>
            </form>
          )}
        </Card>
      </div>
    </Section>
  );
};

export default Contact;
