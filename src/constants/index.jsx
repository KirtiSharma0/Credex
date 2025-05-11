import { UploadCloud } from "lucide-react";
import { LineChart } from "lucide-react";
import { Wallet } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Why Choose us", href: "#hero" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact us", href: "#contact-us" }
];

export const testimonials = [
  {
  user: "Rahul Mehra",
  company: "CodeCraze India",
  image: user1,
  text: "SoftSell made it ridiculously easy to sell my unused software license. Within minutes, I had a valuation and the money hit my account the same day. Absolutely loved the experience!",
},
{
  user: "Priya Sharma",
  company: "PixelWave Studios",
  image: user2,
  text: "I never imagined my old design tool license could be worth this much! SoftSell’s platform is smooth, fast, and super secure. Highly recommend it to all creators out there.",
},
{
  user: "Arjun Desai",
  company: "DevNest Solutions",
  image: user3,
  text: "As a freelance developer, SoftSell helped me liquidate unused licenses easily. The AI valuation was spot on and the payment was lightning fast!",
},
{
  user: "Meera Kapoor",
  company: "ThinkHub Tech",
  image: user4,
  text: "The SoftSell team is amazing — quick support, no shady tactics, and transparent pricing. I was skeptical at first, but they truly exceeded expectations.",
},
{
  user: "Kabir Joshi",
  company: "ScriptForge Labs",
  image: user5,
  text: "I’ve used other platforms before, but SoftSell was by far the smoothest. No middlemen, no delays — just upload, get value, and boom — you’re paid!",
},
{
  user: "Ananya Iyer",
  company: "CreativeCircuit",
  image: user6,
  text: "Selling digital licenses felt like a task until I found SoftSell. The interface is clean, support is great, and I felt in control throughout the process.",
}

];

export const features = [
  {
    icon: <UploadCloud/>,
    text: "Upload License",
    description:
      "Securely upload your software license or digital product in just a few clicks. Our platform ensures your data is encrypted and protected at every step.",
  },
  {
    icon: <LineChart/>,
    text: "Get Valuation",
    description:
      "Receive an instant, AI-powered valuation based on current market trends, user demand, and product potential — all within seconds.",
  },
  {
    icon: <Wallet/>,
    text: "Get Paid",
    description:
      "Once your offer is accepted, the payment is processed instantly. No hidden fees, no delays — just fast, reliable payouts to your preferred method.",
  },
];

export const checklistItems = [
  {
    title: "Fast and Seamless process",
    description:
      "Say goodbye to lengthy forms and endless wait times — our automated platform makes selling your license as easy as a few clicks.",
  },
  {
    title: "Secure and Encrypted Transactions",
    description:
      "Your data is protected with industry-leading encryption. Every file, every valuation, every payment — 100% secure.",
  },
  {
    title: "AI Powered Valuations",
    description:
      "We use real-time data and AI algorithms to give you the most accurate, competitive offer instantly — no guesswork.",
  },
  {
    title: "Global reach",
    description:
      "Sell from anywhere. Our platform supports international transactions, with support for multiple currencies and regions.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
