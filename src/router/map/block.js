
const blockDetailComponent = () => import('@/views/block/block-detail.vue')
const blockDetailComponentV2 = () => import('@/views/block/block-detailV2.vue')
const blockListComponent = () => import('@/views/block/list.vue')
const blockListComponentV2 = () => import('@/views/block/listV2.vue')
const tradeListComponent = () => import('@/views/trade/list.vue')
const emptyComponent = () => import("@/components/common/empty-router.vue")

export const blockDetail = {
    path: '/block-detail',
    component: blockDetailComponent,
    name: 'blockDetailComponent'
}

export const blockDetailV2 = {
  path: '/block-detailV2',
  component: blockDetailComponentV2,
  name: 'blockDetailComponentV2'
}

export const blockList = {
    path: '/block',
    component: emptyComponent,
    redirect: '/block/index',
    children: [
        {
            path: 'index',
            component: blockListComponent,
            name: 'blockListComponent',
            meta: {
                keepAlive: true
            },
        },
        {
          path: 'indexV2',
          component: blockListComponentV2,
          name: 'blockListComponentV2',
          meta: {
            keepAlive: true
          },
        },
        {
            path: 'trade',
            component: tradeListComponent,
            name: 'tradeListComponent',
            meta: {
                keepAlive: true
            },
        }
    ]
}

