import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import AllCourse from '@/components/allCourse/AllCourse'
import Courses from '@/components/allCourse/Courses'
import Topic from '@/components/allCourse/Topic'
import Group from '@/components/allCourse/Group'

Vue.use(Router)

const User = {
  template: '<div>User nihao</div>'
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/AllCourse',
      name: "AllCourse",
      component: AllCourse,
      children: [
        { path: '', redirect: 'courses'},
        { path: 'courses', component:Courses },
        { path: 'topic', component: Topic},
        { path: 'group', component: Group}
      ]
    }
  ]
})
