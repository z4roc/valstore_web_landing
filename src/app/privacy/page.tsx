export default function PrivacyPage() {
  return (
    <main className="pt-24 container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground">
            Last updated: 30th May 2024
          </p>
        </div>

        <div className="glass rounded-2xl p-8">
          <div className="prose prose-invert max-w-none space-y-8">
            <section className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Introduction
              </h2>
              <p className="text-muted-foreground">
                This app is provided as a free for use Service to everyone. This
                is not an officially supported product of Riot Games, although
                official Client APIs are used to gather all the information
                needed. I'm not associated with Riot Games in any ways. Valorant
                and shown Ingame Content belong to Riot Games, Inc. By
                downloading and using my App you agree with following
                conditions.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Information We Collect
              </h2>
              <p className="text-muted-foreground mb-4">
                Valstore is designed with privacy in mind. We collect minimal
                information necessary to provide our service:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  Your Riot Games credentials (stored locally and encrypted)
                </li>
                <li>App usage analytics (anonymous)</li>
                <li>Crash reports to improve app stability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                How We Use Your Information
              </h2>
              <p className="text-muted-foreground mb-4">
                Your information is used solely to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  Authenticate with Riot Games API to fetch your store data
                </li>
                <li>Provide you with real-time store updates</li>
                <li>Improve app performance and fix bugs</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Data Storage
              </h2>
              <p className="text-muted-foreground mb-4">
                All sensitive data including your Riot Games credentials are:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Stored locally on your device</li>
                <li>Encrypted using industry-standard encryption</li>
                <li>Never transmitted to our servers</li>
                <li>Never shared with third parties</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Third-Party Services
              </h2>
              <p className="text-muted-foreground mb-4">
                Valstore integrates with:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  Inofficial Riot Games API - to fetch your Valorant store data
                </li>
                <li>Google Analytics - for anonymous usage statistics</li>
                <li>Crashlytics - for crash reporting and app improvement</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Security notice
              </h2>
              <p className="text-muted-foreground mb-4">
                Nobody wants to lose his Valorant account with all his skins on,
                my intention behind building this app was my mistrust in other
                apps requiring you to directly provide login information in
                order to work. So as my colleagues from other Apps I came up
                with a way to get an access token without needing the login
                credentials themselfs. The login form you see is the official
                Riot Games signin page, on successful login the app receives the
                access token to be able to call the Riot games server for your
                shop information. Riot Games officially stated that the use of
                unofficial third party apps is bannable. It's not sure yet
                wether Riot Games bans you for this, as of today there have been
                no bans, but you have to use the app at your own risk. I assume
                no liability for any bans and losses to accounts.{" "}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Your Rights
              </h2>
              <p className="text-muted-foreground mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Delete your account and all associated data</li>
                <li>Opt out of analytics collection</li>
                <li>Request information about data we collect</li>
                <li>Contact us with privacy concerns</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Contact Us
              </h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please
                contact us through our GitHub repository or email us directly.
                We're committed to protecting your privacy and will respond to
                all inquiries promptly.
              </p>
            </section>
            <section>
              <p>ZAROC</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
