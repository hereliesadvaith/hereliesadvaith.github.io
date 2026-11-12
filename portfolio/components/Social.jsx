import { FaGithub, FaLinkedin } from "react-icons/fa";

export const socials = [
  {
    name: "GitHub",
    icon: <FaGithub size={18} />,
    path: "https://github.com/hereliesadvaith/",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={18} />,
    path: "https://www.linkedin.com/in/hereliesadvaith/",
  },
];

const Social = ({ containerStyles, iconStyles }) => (
  <div className={containerStyles}>
    {socials.map((item) => (
      <a
        key={item.path}
        href={item.path}
        aria-label={item.name}
        className={iconStyles}
        target="_blank"
        rel="noopener noreferrer"
      >
        {item.icon}
      </a>
    ))}
  </div>
);

export default Social;
