"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 p-8 sm:p-12 lg:p-16 border border-emerald-500/20 shadow-2xl text-center">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/20 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold mb-6 border border-emerald-400/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Start Saving Today</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ready to transform your financial habits with AI?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-emerald-100/80">
            Join over 50,000+ smart individuals and business owners managing their money effortlessly.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto bg-emerald-400 text-slate-950 hover:bg-emerald-300 font-bold gap-2 text-base">
              Get Started Free <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-emerald-400/30 text-white hover:bg-white/10 text-base">
              Schedule Demo
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-emerald-200/70">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> 14-day free trial
            </span>
            <span>•</span>
            <span>No credit card required</span>
            <span>•</span>
            <span>Bank-grade 256-bit encryption</span>
          </div>
        </div>
      </div>
    </section>
  );
}
