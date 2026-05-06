const CONFIG = {
  // Get your API key from https://aistudio.google.com/
  GEMINI_API_KEY: "PASTE_YOUR_KEY",

  // Managed doctor list for the Smart Triage page
  DOCTORS: [
    {
      name: "Dr. Sarah Chen, PhD",
      specialty: "Anxiety · Depression · CBT Specialist",
      avatar: "👩‍⚕️",
      tags: ["Tele-health", "Blue Cross", "In-network"],
      rating: 4.9,
      reviews: 124,
      availability: "Tomorrow 2PM",
      color: "var(--sage-light)",
    },
    {
      name: "Marcus Williams, LCSW",
      specialty: "Trauma · Anxiety · DBT Therapist",
      avatar: "👨‍⚕️",
      tags: ["Tele-health", "Aetna", "In-network"],
      rating: 4.8,
      reviews: 87,
      availability: "Fri 10AM",
      color: "var(--sky-light)",
    },
  ],
};
