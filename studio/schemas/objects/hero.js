export default {
  name: 'hero',
  type: 'object',
  title: 'Hero',
  fieldsets: [
    {
      name: 'heroFielset',
      title: 'Would you like to include a hero on this page?',
      options: {
        collapsible: true,
        collapsed: true
      }
    }
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      fieldset: 'heroFielset'
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      fieldset: 'heroFielset'
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessiblity.',
      fieldset: 'heroFielset',
      validation: Rule => Rule.error('You have to fill out the alternative text.').required(),
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'heroImageDesktop',
      type: 'image',
      title: 'Desktop image',
      fieldset: 'heroFielset'
    },
    {
      name: 'heroImageTablet',
      type: 'image',
      title: 'Tablet image',
      fieldset: 'heroFielset'
    },
    {
      name: 'heroImageMobile',
      type: 'image',
      title: 'Mobile image',
      fieldset: 'heroFielset'
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'title'
    }
  }
}
