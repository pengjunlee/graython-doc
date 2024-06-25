import { isNull } from '@/assets/utils/obj'

const print = () => {
  console.log('Blossom-web ===> 环境:', import.meta.env.MODE)
  
}

print()

export const getApiBaseUrl = () => {
  return import.meta.env.DEV ? "":window.blconfig.DOMAIN.PRD
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
