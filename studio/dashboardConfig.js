export default {
  widgets: [
    {
      name: "netlify",
      options: {
        title: "My Netlify Deploys",
        sites: [
          {
            title: "Sanity Studio",
            apiID: "",
            buildHookId: "",
            name: "",
          },

          {
            title: "Website",
            apiID: "",
            buildHookId: "",
            name: "",
          },
        ],
      },
    },
    {
      name: "document-list",
      options: {
        title: "Last edited documents",
        order: "_updatedAt desc",
        types: ["post", "project"],
      },
      layout: {
        width: "auto",
        height: "large",
      },
    },
    {
      name: "document-list",
      options: {
        title: "Last edited posts",
        order: "_updatedAt desc",
        types: ["post"],
      },
    },
    {
      name: "project-info",
      layout: {
        width: "large",
        height: "small",
      },
    },
    {
      name: "project-users",
      layout: {
        width: "medium",
        height: "small",
      },
    },
  ],
};
