import {useState} from 'react'

function useForm(initialLoad) {
  const [value,setValue] = useState(initialLoad);

  const reset = ()=>{
    setValue(initialLoad)
  }
  const bind = {
    value,
    onChange: e => {
        setValue(e.target.value);
    }
  }

  return [value,bind,reset];
}

export default useForm