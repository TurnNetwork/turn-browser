
const nodeDetailComponent = () => import('@/views/node/node-detail.vue')
const nodeListComponent = () => import('@/views/node/node-list.vue')
const historyNodeComponent = () => import('@/views/node/history-node.vue')
const zeroNodeComponent = () => import('@/views/node/zero-node.vue')

const micro_nodeListComponent = () => import('@/views/micro_node/node-list.vue')
const micro_nodeDetailComponent = () => import('@/views/micro_node/node-detail.vue')

export const nodeDetail = {
  path: '/node-detail',
  component: nodeDetailComponent,
  name: 'nodeDetailComponent'
}
export const nodeList = {
  path: '/node',
  component: nodeListComponent,
  name: 'nodeListComponent'
}
export const historyNode = {
  path: '/history-node',
  component: historyNodeComponent,
  name: 'historyNodeComponent'
}

export const zeroNode = {
  path: '/zero-node',
  component: zeroNodeComponent,
  name: 'zeroNodeComponent'
}


export const micro_node_List = {
  path: '/micro_node',
  component: micro_nodeListComponent,
  name: 'microNodeListComponent'
}
export const micro_nodeDetail = {
  path: '/microNode-details',
  component: micro_nodeDetailComponent,
  name: 'microNodeDetailComponent'
}