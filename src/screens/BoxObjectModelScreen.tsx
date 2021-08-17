import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.title} >Box object model</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'red',
        flex:1
    },

    title:{

        //padding/margin horizontal aplica las mismas unidades tanto en el lado izquierdo como en el derecho
        paddingHorizontal:30,
        marginHorizontal:20,
        fontSize:20,
        borderWidth:10,
        padding:50
        // backgroundColor:'red',
    }
})