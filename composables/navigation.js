const menu = ref([
  {
    label: 'What We Do',
    url: '/services',
    // Uncomment the following lines to add a submenu
    // submenu: [
    //   {
    //     label: 'UX Design',
    //     url: '/ux-design'
    //   },
    // ]
  },
  {
    label: 'Case Studies',
    url: '/case-studies',
    alignRight: false
  },
  {
    label: 'Insights',
    url: '/insights',
    alignRight: false
  },
  {
    label: 'Contact',
    url: '/contact',
  }
])

export { menu }
