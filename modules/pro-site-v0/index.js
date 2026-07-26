module.exports = {
  extend: "@apostrophecms/piece-type",
  options: {
    label: "Blog",
    // Additionally add a `pluralLabel` option if needed.
  },
  fields: {
    add: {
      authorName: {
        type: "string",
        label: "Author",
      },
      publicationDate: {
        type: "date",
        label: "Publication date",
      },
      content: {
        type: "area",
        label: "Content",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {},
            "@apostrophecms/image": {},
          },
        },
      },
    },
    group: {
      basics: {
        label: "Basic",
        fields: ["authorName", "publicationDate", "content"],
      },
    },
  },
};
