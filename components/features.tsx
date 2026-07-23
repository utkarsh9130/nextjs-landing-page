"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Calculator, BarChart3, ArrowUpRight, Check } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export function Features() {
  const featureList = [
    {
      id: "ai-expense-tracking",
      title: "AI Expense Tracking",
      description:
        "Automatically scan receipts, sync bank transactions, and categorize every single dollar instantly with zero manual typing.",
      icon: BrainCircuit,
      color: "from-emerald-500 to-teal-500",
      accentBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
      highlights: [
        "Instant receipt OCR & parsing",
        "Smart auto-categorization engine",
        "Multi-currency & bank sync support",
      ],
    },
    {
      id: "smart-budget-planning",
      title: "Smart Budget Planning",
      description:
        "Custom budgets built dynamically around your spending habits and upcoming recurring bills to prevent overspending before it happens.",
      icon: Calculator,
      color: "from-teal-500 to-cyan-500",
      accentBg: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
      highlights: [
        "Dynamic category spending caps",
        "Real-time overspend alerts",
        "Automated goal milestone tracker",
      ],
    },
    {
      id: "financial-insights",
      title: "Financial Insights",
      description:
        "Predictive cash flow models, subscription audits, and personalized AI tips to optimize your savings and accelerate wealth growth.",
      icon: BarChart3,
      color: "from-cyan-500 to-blue-500",
      accentBg: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
      highlights: [
        "Predictive monthly forecasts",
        "Unused subscription detection",
        "Actionable wealth advice",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Title Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3">
          Intelligent Core Features
        </h2>
        <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Everything you need to master your money effortlessly.
        </p>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
          Powered by state-of-the-art machine learning algorithms designed to simplify your financial life.
        </p>
      </div>

      {/* Grid of 3 Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {featureList.map((feature) => {
          const IconComponent = feature.icon;
          return (
            <motion.div key={feature.id} variants={cardVariants} className="h-full">
              <Card className="h-full flex flex-col justify-between hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3.5 rounded-2xl ${feature.accentBg} transition-transform group-hover:scale-110`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5">
                      Explore <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <CardTitle className="text-2xl font-bold mb-2">
                    {feature.title}
                  </CardTitle>

                  <CardDescription className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="mt-auto">
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2.5">
                    {feature.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs font-medium text-slate-700 dark:text-slate-300">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
