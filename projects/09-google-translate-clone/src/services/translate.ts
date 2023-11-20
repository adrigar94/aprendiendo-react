import OpenAI from 'openai'
import { type FromLanguage, type Language } from '../types'
import { SUPPORTED_LANGUAGES } from '../constants'

// Este sericio deberia ir en una backend pero esto se realiza aqui por motivos academicos

const apiKey = import.meta.env.VITE_OPENAI_API_KEY

const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true })

export async function translate ({
  fromLanguage,
  toLanguage,
  text
}: {
  fromLanguage: FromLanguage
  toLanguage: Language
  text: string
}) {
  if (fromLanguage === toLanguage) return text

  const fromCode = fromLanguage === 'auto' ? 'auto' : SUPPORTED_LANGUAGES[fromLanguage]
  const toCode = SUPPORTED_LANGUAGES[toLanguage]

  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: 'You are a helpful translator. You receive text from the user. Do not answer, just translate. The original language is surrounded by `{{` and `}}`. You can also recive {{auto}} wich means that you have to detect the language. The translated text is surrounded by `[[` and `]]`.'
      },
      {
        role: 'user',
        content: 'Hola mundo from {{Spanish}} [[English]]'
      },
      {
        role: 'assistant',
        content: 'Hello world'
      },
      {
        role: 'user',
        content: 'How are you? from {{auto}} [[Spanish]]'
      },
      {
        role: 'assistant',
        content: '¿Como estas?'
      },
      {
        role: 'user',
        content: `${text} from {{${fromCode}}} [[${toCode}]]`
      }
    ]
  })

  return completion.choices[0].message?.content
}
