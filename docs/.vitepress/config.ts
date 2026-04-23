import { defineConfig } from "vitepress";

export default defineConfig({
  title: "GritJS",
  description: "A modular Node.js framework",
  themeConfig: {
    nav: [
      { text: "Guide", link: "/guide/getting-started" },
      { text: "Packages", link: "/packages/orm" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Introduction",
          items: [
            { text: "Getting Started", link: "/guide/getting-started" },
          ],
        },
      ],
      "/packages/": [
        {
          text: "Packages",
          items: [
            { text: "ORM", link: "/packages/orm" },
            { text: "MySQL Connector", link: "/packages/mysql-connector" },
            {
              text: "MongoDB Connector",
              link: "/packages/mongodb-connector",
            },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/grit-js/grit.js" },
    ],
  },
});
