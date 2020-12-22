import grid from '../layout/grid'

export default {
  name: 'bodyCopy',
  type: 'object',
  title: 'Body copy',
  fields: [
    {
      name: 'grid',
      type: 'string',
      title: 'Grid',
      options: grid
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => [
        Rule.required()
          .min(3)
          .error('A title of min. 3 characters is required'),
        Rule.max(50).warning('Shorter titles are usually better')
      ]
    },
    {
      name: 'copy',
      type: 'bodyPortableText',
      title: 'Copy'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        slugify: input =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .slice(0, 200)
      },
      hidden: true
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current'
    }
  }
}
