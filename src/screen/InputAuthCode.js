import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, ImageBackground, Dimensions, TouchableHighlight } from 'react-native'
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field'
import { Navigation } from 'react-native-navigation'

import { MainRoot } from '../navigation'

// 获取屏幕高宽
const { width, height } = Dimensions.get("window")

// ++验证码输入框的代码++
const CELL_COUNT = 6
//++ 验证码输入框的代码++
const InputAuthCode = (props) => {

  //++ 验证码输入框的代码++
  const [value, setValue] = useState('')
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT })
  const [props_code, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  })
  // ++验证码输入框的代码++

  var second = 10
  const [time, modifyTimeValue] = useState(second)
  const [timeId, setTimeId] = useState(null)

  const changeTime = (time) => {
    const codeTime = time
    let now = Date.now()
    const overTimeStamp = now + codeTime * 1000 + 100

    setTimeId(setInterval(function () {
      const nowStamp = Date.now()
      if (nowStamp >= overTimeStamp) {
        clearInterval(timeId)
      } else {
        const leftTime = parseInt((overTimeStamp - nowStamp) / 1000, 10)
        modifyTimeValue(leftTime)

      }
    }, 1000))
  }

  useEffect(() => {
    changeTime(second)
  }, [])

  const submitHandler = () => {
    Navigation.setRoot(MainRoot)

    // fetch('http://192.168.1.101', {
    //   method: 'post',
    //   body: JSON.stringify({ userName: 'luo', passWord: '123456' }),
    //   headers: {
    //     'Content-type': 'application/json'
    //   }
    // }).then(res => res.json())
    //   .then(res => {
    //     if (res.code == 200) {
    //       alter('请求成功')

    //     }
    //   }).catch(err => {
    //     console.log('error', err)
    //   })
  }



  return (
    //  设置全屏背景图片 
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/login/login1.jpeg')}
        style={styles.bgImg}
      >
        <View style={styles.headertext}>
          <Text style={styles.headertextdes}>请输入验证码</Text>
          <Text style={styles.headertextdestel}>已发送4位验证码到</Text>
          <Text style={styles.headertelvalue}>{props.telValue}</Text>
        </View>

        {/* ++验证码输入框的代码++ */}
        <CodeField
          ref={ref}
          {...props_code}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          onSubmitEditing={() => { }}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
        {/* ++验证码输入框的代码++ */}

        <TouchableHighlight
          onPress={submitHandler}
          style={styles.buttonwrap}
        >
          <View>
            <Text style={styles.button}>确定</Text>
          </View>
        </TouchableHighlight>


        <View>
          <Text
            style={styles.regain}
            onPress={() => {
              if (time != 0) return
              modifyTimeValue(second)
              changeTime(second)
            }}>
            重新获取（
            <Text style={styles.time}>{time}</Text>
            ）
          </Text>
        </View>

      </ImageBackground>
    </View>
  )
}

//隐藏状态栏，顶部栏
InputAuthCode.options = {
  topBar: {
    visible: false,
  },
  statusbar: {
    visible: false
  }
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    flex: 1,
    justifyContent: 'flex-start'

  },
  bgImg: {
    flex: 1,
    paddingHorizontal: 40
  },

  headertext: {
    marginTop: 80
  },
  headertextdes: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700'
  },
  headertextdestel: {
    color: 'white',
    fontSize: 12,
    marginTop: 10,
    fontWeight: '600'
  },
  headertelvalue: {
    fontSize: 18,
    fontWeight: '600',

  },


  buttonwrap: {
    marginTop: 20,
    borderRadius: 25,
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  button: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
  regain: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    marginTop: 10

  },

  // ++验证码输入框的代码++
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
    backgroundColor: "rgba(0,0,0,0.4)",
    color: 'white'
  },
  focusCell: {
    borderColor: '#000',
  },
  // ++验证码输入框的代码++


})

export default InputAuthCode
