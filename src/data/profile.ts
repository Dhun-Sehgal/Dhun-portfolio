/**
 * Personal details. Everything here comes from Dhun's resume.
 * Edit this file to update links, the resume file, or the avatar.
 */
export const profile = {
  name: "Dhun Sehgal",
  firstName: "Dhun",
  role: "Data Science Student",
  aspiration: "Aspiring ML/AI Engineer",
  location: "India",
  email: "dhunsehgal36@gmail.com",
  links: {
    github: "https://github.com/Dhun-Sehgal",
    linkedin: "https://www.linkedin.com/in/dhun-sehgal-979bb6376/",
    // Taken from the Kaggle link on the resume.
    kaggle: "https://www.kaggle.com/work/collections/17061940",
  },
  /** Served from /public. Replace the PDF there to update the download. */
  resume: "/Dhun_Sehgal_Resume.pdf",
  /**
   * PLACEHOLDER: set to an image path (e.g. "/avatar.webp" placed in /public)
   * to replace the illustrated placeholder in the hero.
   */
  avatar: null as string | null,
};

export const education = {
  school: "Indian Institute of Technology Madras",
  short: "IIT Madras",
  degree: "B.S. in Data Science and Applications",
  period: "2024 – Present (Expected 2028)",
  coursework: ["Machine Learning", "Deep Learning", "Statistics", "DBMS", "Application Development"],
};

export const certifications = [
  { title: "AI Fluency: Framework and Foundations", issuer: "Anthropic" },
  { title: "Machine Learning Internship: Certificate of Completion", issuer: "FlyRank" },
];
