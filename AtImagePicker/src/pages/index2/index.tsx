import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import { AtImagePicker } from 'taro-ui'

export default () => {
  const [files, setFiles] = useState([
    {
      url: 'https://storage.360buyimg.com/mtd/home/111543234387022.jpg'
    },
    {
      url: 'https://storage.360buyimg.com/mtd/home/221543234387016.jpg'
    },
    {
      url: 'https://storage.360buyimg.com/mtd/home/331543234387025.jpg'
    }
  ]);
  return (
   <View className="custom-input">
        <Text className="custom-input-label">问题图片</Text>
        <AtImagePicker
          length={5}
          files={files}
          onChange={(files) => setFiles(files)}
        />
      </View>
  )
}