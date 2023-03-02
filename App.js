import { Text, View } from "react-native";
import foodImg from "./assets/1.jpg";
import { Image } from "react-native";
import Home from "./Components/Home";
import About from "./Components/About";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {

  const Tab = createBottomTabNavigator();

  return (

   <>
   <Text>Home</Text>
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Contact" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
   </>

    
    
  );
}


