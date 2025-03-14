import Mock from 'mockjs'
import { resultSuccess } from '../../util'

const Random = Mock.Random

const token = Random.string('upper', 32, 32)

const menu = {
  menu: [
    {
      name: 'system',
      meta: {
        title: '架构设计',
        icon: 'Box',
        module: 'docs'
      },
      // component: 'LAYOUT',
      path: '/docs/system',
      children: [
        {
          name: 'system_home',
          path: '/docs/system/home',
          meta: {
            title: 'Ting Library 介绍',
            module: 'docs'
          },
          auth: ['ting']
        },
        {
          name: 'system_markdown',
          path: '/docs/system/markdown',
          meta: {
            title: '🔥文档的设计',
            module: 'docs'
          },
          auth: []
        },
        {
          name: 'system_micro',
          path: '/docs/system/micro',
          meta: {
            title: '🔥微前端',
            module: 'docs'
          },
          auth: []
        },
        {
          name: 'system_404',
          path: '/docs/system/404',
          meta: {
            title: '❗404页面',
            transition: true
          },
          auth: []
        }
      ]
    },
    {
      name: 'basics',
      meta: {
        title: '基础知识',
        icon: 'MessageBox',
        module: 'docs'
      },
      path: '/docs/basics',
      children: [
        {
          name: 'basics_git',
          path: '/docs/basics/git',
          meta: {
            title: '📋Git基础',
            module: 'docs'
          },
          auth: []
        },
        {
          name: 'basics_docker',
          path: '/docs/basics/docker',
          meta: {
            title: '📋Docker基础',
            module: 'docs'
          },
          auth: []
        },
        {
          name: 'basics_linux',
          path: '/docs/basics/linux',
          meta: {
            title: '📋Linux基础',
            module: 'docs'
          },
          auth: []
        }
      ]
    },
    {
      name: 'performance',
      meta: {
        title: '性能优化',
        icon: 'Coin',
        module: 'docs'
      },
      // component: 'LAYOUT',
      path: '/docs/performance',
      children: [
        {
          name: 'performance_virtual_scroll',
          path: '/docs/performance/virtual-scroll',
          meta: {
            title: '虚拟列表',
            module: 'docs'
          },
          auth: []
        }
      ]
    },
    {
      name: 'repackage',
      meta: {
        title: '组件封装',
        icon: 'Brush',
        module: 'docs'
      },
      // component: 'LAYOUT',
      path: '/docs/repackage',
      children: [
        {
          name: 'repackage_home',
          path: '/docs/repackage/home',
          meta: {
            title: '🔥Vue二次封装思考',
            module: 'docs'
          },
          auth: []
        },
        {
          name: 'repackage_components',
          path: '/docs/repackage/components',
          meta: {
            title: 'Vue二次封装组件',
            module: 'docs'
          },
          auth: []
        }
      ]
    },
    {
      name: 'vitual',
      meta: {
        title: '可视化图表',
        icon: 'Picture',
        module: 'docs'
      },
      path: '/docs/vitual',
      children: [
        {
          name: 'vitual_demographic',
          path: '/docs/vitual/demographic',
          meta: {
            title: '📊人口统计',
            module: 'docs'
          },
          auth: []
        }
      ]
    }
  ]
}

export default [
  {
    url: '/fake-api/login',
    timeout: 1000,
    method: 'post',
    response: () => {
      return resultSuccess({ token })
    }
  },
  {
    url: '/fake-api/admin_info',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(menu)
    }
  }
]
