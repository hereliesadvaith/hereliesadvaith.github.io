import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub size={28} />,
    path: "https://github.com/hereliesadvaith/",
  },
  {
    icon: <FaLinkedin size={28} />,
    path: "https://www.linkedin.com/in/hereliesadvaith/",
  },
  {
    icon: <FaTwitter size={28} />,
    path: "https://twitter.com/hereliesadvaith",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
