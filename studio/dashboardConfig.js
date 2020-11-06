export default {
  widgets: [
    {
      name: 'sanity-tutorials',
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
                  buildHookId: '5fa524ddd7e870d614ebddfe',
                  title: 'Sanity Studio',
                  name: 'sanity-11-ty-studio',
                  apiId: 'e56da069-8ada-49c6-a127-33df2c41fef0'
                },
                {
                  buildHookId: '5fa524dd6148c3e364a73427',
                  title: 'Blog Website',
                  name: 'sanity-11-ty',
                  apiId: '5fcd005b-0971-47aa-bd89-cc9b5e7b9fdf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sleepingwheel/Sanity-11ty',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-11-ty.netlify.app', category: 'apps'}
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
