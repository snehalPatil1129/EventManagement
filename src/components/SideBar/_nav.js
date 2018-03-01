export default {
    items: [
      {
        name: 'Dashboard',
        url: '/HomePage',
        icon: 'icon-speedometer',
      },
          {
            name: 'Login',
            url: '/login',
            icon: 'icon-star'
          },
          {
            name: 'Register',
            url: '/register',
            icon: 'icon-pencil'
          },
          {
            name: 'New Register',
            url: '/register',
            icon: 'icon-pencil'
          },
          {
            name: 'Base',
            url: '/Base',
            icon: 'icon-puzzle',
            children: [
              {
                name: 'Cards',
                url: '/base/cards',
                icon: 'icon-puzzle'
              }
            ]
          }
    ]
  };
  