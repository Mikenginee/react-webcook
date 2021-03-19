import { useState } from 'react'
import useValidation from './useValidation'

const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isFocused, setIsFocused] = useState(false)
    const valid = useValidation(value, validations)

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onBlur = (e) => {
        setIsFocused(true)
    }

    return {
        value, onChange, onBlur, isFocused, ...valid
    }
}

export default useInput