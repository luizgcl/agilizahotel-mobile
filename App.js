import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BellRinging, House, Password, User } from 'phosphor-react-native';
import { StyleSheet } from 'react-native';
import { ForgetPassword } from './src/pages/ForgetPassword';
import { Home } from './src/pages/Home';
import { Login } from './src/pages/Login';
import { Notifications } from './src/pages/Notifications';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeTabs() {
  const Routes = {
      Inicio: {
          icon: (color, size) => {
              return <House color={color} size={size}/>
          }
      },
      Login: {
          icon: (color, size) => {
              return <User color={color} size={size}/>
          }
      },
      Notifications: {
          icon: (color, size) => {
              return <BellRinging color={color} size={size}/>
          }
      },
      ForgetPassword: {
        icon: (color, size) => {
            return <Password color={color} size={size}/>
        }
    }
  }

  return (
    <Tab.Navigator
      screenOptions={
          ({route}) => ({
              tabBarIcon: ({color, size}) => {
                  return Routes[route.name].icon(color, size)
              }   
          })
      }
    >
    <Tab.Screen 
      name="Inicio" 
      component={Home}
      options={{ 
          headerShown: false,
          tabBarShowLabel: false 
        }}
      />
    <Tab.Screen 
      name="Notifications" 
      component={Notifications} 
      options={{ 
        headerShown: false,
        tabBarShowLabel: false  
      }}
      />
    <Tab.Screen 
      name="Login" 
      component={Login}
      options={{ 
        headerShown: false,
        tabBarShowLabel: false  
      }}
      />
  </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 30
  }
});
