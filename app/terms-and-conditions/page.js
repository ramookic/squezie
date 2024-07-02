export const metadata = {
  title: "Terms and Conditions",
};

export default function Page() {
  return (
    <div className="bg-neutral-50/60">
      <div className="container mx-auto py-40 flex flex-col max-w-[1000px] gap-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-black text-grey-900">
            Terms and Conditions
          </h2>
          <p className=" text-gray-500">
            Updated:{" "}
            <span className="font-semibold text-grey-900">02 JULY, 2024</span>
          </p>
        </div>
        <p className="max-w-[560px] text-grey-800 font-medium">
          By accessing or using our website and services, you agree to comply
          with and be bound by these Terms and Conditions. Please read them
          carefully.
        </p>
        <div className="flex flex-col gap-2 font-medium">
          <h4 className="text-lg font-bold">1. Acceptance of Terms</h4>
          <p className="text-grey-800 font-medium">
            By using our image compression services, you agree to these terms.
            If you do not agree, do not use our services.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-bold">2. Description of Services</h4>
          <p className="text-grey-800 font-medium">
            Squezie provides an online image compression service that allows
            users to compress images efficiently. Our service offers a range of
            features designed to enhance the user experience and provide
            flexible options for image compression.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-bold">3. User Obligations</h4>
          <p className="text-grey-800 font-medium">
            &#x2022; You agree to use our services for lawful purposes only.
          </p>
          <p className="text-grey-800 font-medium">
            &#x2022; You must not misuse our services, including but not limited
            to engaging in unauthorized access or interference with our website.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-bold">4. Intellectual Property</h4>
          <p className="text-grey-800 font-medium">
            All content on this website, including but not limited to text,
            graphics, logos, and software, is the property of Squezie and is
            protected by copyright and other laws. Unauthorized use is
            prohibited.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-bold">5. Disclaimer of Warranties</h4>
          <p className="text-grey-800 font-medium">
            Our services are provided &quot;as is&quot; without any warranties
            of any kind. We do not guarantee that our services will be
            error-free or uninterrupted.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-bold">6. Limitation of Liability</h4>
          <p className="text-grey-800 font-medium">
            Squezie will not be liable for any damages arising from the use or
            inability to use our services, including but not limited to direct,
            indirect, incidental, punitive, and consequential damages.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-bold">7. Changes to Terms</h4>
          <p className="text-grey-800 font-medium">
            We reserve the right to modify these terms at any time. Changes will
            be effective immediately upon posting on our website. Your continued
            use of the services signifies your acceptance of the revised terms.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-bold">8. Contact Information</h4>
          <p className="text-grey-800 font-medium">
            If you have any questions about these Terms and Conditions, please
            contact us at <strong>contact@squezie.com</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
