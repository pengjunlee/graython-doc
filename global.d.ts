export {}

declare global {
  interface Window {
    blconfig: {
      SYS: {
        NAME: string
        GITHUB_PROJECT:string
      }
    }
  }
}
