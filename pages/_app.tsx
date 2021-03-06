import App from 'next/app'

import {Provider, useSelector} from 'react-redux'


import store from '../store/store'

class MyApp extends App {

  render() {
    console.log({state: store.getState()})
    const { Component, pageProps } = this.props
    return <Provider store={store}><Component {...pageProps} /></Provider>
  }
}

export default MyApp
