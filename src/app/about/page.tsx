"use client";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Globe, Mail } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="pt-24 container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">About</h1>
          <p className="text-xl text-muted-foreground">
            Learn more about Valstore and the team behind it.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                The Project
              </h2>
              <p className="text-muted-foreground mb-4">
                Valstore was born out of frustration with having to constantly
                check the Valorant in-game store for new weapon skins. As avid
                Valorant players, we wanted a simple way to check our store
                rotation from anywhere, anytime.
              </p>
              <p className="text-muted-foreground">
                Built with Flutter for cross-platform compatibility and using
                the Riot Games API, Valstore provides a fast, secure, and
                reliable way to stay updated with your Valorant store.
              </p>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Open Source
              </h2>
              <p className="text-muted-foreground mb-6">
                Valstore is completely open source and available on GitHub. We
                believe in transparency and community-driven development. Feel
                free to contribute, report issues, or fork the project.
              </p>
              <Button
                variant="outline"
                className="border-border hover:bg-secondary bg-transparent"
                onClick={() =>
                  (window.location.href =
                    "https://github.com/z4roc/valstore-mobile")
                }
              >
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Developer
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">Z</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">z4roc</h3>
                    <p className="text-sm text-muted-foreground">
                      Lead Developer
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-6">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-border hover:bg-secondary bg-transparent"
                    onClick={() =>
                      (window.location.href = "https://github.com/z4roc/")
                    }
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-border hover:bg-secondary bg-transparent"
                    onClick={() =>
                      (window.location.href = "https://twitter.com/zaroc_dev")
                    }
                  >
                    <Twitter className="w-4 h-4 mr-2" />
                    Twitter
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-border hover:bg-secondary bg-transparent"
                    onClick={() => (window.location.href = "https://zaroc.de")}
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Website
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-border hover:bg-secondary bg-transparent"
                    onClick={() =>
                      (window.location.href =
                        "mailto:arthur.aktamirov@zaroc.de")
                    }
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </Button>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Tech Stack
              </h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Frontend</span>
                  <span className="text-foreground font-medium">Flutter</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Language</span>
                  <span className="text-foreground font-medium">Dart</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">API</span>
                  <span className="text-foreground font-medium">
                    Riot Games API
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Platforms</span>
                  <span className="text-foreground font-medium">
                    Android, iOS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
