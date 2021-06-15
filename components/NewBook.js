import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput, Text, ScrollView, StyleSheet } from 'react-native'
import firebase from '../database/firebase'

const NewBook = (props) => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');

    const createNewBook = async () => {
        if (title === '' || author === '' || genre === ''){
            alert('Please fill in the blanks! ');
        }
        else{
            await firebase.db.collection('books').add({
                title: title,
                author: author,
                genre: genre
            })
            alert('Saved to database. ');
            setAuthor('');
            setTitle('');
            setGenre('');
            props.navigation.navigate('BookList');
        }
    }

    return(
        <ScrollView style = {styles.container}>
            <View style = {styles.inputs}>
                <TextInput placeholder = 'Book title' onChangeText = {(input) => setTitle(input)} value = {title} ></TextInput>
            </View>
            <View style = {styles.inputs}>
                <TextInput placeholder = 'Author' onChangeText = {(input) => setAuthor(input)} value = {author} ></TextInput>
            </View>
            <View style = {styles.inputs}>
                <TextInput placeholder = 'Genre ' onChangeText = {(input) => setGenre(input)} value = {genre} ></TextInput>
            </View>
            <View style = {styles.inputs}>
                <TouchableOpacity style = {styles.button} onPress = {() => createNewBook()}>
                    Add book
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35
    },
    inputs: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
    button: {
        textAlign: 'center',
        backgroundColor: '#0492c2',
        width: 100,
        margin:15,
        padding: 12,
        color: 'white',
        marginLeft: '50%'
    }
})

export default NewBook;