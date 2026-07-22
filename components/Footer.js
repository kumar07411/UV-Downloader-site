import Image from "next/image";
import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="glass mt-20">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <Image
              src={siteConfig.logo}
              alt={`${siteConfig.appName} logo`}
              width={36}
              height={36}
              className="h-9 w-9 rounded-xl"
            />
            <span className="text-base font-semibold text-white">
              {siteConfig.appName}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <a
              href={siteConfig.privacyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href={`https://github.com/${siteConfig.github.owner}/${siteConfig.github.repo}/releases`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-white"
            >
              All Releases
            </a>
          </div>

          <div className="text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()} {siteConfig.appName}. All rights
              reserved.
            </p>
            <p className="mt-1">Made with ❤️ for Android users</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
