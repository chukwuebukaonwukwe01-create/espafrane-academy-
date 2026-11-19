// Single place to change contact details and links.
export const PHONE_DISPLAY = "+2348135762914";
export const PHONE_PRETTY = "+234 813 576 2914";
export const PHONE_E164 = "2348135762914";
export const EMAIL = "espafraneacademy@gmail.com";

export function waLink(message) {
  const base = `https://wa.me/${PHONE_E164}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const WA = {
  enrol: waLink("Hello EspaFrane Academy, I would like to enrol in a language programme."),
  french: waLink("Hello EspaFrane Academy, I would like to enquire about the French programme."),
  spanish: waLink("Hello EspaFrane Academy, I would like to enquire about the Spanish programme."),
  fees: waLink("Hello EspaFrane Academy, I would like to know more about your fees."),
  contact: waLink("Hello EspaFrane Academy, I would like to find out more about your classes."),
};

export const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("Enquiry: EspaFrane Academy")}`;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Programs", href: "#programmes" },
  { label: "Pricing", href: "#pricing" },
  { label: "Why choose Us", href: "#why-us" },
  { label: "FAQ", href: "#faq" },
];
