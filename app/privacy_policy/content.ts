import { SectionContent } from "../types";

export const PRIVACY_POLICY_PAGE_TITLE = "Privacy Policy";

export const PRIVACY_POLICY: SectionContent[] = [
  {
    header: "1. Introduction",
    leadingText:
      "At Hanmer Springs Foodway, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and online ordering services. By accessing or using our services, you agree to the terms of this Privacy Policy.",
  },
  {
    header: "2. Information We Collect",
    leadingText:
      "We may collect the following types of information when you use our services:",
    points: [
      {
        subheader: "Personal Information:",
        text: "This includes your name, email address, phone number, and delivery address, which you provide when placing an order.",
      },
    ],
  },
  {
    header: "3. How We Use Your Information",
    leadingText: "We use the information we collect to:",
    points: [
      {
        text: "Process and fulfill your orders, including delivery and customer service.",
      },
      {
        text: "Communicate with you regarding your orders, promotions, and other store-related updates.",
      },
      {
        text: "Improve our website and services based on your feedback and usage patterns.",
      },
      {
        text: "Protect against fraudulent transactions and ensure the security of our services.",
      },
      {
        text: "Comply with legal obligations and enforce our terms and conditions.",
      },
    ],
  },
  {
    header: "4. Disclosure of Your Information",
    leadingText: "We may share your information with:",
    points: [
      {
        subheader: "Service Providers:",
        text: "Third-party vendors who assist us with payment processing, order delivery, and website maintenance.",
      },
      {
        subheader: "Legal Authorities:",
        text: "We may disclose your information if required by law or in response to legal processes, such as a court order or subpoena.",
      },
      {
        subheader: "Business Transfers:",
        text: "In the event of a merger, acquisition, or sale of all or part of our business, your information may be transferred to the new owner.",
      },
    ],
  },
  {
    header: "5. Security of Your Information",
    leadingText:
      "We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, please note that no data transmission over the internet or electronic storage method can be guaranteed to be 100% secure.",
  },
  {
    header: "6. Your Rights",
    leadingText: "You have the right to:",
    points: [
      {
        text: "Access, correct, or delete your personal information held by us.",
      },
      {
        text: "Withdraw consent to the processing of your personal information at any time, where applicable.",
      },
    ],
    endingText:
      "To exercise these rights, please contact us using the contact details provided below.",
  },
  {
    header: "7. Changes to This Privacy Policy",
    leadingText:
      "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the new policy on our website. Your continued use of our services after any changes constitutes your acceptance of the updated policy.",
  },
  {
    header: "8. Contact Information",
    leadingText:
      "If you have any questions or concerns about this Privacy Policy or how we handle your personal information, please contact us at:",
  },
];
