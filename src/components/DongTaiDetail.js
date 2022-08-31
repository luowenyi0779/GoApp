import React, { useState } from 'react'
import { View, StyleSheet, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import Storage from '../constants/storage'


import IconAntd from 'react-native-vector-icons/AntDesign'

// 条件判断用哪个页面，这里关键看传来的参数let { item } = props
const DtRender = (props) => {
  let { item } = props
  return (
    <View style={styles.item} >
      <View>
        <Image style={styles.themeImg} source={item.img}></Image>
      </View>
      <View style={styles.titleview}  >
        <Text style={styles.title} onPress={() => goDetail(item.zid)} >{item.title}</Text>
      </View>
      <View style={styles.userinfo}>
        <Image style={styles.userphoto} source={item.userphto} />
        <Text style={styles.nickname}>{item.nickname}</Text>
      </View>
      <View style={[styles.userinfo, styles.counts]}>
        <View style={styles.countnumber}>
          <IconAntd name="like2" size={20} style={styles.icons} />
          <Text>{item.zancount}</Text>
        </View>
        <View style={styles.countnumber}>
          <IconAntd name="message1" size={20} style={styles.icons} />
          <Text>{item.msgcount}</Text>
        </View>

      </View>
    </View>
  )
}

const DongTaiDetail = (props) => {
  // 本地存储storage，这里是取数据
  const [userInfo, setUserInfo] = useState({})
  Storage.load({
    key: 'DATA'
  }).then(result => {
    let arr = result.filter((item) => {
      return item.zid = props.dtId
    })
    arr.length !== 0 && setUserInfo(arr[0])

  }).catch(err => console.log(err))
  // 本地存储storage，这里是取数据

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* 条件判断用哪个页面: 有zid就用 <DtRender />，没有zid 就不用它 */}
        {userInfo.zid !== undefined && (<DtRender item={userInfo} />)}
      </ScrollView>
    </SafeAreaView>
  )
}

//状态栏中放入组件
DongTaiDetail.options = {
  topBar: {
    title: {
      text: '详情'
    },
    rightButtons: [{
      id: "ShareCom",
      component: {
        name: 'ShareCom'
      }
    }]
  },
  stateBar: {
    visible: false
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    width: '50%',
    height: 350,
    padding: '1.5%',
    marginVertical: 5
  },
  themeImg: {
    width: '100%',
    height: 200,
    borderRadius: 5,

  },
  titleview: {
    height: 45,
    marginVertical: 5
  },
  title: {
    fontSize: 14,
    color: 'black'
  },
  userinfo: {
    display: 'flex',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },
  nickname: {
    fontSize: 14,
    marginLeft: 10
  },
  userphoto: {
    width: 35,
    height: 35,
    borderRadius: 25
  },
  counts: {
    justifyContent: 'space-around'
  },
  countnumber: {
    display: 'flex',
    flexDirection: 'row'
  },
  icons: {
    paddingRight: 10
  }
})

export default DongTaiDetail
