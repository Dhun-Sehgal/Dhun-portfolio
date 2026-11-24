export interface Metric {
  value: string;
  label: string;
  note?: string;
}

export interface Experience {
  role: string;
  org: string;
  period: string;
  kind: string;
  summary: string;
  metrics: Metric[];
  /** Precision@50 comparison used for the small bar chart. */
  comparison?: { label: string; model: number; baseline: number };
  highlights: string[];
}

export const experience: Experience[] = [
  {
    role: "Machine Learning Intern",
    org: "FlyRank",
    period: "Jul 2026 – Aug 2026",
    kind: "Internship",
    summary:
      "Built a model to spot which pieces of content were worth refreshing, and made sure the result held up on clients it had never seen.",
    metrics: [
      { value: "62%", label: "Precision@50", note: "vs. a 32% baseline" },
      { value: "1.94×", label: "Relative improvement", note: "over the baseline" },
      { value: "30K × 44", label: "Rows × columns", note: "anonymized dataset" },
    ],
    comparison: { label: "Precision@50", model: 62, baseline: 32 },
    highlights: [
      "Developed a Random Forest model to identify content refresh opportunities in a 30,000-row, 44-column anonymized dataset.",
      "Evaluated on a client-level held-out split with zero client overlap, so the score reflects unseen clients.",
      "Ran dedicated data-leakage checks before trusting any of the numbers.",
      "Documented methodology, evaluation and limitations for reproducibility; the findings were compiled into a research paper.",
    ],
  },
];
