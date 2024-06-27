export {}

declare global {
  interface Window {
    SYS: {
      NAME: string
      GITHUB_PROJECT:string
    }
  }
}
