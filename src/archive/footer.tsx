import { Link } from "@heroui/link";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-divider bg-background/70 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-1">
              <span className="text-lg font-semibold tracking-tight">Factory Flow</span>
              <span className="text-sm font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[#FF1CF7] to-[#b249f8]">studio</span>
            </div>
            <p className="text-sm text-default-500">
              Design, visualize, and optimize your factory layout in 3D.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              a
              
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/docs"
                  className="text-sm text-default-500 hover:text-primary"
                >
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          {/*<div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={siteConfig.links.github}
                  className="text-sm text-default-500 hover:text-primary flex items-center gap-2"
                  isExternal
                >
                  <GithubIcon className="text-default-500" />
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href={siteConfig.links.twitter}
                  className="text-sm text-default-500 hover:text-primary flex items-center gap-2"
                  isExternal
                >
                  <TwitterIcon className="text-default-500" />
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href={siteConfig.links.discord}
                  className="text-sm text-default-500 hover:text-primary flex items-center gap-2"
                  isExternal
                >
                  <DiscordIcon className="text-default-500" />
                  Discord
                </Link>
              </li>
            </ul>
          </div>*/}
        </div>

        <div className="h-px bg-divider my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-default-500">
            © {new Date().getFullYear()} Factory Flow Studio. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="text-sm text-default-500 hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-default-500 hover:text-primary"
            >
              Terms of Service
            </Link>
          </div>
        </div>
        <div className="text-sm text-default-400 md:text-right">
          🍁 Made in Canada
        </div>
      </div>
    </footer>
  );
};