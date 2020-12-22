export default {
  widgets: [
    {
      name: 'portfolio',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f84f1a2d38d4c362c149bf3',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-f49fp7jt',
                  apiId: '41b75c9e-f3ef-415f-896b-89da7f780720'
                },
                {
                  buildHookId: '5f84f1a2b1fbc33809acc8dc',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-ogbvfomj',
                  apiId: '7cb607e6-1500-4943-bf57-3a7937f0141d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/PeterBroom/sanity-eleventy-blog',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-eleventy-blog-web-ogbvfomj.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
