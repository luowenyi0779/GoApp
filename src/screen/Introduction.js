import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import MySwiper from '../components/MySwiper'

// 进入app前的广告页

const Introduction = () => {
  const [swiperImgs, setSwiperImgs] = useState([
    { id: 1, img: require('../assets/Introduction/introduction1.jpeg') },
    { id: 2, img: require('../assets/Introduction/introduction2.jpeg') },
    { id: 3, img: require('../assets/Introduction/introduction3.jpeg') }
  ])

  return (
    <View style={styles.container}>
      <MySwiper images={swiperImgs}></MySwiper>
    </View>
  )
}

// 如果是class组件，用私有属性来做,static options;
Introduction.options = {
  topBar: {
    visible: false,
  },
  statusbar: {
    visible: false
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
})

export default Introduction
