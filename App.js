import * as React from 'react';
import 'react-native-gesture-handler'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/components/Home.js'
import Informacion from './src/components/Informacion.js';
import HumYTemp from './src/containers/HumYTemp.js';
import Procesos from './src/containers/Procesos.js';
import Tabla from './src/containers/Tabla.js';
import Calendario from './src/containers/Calendario.js';
import AppContext from './src/context/AppContext';
import useInitialState from './src/hooks/useInitialState';


const Drawer = createDrawerNavigator();

export default function App() {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Inicio" component={HomeScreen} />
        <Drawer.Screen name="Información" component={Informacion} />
        <Drawer.Screen name="Humedad y Temperatura" component={HumYTemp} />
        <Drawer.Screen name="Calendario" component={Calendario} />
        <Drawer.Screen name="Tabla" component={Tabla} />
        <Drawer.Screen name="Manual de procesos y procedimientos" component={Procesos} />
      </Drawer.Navigator>
    </NavigationContainer>
    </AppContext.Provider>

  );
}



