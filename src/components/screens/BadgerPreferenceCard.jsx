import { Text } from "react-native"
import { useContext } from "react";
import BadgerPrefContext from "../BadgerPrefContext";
import { Button, Card, Title, Switch } from "react-native-paper";
export default function BadgerPreferenceCard(props){
    const [prefs, setPrefs,allprefs, setAllPrefs] = useContext(BadgerPrefContext);
    function changePref(){
        if(prefs.includes(props.id)){
            setPrefs(prefs=>[...prefs.filter(item => item != props.id)])
        }else{
            setPrefs(prefs=>[...prefs,props.id])
        }
    }
    return <>
        <Card style={{padding: 16, elevation: 5, borderRadius :10}}>
            <Card.Content> 
                <Title style={{ alignSelf: 'center' }}>{props.id}</Title>
            </Card.Content>
            <Switch
                style = {{alignSelf: 'center'}}
                trackColor={{true: 'darksalmon', false: 'lightgrey'}}
                thumbColor={prefs.includes(props.id) ? 'crimson' : 'grey'} // https://github.com/facebook/react-native/issues/30429
                activeThumbColor="crimson"
                onValueChange={changePref} // callback function
                value={prefs.includes(props.id)} // boolean state variable
            />
        </Card>
    </>
}