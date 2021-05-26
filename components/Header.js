import React from 'react'
import { StyleSheet, Text, View, } from 'react-native'

const Header = () => {
    return (
        <View style={styles.header}>
          <Text style={styles.title}>Todo List</Text> 
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
   header:{
    justifyContent:"center",
    backgroundColor:'blue',
    height:40,
    width:"100%"

   },
   title:{
     textAlign:'center',
     color:'white',
     fontSize:20,
     fontWeight:'bold',
     fontStyle:'italic'
   }
})
