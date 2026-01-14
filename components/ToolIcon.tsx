// @ts-nocheck
import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiGreensock,
  SiRedux,
  SiAxios,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiDocker,
  SiVercel,
  SiNetlify,
  SiCloudinary,
  SiChakraui,
  SiShadcnui,
} from "react-icons/si";

const toolConfig = {
  // ===== Core Web =====
  html: { Icon: SiHtml5, color: "bg-orange-500", label: "HTML5" },
  css: { Icon: SiCss3, color: "bg-blue-500", label: "CSS3" },
  javascript: { Icon: SiJavascript, color: "bg-yellow-400", label: "JavaScript" },
  typescript: { Icon: SiTypescript, color: "bg-blue-600", label: "TypeScript" },

  // ===== Frontend =====
  react: { Icon: SiReact, color: "bg-cyan-400", label: "React" },
  nextjs: { Icon: SiNextdotjs, color: "bg-black", label: "Next.js" },
  tailwindcss: {
    Icon: SiTailwindcss,
    color: "bg-cyan-500",
    label: "Tailwind CSS",
  },
  "framer motion": {
    Icon: SiFramer,
    color: "bg-purple-600",
    label: "Framer Motion",
  },
  gsap: { Icon: SiGreensock, color: "bg-green-500", label: "GSAP" },
  redux: { Icon: SiRedux, color: "bg-purple-700", label: "Redux" },

  // ===== Backend =====
  nodejs: { Icon: SiNodedotjs, color: "bg-green-600", label: "Node.js" },
  express: { Icon: SiExpress, color: "bg-gray-700", label: "Express.js" },
  mongodb: { Icon: SiMongodb, color: "bg-green-600", label: "MongoDB" },

  // ===== API / Networking =====
  axios: { Icon: SiAxios, color: "bg-purple-500", label: "Axios" },

  // ===== Tools & Platforms =====
  vite: { Icon: SiVite, color: "bg-purple-500", label: "Vite" },
  postman: { Icon: SiPostman, color: "bg-orange-500", label: "Postman" },
  docker: { Icon: SiDocker, color: "bg-blue-600", label: "Docker" },
  vercel: { Icon: SiVercel, color: "bg-black", label: "Vercel" },
  netlify: { Icon: SiNetlify, color: "bg-teal-500", label: "Netlify" },
  cloudinary: {
    Icon: SiCloudinary,
    color: "bg-blue-500",
    label: "Cloudinary",
  },

  // ===== UI Libraries =====
  chakraui: { Icon: SiChakraui, color: "bg-teal-600", label: "Chakra UI" },
  shadcnui: { Icon: SiShadcnui, color: "bg-gray-900", label: "shadcn/ui" },
};

const ToolIcon: React.FC<{ tool: string }> = ({ tool }) => {
  const iconSize = 20;
  const baseClassName = "rounded-full h-8 w-8 p-1 text-white";

  const config = toolConfig[tool.toLowerCase()];

  if (config) {
    const { Icon, color, label } = config;
    return (
      <Icon
        size={iconSize}
        className={`${baseClassName} ${color}`}
        title={label}
        aria-label={label}
      />
    );
  }

  // Fallback (safe + clean)
  return (
    <span className="inline-block px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-md">
      {tool}
    </span>
  );
};

export default ToolIcon;
