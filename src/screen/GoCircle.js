
import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Ionicons'
import Neraby from '../components/Neraby'
import Attention from '../components/Attention'
import DynamicState from '../components/DynamicState'

const GoCircle = (props) => {
  // 插入其他页面，需要拿到本页的componentId
  const { componentId } = props
  // 插入其他页面，需要拿到本页的componentId
  const [searchText, setSearchText] = useState('搜索道士下山')
  const [searchValue, setSearchValue] = useState('')

  // 插入其他页面，用index来区别插入哪个页面
  const [index, setTabsIndex] = useState(1)
  const showTabsComponent = (componentId) => {
    switch (index) {
      case 1: return <Neraby componentId={componentId} />
      case 2: return <Attention componentId={componentId} />
      case 3: return <DynamicState componentId={componentId} />
    }
  }
  // 插入其他页面，用index来区别插入哪个页面
  return (
    <View style={styles.container}>
      <View style={styles.headersearchbar}>
        <View style={styles.searchinputbar}>
          <Icon name='search' size={20} color='#999999' ></Icon>
          <TextInput
            placeholder={searchText}
            value={searchValue}
            inlineImagePadding={50}
            returnKeyType='search'
            maxLength={50}
            onSubmitEditing={() => {
              alert(searchValue)
            }}
            onChangeText={(text) => {
              setSearchValue(text)
            }}
            onFocus={(e) => {
              e.target.clear()
            }}
          ></TextInput>
        </View>
        <View style={styles.headericons}>
          <Icon name='user-secret' size={20} color='gray' />
          <Icon2 name='mail' size={20} color='gray' />
        </View>

      </View>

      <View style={styles.tabs}>
        <View>
          <TouchableHighlight>
            {/* 插入其他页面，用index来区别插入哪个页面 */}
            <Text
              style={index === 1 ? styles.activetab : styles.defaulttab}
              onPress={() => {
                setTabsIndex(1)
              }}
            >附件</Text>
            {/* 插入其他页面，用index来区别插入哪个页面 */}
          </TouchableHighlight>
        </View>

        <View>
          <TouchableHighlight>
            <Text
              style={index === 2 ? styles.activetab : styles.defaulttab}
              onPress={() => {
                setTabsIndex(2)
              }}
            >关注</Text>
          </TouchableHighlight>
        </View>

        <View>
          <TouchableHighlight>
            <Text
              style={index === 3 ? styles.activetab : styles.defaulttab}
              onPress={() => {
                setTabsIndex(3)
              }}
            >动态</Text>
          </TouchableHighlight>
        </View>



      </View>
      {/* 插入其他页面*/}
      <View style={styles.tabscontent} >
        {showTabsComponent(componentId)}
      </View>
      {/* 插入其他页面*/}
    </View>
  )
}

GoCircle.options = {
  topBar: {
    title: {
      text: 'Go圈'
    }, visible: true
  },
  statusbar: {
    visible: false
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headersearchbar: {

    height: 50,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    alignItems: 'center'

  },
  searchinputbar: {

    width: '80%',
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexShrink: 1,
    paddingLeft: 5
  },
  headericons: {
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  tabs: {
    height: 40,
    borderBottomWidth: 2,
    borderBottomColor: "#dbd8d8",
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'

  },
  defaulttab: {
    height: 40,
    lineHeight: 40,
    color: "#000"
  },
  activetab: {
    height: 40,
    lineHeight: 40,
    borderBottomColor: "#0099ff",
    borderBottomWidth: 2,
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold'
  },
  tabscontent: {
    flex: 1,
    backgroundColor: 'red'
  }


})

export default GoCircle
