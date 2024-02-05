import { useEffect, useRef, useState } from "react";
import { ScrollView, Text, View,Image, Animated, Pressable, Linking } from "react-native";
export default function BadgerSingleNews(props){
    const detail = props.route.params;
    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const doAnimation = () => {
        Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 10000,
        useNativeDriver: true,
        }).start();
    }
    useEffect(doAnimation, []);
    function handlePress() {
        Linking.openURL(details.url)
    }

    useEffect(()=>{
        fetch(`https://cs571.org/api/f23/hw8/article?id=${detail.page_id}`, {
            headers :{
                "X-CS571-ID": "bid_559df600ea130b903026eab0bed1afb72f8bc4d6f009b0ec199db14b5069f582"
            }
        })
        .then(res => res.json())
        .then(data => {setDetails(data); setLoading(false)})
    },[]) 
    return<>
            {/* {console.log(details)} */}
            <ScrollView>
                <Image style={{width: 250, height: 250}} source = {{url:"https://raw.githubusercontent.com/CS571-F23/hw8-api-static-content/main/articles/"+detail.img}}/>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black', marginBottom: 10 }}>{detail.title}</Text>
                {loading?
                <Text>The content is loading!</Text>
                :
                <Animated.View style={{
                    opacity: fadeAnim
                    }}>                
                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black', marginBottom: 10 }}>By {details.author} on {details.posted}</Text>
                    <Pressable onPress={handlePress} >
                        <Text style={{color:'blue'}}>Read full article here.</Text>
                    </Pressable>
                    {/* <Text>{details.tags}</Text> */}
                    <Text>{details.body}</Text>            
                </Animated.View>
                }
            </ScrollView>
        </>
}