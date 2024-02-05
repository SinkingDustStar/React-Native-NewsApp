import { Text, View } from "react-native";
import BadgerPreferenceCard from "./BadgerPreferenceCard";
import BadgerPrefContext from "../BadgerPrefContext";
import { useContext } from "react";
function BadgerPreferencesScreen(props) {
    const [prefs, setPrefs,allprefs, setAllPrefs] = useContext(BadgerPrefContext);
    // console.log(prefs)     
    return <View>
        {/* <Text style={{paddingTop: 128}}>I should put some switches here!</Text> */}
        {allprefs.map(pref => {return<BadgerPreferenceCard key = {pref} id={pref} {...pref}/>})}
    </View>
}
 
export default BadgerPreferencesScreen; 