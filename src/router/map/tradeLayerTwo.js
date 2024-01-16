const tradeLayerTwoListComponent = () => import('@/views/tradeLayerTwo/list.vue')
const tradeLayerTwoDetailComponent = () => import('@/views/tradeLayerTwo/trade-detail.vue')

export const tradeLayerTwoList = {
  path: '/tradeLayerTwo',
  // redirect: '/block/trade'
  component: tradeLayerTwoListComponent,
  name: 'tradeLayerTwoListComponent',
}
export const tradeLayerTwoDetail = {
  path: '/tradeLayerTwo-detail',
  component: tradeLayerTwoDetailComponent,
  name: 'tradeLayerTwoDetailComponent',
}
