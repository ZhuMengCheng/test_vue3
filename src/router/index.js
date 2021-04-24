import { createRouter, createWebHashHistory } from 'vue-router'
const User = {
    template: '<div>User {{ $route.params.id }}</div>',
    created() {
        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
                // 对路由变化做出响应...
            }
        )
    },
}

const router = createRouter({
    history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('../views/home.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/about.vue')
        }
        // { path: '/users/:id', component: User },
        // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
        // { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
        // 将匹配以 `/user-` 开头的所有内容，并将其放在 `$route.params.afterUser` 下
        // { path: '/user-:afterUser(.*)', component: UserGeneric },
    ]
})

// 所有的路由都会走这个方法，可以判断
router.beforeEach((to, from) => {
    // ...
    // 返回 false 以取消导航
    console.log(to, from)
    console.log("取消导航")
    return true
})

router.beforeResolve(async to => {
    if (to.meta.requiresCamera) {
        try {
            await askForCameraPermission()
        } catch (error) {
            if (error instanceof NotAllowedError) {
                // ... 处理错误，然后取消导航
                return false
            } else {
                // 意料之外的错误，取消导航并把错误传给全局处理器
                throw error
            }
        }
    }
})

export default router




