export const ROUTES = Object.freeze({
  HOME: '/',
  LIST: '/list',
  ACCOUNT: '/account',
  SUPPORT: '/support',
})

export const ROUTE_LABELS = Object.freeze({
  [ROUTES.HOME]: 'Home',
  [ROUTES.LIST]: 'List',
  [ROUTES.ACCOUNT]: 'Account',
  [ROUTES.SUPPORT]: 'Support',
})

export const ROUTE_ICONS = Object.freeze({
  [ROUTES.HOME]: 'icon-bars',
  [ROUTES.ACCOUNT]: 'icon-user',
  [ROUTES.SUPPORT]: 'icon-info',
})

/**
 * Create route
 * 
 * @param {String} route
 * @param {Array<*>} children Nested route
 */
const _r = (route, children) => {
  return {
    label: ROUTE_LABELS[route],
    path: route,
    icon: ROUTE_ICONS[route],
    children,
  }
}

export const routesTree = [
  _r(ROUTES.HOME, [
    _r(ROUTES.LIST),
  ]),
  _r(ROUTES.ACCOUNT),
  _r(ROUTES.SUPPORT),
]