import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, TextInput, Text, ScrollView, StyleSheet } from 'react-native'
import firebase from '../database/firebase'

const BookDetails = (props) => {

    const initialState = {
        id: "",
        title: "",
        author: "",
        genre: ""
    }

    const [book, setBook] = useState(initialState)

    const getBookById = async (id) => {
        const dbRef = firebase.db.collection('books').doc(id)
        const doc = await dbRef.get();
        const book = doc.data();

        setBook({
            ...book,
            id: doc.id
        })
    }

    useEffect(() => {
        getBookById(props.route.params.bookId);
    }, [])

    const handleChangeText = (name, value) => {
        setBook({...book, [name]: value})
    };

    const deleteBook = async () => {
        const dbRef = firebase.db.collection('books').doc(props.route.params.bookId);
        await dbRef.delete();
        props.navigation.navigate('BookList');
        
    }

    const updateBook = async() => {
        const dbRef = firebase.db.collection('books').doc(book.id);
        await dbRef.set({
            title: book.title,
            author: book.author,
            genre: book.genre

        });
        setBook(initialState);
        props.navigation.navigate('BookList');
    }


    return(

    <ScrollView style={styles.container}>
            <View style = {styles.inputs} >
                <TextInput 
                value = {book.title} 
                placeholder = 'Book title' 
                onChangeText = {(input) => handleChangeText("title",input)} ></TextInput>
            </View>
            <View style = {styles.inputs}>
                <TextInput value = {book.author} 
                placeholder = 'Book author' 
                onChangeText = {(input) => handleChangeText("author",input)} ></TextInput>
            </View>
            <View style = {styles.inputs}>
                <TextInput value = {book.genre} 
                placeholder = 'Book genre' 
                onChangeText = {(input) => handleChangeText("genre",input)} ></TextInput>
            </View>
            <View>
                <TouchableOpacity style = {styles.button_red} onPress = {() => deleteBook()}>
                    Delete
                </TouchableOpacity>
                <TouchableOpacity style = {styles.button_green} onPress = {() => updateBook()}>
                    Update
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
    button_red: {
        textAlign: 'center',
        backgroundColor: 'red',
        width: 100,
        margin:15,
        padding: 12,
        color: 'white',
        marginLeft: '50%'
    },
    button_green: {
        textAlign: 'center',
        backgroundColor: 'green',
        width: 100,
        margin:15,
        padding: 12,
        color: 'white',
        marginLeft: '50%'
    }
})

export default BookDetails;