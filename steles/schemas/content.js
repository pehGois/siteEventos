import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'content',
  title: 'Content',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'imagem',
      title: 'Imagem',
      type: 'reference',
      to: [{type: 'imagem'}],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
})
