import { useState } from 'react';
import MessageService from '../../services/MessageService';

function ChatTextEditor (props: { chatId: string }) {
  const [textEditorValue, setTextEditorValue] = useState('')

  const onSubmit = () => {
    MessageService.sendMessageRequest({
      content: textEditorValue,
      chatId: props.chatId
    })
  }

  const onKeyDownHandler = (e: any) => {
    const keyCode = e.code
    const isEnterKey = keyCode === 'Enter'

    if (isEnterKey && e.shiftKey) return setTextEditorValue(textEditorValue + "\n")

    if (isEnterKey && textEditorValue !== '') {
      onSubmit()
      setTextEditorValue('')
    }
  }

  const onChangeHandler = (e: any) => {
    let newTextEditorValue = e.target.value as string
    const lastChar = newTextEditorValue.charAt(newTextEditorValue.length - 1)
    if (lastChar === '\n') {
      newTextEditorValue = newTextEditorValue.substring(0, newTextEditorValue.length - 1)
    }
    setTextEditorValue(newTextEditorValue)
  }



  return <div id='ChatTextEditor'>
    <textarea value={textEditorValue} onChange={onChangeHandler} onKeyDown={onKeyDownHandler} />
  </div>
}

export default ChatTextEditor
