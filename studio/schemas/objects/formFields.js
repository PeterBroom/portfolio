export default {
  name: 'formFields',
  type: 'object',
  title: 'Form field',
  fields: [
    {
      name: 'field',
      type: 'reference',
      to: [
        {
          type: 'field'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'field.name'
    }
  }
}
