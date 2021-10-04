import React, { useState, useContext, useEffect } from 'react';
import AppContext from '../context/AppContext'

import { View, Text} from 'react-native';

import { DataTable } from 'react-native-paper';

const optionsPerPage = [2, 3, 4];


  const Tabla = () => {
    const {state, addTodataSensores} = useContext(AppContext)
    const [page, setPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);
    const {dataSensores} = state
    var listaTable = [] 
    


      useEffect(() => {

        async function fetchData(){
          setPage(0);
          await fetch("http://18.222.193.134:3001/sensado")
              .then((response) => { return response.json() } )
              .catch((error) => console.warn("fetch error:", error))
              .then((response) => {
                console.log(response)
                if(response){
                  response.map(dat => {
                    listaTable.unshift(dat) 
                  })
                    addTodataSensores(listaTable)
                }
      
              })
        }
        fetchData()
    }, [itemsPerPage])

  
    return(
        <View>
            {dataSensores.length > 0 &&
            <View>
              <DataTable>
                <DataTable.Header style={{backgroundColor:'#6D02E5'}}>
                  <DataTable.Title><Text style={{color:'#FFFFFF', fontSize: 15}}>Fecha</Text></DataTable.Title>
                  <DataTable.Title numeric><Text style={{color:'#FFFFFF', fontSize: 15}}>Temp.</Text></DataTable.Title>
                  <DataTable.Title numeric><Text style={{color:'#FFFFFF', fontSize: 15}}>Humedad</Text></DataTable.Title>
                </DataTable.Header>
                {
                  dataSensores[0].map(dat => {
                    let date = new Date(dat.timestamp);
                    let fecha = date.getDate()+
                    "/"+(date.getMonth()+1)+
                    "/"+date.getFullYear()+ " " +
                    date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()

                          
                    return(
                      <DataTable.Row>
                      <DataTable.Cell>{fecha}</DataTable.Cell>
                      <DataTable.Cell numeric>{dat.temperatura}°C</DataTable.Cell>
                      <DataTable.Cell numeric>{dat.humedad}%</DataTable.Cell>
                    </DataTable.Row>
                      
                    )

                  })
                }
                  

               

                

      <DataTable.Pagination
        page={page}
        numberOfPages={3}
        onPageChange={(page) => setPage(page)}
        label="1-2 of 6"
        optionsPerPage={optionsPerPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        showFastPagination
        optionsLabel={'Rows per page'}
      />
    </DataTable>
            </View>
  }
</View>


    )
    

}

export default Tabla

