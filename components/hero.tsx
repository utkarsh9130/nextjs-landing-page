"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, TrendingUp, Zap, PieChart, CreditCard, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-emerald-50/50 via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Glow background effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-emerald-500/20 to-teal-400/20 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-emerald-400/10 blur-[90px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column: Copy & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold mb-6 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Next-Gen Autonomous Finance</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                AI Expense Manager
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Track expenses, manage budgets, and grow your savings with AI.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button size="lg" className="w-full sm:w-auto gap-2 group text-base">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base">
                Learn More
              </Button>
            </div>

            {/* Key Trust Signals */}
            <div className="mt-10 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">99.4%</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Categorization Accuracy</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">$3,400+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Avg. Saved / Year</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">50k+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Active Users</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Dynamic Interactive UI Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 w-full relative"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer Card Glass Container */}
              <div className="rounded-3xl p-6 sm:p-8 bg-slate-900/90 text-white shadow-2xl shadow-emerald-500/10 border border-slate-800 backdrop-blur-xl relative overflow-hidden">
                {/* Header preview line */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="text-xs text-slate-400 font-mono">Live AI Engine • Active</div>
                </div>

                {/* Dashboard Summary Card */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-slate-800/70 border border-slate-700/50">
                    <div className="text-xs text-slate-400 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                      Monthly Budget
                    </div>
                    <div className="text-2xl font-bold text-white mt-1">$4,850.00</div>
                    <div className="text-[11px] text-emerald-400 mt-1">18% under limit</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-800/70 border border-slate-700/50">
                    <div className="text-xs text-slate-400 flex items-center gap-1.5">
                      <PieChart className="w-3.5 h-3.5 text-teal-400" />
                      AI Automated Savings
                    </div>
                    <div className="text-2xl font-bold text-emerald-400 mt-1">+$620.40</div>
                    <div className="text-[11px] text-slate-400 mt-1">Auto-invested this month</div>
                  </div>
                </div>

                {/* Simulated Recent AI Classified Transactions */}
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Recent AI Auto-Categorized
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-colors border border-slate-700/40">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                        <CreditCard className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-white">Apple Store NYC</div>
                        <div className="text-[10px] text-slate-400">Hardware • Tagged by AI</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-semibold text-white">-$129.00</div>
                      <div className="text-[10px] text-emerald-400 flex items-center gap-0.5">
                        <CheckCircle2 className="w-2.5 h-2.5" /> Verified
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-colors border border-slate-700/40">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-white">Whole Foods Market</div>
                        <div className="text-[10px] text-slate-400">Groceries • AI Optimized</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-semibold text-white">-$84.50</div>
                      <div className="text-[10px] text-emerald-400 flex items-center gap-0.5">
                        <CheckCircle2 className="w-2.5 h-2.5" /> Verified
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Widget */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute -bottom-4 -right-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-3 rounded-2xl shadow-xl border border-emerald-400/30 flex items-center gap-3 hidden sm:flex"
                >
                  <div className="p-2 rounded-xl bg-white/20 backdrop-blur-md">
                    <ShieldCheck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold">Smart Insight Alert</div>
                    <div className="text-[11px] text-emerald-100">Saved $45 on recurring subscriptions</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
