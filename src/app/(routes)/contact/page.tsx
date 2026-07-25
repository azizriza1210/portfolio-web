"use client";

import { useState } from "react";
import { VStack } from "@astryxdesign/core/Layout";
import { Heading, Text } from "@astryxdesign/core/Text";
import { Section } from "@astryxdesign/core/Section";
import { FormLayout } from "@astryxdesign/core/FormLayout";
import { TextInput } from "@astryxdesign/core/TextInput";
import { TextArea } from "@astryxdesign/core/TextArea";
import { Button } from "@astryxdesign/core/Button";
import { Banner } from "@astryxdesign/core/Banner";
import { contactSchema, type ContactFormData } from "@/lib/validations/contact";
import type { ZodError } from "zod";

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function handleFieldChange(field: keyof ContactFormData) {
    return (value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      if (errors[field]) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next[field];
          return next;
        });
      }
    };
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      const zodError = result.error as ZodError;
      zodError.issues.forEach((issue) => {
        const field = issue.path[0] as string;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <Section>
        <VStack gap={4} className="max-w-3xl mx-auto px-4" hAlign="center">
          <Heading level={1} type="display-3">
            Message sent!
          </Heading>
          <Text type="body" color="secondary">
            I&apos;ll get back to you as soon as possible.
          </Text>
          <Button
            label="Send another message"
            variant="secondary"
            onClick={() => setStatus("idle")}
          />
        </VStack>
      </Section>
    );
  }

  return (
    <Section>
      <VStack gap={8} className="max-w-3xl mx-auto px-4">
        <VStack gap={2}>
          <Heading level={1} type="display-3">
            Contact
          </Heading>
          <Text type="body" color="secondary">
            Have a question or want to work together? Send me a message.
          </Text>
        </VStack>

        <form onSubmit={handleSubmit} noValidate>
          <FormLayout direction="vertical">
            <TextInput
              label="Name"
              value={formData.name}
              onChange={handleFieldChange("name")}
              placeholder="Your name"
              isRequired
              status={errors.name ? { type: "error", message: errors.name } : undefined}
            />
            <TextInput
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleFieldChange("email")}
              placeholder="you@example.com"
              isRequired
              status={errors.email ? { type: "error", message: errors.email } : undefined}
            />
            <TextArea
              label="Message"
              value={formData.message}
              onChange={handleFieldChange("message")}
              placeholder="Tell me about your project or idea..."
              isRequired
              status={errors.message ? { type: "error", message: errors.message } : undefined}
            />
            <Button
              label={status === "submitting" ? "Sending..." : "Send message"}
              type="submit"
              variant="primary"
              isDisabled={status === "submitting"}
            />
          </FormLayout>
        </form>

        {status === "error" && (
          <Banner title="Error" status="error">
            Something went wrong. Please try again.
          </Banner>
        )}
      </VStack>
    </Section>
  );
}
