import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Fab } from '../components/Fab'

export const ContadorScreen = () => {
    
    const [contador, setcontador] = useState(10)


    
    
    return (
        <View style={ styles.container }>
            <Text style={styles.textContador}>Contador: {contador}</Text>


            <Fab title='+1' position='bottomRight' onPress={() => setcontador(contador+1)} />

            <Fab title='-1' position='bottomLeft' onPress={() => setcontador(contador-1)}/>

            {/* <TouchableOpacity style={styles.fabLocationBottomLeft} onPress={() => setcontador(contador-1)} >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>-1</Text>
                </View> 
            </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        justifyContent:'center'
    },

    textContador:{
        fontSize:25, 
        textAlign:'center', 
        top:-20
    },

})