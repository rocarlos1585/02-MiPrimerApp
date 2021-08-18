import React from 'react'
import { View, StyleSheet } from 'react-native';

export const TareaScreen = () => {
    return (
        <View style={styles10.container} >
            <View style={styles10.cajaMorada}/>
            <View style={styles10.cajaNaranja}/>
            <View style={styles10.cajaAzul}/>
        </View>
    )
}

const styles1 = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#28425B'
    },

    cajaMorada:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#5856D6'
    },

    cajaNaranja:{
        flex:6, //SOLUCION: nomas se le da un flex al de en medio 
        width:100,
        height:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#F0A23B'
    },

    cajaAzul:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#28C4D9'
    }
})

const styles2 = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#28425B',
        justifyContent:'center'
    },

    cajaMorada:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#5856D6',
        
    },

    cajaNaranja:{
        
        width:100,
        height:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#F0A23B'
    },

    cajaAzul:{
        // width:100,  //SOLUCION: se le quita el width para que tome todo el ancho del padre
        height:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#28C4D9',
        
    }
})


const styles3 = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#28425B',
        justifyContent:'center'
    },

    cajaMorada:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#5856D6',
        alignSelf:'flex-end'    // SOLUCION: se aliniena conforme a los requiere la tarea   
    },

    cajaNaranja:{
        
        width:100,
        height:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#F0A23B'
    },

    cajaAzul:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#28C4D9',
        alignSelf:'center'  // SOLUCION: se aliniena conforme a los requiere la tarea 
        
    }
})

const styles4 = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#28425B',
        justifyContent:'space-between' //SOLUCION: justifico el contenido para que el espacio entre hijos sea el mismo 
    },

    cajaMorada:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#5856D6',
        alignSelf:'flex-end'    //SOLUCION: elineo este componente al final
    },

    cajaNaranja:{
        
        width:100,
        height:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#F0A23B',
        alignSelf:'center'  //SOLUCION: elineo este componente al centro
    },

    cajaAzul:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#28C4D9',

        
    }
})


const styles5 = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#28425B',
        flexDirection:'row',
        justifyContent:'space-between'  //SOLUCION: justifico los componente para que exista el mismo espacio entre cada uno 
    },

    cajaMorada:{
        width:100,
        //height:100,   //SOLUCION: elimino el height
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#5856D6',

    },

    cajaNaranja:{
        
        width:100,
        //height:100,   //SOLUCION: elimino el height
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#F0A23B',

    },

    cajaAzul:{
        width:100,
        //height:100,   //SOLUCION: elimino el height
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#28C4D9',

        
    }
})


const styles6 = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#28425B',

    },

    cajaMorada:{
        flex:1,
        // width:100,   //SOLUCION: elimino el width
        height:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#5856D6',

    },

    cajaNaranja:{
        flex:2,
        // width:100,   //SOLUCION: elimino el width
        height:100,   
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#F0A23B',

    },

    cajaAzul:{
        flex:3,
        // width:100,   //SOLUCION: elimino el width
        height:100,   
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#28C4D9',

        
    }
})

const styles7 = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#28425B',
        alignItems:'center',    //SOLUCION: justifico y alineo elementos al centro
        justifyContent:'center'
    },

    cajaMorada:{
        
        width:100,   
        height:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#5856D6',

    },

    cajaNaranja:{
        
        width:100,   
        height:100,   
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#F0A23B',

    },

    cajaAzul:{
        
        width:100,   
        height:100,   
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#28C4D9',

        
    }
})


const styles8 = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#28425B',
        alignItems:'center',    //SOLUCION: justifico y alineo elementos al centro
        justifyContent:'center'
    },

    cajaMorada:{
        
        width:100,   
        height:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#5856D6',

    },

    cajaNaranja:{
        
        width:100,   
        height:100,   
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#F0A23B',
        left:100    //se cargo a la izquierda el equivalente al tamano del elemnto que esta arriba 

    },

    cajaAzul:{
        
        width:100,   
        height:100,   
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#28C4D9',

        
    }
})

const styles9 = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#28425B',
        alignItems:'center',    //SOLUCION: justifico y alineo elementos al centro
        justifyContent:'center'
    },

    cajaMorada:{
        
        width:100,   
        height:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#5856D6',
        top:100     //se cargo a arriba el equivalente al tamano del elemento
    },

    cajaNaranja:{
        
        width:100,   
        height:100,   
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#F0A23B',
        left:100    //se cargo a la izquierda el equivalente al tamano del elemnto que esta arriba 

    },

    cajaAzul:{
        
        width:100,   
        height:100,   
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#28C4D9',

        
    }
})

const styles10 = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#28425B',
        alignItems:'center',    //SOLUCION: justifico y alineo elementos al centro
        justifyContent:'center',
        flexDirection:'row',    //SOLUCION: la direccion la cambio a linea (row)
    },

    cajaMorada:{
        
        width:100,   
        height:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#5856D6',
        
    },

    cajaNaranja:{
        
        width:100,   
        height:100,   
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#F0A23B',
        top:50      //SOLUCION: se le dio un top equivalente a la mitad del tamano de los otros componentes (50 unids)

    },

    cajaAzul:{
        
        width:100,   
        height:100,   
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#28C4D9',

        
    }
})