import React, { useState } from 'react'
import {
  View, StyleSheet, Text, ImageBackground, Dimensions,
  TextInput, TouchableHighlight, Alert, KeyboardAvoidingView, Platform
} from 'react-native'
import IconAntd from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Navigation } from 'react-native-navigation'

// 获取屏幕高宽
const { width, height } = Dimensions.get("window")
const Login = (props) => {

  const [telValue, setTelValue] = useState('')

  const onChangeText = (v) => {
    setTelValue(v)
  }
  const clearValue = () => {
    setTelValue('')
  }
  const checkTel = () => {
    let reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
    if (reg.test(telValue)) {

      // 页面跳转一：这种跳转是往栈里添加后来页，会有后退按钮
      // Navigation.push(props.componentId, {
      //   component: {
      //     //‘InputAuthCode’是在navigation/index注册的页面（Navigation.registerComponent）
      //     name: 'InputAuthCode'
      //   }
      // })


      // 页面跳转二：这种跳转不会有后退按钮，内含带参数
      Navigation.showModal({
        stack: {
          children: [
            {
              component: {
                name: 'InputAuthCode',
                passProps: {
                  telValue
                }
              }
            }
          ]
        }
      })



    } else {
      Alert.alert('手机验证', '错误')
    }
  }
  return (
    <KeyboardAvoidingView behavior={Platform.OS != 'ios' ? 'padding' : 'height'}>
      {/* 设置全屏背景图片 */}
      <ImageBackground
        source={require('../assets/login/login.jpg')}
        style={styles.bgImg}
      >
        <View style={styles.blackbgcontainer}>
          <View style={styles.header}>

            <View style={styles.headertext}>
              <Text style={styles.headertextbig}>手机登录/注册</Text>
              <Text style={styles.headertextsmall}>未注册手机验证后自动登录</Text>
            </View>

            <View style={styles.inputtel}>
              <Text style={{ color: 'white' }}>+86</Text>
              <IconAntd style={styles.sortdown} name="caretdown" size={12} color="#fff" />
              <TextInput
                keyboardType='phone-pad'
                value={telValue}
                onChangeText={text => onChangeText(text)}
                placeholder="请输入手机号码"
                placeholderTextColor='white'
                maxLength={11}
                // 获取焦点
                onFocus={clearValue}
                //在键盘确认
                onSubmitEditing={
                  checkTel
                }
                style={styles.textinput}
              >
              </TextInput>

            </View>

            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => {
                checkTel()
              }}
              style={{ borderRadius: 40 }}
            >
              <View style={styles.loginbutton}><Text style={styles.logintext}>一键登录</Text></View>
            </TouchableHighlight>

          </View>

          <View style={styles.loginother}>
            <View>
              <Text style={styles.othertitle}>其他登录方式</Text>
            </View>
            <View style={styles.othericonlist}>
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="rgba(0,0,0,0.5)"
                style={styles.othericonitem}
              >
                <Icon style={styles.othericon} name="weixin" size={20} />
              </TouchableHighlight>

              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="rgba(0,0,0,0.5)"
                style={styles.othericonitem}
              >
                <Icon style={styles.othericon} name="qq" size={20} />
              </TouchableHighlight>

              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="rgba(0,0,0,0.5)"
                style={styles.othericonitem}
              >
                <Icon style={styles.othericon} name="weibo" size={20} />
              </TouchableHighlight>

              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="rgba(0,0,0,0.5)"
                style={styles.othericonitem}
              >
                <IconAntd style={styles.othericon} name="alipay-circle" size={20} />
              </TouchableHighlight>

            </View>

          </View>

        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

// 全屏需要顶部栏和状态栏消失
Login.options = {
  topBar: {
    visible: false,
  },
  statusbar: {
    visible: false
  }
}

const styles = StyleSheet.create({
  bgImg: {
    width,
    height
  },
  blackbgcontainer: {
    height,
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40
  },
  header: {
    // backgroundColor: 'yellow',
    height: '50%',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',

  },
  headertext: {
    // backgroundColor: 'red',
    paddingTop: 80,
    paddingBottom: 20
  },
  headertextbig: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white'
  },
  headertextsmall: {
    paddingTop: 5,
    color: 'white'
  },
  textinput: {
    flexGrow: 1,
    height: 40,
    color: 'white',
    borderWidth: 0,
    fontSize: 15

  },
  inputtel: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderRadius: 40,
    height: 50,
    paddingHorizontal: 40
  },
  sortdown: {
    marginHorizontal: 5,
    marginTop: 5
  },
  loginbutton: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    backgroundColor: 'rgba(3,118,191,0.7)',
    borderRadius: 40

  },
  logintext: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16
  },

  loginother: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20
  },
  othertitle: {
    color: 'white',
    fontSize: 16,
  },
  othericonlist: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10
  },
  othericonitem: {
    width: 50,
    height: 50,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 25,
    marginHorizontal: 20
  },
  othericon: {
    width: 50,
    height: 50,
    textAlign: 'center',
    lineHeight: 50,
    color: 'white'
  }

})

export default Login
