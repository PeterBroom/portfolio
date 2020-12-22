export default {
  name: 'field',
  type: 'object',
  title: 'Form field',
  fields: [
    {
      name: 'formLabel',
      type: 'string',
      title: 'Label',
      validation: Rule => [
        Rule.required()
          .min(4)
          .error('A label of min. 4 characters is required'),
        Rule.max(50).warning('Shorter titles are usually better')
      ]
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'formLabel',
        slugify: input =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .slice(0, 200)
      },
      hidden: true
    },
    {
      name: 'labelHint',
      type: 'string',
      title: 'Label hint',
      description: '(e.g Please enter your full name)'
    },
    {
      name: 'fieldType',
      type: 'string',
      title: 'Field type',
      options: {
        list: [
          {title: 'Text', value: 'field-text'},
          {title: 'Text Area', value: 'field-textarea'},
          {title: 'Numeric', value: 'field-numeric'},
          {title: 'Telephone', value: 'field-telephone'},
          {title: 'Email', value: 'field-email'},
          {title: 'Password', value: 'field-password'},
          {title: 'Button', value: 'field-button'}
        ],
        layout: 'select'
      }
    },
    {
      name: 'value',
      type: 'string',
      description: ''
    },
    {
      name: 'validation',
      type: 'string',
      title: 'Form validation',
      description: 'Is this field required?',
      options: {
        list: [
          {title: 'Yes', value: 'true'},
          {title: 'No', value: 'false'}
        ],
        layout: 'radio'
      }
    }
  ],
  preview: {
    select: {
      title: 'formLabel',
      subtitle: 'slug.current'
    }
  }
}
