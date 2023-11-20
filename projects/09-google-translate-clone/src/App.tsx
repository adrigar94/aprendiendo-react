import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useStore } from './hooks/useStore'
import { Button, Col, Container, Row, Stack } from 'react-bootstrap'
import { AUTO_LANGUAGE } from './constants'
import { ClipboardIcon, SpeakerIcon, SwapArrowsIcon } from './components/icons'
import { LanguageSelector } from './components/LanguageSelector'
import { SectionType } from './types.d'
import { TextArea } from './components/TextArea'
import { useEffect } from 'react'
import { translate } from './services/translate'
import { useDebounce } from './hooks/useDebounce'

function App () {
  const {
    fromText,
    result,
    toLanguage,
    fromLanguage,
    interchangeLanguage,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResultText,
    loading
  } = useStore()

  const debouncedFromText = useDebounce(fromText)

  useEffect(() => {
    if (debouncedFromText === '') return
    console.log('useEffect fromText', debouncedFromText)

    translate({
      fromLanguage,
      toLanguage,
      text: debouncedFromText
    }).then(result => {
      if (result == null) return
      setResultText(result)
    }).catch((e) => {
      console.log(e)
      setResultText('Error')
    })
  }, [debouncedFromText, toLanguage, fromLanguage])

  const handleClipboard = () => {
    navigator.clipboard.writeText(result).catch(() => { console.error('Houston, we have a problem') })
  }
  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(result)
    utterance.lang = toLanguage
    speechSynthesis.speak(utterance)
  }

  return (
    <Container fluid>
      <h1>Google Translate</h1>

      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              value={fromLanguage}
              type={SectionType.From}
              onChange={setFromLanguage}
            />
            <TextArea
              type={SectionType.From}
              value={fromText}
              onChange={setFromText}
            />
          </Stack>
        </Col>
        <Col xs='auto'>
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={() => { interchangeLanguage() }}>
            <SwapArrowsIcon />
          </Button>
        </Col>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              value={toLanguage}
              type={SectionType.To}
              onChange={setToLanguage}
            />

            <div style={{ position: 'relative' }}>
              <TextArea
                type={SectionType.To}
                value={result}
                loading={loading}
                onChange={setResultText}
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, display: 'flex' }}>
                <Button
                  variant='link'
                  onClick={handleClipboard}
                >
                  <ClipboardIcon />
                </Button>
                <Button
                  variant='link'
                  onClick={handleSpeak}
                >
                  <SpeakerIcon />
                </Button>
              </div>

            </div>
          </Stack>
        </Col>
      </Row>

    </Container>
  )
}

export default App
