import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'imagem',
  title: 'Imagem',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string'
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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
          name: 'legenda',
          title: 'Legenda',
          type: 'string',
    })
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
