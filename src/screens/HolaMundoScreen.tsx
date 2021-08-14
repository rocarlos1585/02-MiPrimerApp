import React from 'react'
import { Text, View } from 'react-native'

export const HolaMundoScreen = () => {
  return (
    <View style={{ backgroundColor:'grey', flex:1, justifyContent:'center' }}>
      <Text style={{ fontSize:45, textAlign:'center' }}> Hola Mundo desde el screen</Text>
    </View>
  )
}
