export default {
  name: 'formReference',
  type: 'object',
  title: 'Form',
  fields: [
    {
      name: 'form',
      type: 'reference',
      to: [
        {
          type: 'form'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'form.title'
    }
  }
}
