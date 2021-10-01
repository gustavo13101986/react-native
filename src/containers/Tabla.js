import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext'

import { View, Text, Button } from 'react-native';

// import { Table, TableWrapper, Cell, Row, Rows, Col, Cols } from 'react-native-table-component';


  const Tabla = () => {
    const {state, addTodataSensores} = useContext(AppContext)
    const {dataSensores} = state

      useEffect(() => {

        async function fetchData(){
          await fetch("")
              .then((response) => { return response.json() } )
              .catch((error) => console.warn("fetch error:", error))
              .then((response) => {
                console.log(response)
                if(response){
                  addTodataSensores(response)
                }
      
              })
        }
        fetchData()
    },[])
    return(
        <View>
            {dataSensores.length > 0 &&
                <View>{
                    
                    dataSensores[0].map(dat => console.log(dat))
                    }
                </View>
            }
        </View>
    )

}

export default Tabla

