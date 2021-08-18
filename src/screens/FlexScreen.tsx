import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const FlexScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#28C4D9',
        // flexDirection:'row',
        // justifyContent:'flex-end',
        // alignItems:'flex-end',
        alignItems:'flex-start',
        flexWrap:'wrap'
    },

    caja1:{
        // flex:1, //aqui es como si la pantalla estuviera dividida en 6 y yo le estoy asignando 1/6
        borderWidth:2,
        borderColor:'white',
        fontSize:30,
        // alignSelf:'center'
    },

    caja2:{
        // flex:2, //aqui le estoy asignando 2/6 de la pantalla
        borderWidth:2,
        borderColor:'white',
        fontSize:30,
        // alignSelf:'flex-start'
    },

    caja3:{
        // flex:3, //aqui le estoy asignando 3/6 de la pantalla
        borderWidth:2,
        borderColor:'white',
        fontSize:30,
        // alignSelf:'flex-end'
    },
})
