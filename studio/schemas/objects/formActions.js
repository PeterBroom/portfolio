export default {
  name: 'formAction',
  type: 'object',
  title: 'Form action',
  fields: [
    {
      name: 'email',
      type: 'string',
      title: 'Send to Email',
      description: 'Enter a valid address'
      // validation: Rule => Rule.custom(fields => {
      //   if (fields.authors.length > 0 && Object.keys(fields.guest).length > 0) return 'You must enter a valid email address'
      //   return true
      // })
    },
    {
      name: 'endpoint',
      type: 'string',
      title: 'Post to an end-point',
      description: 'Where this form will submit to'
    }
  ],
  preview: {
    select: {
      title: 'email'
    }
  }
}
