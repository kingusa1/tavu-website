import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-24">
        <div className="bg-cover bg-center" style={{ backgroundImage: "url('/background-new.png')" }}>
          <div className="container mx-auto px-4 py-16 sm:py-24">
            <div className="bg-card/80 backdrop-blur-sm p-8 md:p-16 rounded-2xl shadow-2xl border border-white/10 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-body font-bold text-primary mb-8">Terms of Service</h1>
              <div className="space-y-6 text-lg text-primary/90 font-body">
                <p>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

                <h2 className="text-2xl font-headline font-bold pt-4">1. Agreement to Terms</h2>
                <p>By accessing our website, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services.</p>

                <h2 className="text-2xl font-headline font-bold pt-4">2. Intellectual Property Rights</h2>
                <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.</p>
                
                <h2 className="text-2xl font-headline font-bold pt-4">3. User Representations</h2>
                <p>By using the Site, you represent and warrant that: (1) all information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Service; and (4) your use of the Site will not violate any applicable law or regulation.</p>

                <h2 className="text-2xl font-headline font-bold pt-4">4. Prohibited Activities</h2>
                <p>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
                
                <h2 className="text-2xl font-headline font-bold pt-4">5. Governing Law</h2>
                <p>These Terms of Service and your use of the Site are governed by and construed in accordance with the laws of the Emirate of Abu Dhabi and the federal laws of the United Arab Emirates applicable therein, without regard to its conflict of law principles.</p>
                
                <h2 className="text-2xl font-headline font-bold pt-4">6. Limitation of Liability</h2>
                <p>In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.</p>

                <h2 className="text-2xl font-headline font-bold pt-4">7. Contact Us</h2>
                <p>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: <a href="mailto:connect@tavustudio.com" className="underline hover:text-primary transition-colors">connect@tavustudio.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
