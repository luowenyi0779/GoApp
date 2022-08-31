import React, { useRef, useState } from 'react'
import { View, StyleSheet, Text, SafeAreaView, FlatList, Alert, Image } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import IconAntd from 'react-native-vector-icons/AntDesign'
import { Navigation } from 'react-native-navigation'
import Storage from '../constants/storage'

const DATA = [
  {
    zid: 1,
    title: 'aaaaa',
    nickname: 'name1',
    zancount: 111,
    msgcount: 1,
    img: require('../assets/neraby/aa.jpeg'),
    userphto: require('../assets/neraby/1.jpeg')
  },
  {
    zid: 2,
    title: 'bbbb',
    nickname: 'name2',
    zancount: 222,
    msgcount: 2,
    img: require('../assets/neraby/bb.jpeg'),
    userphto: require('../assets/neraby/2.jpeg')
  },
  {
    zid: 3,
    title: 'ccccc',
    nickname: 'name3',
    zancount: 333,
    msgcount: 3,
    img: require('../assets/neraby/cc.jpeg'),
    userphto: require('../assets/neraby/3.jpeg')
  },
  {
    zid: 4,
    title: 'ddddd',
    nickname: 'name4',
    zancount: 444,
    msgcount: 4,
    img: require('../assets/neraby/dd.jpeg'),
    userphto: require('../assets/neraby/4.jpeg')
  },
  {
    zid: 5,
    title: 'eeeeee',
    nickname: 'name5',
    zancount: 555,
    msgcount: 5,
    img: require('../assets/neraby/ee.jpeg'),
    userphto: require('../assets/neraby/5.jpeg')
  },
]

const Neraby = (props) => {
  const { componentId } = props
  const flatref = useRef()
  const [list, setList] = useState(DATA)
  // 本地存储storage,在components/DongTaiDetail里取数据
  Storage.save({
    key: "DATA",
    data: DATA
  })

  const renderItem = ({ item }) => {
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

  const goDetail = (zid) => {
    // 组件作为跳转页
    Navigation.push(
      componentId,
      {
        component: {
          //DongTaiDetail在navigation/index中注册了
          name: 'DongTaiDetail',
          passProps: {
            dtId: zid
          }
        }
      }
    )
  }

  const onEndReachedHandler = () => {
    Alert.alert('下拉触底')
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList

        ref={flatref}
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.zid}
        horizontal={false} //取消水平布局
        numColumns={2}//设置多列布局的列数
        scrollEnabled={true} //false就是不能滚动，默认是true
        onRefresh={() => {
          Alert.alert('下拉刷新')
        }}
        refreshing={false}
        onEndReachedThreshold={0.01}//离底部还有多远会触发下拉刷新
        onEndReached={onEndReachedHandler}
        //数据加载完后的底部组件
        ListFooterComponent={
          <View>
            <MaterialIcons style={styles.loads} name='timer' size={30} ></MaterialIcons>
          </View>
        }
      >

      </FlatList>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  loads: {
    textAlign: 'center',
    marginVertical: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',

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

export default Neraby
