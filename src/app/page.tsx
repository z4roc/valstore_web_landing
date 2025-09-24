"use client";
import { PhoneMockup } from "@/components/phone-mockup";
import { AnimatedText } from "@/components/animated-text";
import { OpenSourceBadge } from "@/components/open-source-badge";
import { Button } from "@/components/ui/button";
import { Download, Github, Star } from "lucide-react";

export default function HomePage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-balance leading-tight">
                Check your store anywhere, anytime, on <AnimatedText />
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-2xl">
                A portable access to your Valorant Shop built with Flutter.
                Never miss your favorite skins again.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() =>
                  (window.location.href =
                    "https://github.com/z4roc/valstore-mobile/releases")
                }
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
              >
                <Download className="w-5 h-5 mr-2" />
                Download App
              </Button>
              <Button
                onClick={() =>
                  (window.location.href =
                    "https://github.com/z4roc/valstore-mobile")
                }
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary bg-transparent cursor-pointer"
              >
                <Github className="w-5 h-5 mr-2" />
                View Source
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>37 stars</span>
              </div>
              <div>MIT License</div>
              <div>Built with Flutter</div>
            </div>
          </div>

          <div className="relative">
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Everything you need to track your Valorant store
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built for gamers who want to stay on top of their favorite weapon
            skins and store rotations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Lightning Fast
            </h3>
            <p className="text-muted-foreground">
              Get your store information in seconds with our optimized Flutter
              app.
            </p>
          </div>

          <div className="glass rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Secure & Private
            </h3>
            <p className="text-muted-foreground">
              Your credentials are encrypted and stored locally on your device.
            </p>
          </div>

          <div className="glass rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Cross Platform
            </h3>
            <p className="text-muted-foreground">
              Available on Android and iOS with a consistent experience.
            </p>
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Built in the Open
            </h2>
            <p className="text-xl text-muted-foreground">
              Valstore is open source and community-driven. Contribute, report
              issues, or just explore the code.
            </p>
          </div>

          <OpenSourceBadge />
        </div>
      </section>
    </main>
  );
}
