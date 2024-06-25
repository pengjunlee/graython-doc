export {}

declare global {
  interface Window {
    blconfig: {
      SYS: {
        NAME: string
        LOGO: string
        GITHUB_URL:string
      }
    }
  }
}
