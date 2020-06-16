export default {
  name: "video",
  title: "Video",
  type: "object",
  options: {
    preview: {
      select: {
        file: "file.asset.originalFilename",
        size: "file.asset.size",
        media: "media",
        type: "type",
      },
      prepare(selection) {
        return {
          title: selection.file,
          subtitle: `${Math.round(selection.size / 1024 / 1024)}Mb ${
            selection.type || ""
          } ${selection.media || ""}`,
        };
      },
    },
  },
  fields: [
    {
      name: "file",
      title: "File",
      type: "file",
    },
    {
      name: "url",
      title: "Url",
      type: "url",
    },
  ],
};
