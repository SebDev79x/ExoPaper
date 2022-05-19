import * as React from 'react';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


const list = [
    {
        activity: 'Marche à pied',
        date: '26/05/2022',
        distance: '6',
        time: '0h50'
    },
    {
        activity: 'Canapé',
        date: '21/05/2022',
        distance: '',
        time: '48h00'
    },
    {
        activity: 'Gaming',
        date: '20/01/2023',
        distance: '',
        time: '48h00'
    }
]
/* const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
 */
/* const filteredActivity = (word)=>{
    if(!word){
        return list
    }
    return list.filter((e)=>{
        return e.activity == word
    })
}

console.log(filteredActivity('6')); */
const ListActivities = () => {
    return (
        <View>
            <FlatList
                data={list}
                renderItem={({ item }) =>
                    <View style={{
                        alignItems: 'center'
                    }}
                    >
                        <Card style={{
                            borderWidth: 1,
                            borderColor: "black",
                            marginBottom: 10,
                            elevation: 30,
                            shadowColor: 'black',
                            width: '80%'
                        }}>
                            <Card.Content style={[styles.content, { flex: 1 }]}>
                                <View style={[styles.contentColumn, { flex: .5 }]}>
                                    <Paragraph>{item.date}</Paragraph>
                                    <Title>{item.activity}</Title>
                                </View>
                                <View style={[{ flex: .5 }]}>
                                    <Card.Cover style={{ width: '80%', height: '100%' }} source={{ uri: 'https://picsum.photos/700' }} /></View>
                            </Card.Content>
                            <Card.Content style={styles.content}>
                                <Paragraph>Distance : </Paragraph>
                                <Paragraph>Durée : </Paragraph>
                            </Card.Content>
                            <Card.Content style={styles.content}>
                                <View>{
                                    item.distance == '' ? <Paragraph>Aucune</Paragraph> : <Paragraph>{item.distance} mn</Paragraph>
                                }</View>
                                <Paragraph>{item.time} mn</Paragraph>
                            </Card.Content>
                        </Card>
                    </View>
                }
            />
        </View>
    )
}
const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    contentColumn: {
        flexDirection: 'column',
    }
});
export default ListActivities;