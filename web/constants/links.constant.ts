import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import VerifiedIcon from "@mui/icons-material/Verified";

export const mainLinks = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: DashboardIcon,
  },
  {
    title: "Explore Students",
    path: "/dashboard/students",
    icon: PeopleAltIcon,
  },
  {
    title: "Explore Skills",
    path: "/dashboard/skills",
    icon: AutoAwesomeIcon,
  },
  {
    title: "My Skills",
    path: "/dashboard/my-skills",
    icon: VerifiedIcon,
  },
];

import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import HistoryIcon from "@mui/icons-material/History";

export const learningLinks = [
  {
    title: "Exchange Request",
    path: "/dashboard/requests",
    icon: SwapHorizIcon,
  },
  {
    title: "My Session",
    path: "/dashboard/sessions",
    icon: CalendarTodayIcon,
  },
  {
    title: "Learning History",
    path: "/dashboard/history",
    icon: HistoryIcon,
  },
];

import ContactMailIcon from "@mui/icons-material/ContactMail";
import SettingsIcon from "@mui/icons-material/Settings";

export const accountLinks = [
  {
    title: "My Profile",
    path: "/dashboard/profile",
    icon: ContactMailIcon,
  },
  {
    title: "Settings",
    path: "/dashboard/settings",
    icon: SettingsIcon,
  },
];
