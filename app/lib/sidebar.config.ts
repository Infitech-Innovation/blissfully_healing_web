import {
  LayoutGrid,
  BookOpen,
  CalendarDays,
  CreditCard,
  Video,
  HeartHandshake,
  ShoppingBag,
  Headphones,
  Settings,
  Sparkles,
  UserCircle2,
  MessageCircleHeart,
} from "lucide-react";

export const links = {
  admin: [
    {
      icon: LayoutGrid,
      label: "Dashboard",
      href: "/dashboard",
    },

    // {
    //   icon: FileText,
    //   label: "Blogs",
    //   href: "/admin/blogs",
    // },

    // {
    //   icon: BookOpen,
    //   label: "Courses",
    //   href: "/admin/courses",
    // },

    // {
    //   icon: Video,
    //   label: "Videos",
    //   href: "/admin/videos",
    // },

    // {
    //   icon: ShoppingBag,
    //   label: "E-Books",
    //   href: "/admin/ebooks",
    // },

    // {
    //   icon: CalendarDays,
    //   label: "Retreats",
    //   href: "/admin/retreats",
    // },

    // {
    //   icon: HeartHandshake,
    //   label: "Support Groups",
    //   href: "/admin/support-groups",
    // },

    // {
    //   icon: Users2,
    //   label: "Users",
    //   href: "/admin/users",
    // },

    // {
    //   icon: CreditCard,
    //   label: "Payments",
    //   href: "/admin/payments",
    // },

    // {
    //   icon: BarChart3,
    //   label: "Analytics",
    //   href: "/admin/analytics",
    // },

    // {
    //   icon: ImageIcon,
    //   label: "Media Library",
    //   href: "",
    //   // href: "/admin/media",
    // },
  ],

  user: [
    {
      icon: LayoutGrid,
      label: "Dashboard",
      href: "/dashboard",
    },

    {
      icon: Sparkles,
      label: "Healing Journey",
      href: "/user/journey",
    },

    {
      icon: BookOpen,
      label: "My Courses",
      href: "/user/courses",
    },

    {
      icon: ShoppingBag,
      label: "My E-Books",
      href: "/user/ebooks",
    },

    {
      icon: CalendarDays,
      label: "My Retreats",
      href: "/user/retreats",
    },

    {
      icon: HeartHandshake,
      label: "Support Groups",
      href: "/user/support-groups",
    },

    {
      icon: CreditCard,
      label: "Purchases",
      href: "/user/purchases",
    },

    {
      icon: Video,
      label: "Healing Videos",
      href: "/user/videos",
    },

    {
      icon: UserCircle2,
      label: "Profile",
      href: "/user/profile",
    },
  ],
};

export const helpLinks = {
  admin: [
    {
      icon: BookOpen,
      label: "Admin Guide",
      href: "/admin-guide",
    },

    // {
    //   icon: Headphones,
    //   label: "Support",
    //   href: "/support",
    // },

    // {
    //   icon: ShieldCheck,
    //   label: "Security",
    //   href: "/security",
    // },

    // {
    //   icon: Settings,
    //   label: "Settings",
    //   href: "/settings",
    // },
  ],

  user: [
    {
      icon: MessageCircleHeart,
      label: "Help Center",
      href: "/help",
    },

    {
      icon: Headphones,
      label: "Support",
      href: "/support",
    },

    {
      icon: Settings,
      label: "Settings",
      href: "/settings",
    },
  ],
};
