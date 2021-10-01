import React, { useState, useEffect } from 'react';
import { Dimensions } from "react-native";
import AppContext from '../context/AppContext'

import { View, Text, Button } from 'react-native';

import {
    LineChart,
  } from "react-native-chart-kit";



  const Line = () => {
    const {state, addTodataSensores} = useContext(AppContext)
    const {dataSensores} = state
    const [count, setCount] = useState([]);

      useEffect(() => {

        async function fetchData(){
          await fetch("")
              .then((response) => { return response.json() } )
              .catch((error) => console.warn("fetch error:", error))
              .then((response) => {
                console.log(response)
                if(response){
                  let x = response.length -1
                  let lista = []
                  lista.push(response[x])
                  lista.push(response[x-1])
                  lista.push(response[x-2])
                  lista.push(response[x-3])
                  lista.push(response[x-4])
                  lista.push(response[x-5])
                  lista.push(response[x-6])
                  addTodataSensores(response)
                  setCount(lista)
                  console.log(lista)
                }
                  console.log("lista",count)
      
              })
        }
        fetchData()

        
        // setInterval(fetchData, 2000);
      }, []);
      return(
        <View>
          <Button>Tabla</Button>

            {count.length > 0 ?
            
            <View>
              <Text style={{ color: 'white', fontSize: 20 }}>
                Temperaturas    
              </Text>
          <LineChart
          data={{
            labels: ["1:00", "2:00", "3:00", "4:00", "5:00", "6:00"],
            datasets: [
              {
                data: [
                  count[5].temperatura,
                  count[4].temperatura,
                  count[3].temperatura,
                  count[2].temperatura,
                  count[1].temperatura,
                  count[0].temperatura,
                ]
              }
            ]
          }}
          width= {330} // from react-native
          height={220}
          // yAxisLabel="$"
          yAxisSuffix="C°"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#33FFE0",
            backgroundGradientTo: "#7133FF",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 195, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />

              <Text style={{ color: 'white', fontSize: 20 }}>
                Humedad
              </Text>
          <LineChart
          data={{
            labels: ["1:00", "2:00", "3:00", "4:00", "5:00", "6:00"],
            datasets: [
              {
                data: [
                  count[5].humedad,
                  count[4].humedad,
                  count[3].humedad,
                  count[2].humedad,
                  count[1].humedad,
                  count[0].humedad,
                ]
              }
            ]
          }}
          width= {330} // from react-native
          height={220}
          // yAxisLabel=""
          // yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#33FFE0",
            backgroundGradientTo: "#7133FF",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 195, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
        </View>




  : <Text style={{ color: 'white', fontSize: 20 }}>
    Esperando por Data ...
  </Text>
  }
        </View>

      )
  }

  export default Line