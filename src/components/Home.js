import React, {useState, useEffect} from 'react';
import { Text, View } from 'react-native';



function HomeScreen({ navigation }) {
    const [colorRed, setColorRed] = useState('#B31010')
    const [colorVerde, setColorVerde] = useState('#187C00')

    


    useEffect(() => {
      if(colorRed=== '#B31010'){
         const interval = setInterval(() => {setColorRed('#FF0303'); setColorVerde('#187C00')},
           2000
         );
         return () => clearInterval(interval);
      }else{
        const interval = setInterval(() => {setColorRed('#B31010'); setColorVerde('#34FD02')},
           2000
         );
         return () => clearInterval(interval);
      }
   }, [colorRed]);
    

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20 }}>Bienvenido</Text>
        <Text> {"\n"} </Text>

        <View style={{ backgroundColor: colorRed, borderRadius: '50% ',
        width: 50,
        height: 50,
      }}></View>
      <View style={{ 
        height: 10,
      }}></View>

      <View style={{ backgroundColor: colorVerde, borderRadius: '50% ',
        width: 50,
        height: 50,
      }}></View>
      </View>
    );
  }

  export default HomeScreen