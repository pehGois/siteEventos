import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'carousel',
  title: 'Carousel',
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
      name: 'imgCarousel',
      title: 'Carousel de Imagens',
      type: 'array',
      of: [{type: 'reference',
      to: [{ type: 'imagem' }]}],
    })
        
    ],
  preview: {
    select: {
      title: 'name',
    },
  },
})
