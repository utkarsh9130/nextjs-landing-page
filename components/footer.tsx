"use client";

import Link from "next/link";
import { Wallet, Globe, Mail, Share2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1 & 2: Brand Info & Newsletter */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white">
                <Wallet className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                AI Expense <span className="text-emerald-400">Manager</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Track expenses, manage budgets, and grow your savings with AI. Secure, autonomous, and built for your financial freedom.
            </p>

            {/* Newsletter Input */}
            <div className="pt-2">
              <div className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
                Subscribe to Financial Insights
              </div>
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-500 placeholder:text-slate-500"
                />
                <Button size="sm" type="submit" className="shrink-0">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          {/* Col 3: Product Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#features" className="hover:text-emerald-400 transition-colors">
                  AI Tracking
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-emerald-400 transition-colors">
                  Budget Planner
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-emerald-400 transition-colors">
                  Analytics & Insights
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-emerald-400 transition-colors">
                  Pricing Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#" className="hover:text-emerald-400 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400 transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400 transition-colors">
                  Security & Encryption
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400 transition-colors">
                  Customer Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Company & Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#" className="hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400 transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} AI Expense Manager Inc. Built with Next.js & Framer Motion.
          </p>

          <div className="flex items-center gap-4">
            <Link href="https://twitter.com" aria-label="Website" className="hover:text-emerald-400 transition-colors p-1.5 rounded-lg bg-slate-900">
              <Globe className="w-4 h-4" />
            </Link>
            <Link href="https://github.com" aria-label="Social" className="hover:text-emerald-400 transition-colors p-1.5 rounded-lg bg-slate-900">
              <Share2 className="w-4 h-4" />
            </Link>
            <Link href="mailto:support@aiexpensemanager.com" aria-label="Email" className="hover:text-emerald-400 transition-colors p-1.5 rounded-lg bg-slate-900">
              <Mail className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
