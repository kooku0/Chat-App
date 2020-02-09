import { useState, ChangeEvent, KeyboardEvent } from 'react'

export default function useInput(defaultValue: string, requestFunc: Function[]) {
  const [value, setValue] = useState(defaultValue)

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => setValue(target.value)
  const onKeyDown = ({ keyCode }: KeyboardEvent) => {
    if (keyCode === 13 && value !== '') {
      for (let func of requestFunc) func(value)
      setValue('')
    }
  }
  return { value, onChange, onKeyDown }
}
