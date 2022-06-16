export interface ILocaleContext {
  [path: string]: string
}

export interface ILocale {
  [context: string]: ILocaleContext
}

export interface ILocalesMap {
  [locale: string]: ILocale
}
