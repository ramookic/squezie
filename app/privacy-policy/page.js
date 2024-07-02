export const metadata = {
  title: "Privacy Policy",
};

export default function Page() {
  return (
    <div className="bg-neutral-50/60">
      <div className="container mx-auto py-40 flex flex-col max-w-[1000px] gap-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-black text-grey-900">Privacy Policy</h2>
          <p className=" text-gray-500">
            Updated:{" "}
            <span className="font-semibold text-grey-900">02 JULY, 2024</span>
          </p>
        </div>
        <p className="max-w-[560px] text-grey-800 font-medium">
          At Squezie, we are committed to protecting your privacy. This Privacy
          Policy outlines how we collect, use, and protect your information.
        </p>
        <div className="flex flex-col gap-2 font-medium">
          <h4 className="text-lg font-bold">1. Information We Collect</h4>
          <p className="text-grey-800 font-medium ">
            <span className="font-bold">&#x2022; Personal Information:</span>
            We do not collect personal information unless you voluntarily
            provide it (e.g., contact forms).
          </p>
          <p className="text-grey-800 font-medium">
            <span className="font-bold">
              &#x2022; Non-Personal Information:
            </span>
            We may collect non-personal information about your use of our
            website, such as IP addresses, browser types, and access times.
          </p>
        </div>
        <div className="flex flex-col gap-2 font-medium">
          <h4 className="text-lg font-bold">2. Use of Information</h4>
          <p className="text-grey-800 font-medium">
            &#x2022; We use non-personal information to improve our services and
            user experience.
          </p>
          <p className="text-grey-800 font-medium">
            &#x2022; Personal information, if provided, will only be used for
            the purpose it was collected (e.g., responding to inquiries).
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-bold">3. Cookies</h4>
          <p className="text-grey-800 font-medium">
            Our website may use cookies to enhance user experience. You can set
            your browser to refuse cookies, but this may affect your ability to
            use certain features of our website.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-bold">4. Data Security</h4>
          <p className="text-grey-800 font-medium">
            We implement appropriate security measures to protect your
            information from unauthorized access, alteration, disclosure, or
            destruction.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-bold">5. Third-Party Services</h4>
          <p className="text-grey-800 font-medium">
            We may use third-party services to analyze website traffic and
            improve our services. These third parties may use cookies and
            similar technologies to collect non-personal information about your
            activities on our website and other sites.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-bold">
            6. Changes to this Privacy Policy
          </h4>
          <p className="text-grey-800 font-medium">
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with an updated effective date.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-bold">7. Contact Information</h4>
          <p className="text-grey-800 font-medium">
            If you have any questions about this Privacy Policy, please contact
            us at <strong>contact@squezie.com</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
