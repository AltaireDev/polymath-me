// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer2/source-files";
var Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: `articles/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    date: { type: "date", required: true },
    category: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" } },
    isCheatsheet: { type: "boolean", default: false }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace(/^articles\//, "")
    }
  }
}));
var Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    tech: { type: "list", of: { type: "string" }, required: true },
    github: { type: "string" },
    demo: { type: "string" },
    image: { type: "string" },
    featured: { type: "boolean", default: false }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace(/^projects\//, "")
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Article, Project]
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-RW5A2Z2R.mjs.map
