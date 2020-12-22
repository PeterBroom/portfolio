import {format} from 'date-fns'
import template from '../layout/template'

export default {
  name: 'page',
  type: 'document',
  title: 'Pages',
  fields: [
    {
      name: 'template',
      title: 'Template',
      description: 'Page template',
      type: 'string',
      options: template
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing',
      hidden: true
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the post',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Excerpt',
      description:
        'This ends up on summary pages, on Google, when people share your pages in social media.'
    },
    {
      name: 'hero',
      type: 'hero',
      title: 'Hero',
      description:
        'The hero sits at the top of the page containing an image and copy. Use this to introduce your content'
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [{type: 'bodyCopy'}, {type: 'form'}, {type: 'video'}]
    }
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug'
    },
    prepare ({title = 'No title', publishedAt, slug = {}}) {
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  }
}
