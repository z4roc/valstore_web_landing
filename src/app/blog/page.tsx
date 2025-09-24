export default function BlogPage() {
  return (
    <main className="pt-24 container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground">
            Development updates, tutorials, and insights about Valstore.
          </p>
        </div>

        <div className="glass rounded-2xl p-8">
          <div className="prose prose-invert max-w-none">
            <div className="code-block p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted-foreground">README.md</span>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="text-sm">
                <div className="text-muted-foreground mb-4">
                  # Valstore Development Blog
                </div>
                <div className="mb-4">
                  <span className="token keyword">## Latest Updates</span>
                </div>
                <div className="mb-2">
                  <span className="token string">
                    ### Version 2.1.0 - Night Market Support
                  </span>
                </div>
                <div className="text-muted-foreground mb-4">
                  We've added support for Valorant's Night Market feature,
                  allowing you to check special discounted skins directly from
                  the app.
                </div>
                <div className="mb-2">
                  <span className="token function">**New Features:**</span>
                </div>
                <div className="text-muted-foreground mb-4">
                  - Night Market integration
                  <br />- Push notifications for store updates
                  <br />- Improved UI/UX with dark theme
                  <br />- Better error handling
                </div>
                <div className="mb-2">
                  <span className="token keyword">### Technical Details</span>
                </div>
                <div className="code-block bg-card/50 p-4 rounded-lg mb-4">
                  <span className="token keyword">flutter</span>{" "}
                  <span className="token string">pub get</span>
                  <br />
                  <span className="token keyword">flutter</span>{" "}
                  <span className="token string">run</span>
                </div>
                <div className="text-muted-foreground">
                  The app is built using Flutter 3.0+ with support for both
                  Android and iOS platforms. We use the Riot Games API to fetch
                  store data securely.
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">
                Development Roadmap
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Widget support for quick store checks</li>
                <li>• Store history and analytics</li>
                <li>• Wishlist functionality</li>
                <li>• Multi-account support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
