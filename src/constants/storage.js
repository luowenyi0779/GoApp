import Storage from "react-native-storage"
import AsyncStorage from "@react-native-async-storage/async-storage"

export default new Storage({
  size: 100,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  // sync:require('写另外一个文件，如果数据过期，内存中已无数据，无缝返回最新数据')
})