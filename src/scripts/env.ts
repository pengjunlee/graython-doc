import { isNull } from '@/assets/utils/obj'

const apiBaseUrl = import.meta.env.VITE_BL_API_BASE_URI
const print = () => {
  console.log('Blossom-web ===> 环境:', import.meta.env.MODE)
  console.log('Blossom-web ===> window.blconfig.DOMAIN:', window.blconfig.DOMAIN.PRD)
  console.log('Blossom-web ===> SpringBaseUrl:', apiBaseUrl)
  if (import.meta.env.DEV) {
    console.log(window.blconfig)
  }
}

print()

/**
 * 是否集成到 Github 环境
 * @returns
 */
const isDev = () => {
  return import.meta.env.MODE === 'development'
}

export const getApiBaseUrl = () => {
  return isDev() ? "":window.blconfig.DOMAIN.PRD
}

export const getUserId = () => {
  if (isNull(window.blconfig.DOMAIN.USER_ID)) {
    return 1
  }
  return window.blconfig.DOMAIN.USER_ID
}

//#region ------------------------------------------- 基础信息 -------------------------------------------

export const getSysName = () => {
  if (isNull(window.blconfig.SYS.NAME)) {
    return 'Blossom'
  }
  return window.blconfig.SYS.NAME
}

//#endregion

export const getThemeLogoStyle = () => {
  if (isNull(window.blconfig.THEME.LOGO_STYLE)) {
    return {
      'border-radius': '50%'
    }
  }
  return window.blconfig.THEME.LOGO_STYLE
}

export const getThemeSubjecTitle = () => {
  if (isNull(window.blconfig.THEME.SUBJECT_TITLE)) {
    return true
  }
  return window.blconfig.THEME.SUBJECT_TITLE
}

export const getLinks = () => {
  if (isNull(window.blconfig.LINKS)) {
    return []
  }
  return window.blconfig.LINKS
}
