import React from 'react'
import { View, StyleSheet, SafeAreaView, Text, Button, Linking, TouchableHighlight, Alert, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


const App = () => {

  return (

    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.layer}>
          <Text><Icon name="user" size={25} color='red'></Icon>文本</Text>
          <Text>文本</Text>
          <Text>文本00</Text>
        </View>

        <View>
          <Button title='百度' onPress={() => {
            Linking.openURL("https://www.baidu.com")
          }}></Button>
        </View>
        <TouchableHighlight
          activeOpacity={0.5}
          underlayColor='orange'
          style={styles.mybutton}
          onPress={() => {
            Alert.alert('123')
          }}>
          <Text style={styles.textFont}>123123</Text>
        </TouchableHighlight>

        <TouchableOpacity style={styles.mybutton}>
          <Text>Touch</Text>
        </TouchableOpacity>

      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  layer: {
    display: "flex",
    height: 50,
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: 'center',
    color: 'red'
  },
  mybutton: {
    backgroundColor: 'yellow',
    height: 30,
    width: 100,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 50,
    marginVertical: 5,
    color: 'red'

  },
  textFont: {
    color: 'red'
  }


})

export default App
