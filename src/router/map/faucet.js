
const Faucet = () => import('@/views/faucet/Index.vue')
const FaucetV2 = () => import('@/views/faucet/IndexV2.vue')

export const faucet = {
    path: '/faucet',
    component: Faucet,
    name: 'faucet'
}

export const faucetV2 = {
  path: '/faucetV2',
  component: FaucetV2,
  name: 'faucetV2'
}
