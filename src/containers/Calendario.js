import React, { useState, useContext, useEffect } from 'react';
import { Calendar } from 'react-native-calendario';
import { DataTable } from 'react-native-paper';
import { View, Text, Button} from 'react-native';

const Calendario = () => {

const [rangoInicial, setRangoInicial] = useState("");
const [rangoFinal, setRangoFinal] = useState("");
const [dataTables, setDataTable] = useState([]);


const NUMBER_OF_MONTHS = 1;
let rango = []

const calendario = (range) => {
    let valor = range.getFullYear()+"-"+(range.getMonth()+1)+"-"+range.getDate()
    rango.push(valor)
    if(rango.length == 3){
      rango = []
      setDataTable([])
      setRangoInicial("")
      setRangoFinal("")
      rango.push(valor)
    
    }
    console.log(rango)
    setRangoInicial(rango[0])
    setRangoFinal(rango[1])

  }

const solicitar = async() => {
    await fetch(`http://18.222.193.134:3001/rango/${rangoInicial}/${rangoFinal}/`)
        .then((response) => { return response.json() } )
        .catch((error) => console.warn("fetch error:", error))
        .then((response) => {
            console.log(response)
            setDataTable(response)
    })
}
  return(
    <View>
    <Calendar
    onPress={range => calendario(range)}
    minDate={new Date(2021, 3, 20)}
    startDate={new Date(2021, 3, 30)}
    endDate={new Date(2025, 4, 5)}
    numberOfMonths = {NUMBER_OF_MONTHS}
    theme={{
      activeDayColor: {},
      monthTitleTextStyle: {
        color: '#6d95da',
        fontWeight: '300',
        fontSize: 16,
      },
      emptyMonthContainerStyle: {},
      emptyMonthTextStyle: {
        fontWeight: '200',
      },
      weekColumnsContainerStyle: {},
      weekColumnStyle: {
        paddingVertical: 10,
      },
      weekColumnTextStyle: {
        color: '#b6c1cd',
        fontSize: 13,
      },
      nonTouchableDayContainerStyle: {},
      nonTouchableDayTextStyle: {},
      startDateContainerStyle: {},
      endDateContainerStyle: {},
      dayContainerStyle: {},
      dayTextStyle: {
        color: '#2d4150',
        fontWeight: '200',
        fontSize: 15,
      },
      dayOutOfRangeContainerStyle: {},
      dayOutOfRangeTextStyle: {},
      todayContainerStyle: {},
      todayTextStyle: {
        color: '#6d95da',
      },
      activeDayContainerStyle: {
        backgroundColor: '#6d95da',
      },
      activeDayTextStyle: {
        color: 'white',
      },
      nonTouchableLastMonthDayTextStyle: {},
    }}
  />
  <View>
    {
      rangoInicial &&
      <View>
        <Text>
          Dato Inicial: {rangoInicial}
        </Text>
      </View>
    }
  </View>
    {
      rangoFinal &&
      <View>
        <Text>
          Dato Final: {rangoFinal}
          <Button onPress={() => solicitar()} title="Solicitar" />
        </Text>
      </View>
    }
    <View>
        { dataTables.length > 0 &&
            

        

        <DataTable>
            <DataTable.Header style={{backgroundColor:'#6D02E5'}}>
                <DataTable.Title><Text style={{color:'#FFFFFF', fontSize: 15}}>Fecha</Text></DataTable.Title>
                <DataTable.Title numeric><Text style={{color:'#FFFFFF', fontSize: 15}}>Temp.</Text></DataTable.Title>
                <DataTable.Title numeric><Text style={{color:'#FFFFFF', fontSize: 15}}>Humedad</Text></DataTable.Title>
            </DataTable.Header>
            {
                dataTables.map(dataTable => {
                let date = new Date(dataTable.timestamp);
                let fecha = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()

                        
                return(
                    <DataTable.Row>
                    <DataTable.Cell>{fecha}</DataTable.Cell>
                    <DataTable.Cell numeric>{dataTable.temperatura}°C</DataTable.Cell>
                    <DataTable.Cell numeric>{dataTable.humedad}%</DataTable.Cell>
                </DataTable.Row>
                    
                )

                })
            }
            </DataTable>
        }
    </View>

    </View>
  )

}

export default Calendario