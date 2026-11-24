/**
 * Projects shown in the "Featured projects" section.
 * To add a project, append an object to `projects`. Fields marked optional can be omitted.
 *
 * Sources: resume (primary) + the README of each linked GitHub repo.
 */

export type CoverKind = "text" | "mcq" | "data" | "trek" | "parking";

export interface Project {
  slug: string;
  title: string;
  tag: string;
  /** One-line hook shown on the card. */
  blurb: string;
  /** Longer paragraph shown in the detail view. */
  description: string;
  tech: string[];
  /** Up to three headline numbers. Leave empty if the project has none. */
  metrics: { value: string; label: string }[];
  /** Short feature chips used when there are no metrics. */
  features?: string[];
  details: string[];
  /** GitHub repository. If omitted, the card links to the GitHub profile instead. */
  repo?: string;
  /** Live deployment. Only set this to a real, working URL. */
  demo?: string;
  /** Screenshot paths in /public. PLACEHOLDER: none supplied yet. */
  screenshots?: { src: string; alt: string }[];
  cover: CoverKind;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "comment-category-prediction",
    title: "Comment Category Prediction",
    tag: "NLP · Kaggle",
    blurb: "Sorting 198K user comments into four categories with text features and metadata, combined.",
    description:
      "A four-class text classification pipeline for user-generated comments. Each record pairs the comment with platform metadata, so the model combines TF-IDF text features with engineered numerical signals, then blends several classifiers into a weighted ensemble.",
    tech: ["Python", "NLP", "Scikit-learn", "LightGBM", "TF-IDF"],
    metrics: [
      { value: "90.87%", label: "Validation accuracy" },
      { value: "0.81294", label: "Public score" },
      { value: "0.80812", label: "Private score" },
    ],
    details: [
      "198K comments, four target classes.",
      "TF-IDF with unigrams and bigrams, combined with 14 engineered numerical features.",
      "Trained and compared four machine learning algorithms.",
      "Weighted soft-voting ensemble across the models.",
      "Tuned Logistic Regression with RandomizedSearchCV.",
      "90.87% validation accuracy; 0.81294 public and 0.80812 private Kaggle scores.",
    ],
    repo: "https://github.com/Dhun-Sehgal/Comment-Category-Prediction-Challenge",
    cover: "text",
    featured: true,
  },
  {
    slug: "smart-mcq-solver",
    title: "Smart MCQ Solver",
    tag: "Deep learning · Kaggle",
    blurb: "Reads a question and five options, then ranks the three most likely answers.",
    description:
      "A multiple-choice answer ranker built three ways (a from-scratch baseline, a recurrent model with attention and a fine-tuned transformer) and compared on MAP@3. The trained model is wrapped in a Streamlit app where you can paste a question and see the predicted answer.",
    tech: ["Python", "TensorFlow", "Keras", "PyTorch", "RoBERTa", "Streamlit", "Weights & Biases"],
    metrics: [
      { value: "0.75311", label: "Public MAP@3" },
      { value: "0.75084", label: "Private MAP@3" },
      { value: "3", label: "Architectures compared" },
    ],
    details: [
      "2,000 training samples and 500 test samples; five answer options (A–E) per question.",
      "Implemented Logistic Regression from scratch, a BiLSTM with Attention, and fine-tuned RoBERTa.",
      "Compared the architectures using MAP@3, predicting the top three answers.",
      "Tracked experiments with Weights & Biases.",
      "Public MAP@3 of 0.75311 and private MAP@3 of 0.75084.",
      "Deployed as an interactive Streamlit app serving the BiLSTM + attention model.",
    ],
    repo: "https://github.com/Dhun-Sehgal/DL-24f2001824-t22026",
    cover: "mcq",
    featured: true,
  },
  {
    slug: "data-detective-ai",
    title: "Data Detective AI",
    tag: "AI/ML hackathon",
    blurb: "Upload a CSV and get instant analysis, charts and a chatbot that answers questions about it.",
    description:
      "A hackathon-built data exploration tool. Drop in a CSV and it runs the first pass of analysis for you (missing values, column statistics, distribution and trend charts), then lets you ask follow-up questions in plain English.",
    tech: ["React", "Python", "LLM APIs"],
    metrics: [],
    features: ["Automated EDA", "Auto visualizations", "Natural-language chatbot"],
    details: [
      "Automated analysis of uploaded CSV files.",
      "Missing-value detection and per-column statistics.",
      "Generated visualizations for distributions and trends.",
      "A natural-language chatbot for querying the uploaded dataset.",
    ],
    // PLACEHOLDER: add the repository URL here when it's public.
    cover: "data",
  },
  {
    slug: "trekking-management-system",
    title: "Trekking Management System",
    tag: "Full-stack",
    blurb: "One platform for trekkers, staff and admins to run trek bookings end to end.",
    description:
      "A role-based web platform for administrators, trek staff and trekkers covering trek scheduling, registrations, bookings, approvals, participant tracking and slot availability. Recurring work like reminder emails runs in the background, off the request cycle.",
    tech: ["Python", "Flask", "Vue.js", "SQLite", "Redis", "Celery"],
    metrics: [],
    features: ["3 role-based dashboards", "Staff assignment", "Background jobs"],
    details: [
      "Separate dashboards for users, administrators and staff.",
      "Trek scheduling, registration, booking and approval workflows.",
      "Participant tracking and slot availability management.",
      "Staff-assignment workflow so admins can allocate staff to treks from one place.",
      "Automated email reminders.",
      "Background task processing with Celery and Redis.",
    ],
    repo: "https://github.com/Dhun-Sehgal/Trekking-Management-Application-",
    cover: "trek",
  },
  {
    slug: "vehicle-parking-management",
    title: "Vehicle Parking Management System",
    tag: "Full-stack",
    blurb: "Slot booking for drivers, a management dashboard for admins.",
    description:
      "A full-stack parking app with separate user and admin sides. Users sign in, book a slot and manage their reservations; admins manage parking lots and see analytics for the whole system.",
    tech: ["Python", "Flask", "SQLite", "HTML", "Bootstrap"],
    metrics: [],
    features: ["Auth", "Slot booking", "Admin analytics"],
    details: [
      "User authentication.",
      "Parking slot booking.",
      "Reservation history and cancellation.",
      "Administrative dashboard.",
      "Parking lot management and analytics.",
    ],
    repo: "https://github.com/Dhun-Sehgal/vehicle-parking-app",
    cover: "parking",
  },
];
