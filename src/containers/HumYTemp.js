import React, { useState, useEffect } from 'react';
import { Button, Dimensions } from "react-native";
import { View, Text, StyleSheet  } from 'react-native';

import {
    LineChart,
  } from "react-native-chart-kit";



  const HumYTemp = () => {

    const [count, setCount] = useState([]);
    const [fecha, setFecha] = useState('');
    const [fechas, setFechas] = useState([]);


      useEffect(() => {

        async function fetchData(){
          await fetch("http://18.222.193.134:3001/sensado")
              .then((response) => { return response.json() } )
              .catch((error) => console.warn("fetch error:", error))
              .then((response) => {
                console.log(response)
                if(response){
                  var listaFechas =[]
                  let x = response.length -1
                  let lista = []
                  lista.push(response[x])
                  lista.push(response[x-1])
                  lista.push(response[x-2])
                  lista.push(response[x-3])
                  lista.push(response[x-4])
                  lista.push(response[x-5])
                  lista.push(response[x-6])

                  setCount(lista)
                  console.log(lista)
                  var date = new Date(response[x].timestamp);
                  setFecha(date.getDate()+
                  "/"+(date.getMonth()+1)+
                  "/"+date.getFullYear());
                  
                  // fechas
                  let hora1 = new Date(response[x].timestamp);
                  let hora2 = new Date(response[x-1].timestamp);
                  let hora3 = new Date(response[x-2].timestamp);
                  let hora4 = new Date(response[x-3].timestamp);
                  let hora5 = new Date(response[x-4].timestamp);
                  let hora6 = new Date(response[x-5].timestamp);
                  let hora7 = new Date(response[x-6].timestamp);
                  // 
                  hora1 = hora1.getHours()+":"+date.getMinutes()
                  hora2 = hora2.getHours()+":"+date.getMinutes()
                  hora3 = hora3.getHours()+":"+date.getMinutes()
                  hora4 = hora4.getHours()+":"+date.getMinutes()
                  hora5 = hora5.getHours()+":"+date.getMinutes()
                  hora6 = hora6.getHours()+":"+date.getMinutes()
                  hora7 = hora7.getHours()+":"+date.getMinutes()
                  listaFechas.push(hora1)
                  listaFechas.push(hora2)
                  listaFechas.push(hora3)
                  listaFechas.push(hora4)
                  listaFechas.push(hora5)
                  listaFechas.push(hora6)
                  listaFechas.push(hora7)

                  setFechas(listaFechas)
              }
                console.log("fecha: ",fecha)
                  console.log("lista",count)
      
              })
        }
        fetchData()

        // setInterval(fetchData, 4000);
     
        }, []);
      return(
        <View style={styles.container}>
       <View style={{ margin: '4%', borderRadius: 16 }} >

            {count.length > 0 ?
            
            <View>
              <View style={{flexDirection: "row", justifyContent: "space-between"}}>
              <Text style={{ color: 'white', fontSize: 20 }}>
                Temperatura  
              </Text>
              <Text style={{ color: 'white', fontSize: 15 }}>
                {fecha}
              </Text>
            </View>
          <LineChart
          data={{
            labels: [fechas[5], fechas[4], fechas[3], fechas[2], fechas[1], fechas[0]],
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
            labels: [fechas[5], fechas[4], fechas[3], fechas[2], fechas[1], fechas[0]],
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
        </View>

      )
  }

  const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
    justifyContent:"center",
  },

}); 

  export default HumYTemp