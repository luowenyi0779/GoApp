import React from 'react'
import { View, StyleSheet, Text, Image, TouchableHighlight } from 'react-native'
import Swiper from 'react-native-swiper'

// 页面跳转
import { Navigation } from 'react-native-navigation'
import { LoginRoot } from '../navigation'
// 页面跳转

const MySwiper = (props) => {
  // 页面跳转
  const goLoginPage = () => {
    Navigation.setRoot(LoginRoot)
  }
  // 页面跳转
  const arr = props.images
  return (
    <View style={styles.SwiperWrapper}>
      <Swiper style={styles.wrapper}>
        {
          arr.map((item) => {
            return (
              <View key={item.id} style={styles.swiperItem}>
                <View>
                  <Image style={styles.swiperImg} source={item.img} />
                </View>
                {item.id == 3 && (
                  <TouchableHighlight
                    style={styles.swiperImgButton}
                    underlayColor='yellow'
                    activeOpacity={0.6}
                    onPress={goLoginPage}
                  >
                    <View>
                      <Text>立即体验</Text>
                    </View>
                  </TouchableHighlight>
                )}
              </View>
            )
          })
        }
      </Swiper>
    </View>
  )
}

const styles = StyleSheet.create({
  SwiperWrapper: {
    flex: 1
  },
  swiperItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  wrapper: {},
  swiperImg: {
    width: 200,
    height: 200
  },
  swiperImgButton: {
    backgroundColor: 'orange',
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 50
  }
})

export default MySwiper
