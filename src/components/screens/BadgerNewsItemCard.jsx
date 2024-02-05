import { View, Text , Image, Pressable} from "react-native";
import {Card, Title, Paragraph} from 'react-native-paper';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
export default function BadgerNewsItemCard(props){
    const navigation = useNavigation();
    return<Pressable onPress={() => {navigation.push("Article", {
        page_id : props.fullArticleId,
        img: props.img,
        title: props.title
    })}}>
        {/* {console.log(props.fullArticleId)} */}
        <Card style={{padding: 16, elevation: 5, borderRadius :10}}>
        
            <Card.Cover source = {{url:"https://raw.githubusercontent.com/CS571-F23/hw8-api-static-content/main/articles/"+props.img}}/>
            <Card.Content>
            <Title>{props.title} </Title>
            </Card.Content>
        </Card>
    </Pressable>
}