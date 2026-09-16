import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://blog.thefinalcut.men/",
    title: "Hypnodotis's blog",
    description: "Hypnodotis 的个人随笔与学习笔记",
    author: "hypnodotis",
    profile: "https://blog.thefinalcut.men/",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/pinkfong8848/AstroPaper/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",    url: "https://github.com/pinkfong8848" },
    { name: "x",         url: "https://x.com" },
    { name: "instagram", url: "https://www.instagram.com" },
    { name: "mail",      url: "mailto:admin@thefinalcut.men" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});

