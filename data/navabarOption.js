import { CheckSquare, Calendar, Bell, List } from "lucide-react"; // Assuming you're using lucide-react for icons

export const navItems = [
  {
    label: "Pets",
    link: "#",
    children: [
      {
        label: "Add pet",
        link: "/addpet",
        icon: <CheckSquare className="w-4 h-4" />,
      },
      {
        label: "Calendar",
        link: "#",
        icon: <Calendar className="w-4 h-4" />,
      },
      {
        label: "Reminders",
        link: "#",
        icon: <Bell className="w-4 h-4" />,
      },
      {
        label: "Planning",
        link: "#",
        icon: <List className="w-4 h-4" />,
      },
    ],
  },
  {
    label: "Pet Services",
    link: "#",
    children: [
      {
        label: "Todo list",
        link: "#",
        icon: <CheckSquare className="w-4 h-4" />,
      },
      {
        label: "Calendar",
        link: "#",
        icon: <Calendar className="w-4 h-4" />,
      },
      {
        label: "Reminders",
        link: "#",
        icon: <Bell className="w-4 h-4" />,
      },
      {
        label: "Planning",
        link: "#",
        icon: <List className="w-4 h-4" />,
      },
    ],
  },
  {
    label: "Breed",
    link: "#",
    children: [
      {
        label: "History",
        link: "#",
      },
      {
        label: "Our Team",
        link: "#",
      },
      {
        label: "Blog",
        link: "#",
      },
    ],
  },
  {
    label: "Food",
    link: "#",
    children: [
      {
        label: "History",
        link: "#",
      },
      {
        label: "Our Team",
        link: "#",
      },
      {
        label: "Blog",
        link: "#",
      },
    ],
  },
  {
    label: "List Your pet",
    link: "#",
  },
];

export const adminNav = [
  {
    label: "Pets",
    link: "#",
    children: [
      {
        label: "Add Pets",
        link: "/addpet",
        icon: <CheckSquare className="w-4 h-4" />,
      },
      {
        label: "Calendar",
        link: "#",
        icon: <Calendar className="w-4 h-4" />,
      },
      {
        label: "Reminders",
        link: "#",
        icon: <Bell className="w-4 h-4" />,
      },
      {
        label: "Planning",
        link: "#",
        icon: <List className="w-4 h-4" />,
      },
    ],
  },
  {
    label: "Pet Services",
    link: "#",
    children: [
      {
        label: "Todo list",
        link: "#",
        icon: <CheckSquare className="w-4 h-4" />,
      },
      {
        label: "Calendar",
        link: "#",
        icon: <Calendar className="w-4 h-4" />,
      },
      {
        label: "Reminders",
        link: "#",
        icon: <Bell className="w-4 h-4" />,
      },
      {
        label: "Planning",
        link: "#",
        icon: <List className="w-4 h-4" />,
      },
    ],
  },
  {
    label: "Breed",
    link: "#",
    children: [
      {
        label: "History",
        link: "#",
      },
      {
        label: "Our Team",
        link: "#",
      },
      {
        label: "Blog",
        link: "#",
      },
    ],
  },
  {
    label: "Food",
    link: "#",
    children: [
      {
        label: "History",
        link: "#",
      },
      {
        label: "Our Team",
        link: "#",
      },
      {
        label: "Blog",
        link: "#",
      },
    ],
  },
  {
    label: "List Your pet",
    link: "#",
  },
];
