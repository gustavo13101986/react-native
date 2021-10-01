import React, {useState, useEffect} from 'react';
import { Button, View, Image, Text } from 'react-native';

function Procesos({ navigation }) {
  const [colorRed, setColorRed] = useState('#B31010')


    useEffect(() => {
      if(colorRed=== '#B31010'){
        const interval = setInterval(() => {setColorRed('#FF0303')},
          1000
        );
        return () => clearInterval(interval);
      }else{
        const interval = setInterval(() => {setColorRed('#B31010')},
          1000
        );
        return () => clearInterval(interval);
      }
    }, [colorRed]);

    return (
      <View style={{ flex: 1, margin: 30, textAlign: "justify"}}>
        <Text style={{fontSize: 22, fontWeight: "bold"}}>Lista de fallas regulares:</Text>
        <Text> {"\n"}{"\n"} </Text>

        <Text style={{fontSize: 18, fontWeight: "bold"}}>1. Cruce apagado:</Text>
        <Text> {"\n"} </Text>

        <Text>
          Es importante inspeccionar el cruce de manera visual, así verificamos cableado en mal estado de acometida o de los grupos vehiculares; si en el sector falta el fluido eléctrico, o si en el cruce ha ocurrido algo fuera de lo normal como la caída de mobiliario semafórico por deterioro o por accidente.
          Al abrir el equipo luego de la inspección del cruce, debemos identificar la alimentación del equipo, midiendo tensión en la entrada, la cual es la acometida que llega por lo regular a un breaker bipolar de mayor capacidad de amperaje que los otros breakers, y por lo regular están conectados fase y neutro con cables de mayor calibre (2x12 awg) o se unen dos hilos del cable (4x16 awg) y se conectan al breaker, en caso del controlador siemens MF la fase se conecta a un breaker mono polar y el neutro a la bornera que conecta con el barraje neutro del equipo. 
          El rango de voltaje de entrada para el funcionamiento correcto de los equipos esta entre 110 Vac a 125 Vac.
        </Text>
        <Text> {"\n"} </Text>

        <Text style={{fontSize: 15, fontWeight: "bold"}}>
        1.1 Cruce apagado por falta de tensión
        </Text>
        <Text> {"\n"} </Text>

          
        <Text>

En caso de no haber tensión en la entrada, se debe verificar si en la zona hay fluido eléctrico o si es algún daño en el cableado que alimenta el equipo fuera de este, ya sea en las cámaras de paso o en el transformador al cual está conectado el cable de alimentación del equipo.

          </Text>
          <Text> {"\n"} </Text>

        <Text style={{fontSize: 15, fontWeight: "bold"}}>
          1.2  Cruce apagado por falla en elementos de protección.
        </Text>
        <Text> {"\n"} </Text>

          
        <Text>

        Teniendo en cuenta que el voltaje de entrada se encuentra correcto, debemos verificar que nuestros sistemas de protección se encuentran trabajando correctamente, verificando fusibles en la entrada; que los breakers estén activos, que los sistemas de protección como breakermatic y protectores de trascientes no estén quemados y estén activados luego del chequeo de voltajes; que los cables internamente estén bien conectados en sus borneras en el equipo, ya que con el pasar del tiempo y la vibración del controlador estos se van aflojando y pueden llegar a aislarse o a no tener un buen contacto con los dispositivos internos lo cual puede provocar fallas constantes. 
          </Text>
          <Text> {"\n"} </Text>

        <Text style={{fontSize: 15, fontWeight: "bold"}}>
          1.3 Cruce apagado por falla en procesador y falla de programación.
        </Text>
        <Text> {"\n"} </Text>

          
        <Text>

        Esta falla en equipos Solutrafic repotenciados por Sistra, se debe a que en ocasiones la fuente de alimentación de 5 Vdc se encuentra en falla y se debe reemplazar, esta se conecta a la fuente de 24Vdc que alimenta también la tarjeta CPU, o se debe verificar que la fuente de 24Vdc esté trabajando correctamente.
        En equipos Sistra, la falla se debe a que las tarjetas de potencia tienen un sistema de comunicación con la Raspberry (procesador) y de autonomía cuando no es detectada por la Raspberry, cuando estas tarjetas de potencia dejan de comunicarse con la raspberry el cruce entra en ocasiones en estado de apagado de lámparas por seguridad de la intersección.
        En equipos MP la falla de cruce apagado se debe a que la tarjeta PXA deja de contar y entra en un estado de bloqueo, con lo cual en un tiempo determinado el cruce se apaga para que la intersección se despeje, o en caso de borrado del programa, debido a fallas de voltaje en el sector y si la pila que sostiene la programación en la tarjeta se encuentra en mal estado.
        En equipos MF el cruce quedará apagado cuando la tarjeta Mc1 se bloquea o se borra el programa, quedando solo uno de sus 4 led indicadores encendido, cuando está trabajando normalmente hay dos leds indicadores encendidos.
        En equipos C900V, por fallas de variación de voltaje o fallas de lámparas, en ocasiones por la desconexión del equipo con la central, el procesador detecta falla de conexión o de diferencia de tiempo con central, lo cual  induce a la falla
        </Text>
        <Text> {"\n"}{"\n"} </Text>

        <Text style={{fontSize: 18, fontWeight: "bold"}}>2. Cruce intermitente:</Text>
        <Text> {"\n"} </Text>
        <View style={{ backgroundColor: colorRed, borderRadius: '50% ',
        width: 30,
        height: 30,
      }}></View>
              <Text> {"\n"} </Text>


        <Text style={{fontSize: 15, fontWeight: "bold"}}>2.1 Por falta de fluido eléctrico. </Text>
        <Text> {"\n"} </Text>

          
        <Text>
        Cuando no hay tensión de entrada, las UPS se activan y si las baterías están en malas condiciones, estas no darán la carga suficiente para que el equipo entre en funcionamiento, el equipo puede permanecer encendido y este entra en falla de variación de voltaje hasta agotar las baterías de la UPS.
        Se puede dar el caso que el fluido eléctrico retorne y el equipo entre a intermitencia hasta que se reinicie y se quite la falla de variación de voltaje o falla de lámparas, ya que al momento del corte de fluido el estado de las lámparas cambia con el cambio de corriente censada y se produce la falla.


        </Text>
        <Text> {"\n"}</Text>
        <Text style={{fontSize: 15, fontWeight: "bold"}}>2.2  Intermitente por falla de acometida. </Text>
        <Text> {"\n"} </Text>
        <Text>
        Al momento de inspeccionar el equipo, debemos verificar si la tensión de entrada se encuentra en el rango de 110Vac a 125Vac.
        Si al verificar la tensión se encuentra por arriba del rango, posiblemente el equipo se vaya a falla por protección del mismo, lo cual se debe resolver cambiando la acometida o instalar regulador de voltaje para que el equipo trabaje de manera correcta.
        Si el voltaje se encuentra por debajo del rango mencionado, se debe verificar si hay falla en el cableado externo que está conectado al transformador de la red eléctrica del cual se alimenta el controlador, si el cableado se encuentra en buen estado, posiblemente la falla se encuentre en el transformador de la red eléctrica y se debe dejar apagado el equipo poniendo en estado OFF el breaker principal hasta que se haga la reparación en el transformador o hasta que se busque una conexión con el rango de voltaje ideal de trabajo.
        Si el voltaje está en el rango de trabajo, se debe verificar si la conexión de la fase y del neutro se encuentra de tal manera que la fase este en el lado de la conexión de fase para el equipo y el neutro esté conectado en el lado de la entrada que lleva al barraje neutro, así el equipo no detecta errores de voltaje y entra a trabajar con normalidad.
        Si el voltaje varía en el rango mencionado, el controlador posiblemente detecte la variación constante de tensión por lo cual se hace necesario instalar regulador de voltaje o buscar otro punto de conexión de la acometida.

        </Text> 
        <Text> {"\n"}</Text>
        <Text style={{fontSize: 15, fontWeight: "bold"}}>2.3 Intermitente por falla de lámparas y cableado. </Text>
        <Text> {"\n"} </Text>
        <Text>Al momento de verificar la falla en equipo se deben inspeccionar las conexiones de las salidas de los grupos programados y conectados a las borneras de salida de lámparas, apagando el equipo y luego verificando que ninguna salida esté en corto con respecto a neutro, si alguna de estas salidas está en corto, se debe realizar la reparación para que el equipo entre a su ciclo normal de trabajo, de lo contrario este se irá intermitencia por protección de la intersección y de sus componentes, si ninguno de los cables de salida está en corto, se debe verificar que las lámparas estén funcionando correctamente, ya que si hay una lámpara roja fundida el equipo entrará a intermitencia por error de ausencia de rojos lo cual es peligroso en el cruce, si en el flujo está fundida una de las lámparas rojas puede que el equipo no alcance a detectar el consumo de corriente necesario para detectar la presencia de rojo en el grupo y se debe cambiar la lámpara que este apagada o instalar resistencia en el flujo, está con respecto a neutro para aumentar la carga, la resistencia debe ser cerámica y se debe calcular para que cuando se funda el rojo restante el equipo se vaya a intermitencia, de lo contrario podría poner en riesgo a las personas que transitan por el cruce al quedar el flujo sin rojos y esté trabajando, el cambio de la luminaria debe ser lo más pronto posible y retirar la resistencia instalada.
        Si el equipo se va a intermitencia sin que el cableado presente corto con neutro, se debe verificar el consumo de corriente de cada flujo y establecer si este consumo es ideal para el equipo, si no es ideal, se debe verificar el cableado del flujo verificando si está en corto con respecto a otro cable que pertenezca a otro flujo, lo cual aumenta el consumo de corriente y dispara el equipo por protección, también puede pasar que el cable del grupo afectado este pelado y haga contacto con tierra, por lo que aumenta la resistencia del cableado y aumenta el consumo de corriente lo cual produce la falla de lámparas.
        Se deben verificar  también verdes conflictivos, estableciendo que los grupos que entran en rojo en el ciclo de trabajo no les esté llegando una señal de verde debido a corto en el cableado, por lo que se debe medir continuidad en el cableado antes de encender el equipo y verificar que las lámparas estén en buen estado, estas lámparas tienen una fuente interna que ocasionalmente se pone en corto y produce falla de lámparas en el equipo. En caso de los equipos SISTRA se puede dar el verde conflictivo cuando uno de los cables de verde se abra o la lámpara verde esté fundida y se debe revisar fusibles y que el equipo detecte las salidas del verde.
        </Text>

        <Text> {"\n"}</Text>
        <Text style={{fontSize: 15, fontWeight: "bold"}}>2.4  Intermitente por falla de tarjetas:
. </Text>
        <Text> {"\n"} </Text>
        <Text> 
        Al momento de revisar esta falla, debemos saber qué tipo de equipo estamos revisando, en el caso del equipo Solutrafic, debemos tener en cuenta que estén correctos los voltajes de alimentación de la CPU 24Vdc y la raspberry 5 Vdc que llega de una fuente aparte conectada a la fuente del equipo de 110Vac a 24Vdc.
        Partiendo de lo anterior, debemos saber si las tarjetas de potencia están dando sus registros a la tarjeta cpu y si esta está detectando las señales ya que si alguna tarjeta tiene falla en algún sensor de rojo, el equipo puede detectar falla de rojo fundido así la lámpara este en buenas condiciones, las señales se pueden ver poniendo el equipo en prueba, sacando todas las borneras porta fusibles que están en las salidas de los grupos y subiendo las simulaciones de rojo de todas las tarjetas de potencia luego reiniciando el equipo para que entre en su ciclo de trabajo, de esta forma descartamos que la falla sea externa y verificamos que las simulaciones de las tarjetas de potencia están enviando esta señal, si el equipo entra a trabajar en prueba significa que la cpu está detectando de manera correcta las señales de rojo que vienen de la tarjeta de potencia, luego se deben poner las borneras de los rojos en funcionamiento y deshabilitar las simulaciones de rojo, para detectar alguna falla en tarjetas de potencia teniendo en cuenta que este correcta la conexión externa.

        Para los equipos SISTRA, debemos tener en cuenta que este equipo requiere las conexiones de salida de rojos y verdes en buenas condiciones ya que estas tarjetas detectan verde fundido, por lo que al momento de encontrar este equipo intermitente, debemos asegurarnos que las lámparas, el cableado externo y los fusibles de las borneras de salidas estén en buenas condiciones, luego debemos identificar en el procesador el led indicador que alumbra verde, rojo o amarillo, el cual destella una cierta cantidad de veces, según sea el grupo afectado y alumbra del color de la falla, también se debe tener en cuenta que estas tarjetas de potencia tienen su propia configuración con la cual se coordinan con la Raspberry (procesador)  por lo que el Controlador puede entrar en destello cuando una de las tarjetas ha perdido la comunicación con la Raspberry y esta no la detecta, esto nos indica que debemos reiniciarla para que coordine nuevamente sus buses de datos y el equipo entre en su ciclo normal de trabajo, si en estos casos no entra el equipo, se debe revisar que la tarjeta cpu o raspberry se encuentre trabajando correctamente y la micro sd que lleva el programa se encuentre en óptimas condiciones, se puede verificar la programación poniendo el equipo en prueba, así detectamos que el programa está corriendo y que no hay falla de programación.

        Para los equipos MP y MF la mayoría de estos equipos tienen puenteada la lógica de señales, por lo cual identificar problemas en las tarjetas tenemos que tener en cuenta por que tarjeta empezar a hacer la revisión.
        Para el caso del MF se requiere verificar la tarjeta MC1 la cual tiene la programación de planes de señales. Debemos verificar si no se ha borrado el programa, esta tarjeta tiene una fila de 4 leds rojos que indican si el programa está activo, destellando los últimos dos led en una frecuencia de 1 Hz, cuando el programa esta borrado solo enciende el último led. Luego de verificar si el programa está, se deben verificar las salidas de lámparas y verificar si están saliendo según la programación de la MC1, midiendo voltaje de salida en cada uno de los grupos, dándonos cuenta así que el TSD o tarjetas de potencia estén cumpliendo su función, si el equipo no está dando ninguna de estas salidas debemos verificar que la tarjeta GS1 esté trabajando en buenas condiciones y que los fusibles de la tarjeta estén buenos y con los voltajes correspondientes y si los relés de esta están activándose cuando se requiere, de lo contrario debemos revisar si la tarjeta SCR está enviando los voltajes y se están activando los relés de esta.
        En caso de que las tarjetas SCR, MC1 Y GS1 estén bien y algunas de las salidas de potencia no estén saliendo hacia las lámparas debemos identificar la tarjeta TSD de estas salidas y verificar si tiene los fusibles buenos y si está activando las salidas, de lo contrario se hará necesario el cambio de esta tarjeta y su reparación.
        Para el caso de los equipos MP se debe poner el equipo en prueba y verificar la tarjeta PXA, que esté contando en binario, esto se puede observar en los indicadores led que van hacia la puerta donde se pone en prueba el equipo, luego de verificar que este programada, debemos verificar que las señales estén llegando a la tarjeta LPG que con un indicador led de color verde nos indica que esta lista para trabajar en conjunto con la PXA, si esta tarjeta LPG no muestra el indicador verde luego de 11 segundos después que empiece a contar la tarjeta PXA esta puede estar desprogramada o debemos hacer la corrección de la falla en la tarjeta LPG, A32 o en la U16, por lo cual necesitamos llevar las tarjetas al laboratorio y hacer pruebas en condiciones ideales para descartar tarjetas, poniendo otras tarjetas buenas con cada una de las que se traen del equipo afectado y así identificar la falla para hacer la reparación.

        Para los equipos Siemens C900V debemos verificar el BAZ, este dispositivo que se encuentra regularmente en la puerta del equipo, nos indica el reporte de fallas que ha tenido el controlador  y la causa de la intermitencia, con este diagnóstico podemos identificar la falla más fácilmente. Una de las tarjetas que puede inducir a esta falla puede ser la fuente, ya que esta envía los voltajes necesarios a las demás tarjetas para su trabajo, muchas veces el equipo pudo haber tenido un corto

        </Text>
        <Text> {"\n"} </Text>
        <View style={{ justifyContent: 'center', alignItems: 'center'}}>

        <Image style={{width: 180, height:270}}
          source={require("../../assets/Imagen_1.png") }/>
        </View>
        <Text> {"\n"} </Text>
        <Text> 
          externo y al ser reparado el daño se vio reflejado en la fuente, que se puede poner en prueba y parecer que esta buena, pero al momento de ponerla en modo normal de trabajo, esta no proporciona la carga de salida para las lámparas y el equipo no entrará en funcionamiento.
          Para las tarjetas LSC se deben medir los dos fusibles y verificar que las señales digitales que reciben se vean reflejadas en las salidas de potencia en las borneras del cableado de salida.
          La tarjeta BBS nos indicará en su línea de leds la falla según alumbren los leds y esto según el manual del controlador siemens c900v.
          Si al momento de verificar que las tarjetas mencionadas están bien y el problema se sigue presentando, se deben verificar las tarjetas donde conectan las LSC ya que en ocasiones, algunos animales que se logran meter al equipo, estos quedan atrapados detrás de estas tarjetas y hacen corto con los voltajes de 110 Vac de las salidas de lámparas. 
        </Text>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }

  export default Procesos