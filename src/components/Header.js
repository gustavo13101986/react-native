import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';


function Header() {

    return (
        <View
            style={
                styles.container
            }
         >
            <Text >Logo</Text>
            <Text>Equipos</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4286f4',
        padding: 20,
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
    },
  });

export default Header

