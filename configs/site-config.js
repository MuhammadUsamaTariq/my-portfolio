import {
  FaGithub,
  FaLinkedin,
  // FaDev,
  // FaQuora,
  // FaTwitter
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Usama Tariq. All Rights Reserved.`,
  author: {
    name: "Usama Tariq",
    accounts: [
      // {
      //   url: "https://github.com/mustafa-ali-qbatch",
      //   label: "Github Account",
      //   type: "gray",
      //   icon: <FaGithub />
      // },
      // {
      //   url: "https://twitter.com/muhammad_ahmaad",
      //   label: "Twitter Account",
      //   type: "twitter",
      //   icon: <FaTwitter />
      // },
      // {
      //   url: "https://dev.to/m_ahmad",
      //   label: "Dev Account",
      //   type: "gray",
      //   icon: <FaDev />
      // },
      {
        url: "https://www.linkedin.com/in/muhammad-usama-tariq-939214158/",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      // {
      //   url: "https://www.quora.com/profile/Muhammad-Ahmad-66",
      //   label: "Quora Account",
      //   type: "red",
      //   icon: <FaQuora />
      // },
      {
        url: "mailto:usamatariq148@gmail.com",
        label: "Mail usama",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
