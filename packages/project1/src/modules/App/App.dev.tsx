import { hot } from 'react-hot-loader/root'
import * as React from 'react'
import { Tabs } from '@modules/Tabs'


function AppDev() {
  return <div>
    <h1>Hello, world.</ h1>
    <Tabs />
  </div>
}

export default hot(AppDev)