import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import Login from './src/screen/login';
import ItemListScreen from './src/screen/itemListScreen';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="ItemList" component={ItemListScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;