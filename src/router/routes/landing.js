export default [
  {
    path: '/',
    component: () => import('@/pages/Landing/index.vue'),
    children: [
      {
        name: 'login',
        path: '/',
        component: () => import('@/pages/Landing/TopUpPoints.vue')
      },
      {
        name: 'top_up_points',
        path: 'top_up_points',
        component: () => import('@/pages/Landing/TopUpPoints.vue')
      },
      {
        name: 'landing',
        path: '',
        component: () => import('@/pages/Landing/index.vue')
      },

      {
        name: 'card_info',
        path: 'card_info',
        component: () => import('@/pages/Landing/CardInfo.vue')
      },

      {
        name: 'discounts',
        path: 'discounts',
        component: () => import('@/pages/Landing/DiscountsInfo.vue'),
        children: [
          {
            name: 'students_and_pupils',
            path: 'students_and_pupils',
            component: () => import('@/pages/Landing/DiscountStudentPupils.vue')
          },
          {
            name: 'disabled_people',
            path: 'disabled_people',
            component: () =>
              import('@/pages/Landing/DiscountDisabledPeople.vue')
          },
          {
            name: 'elderly',
            path: 'elderly',
            component: () => import('@/pages/Landing/DiscountElderly.vue')
          },
          {
            name: 'children',
            path: 'children',
            component: () => import('@/pages/Landing/DiscountChildren.vue')
          },
          {
            name: 'kaunas_council',
            path: 'kaunas_council',
            component: () => import('@/pages/Landing/DiscountKaunasCouncil.vue')
          },
          {
            name: 'large_families',
            path: 'large_families',
            component: () => import('@/pages/Landing/DiscountLargeFamilies.vue')
          }
        ]
      },
      {
        name: 'inspection',
        path: 'inspection',
        component: () => import('@/pages/Landing/InspectionInfo.vue')
      },
      {
        name: 'lost_found',
        path: 'lost_found',
        component: () => import('@/pages/Landing/LostFoundInfo.vue')
      },
      {
        name: 'landing_FAQ',
        path: 'FAQ',
        component: () => import('@/pages/Landing/Faq.vue')
      }
    ]
  }
]
