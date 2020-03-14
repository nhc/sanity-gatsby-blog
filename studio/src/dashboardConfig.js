export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e6d14dd281eb029d8a6d2a3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-rytkmxg5',
                  apiId: '8c814bd3-88ad-4034-9de0-bc64ec0e6855'
                },
                {
                  buildHookId: '5e6d14defb5f314e6296178d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-2wa3mqyj',
                  apiId: 'd076afb6-877e-44f3-8181-c8955cb57527'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nhc/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-2wa3mqyj.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
