import React from 'react'

import { Grid } from './styles'
import ServerList from '../ServerList'
import ServerName from '../ServerName'
import ChannelInfo from '../ChannelInfo'
import ChannelList from '../ChannelList'
import ChannelData from '../ChannelData'
import UserList from '../UserList'
import UserInfo from '../UserInfo'

const Layout = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
      <ChannelData />
      <UserList />
      <UserInfo />
    </Grid>
  )
}

export default Layout
