import grid from '../layout/grid'

export default {
  name: 'video',
  type: 'object',
  title: 'Video',
  fields: [
    {
      name: 'grid',
      type: 'string',
      title: 'Grid',
      options: grid
    },
    {
      name: 'videoType',
      type: 'string',
      title: 'Video type',
      options: {
        list: [
          {title: 'YouTube', value: 'video-youtube'},
          {title: 'Vimeo', value: 'video-vimeo'}
        ],
        layout: 'select'
      }
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
      name: 'videoId',
      type: 'string',
      title: 'Id',
      description: 'The id for the video (i.e https://www.youtube.com/watch?v=xi6r3hZe5Tg)'
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
