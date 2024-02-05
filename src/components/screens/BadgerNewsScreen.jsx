import { useContext, useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import BadgerNewsItemCard from "./BadgerNewsItemCard.jsx";
import BadgerPrefContext from "../BadgerPrefContext.js";
function BadgerNewsScreen(props) {
    const [news, setNews] = useState([]);
    const [prefs, setPrefs,allprefs, setAllPrefs] = useContext(BadgerPrefContext);

    useEffect(()=>{
        fetch("https://cs571.org/api/f23/hw8/articles",{
            headers : {
                "X-CS571-ID": "bid_559df600ea130b903026eab0bed1afb72f8bc4d6f009b0ec199db14b5069f582"
            }
        })
        .then(res => res.json())
        .then(data => setNews(data))
    },[])

    return <View>
        <ScrollView>
        {prefs.length === 0?
            <Text>There are no articles fit your preference!</Text>
            :news.map(item => { 
                let isprefer = true;
                item.tags.forEach(tag => {if(!prefs.includes(tag)){isprefer = false}})
                if (isprefer){
                    return <BadgerNewsItemCard key = {item.id} {...item}/> 
                }else{
                    return null
                }
            })} 
        </ScrollView>
    </View>
}

export default BadgerNewsScreen;