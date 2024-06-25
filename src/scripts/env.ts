import { isNull } from '@/assets/utils/obj'

const print = () => {
  console.log('Blossom-web ===> 环境:', import.meta.env.MODE)
  
}

print()

export const getApiBaseUrl = () => {
  return import.meta.env.DEV ? "":window.blconfig.SYS.GITHUB_URL
}

//#region ------------------------------------------- 基础信息 -------------------------------------------

export const getSysName = () => {
  if (isNull(window.blconfig.SYS.NAME)) {
    return 'Blossom'
  }
  return window.blconfig.SYS.NAME
}