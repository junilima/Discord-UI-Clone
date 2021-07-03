import React, { useEffect, useRef } from 'react'

import ChannelMessage from '../ChannelMessage'
import { Mention } from '../ChannelMessage/styles'
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'

const ChannelData = () => {
  const messagesRef = useRef()

  useEffect(() => {
    const div = messagesRef.current

    if (div) {
      div.scrollTop = div.scrollHeight
    }
  }, [messagesRef])

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(20).keys()).map((n) => (
          <ChannelMessage
            author="Fulano"
            date="02/04/2021"
            content="Qualquer mensagem"
          />
        ))}
        <ChannelMessage
          author="Ciclano"
          date="02/04/2021"
          content={
            <>
              <Mention>@Fulano</Mention>, qualquer coisa.
            </>
          }
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData
