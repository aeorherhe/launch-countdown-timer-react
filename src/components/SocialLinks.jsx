import { nanoid } from "nanoid";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const socialLinks = [
  {
    id: nanoid(),
    title: "facebook",
    url: "https://facebook.com",
    icon: <FaFacebook />,
  },
  {
    id: nanoid(),
    title: "instagram",
    url: "https://instagram.com",
    icon: <FaInstagram />,
  },
  {
    id: nanoid(),
    title: "twitter",
    url: "https://twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: nanoid(),
    title: "pinterest",
    url: "https://pinterest.com",
    icon: <FaPinterest />,
  },
];

export const SocialLinks = () => {
  return (
    <div className="social-links">
      {socialLinks.map(({ id, title, url, icon }) => (
        <a
          key={id}
          href={url}
          title={title}
          target="_blank"
          rel="noopener noreferrer"
        >
          {icon}
        </a>
      ))}
    </div>
  );
};
