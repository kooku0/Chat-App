import { useSelector } from 'react-redux'
import { RootState } from '../store'

export default function useName(): string {
  const { name } = useSelector((state: RootState) => state.login)
  return name
}
