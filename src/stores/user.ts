import { defineStore } from 'pinia'
import { Local } from '@/assets/utils/storage'

export const storeKey = 'token'
export const userinfoKey = 'userinfo'

/**
 * 登录状态枚举
 */
export const enum AuthStatus {
  Wait = '请登录',
  Loging = '登录中...',
  Checking = '检查登录...',
  Succ = '已登录',
  Fail = '登录失败'
}

export interface Auth {
  token: string
  status: AuthStatus
}

/**
 * 初始化授权状态
 */
const initAuth = () => {
  let auth: Auth = { token: '', status: AuthStatus.Wait }
  Local.set(storeKey, auth)
  return auth
}

const DEFAULT_USER_INFO = {
  "id": "9999",
  "type": 3,
  "username": "blos",
  "nickName": "Blossom 试用",
  "avatar": "https://www.wangyunf.com/bl/pic/home/bl/img/U9999/6d2666df61553b5d3a761a0269113886.jpg",
  "remark": "该账号是 Blossom 试用账号。",
  "location": "101100101",
  "articleCount": 23,
  "articleWords": 138517,
  "creTime": "2023-08-04 16:48:28",
  "delTime": "0",
  "params": null,
  "userParams": {
      "WEB_LOGO_NAME": "Blos 试用博客",
      "WEB_BLOG_WATERMARK_CONTENT": "Blossom",
      "WEB_ARTICLE_URL": "https://wangyunf.com/blos/#/articles?articleId=",
      "WEB_BLOG_WATERMARK_COLOR": "rgba(157, 157, 157, 0.2)",
      "WEB_BLOG_URL_ERROR_TIP_SHOW": "",
      "WEB_BLOG_LINKS": "[\n  {\n    \"NAME\": \"Blossom 官方文档\",\n    \"URL\": \"https://www.wangyunf.com/blossom-doc/index\",\n    \"LOGO\": \"https://www.wangyunf.com/bl/pic/home/bl/img/U1/head/blossom_logo.png\"\n  },{\n    \"NAME\": \"Blossom 试用地址\",\n    \"URL\": \"https://www.wangyunf.com/blossom-demo/#/settingIndex\",\n    \"LOGO\": \"https://www.wangyunf.com/bl/pic/home/bl/img/U1/head/blossom_logo_grey.png\"\n  }\n]",
      "WEB_LOGO_URL": "https://www.wangyunf.com/bl/pic/home/bl/img/U9999/6d2666df61553b5d3a761a0269113886.jpg",
      "WEB_GONG_WANG_AN_BEI": "公网安备号示例",
      "WEB_BLOG_WATERMARK_GAP": "200",
      "WEB_IPC_BEI_AN_HAO": "ICP 备案号示例",
      "WEB_BLOG_WATERMARK_ENABLED": "1",
      "WEB_BLOG_COLOR": "rgb(104, 104, 104)",
      "WEB_BLOG_SHOW_ARTICLE_NAME": "1",
      "WEB_BLOG_SUBJECT_TITLE": "0",
      "WEB_BLOG_WATERMARK_FONTSIZE": "13"
  }
}

export type UserParams = typeof DEFAULT_USER_INFO.userParams
export type Userinfo = typeof DEFAULT_USER_INFO
/**
 * 初始化用户信息
 */
const initUserinfo = () => {
  return { ...DEFAULT_USER_INFO }
}

/**
 *
 */
export const useUserStore = defineStore('userStore', {
  state: () => ({
    auth: Local.get(storeKey) || initAuth(),
    userinfo: initUserinfo()
  }),
  getters: {
    isLogin: (state): boolean => {
      if (!state.auth) {
        return false
      }
      return state.auth.status === AuthStatus.Succ
    },
    userParams: (state): UserParams => {
      return state.userinfo.userParams
    },
    links: (state): any => {
      return state.userinfo.userParams.WEB_BLOG_LINKS
    }
  },
  actions: {
    /**
     * 重置登录状态和用户信息
     */
    reset() {
      Local.remove(storeKey)
      Local.remove(userinfoKey)
      this.auth = initAuth()
      this.userinfo = initUserinfo()
    }
  }
})
