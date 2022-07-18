import Multiselect from "multiselect-react-dropdown"
import { useRef } from 'react'

const styleOverrides = {
  option: {
    color: 'white',
    backgroundColor: 'black'
  }
}

type multiSelectInputOption = {
  display: string,
  value: string
}

function AutoCompleteMultiSelect (props: { options: multiSelectInputOption[], onChange?: Function }) {
  const selectionRef = useRef<Multiselect>(null)

  const onChange = () => {
    if (props.onChange) props.onChange(selectionRef?.current?.getSelectedItems())
  }

  return <Multiselect
    ref={selectionRef}
    onRemove={onChange}
    onSelect={onChange}
    displayValue='display'
    options={props.options}
    style={styleOverrides}
  />
}

export default AutoCompleteMultiSelect

export type { multiSelectInputOption }
