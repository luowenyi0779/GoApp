import { Navigation } from "react-native-navigation"

import Login from "../screen/Login"
import GoCircle from "../screen/GoCircle"
import GoHealth from "../screen/GoHealth"
import GoRun from "../screen/GoRun"
import GoStore from "../screen/GoStore"
import InputAuthCode from "../screen/InputAuthCode"
import Introduction from "../screen/Introduction"
import My from "../screen/My"
import App from '../../App'
import DongTaiDetail from '../components/DongTaiDetail'
import ShareCom from '../components/ShareCom'

Navigation.registerComponent('Login', () => Login)
Navigation.registerComponent('GoCircle', () => GoCircle)
Navigation.registerComponent('GoHealth', () => GoHealth)
Navigation.registerComponent('GoRun', () => GoRun)
Navigation.registerComponent('GoStore', () => GoStore)
Navigation.registerComponent('InputAuthCode', () => InputAuthCode)
Navigation.registerComponent('Introduction', () => Introduction)
Navigation.registerComponent('My', () => My)
Navigation.registerComponent('App', () => App)
Navigation.registerComponent('DongTaiDetail', () => DongTaiDetail)
//放入状态栏中的组件
Navigation.registerComponent('ShareCom', () => ShareCom)




// 进入app前的广告页
export const WelcomeScreen = {
  root: {
    stack: {
      id: 'WELCOMESCREEN',
      children: [
        {
          component: {
            name: 'Introduction'
          }
        }
      ]
    }
  }

}
// 登录页
export const LoginRoot = {
  root: {
    stack: {
      id: 'LOGIN_LAYOUT',
      children: [
        {
          component: {
            name: 'Login'
          }
        }
      ]
    }
  }
}
//带底部菜单
export const MainRoot = {
  root: {
    bottomTabs: {
      id: 'BOTTOM_TABS_LAYOUT',
      children: [
        {
          stack: {
            id: 'HOME_TAB',
            children: [
              {
                component: {
                  id: 'GO_CIRCLE_SCREEN',
                  name: 'GoCircle'
                }
              }
            ],
            options: {
              bottomTab: {
                text: 'GO圈',
                icon: require('../assets/bottomTabs/gocircle.png'),
                selectedIcon: require('../assets/bottomTabs/gocircle_sl.png')
              }
            }

          }
        },
        {
          stack: {
            id: 'HEALTH_TAB',
            children: [
              {
                component: {
                  id: 'GO_HEALTH_SCREEN',
                  name: 'GoHealth'
                }
              }
            ],
            options: {
              bottomTab: {
                text: 'GO健康',
                icon: require('../assets/bottomTabs/health.png'),
                selectedIcon: require('../assets/bottomTabs/health_sl.png')
              }
            }
          }
        },
        {
          stack: {
            id: 'RUN_TAB',
            children: [
              {
                component: {
                  id: 'GO_RUN_SCREEN',
                  name: 'GoRun'
                }
              }
            ],
            options: {
              bottomTab: {
                text: 'GO运动',
                icon: require('../assets/bottomTabs/run.png'),
                selectedIcon: require('../assets/bottomTabs/run_sl.png')
              }
            }
          }
        },
        {
          stack: {
            id: 'STORE_TAB',
            children: [
              {
                component: {
                  id: 'GO_STORE_SCREEN',
                  name: 'GoStore'
                }
              }
            ],
            options: {
              bottomTab: {
                text: 'GO商城',
                icon: require('../assets/bottomTabs/store.png'),
                selectedIcon: require('../assets/bottomTabs/store_sl.png')
              }
            }
          }
        },
        {
          stack: {
            id: 'MY_TAB',
            children: [
              {
                component: {
                  id: 'MY_SCREEN',
                  name: 'My'
                }
              }
            ],
            options: {
              bottomTab: {
                text: '我的',
                icon: require('../assets/bottomTabs/my.png'),
                selectedIcon: require('../assets/bottomTabs/my_sl.png')
              }
            }
          }
        }
      ]
    }
  }
}

Navigation.setDefaultOptions({
  //底部菜单整体
  bottomTabs: {
    titleDisplayMode: 'alwaysShow'
  },
  //电池这栏
  statusBar: {
    backgroundColor: 'rgba(255,255,255,0.85)',
    style: 'dark',
    visible: false
  },
  topBar: {
    title: {
      color: 'white'
    },
    backButton: {
      color: '#666666'
    },
    background: {
      color: '#000000'
    }

  },
  //底部菜单，具体每一个项目
  bottomTab: {
    fontSize: 12,
    selectedFontSize: 14,
    iconWidth: 30,
    iconHeight: 30,
    textColor: '#666666',
    selectedTextColor: '#0099FF',
    fontWeight: 700
  }
})