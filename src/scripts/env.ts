import { isNull } from '@/assets/utils/obj'

const print = () => {
  console.log('Blossom-web ===> 环境:', import.meta.env.MODE)
  
}

print()

export const getApiBaseUrl = () => {
  return import.meta.env.DEV ? "":window.SYS.GITHUB_PROJECT
}

export const getLogoUrl = () => {
  return import.meta.env.DEV ? '/favicon.png':window.SYS.GITHUB_PROJECT+'/favicon.png'
}


//#region ------------------------------------------- 基础信息 -------------------------------------------

export const getSysName = () => {
  if (isNull(window.SYS.NAME)) {
    return 'Blossom'
  }
  return window.SYS.NAME
}