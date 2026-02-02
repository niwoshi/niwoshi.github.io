export interface Link {
  icon: "Twitter" | "Instagram" | "Github";
  label: string;
  color: string;
  href: string;
}

export const links: Link[] = [
  {
    icon: "Github",
    label: "GitHub",
    color: "#333333",
    href: "https://github.com/niwoshi",
  },
  {
    icon: "Twitter",
    label: "X",
    color: "#3b82f6",
    href: "https://x.com/ysmn_deus",
  },
  {
    icon: "Instagram",
    label: "Instagram",
    color: "#f59e0b",
    href: "https://www.instagram.com/ysmn_deus/",
  },
];

export const contactFormUrl = "https://docs.google.com/forms/d/e/your-form-id/viewform";
