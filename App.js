import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './telas/Home';
import Calcular from './telas/Calcular';
import PON from './telas/PON';
import POFF from './telas/POFF';



const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal">
        <Stack.Screen
          name="Principal"
          component={Home}
        />
        <Stack.Screen
          name="Calcular"
          component={Calcular}
        />
        <Stack.Screen
          name="PON" 
          component={PON}
           />
        <Stack.Screen
          name="POFF"
          component={POFF}
                />
                         
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;