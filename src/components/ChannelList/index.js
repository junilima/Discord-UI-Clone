import React from 'react'

import ChannelButton from '../ChannelButton'

import { Container, Category, AddCategoryIcon } from './styles'

const ChannelList = () => {
  return (
    <Container>
      <Category>
        <span>Canais de Texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="chat-livre" selected />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="faculdade" />
      <ChannelButton channelName="jogos" />
      <ChannelButton channelName="livros" />
    </Container>
  )
}

export default ChannelList
