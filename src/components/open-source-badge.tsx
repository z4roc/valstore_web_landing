import Image from "next/image";
import { ExternalLink } from "lucide-react";

export function OpenSourceBadge() {
  return (
    <div className="relative group">
      <div className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Image
              src="/opensource.png"
              alt="Open Source on GitHub"
              width={60}
              height={60}
              className="rounded-lg"
            />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground mb-1">
              Open Source
            </h3>
            <p className="text-sm text-muted-foreground">
              Built in the open, powered by the community
            </p>
          </div>
          <a href="https://github.com/z4roc/valstore-mobile">
            <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
          </a>
        </div>
      </div>
    </div>
  );
}
