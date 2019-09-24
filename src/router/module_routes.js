
// let beforeEnter = (to, from, next) => {
//     // AUTH.currentPath = to.path
//     next()
// }


// let app = require('./app.js')
// var devRoutes = []
// devRoutes = devRoutes.concat(app.default.routes)
// for (let x = 0; x < devRoutes.length; x++) {
//     devRoutes[x]['beforeEnter'] = beforeEnter
// }

// let routes = [
//     {
//         path: '/login',
//         name: 'home',
//         component: resolve => require(["../modules/basic/Login.vue"], resolve),
//         beforeEnter: beforeEnter
//     }
// ]

// routes = routes.concat(devRoutes)

// export default {
//     routes: routes
// }