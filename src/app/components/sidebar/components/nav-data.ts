export const navbarData = [
  {
    routeLink: 'login',
    icon: 'fa fa-sign-in',
    label: 'logar'
  },
  {
    routeLink: 'home',
    icon: 'fa fa-home',
    label: 'Home'
  },
  {
    routeLink: 'perfil',
    icon: 'fa fa-users',
    label: 'Perfil'
  },
  {
    routeLink: 'orçamentos',
    icon: 'fa fa-usd',
    label: 'Orçamentos'
  },
  {
      routeLink: 'dashboard',
      icon: 'fa fa-home',
      label: 'Dashboard'
  },


{
      routeLink: 'media',
      icon: 'fa fa-camera',
      label: 'Media'
  },
  {
      routeLink: 'settings',
      icon: 'fa fa-cog',
      label: 'Settings'
  },
  {
      routeLink: 'products',
      icon: 'fa fa-gift',
      label: 'Menu with Children',
      submenuLevel1: [
          {
              routeLink: '',
              icon: 'fal fa-cog', // icon if needed
              label: 'Sub menu level 1',
          },
          {
              routeLink: '',
              icon: 'fal fa-cog', // icon if needed
              label: 'Sub menu level 1',
              submenuLevel2: [
                  {
                      routeLink: '',
                      icon: 'fal fa-cog', // icon if needed
                      label: 'Sub menu level 2',
                  }
              ]
          }
      ]
  },

];
