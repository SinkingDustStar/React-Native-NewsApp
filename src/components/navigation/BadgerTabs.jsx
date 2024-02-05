import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BadgerNewsScreen from "../screens/BadgerNewsScreen"
import BadgerPreferencesScreen from "../screens/BadgerPreferencesScreen"
import BadgerSingleNews from "../screens/BadgarSingleNews"

const BadgerTab = createBottomTabNavigator();
const BadgerNewsStack = createNativeStackNavigator();

function Navi(){
    return<>
        <BadgerNewsStack.Navigator>
            <BadgerNewsStack.Screen name = "Articles" component = {BadgerNewsScreen}/>
            <BadgerNewsStack.Screen name = "Article" options={{
                    headerBackTitle: 'back'
                }} component = {BadgerSingleNews}/>
        </BadgerNewsStack.Navigator>
    </>
}


export default function BadgerTabs(props) {

    return <>      
        <BadgerTab.Navigator>
            <BadgerTab.Screen name = "News" options={{ headerShown: false }} component ={Navi}/>
            <BadgerTab.Screen name = "Preferences" component ={BadgerPreferencesScreen}/>
        </BadgerTab.Navigator>
    </>
}
