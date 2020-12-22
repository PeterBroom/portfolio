import {isUniqueAcrossAllDocuments} from '../../lib/isUniqueAcrossAllDocuments'
import grid from '../layout/grid'

export default {
  name: 'form',
  type: 'object',
  title: 'Add a form',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Form title',
      validation: Rule => [
        Rule.required()
          .min(3)
          .error('A title of min. 3 characters is required'),
        Rule.max(50).warning('Shorter titles are usually better')
      ]
    },
    {
      name: 'grid',
      type: 'string',
      title: 'Grid',
      options: grid
    },
    {
      name: 'id',
      type: 'slug',
      title: 'Form identifier',
      options: {
        isUnique: isUniqueAcrossAllDocuments,
        source: 'title',
        maxLength: 200,
        slugify: input =>
          input
            .toLowerCase()
            .replace(/\s+/g, '')
            .slice(0, 200)
      }
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
    },
    {
      name: 'field',
      title: 'Form fields',
      type: 'array',
      of: [
        {
          type: 'field'
        }
      ]
    },
    {
      name: 'action',
      title: 'Form action',
      type: 'array',
      of: [
        {
          type: 'formAction'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current'
    }
  }
}
