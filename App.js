import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { BellRinging, House, User } from 'phosphor-react-native';
import { StyleSheet } from 'react-native';
import { Home } from './src/pages/Home';
import { Login } from './src/pages/Login';
import { Notifications } from './src/pages/Notifications';

const Tab = createBottomTabNavigator();

export const Routes = {
    Home: {
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
    }
}

export default function App() {
  return (
    <NavigationContainer>
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
          name="Home" 
          component={Home}
          options={{ headerShown: false }}
          />
        <Tab.Screen 
          name="Notifications" 
          component={Notifications} 
          options={{ headerShown: false }}
          />
        <Tab.Screen 
          name="Login" 
          component={Login}
          options={{ headerShown: false }}
          />
        </Tab.Navigator>
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
