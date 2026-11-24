export type SkillIcon = "code" | "chart" | "brain" | "layers" | "terminal" | "database" | "wrench";

export interface SkillGroup {
  title: string;
  icon: SkillIcon;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  { title: "Programming", icon: "code", skills: ["Python", "SQL", "JavaScript"] },
  { title: "Data Analysis", icon: "chart", skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"] },
  {
    title: "Machine Learning",
    icon: "brain",
    skills: ["Scikit-learn", "XGBoost", "LightGBM", "SVM", "KNN", "K-Means"],
  },
  {
    title: "Deep Learning",
    icon: "layers",
    skills: ["TensorFlow", "PyTorch", "Keras", "CNNs", "RNNs", "LSTMs", "Transformers", "ANN/MLP"],
  },
  {
    title: "Backend & Web",
    icon: "terminal",
    skills: ["Flask", "Vue.js", "React", "HTML", "CSS", "Bootstrap", "Redis", "Celery", "Streamlit"],
  },
  { title: "Databases", icon: "database", skills: ["SQLite", "SQL"] },
  { title: "Tools", icon: "wrench", skills: ["Git", "GitHub", "Jupyter", "Kaggle", "Weights & Biases"] },
];

/**
 * Lets a skill badge find the projects that used it when the names differ
 * (e.g. the MCQ solver lists "RoBERTa", which counts as "Transformers").
 */
export const skillAliases: Record<string, string[]> = {
  Transformers: ["RoBERTa"],
  LSTMs: ["BiLSTM"],
  RNNs: ["BiLSTM"],
};
