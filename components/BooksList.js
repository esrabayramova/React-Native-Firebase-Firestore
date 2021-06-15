import React, { Component } from 'react';
import { View, TouchableOpacity, TextInput, Text, ScrollView, StyleSheet, Button, Touchable } from 'react-native'
import firebase from '../database/firebase'
import Icon from 'react-native-vector-icons/FontAwesome';
import { color } from 'react-native-reanimated';

class BooksList extends Component {

    constructor(){
        super();
        this.state = {
            books: []
        }
    }

    componentDidMount(){
        firebase.db.collection('books').onSnapshot((querySnaphot) => {
            const books = [];

            querySnaphot.docs.forEach((doc) => {
                const {title, author, genre} = doc.data()
                books.push({
                    id: doc.id,
                    title,
                    author,
                    genre
                })
            })
            this.setState({books: books})
        })
    }

        render(){

            let all_books = this.state.books.map((value, index) => {
                return(
                    <View style = {styles.book_element} >
                        <View>
                            <Text style = {styles.book_text} > {value.title} </Text>
                        </View>

                        <TouchableOpacity style = {styles.icon_style} onPress = {() => {
                            this.props.navigation.navigate('BookDetails', {bookId: value.id} )
                        }} >
                            <Icon name = "chevron-right"  size = {100} color = "blue" style = {styles.icon} ></Icon>
                        </TouchableOpacity>
                    </View>
                )
            })

        return(
        <View style = {styles.container}>
            <Text style = {styles.heading}>Books </Text>
            <ScrollView>

                { all_books }

                <TouchableOpacity
                style = {styles.button} onPress = {() => this.props.navigation.navigate('NewBook')}>Create book</TouchableOpacity>

            </ScrollView>
        </View>
    )


    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    book_element: {
        margin: 10,
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#52b2bf'
    },
    book_text: {
        fontSize: 25,
        marginLeft: 50,
        color: '#0492c2'
    },
    icon: {
        color: '#0492c2',
        fontWeight: 'bold',
        fontSize: 20
    },

    icon_style: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        padding: 10,
        paddingTop: 5,
        paddingBottom: 5,
        
        right: 50
    },
    button: {
        textAlign: 'center',
        backgroundColor: '#0492c2',
        width: 100,
        margin:15,
        padding: 12,
        color: 'white',
        marginLeft: '47%'
    },
    heading: {
        fontWeight: 700,
        fontSize: 35,
        color: '#0492c2',
        textAlign: 'center'
    }
})

export default BooksList;