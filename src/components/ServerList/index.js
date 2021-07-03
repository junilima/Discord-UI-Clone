import React from 'react'

import ServerButton from '../ServerButton'
import { Container, Separator } from './styles'

const ServerList = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton hasNotifications />
      <ServerButton mentions={3} />
      <ServerButton mentions={200} />
      {Array.from(Array(20).keys()).map(() => (
        <ServerButton />
      ))}
    </Container>
  )
}

export default ServerList
