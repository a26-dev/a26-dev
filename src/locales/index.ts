import { useRouter } from 'next/router'
import enUS from './en-US/dictionary.json'
import ptBR from './pt-BR/dictionary.json'
import { ILocalesMap } from './types'

const DEFAULT = 'en-US'

const map: ILocalesMap = {
  'en-US': enUS,
  'pt-BR': ptBR,
}

export default function useTranslate(): (key: string) => string {
  const router = useRouter()
  const { locale = DEFAULT } = router
  const dictionary = map[locale] ?? map[DEFAULT]

  return (key: string): string => {
    const [context, path] = key.split(':')

    let string = dictionary[context]?.[path]

    return string ?? `{{${locale}/${key}}}`
  }
}
