import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
const Task = ({item, deleteTask}) => {
    return (
       <TouchableOpacity style={styles.item}>
         <Text> {item.task} </Text>
         <MaterialIcons name="delete" size={24} color="black"
          onPress={()=>deleteTask(item.id)}
         />
       </TouchableOpacity>
    )
}

export default Task

const styles = StyleSheet.create({
    item:{
        padding:15,
        borderColor:"black",
        borderRadius:5,
        borderWidth:1,
        marginTop:15,
        borderStyle:'dashed',
        flexDirection:"row",
        justifyContent:'space-between'

    }
})
