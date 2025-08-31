import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-24">
        <div className="bg-cover bg-center" style={{ backgroundImage: "url('/background-new.png')" }}>
          <div className="container mx-auto px-4 py-16 sm:py-24">
            <div className="bg-card/80 backdrop-blur-sm p-8 md:p-16 rounded-2xl shadow-2xl border border-white/10 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-body font-bold text-primary mb-8">Privacy Policy</h1>
              <div className="space-y-6 text-lg text-primary/90 font-body">
                <p>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

                <h2 className="text-2xl font-headline font-bold pt-4">1. Introduction</h2>
                <p>Welcome to our website. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>

                <h2 className="text-2xl font-headline font-bold pt-4">2. Collection of Your Information</h2>
                <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>
                    <strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you register for our waitlist or otherwise contact us.
                  </li>
                  <li>
                    <strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
                  </li>
                </ul>

                <h2 className="text-2xl font-headline font-bold pt-4">3. Use of Your Information</h2>
                <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Notify you of updates and news regarding our launch.</li>
                  <li>Email you regarding your interest in our services.</li>
                  <li>Compile anonymous statistical data and analysis for use internally.</li>
                  <li>Increase the efficiency and operation of the Site.</li>
                </ul>

                <h2 className="text-2xl font-headline font-bold pt-4">4. Disclosure of Your Information</h2>
                <p>We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</p>

                <h2 className="text-2xl font-headline font-bold pt-4">5. Security of Your Information</h2>
                <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

                <h2 className="text-2xl font-headline font-bold pt-4">6. Your Consent</h2>
                <p>By using our site, you consent to our website's privacy policy.</p>

                <h2 className="text-2xl font-headline font-bold pt-4">7. Contact Us</h2>
                <p>If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:connect@tavustudio.com" className="underline hover:text-primary transition-colors">connect@tavustudio.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
