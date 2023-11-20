import { Form } from 'react-bootstrap'
import { SectionType } from '../types.d'

interface Props {
  type: SectionType
  loading?: boolean
  value: string
  onChange: (value: string) => void
}

const getPlaceholder = (type: SectionType, loading?: boolean) => {
  if (loading === true) return 'Cargando...'
  return type === SectionType.From ? 'Inserta un texto' : 'Traducción'
}

const commonStyles = { border: 0, height: '200px' }

export const TextArea = ({ loading, value, onChange, type }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  const styles = type === SectionType.From ? commonStyles : { ...commonStyles, backgroundColor: '#f5f5f5' }

  return (
    <Form.Control
        as='textarea'
        placeholder={getPlaceholder(type, loading)}
        style={ styles }
        autoFocus={type === SectionType.From}
        onChange={handleChange}
        value={value}
    />)
}
