import React from 'react'
import { Text, View, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';

//esta opcion solo toma la medida de la ventana del telefono (no se actualiza en tiempo real)
//const {width, height } = Dimensions.get('window')

export const DimensionesScreen = () => {

    //con este hook si se trae las medidad en tiempo real
    const {width, height} = useWindowDimensions()

    return (
        <View>
            <View style={styles.container}>
                <View style={{
                    ...styles.cajaMorada,
                        width:width * 0.50 //aqui estoy condicionando la medida de este View en base al dato arrojado por el hook multiplicado por el 50%
                    }}/>

                <View style={styles.cajaNaranja}/>
            </View>
            <Text style={styles.dimensionsText} >W: {width}, H: {height} </Text>

        </View>

    )
}

const styles = StyleSheet.create({

    container:{
        width:'100%',
        height:200,
        backgroundColor:'red'
    },

    cajaMorada:{
        width:'50%',
        height:'50%',
        backgroundColor:'#5856d6'
    },

    cajaNaranja:{
        backgroundColor:'#F0A23B'
    },

    dimensionsText:{
        fontSize:20,
        textAlign:'center'
    }
})
