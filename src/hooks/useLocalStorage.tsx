import { useEffect,useState} from 'react'
import { Task } from '../components/Types'

type SetValue<T> = React.Dispatch<React.SetStateAction<T>>

const useLocalStorage = (key:string, initialValue:Task[]) => {
  const [value, setValue] = useState( () => {
    const keyValue = localStorage.getItem(key)
    return keyValue ? JSON.parse(keyValue) : initialValue
  })


  useEffect(() =>{
    localStorage.setItem(key, JSON.stringify(value))
  },[key,value])
  
  return [value, setValue];
}

export default useLocalStorage;