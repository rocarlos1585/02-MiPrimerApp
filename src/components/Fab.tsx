import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Platform, TouchableNativeFeedbackBase, TouchableNativeFeedback } from 'react-native';


interface PropsFab{
    title:string,
    position?:'bottomLeft' | 'bottomRight',
    onPress: ()=>void,
    

}

export const Fab = ({title, onPress, position='bottomRight'}: PropsFab) => {

    const ios = () => {
        return(
            <TouchableOpacity 
                style={[
                    styles.fabLocation, 
                    (position === 'bottomRight')
                        ? styles.bottomRight 
                        : styles.bottomLeft
                ]}
                activeOpacity={0.7}
                onPress={onPress} >

                <View style={styles.fab}>
                    <Text style={styles.fabText}> {title} </Text>
                </View>

            </TouchableOpacity>
        )

    }

    const android = () => {
        return(
            <View             
                style={[
                    styles.fabLocation, 
                    (position === 'bottomRight')
                        ? styles.bottomRight 
                        : styles.bottomLeft
                ]}
            >

                <TouchableNativeFeedback onPress={onPress} background={TouchableNativeFeedback.Ripple('red', false, 30)} >

                    <View style={styles.fab}>
                        <Text style={styles.fabText}> {title} </Text>
                    </View>

                </TouchableNativeFeedback>
                
            </View> 
        )

    }



    
    return (Platform.OS === 'ios') ? ios() : android();
}

const styles = StyleSheet.create({

    fabLocation:{
        position:'absolute',
        bottom:10,
    },

    bottomRight:{
        right:10
    },

    bottomLeft:{
        left:10
    },

    fab:{
        backgroundColor:'#5836D6', 
        borderRadius:100,
        width:60,
        height:60,
        justifyContent:'center',
    },

    fabText:{
        color:'white',
        fontSize:25,
        fontWeight:'bold',
        alignSelf:'center'
    }
})