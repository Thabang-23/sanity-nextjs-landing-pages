export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '61046b60fb63633a745f45a7',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-iboqf9kj',
                  apiId: 'e45755e4-710c-439c-9ad8-4a9123014675'
                },
                {
                  buildHookId: '61046b60f1ddb000dc620ed5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-w838jq6r',
                  apiId: '4e15279f-02cb-4fae-9556-16a3401dcf39'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Thabang-23/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-w838jq6r.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
