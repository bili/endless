import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        "pid": "3CBFE178-1608-433B-8100-2D53BD988725",
        "id": "743D20E6-7E98-47EA-A8F1-740C0EF5AF10",
        "text": "移植endless到新的项目",
        "date": "2019-05-14 10:43:06",
        "color": "#666",
        "done": false,
        "isCollapsed": true
      },
      {
        "pid": "",
        "id": "35D4675A-4A2C-4215-B676-D13081A31DD6",
        "text": "买个笔记本托架",
        "date": "2019-05-14 10:24:39",
        "color": "#666",
        "done": false,
        "isCollapsed": true
      },
      {
        "pid": "FD1B2D42-3251-4A35-A557-97CCD75DBBCD",
        "id": "3CBFE178-1608-433B-8100-2D53BD988725",
        "text": "todolist",
        "date": "2019-05-14 10:13:12",
        "color": "#666",
        "done": false,
        "isCollapsed": true,
        "desc": "重新命名为endless，意为可以创建无限的todos。"
      },
      {
        "pid": "FD1B2D42-3251-4A35-A557-97CCD75DBBCD",
        "id": "DDF9FEA8-14B6-480C-A4F3-0C4DF54533EB",
        "text": "vue课程",
        "date": "2019-05-14 10:10:15",
        "color": "#666",
        "done": false,
        "isCollapsed": true
      },
      {
        "pid": "FD1B2D42-3251-4A35-A557-97CCD75DBBCD",
        "id": "5C943D7D-845B-4E21-9820-2E44A1EEAA70",
        "text": "copy&paste vue plugin",
        "date": "2019-05-14 10:06:46",
        "color": "#00c2d1",
        "done": true,
        "isCollapsed": true
      },
      {
        "pid": "FD1B2D42-3251-4A35-A557-97CCD75DBBCD",
        "id": "2D4B9570-C4DF-478B-9A91-4AEC51B87A8C",
        "text": "docker入门",
        "date": "2019-05-14 10:04:24",
        "color": "#666",
        "done": false
      },
      {
        "pid": "",
        "id": "FD1B2D42-3251-4A35-A557-97CCD75DBBCD",
        "text": "一周进阶",
        "date": "2019-05-14 10:04:09",
        "color": "#62d8b6",
        "done": false
      }
    ]
  },
  mutations: {
  },
  actions: {
  }
})
