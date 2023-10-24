import { BiSolidMessageAlt, BiSupport } from "react-icons/bi";
import { BsArchiveFill } from "react-icons/bs";
import { FaMessage } from "react-icons/fa6";


export const sidebarItems = [
  {
    name: "All Message",
    href: "allMessages",
    icon: FaMessage,
  },
  {
    name: "ReservNow Support",
    href: "reservNowSupport",
    icon: BiSupport,
  },
  {
    name: "Archive",
    href: "archive",
    icon: BsArchiveFill,
  },
];
