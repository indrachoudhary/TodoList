import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native'

const AddTask = ({addTask}) => {
    const [text, setText] = useState('')
    const changeHandler = (val)=>{
        setText(val)
    }
    return (
        <View>
         <TextInput
           style={styles.input}  
           placeholder="Add new task"
           onChangeText={changeHandler}
         />
         <Button title="add task"
         color="blue"
         onPress={()=>addTask(text)}
         />
        </View>
    )
}

export default AddTask

const styles = StyleSheet.create({
    input:{
       margin:10,
       paddingVertical:6,
       borderBottomWidth:1,
       borderBottomColor:'grey'
    }
})
