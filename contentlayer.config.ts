import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

const Article = defineDocumentType(() => ({
  name: 'Article',
  filePathPattern: `articles/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    category: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' } },
    isCheatsheet: { type: 'boolean', default: false },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc: { _raw: { flattenedPath: string } }) => doc._raw.flattenedPath.replace(/^articles\//, ''),
    },
  },
}))

const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `projects/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    tech: { type: 'list', of: { type: 'string' }, required: true },
    github: { type: 'string' },
    demo: { type: 'string' },
    image: { type: 'string' },
    featured: { type: 'boolean', default: false },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc: { _raw: { flattenedPath: string } }) => doc._raw.flattenedPath.replace(/^projects\//, ''),
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Article, Project],
})