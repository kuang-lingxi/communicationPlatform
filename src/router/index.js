import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import AllCourse from '@/components/allCourse/AllCourse'
import Courses from '@/components/allCourse/Courses'
import Topic from '@/components/allCourse/Topic'
import Group from '@/components/allCourse/Group'
import Information from '@/components/personalInformation/Information'
import MyCourse from '@/components/personalInformation/MyCourse'
import MyGroup from '@/components/personalInformation/MyGroup'
import MyTopic from '@/components/personalInformation/MyTopic'
import OnlineBbs from '@/components/onlineBBS/OnlineBbs';
import Recommend from '@/components/onlineBBS/Recommend'; 
import Setting from '@/components/personalSetting/Setting';
import Upload from '@/components/upload/Upload';
import Video from '@/components/video/Video';
import Introduce from '@/components/video/Introduce';
import Question from '@/components/video/Question';
import Chapter from '@/components/video/Chapter';

Vue.use(Router)

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
    },
    {
      path: '/Information',
      name: 'information',
      component: Information,
      children: [
        { path: '', redirect: 'myCourse'},
        { path: 'myCourse', component: MyCourse },
        { path: 'myTopic', component: MyTopic },
        { path: 'myGroup', component: MyGroup },
        { path: 'setting', component: Setting}
      ]
    },
    {
      path: '/OnlineBBS',
      name: 'OnlinBBS',
      component: OnlineBbs,
      children: [
        { path: '', redirect: 'recommended'},
        { path: 'recommended', component: Recommend},
        { path: 'new', component: Recommend}
      ]
    },
    {
      path: '/Upload',
      name: 'Upload',
      component: Upload
    },
    {
      path: '/Video',
      name: 'Video',
      component: Video,
      children: [
        { path: '', redirect: 'introduce'},
        { path: 'introduce', component: Introduce},
        { path: 'question', component: Question},
        { path: 'chapter', component: Chapter}
      ]
    }
  ]
})
