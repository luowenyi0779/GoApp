import React from 'react'
import { View, StyleSheet, Share, Alert } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const ShareCom = () => {

  const userShare = () => {
    Share.share({
      message: '这是分享的数据信息',
      title: '这是title',//android
      Content: '分享的内容',
      url: 'https://www.baidu.com' //ios
    }, {
      dialogTitle: '描述的标题'
    }).then(res => {
      console.log('分享结果：', res)
      if (res.action === Share.sharedAction) {
        if (res.activityType) {
          Alert.alert('', `${res.activityType}`)
        } else {
          Alert.alert('', '分享成功')
        }

      } else if (res.action === Share.dismissedAction) {
        Alert.alert()
      }
    }).catch(err => {
      console.log('err:', err)
    })

  }


  return (
    <View>
      <MaterialIcons
        name="share"
        size={30}
        color='red'
        onPress={() => { userShare() }}>

      </MaterialIcons>
    </View>
  )
}

const styles = StyleSheet.create({})

export default ShareCom
