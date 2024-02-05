import { NavigationContainer } from '@react-navigation/native';
import { useState,useEffect } from 'react';
import { Text } from 'react-native';
import BadgerTabs from './navigation/BadgerTabs';
import BadgerPrefContext from './BadgerPrefContext';

export default function BadgerNews(props) {

  // Just a suggestion for Step 4! Maybe provide this to child components via context...
  const [prefs, setPrefs] = useState([]);
  const [allprefs, setAllPrefs] = useState([]);
  useEffect(()=>{
        fetch('https://cs571.org/api/f23/hw8/articles',{
            headers :{
                "X-CS571-ID": "bid_559df600ea130b903026eab0bed1afb72f8bc4d6f009b0ec199db14b5069f582"
            }
        })
        .then(res=>res.json())
        .then(data => {
          const record = new Set();
          data.forEach(element => {
            element.tags.forEach(tag => record.add(tag))
          })
          setPrefs([...record])
          setAllPrefs([...record])
        })
    },[])


  return ( 
    <>
    {/* {console.log(prefs)} */}
      <NavigationContainer>
        <BadgerPrefContext.Provider value = {[prefs, setPrefs,allprefs, setAllPrefs]}>
          <BadgerTabs />
        </BadgerPrefContext.Provider>
      </NavigationContainer>
    </>
  );
}