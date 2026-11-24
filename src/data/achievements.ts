export interface Achievement {
  title: string;
  context: string;
  value: string;
  valueLabel: string;
  secondary?: { value: string; label: string };
  accent: "lav" | "pink" | "plum";
}

/** Kaggle highlights. Scores only: leaderboard ranks are intentionally not shown. */
export const achievements: Achievement[] = [
  {
    title: "ECG Heartbeat Arrhythmia Classification",
    context: "Kaggle competition",
    value: "0.72150",
    valueLabel: "Public score",
    secondary: { value: "0.71228", label: "Private score" },
    accent: "plum",
  },
  {
    title: "Smart MCQ Solver",
    context: "Kaggle competition",
    value: "0.75311",
    valueLabel: "MAP@3 (public)",
    accent: "lav",
  },
  {
    title: "Comment Category Prediction",
    context: "Kaggle competition",
    value: "0.81294",
    valueLabel: "Public score",
    accent: "lav",
  },
  {
    title: "Kaggle competitions",
    context: "ML and data science",
    value: "8+",
    valueLabel: "Competitions entered",
    accent: "pink",
  },
];
