import { createRouter,createWebHistory } from 'vue-router';
import Home from './pages/Home';
import DcHeroes from './pages/DcHeroes';
import Calender from './pages/Calender';
import Markdown from './pages/Markdown.vue';
import Slider from './pages/Slider.vue';
import Calculator from './pages/Calculator.vue';
import ReusableModal from './pages/ReusableModal.vue';
import Chat from './pages/Chat.vue';
import UserCrud from './pages/UserCrud.vue';
import Tensorflow from './pages/Tensorflow.vue';
import Todo from './pages/Todo';
import Weather from './pages/Weather';
import ReactionTimer from './pages/ReactionTimer';

import store from './store/index';


const routes = [
  {path: '/', component: Home},
  {path: '/dc-heroes', component: DcHeroes},
  {path: '/calender', component: Calender},
  {path: '/markdown', component: Markdown},
  {path: '/slider', component: Slider},
  {path: '/calculator', component: Calculator},
  {path: '/modal', component: ReusableModal},
  {
    path: '/chat', 
    component: Chat, 
    meta: {middleware: 'auth'},
  },
  {
    path: '/crud', 
    component: UserCrud, 
  },
  {
    path: '/tensorflow', 
    component: Tensorflow, 
  },
  {
    path: '/todo', 
    component: Todo, 
  },
  {
    path: '/weather', 
    component: Weather, 
  },
  {path: '/reaction', component: ReactionTimer},
]

const router = createRouter({
  history: createWebHistory(),
  routes
});
router.beforeEach((to,_,next)=> {
  if(to.meta.middleware){
    const middleware = require(`./middleware/${to.meta.middleware}`);
    if(middleware) {
      middleware.default(next,store);
    }
    else {
      next();
    }
  }
  else {
    next();
  }
})

export default router;