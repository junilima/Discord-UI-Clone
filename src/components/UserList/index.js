import React from 'react'

import { Container, Role, User, Avatar } from './styles'

const UserRow = ({ username, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />
      <strong>{username}</strong> {isBot && <span>Bot</span>}
    </User>
  )
}

const UserList = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow username="Fulano" />
      <Role>Offline - 18</Role>
      <UserRow username="Ciclano" isBot />
      <UserRow username="Tetrano" />
      <UserRow username="Tetrano" />
      <UserRow username="Tetrano" />
      <UserRow username="Tetrano" />
      <UserRow username="Tetrano" />
      <UserRow username="Tetrano" />
      <UserRow username="Tetrano" />
      <UserRow username="Tetrano" />
      <UserRow username="Tetrano" />
      <UserRow username="Tetrano" />
      <UserRow username="Tetrano" />
      <UserRow username="Tetrano" />
      <UserRow username="Tetrano" />
      <UserRow username="Tetrano" />
      <UserRow username="Tetrano" />
      <UserRow username="Tetrano" />
      <UserRow username="Tetrano" />
      <UserRow username="Tetrano" />
      <UserRow username="Tetrano" />
      <UserRow username="Tetrano" />
      <UserRow username="Tetrano" />
      <UserRow username="Tetrano" />
      <UserRow username="Tetrano" />
    </Container>
  )
}

export default UserList
