import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ForgetPassword } from './src/pages/ForgetPassword';
import { Home } from './src/pages/Home';
import { Login } from './src/pages/Login';
import { Welcome } from './src/pages/Welcome';
import { MyAccount } from './src/pages/MyAccount';
import { Notifications } from './src/pages/Notifications';
import { TabList } from './src/components/TabList';
import { BellRinging, House, User } from 'phosphor-react-native';
import { SignUp } from './src/pages/SignUp';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import { MyPersonalInformation } from './src/pages/MyPersonalInformation';
import { EditMyInformation } from './src/pages/EditMyInformation';
import { ViaCep } from './src/pages/ViaCep';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export function Tabs() {
  const Routes = {
    Inicio: {
      icon: (color, size) => {
        return <House color={color} size={size} />
      }
    },
    MyAccount: {
      icon: (color, size) => {
        return <User color={color} size={size} />
      }
    },
    Notifications: {
      icon: (color, size) => {
        return <BellRinging color={color} size={size} />
      }
    },
  }

  return (
    <Tab.Navigator 
      tabBar={props => <TabList {...props} />}
      screenOptions={
        ({ route }) => ({
          tabBarIcon: ({ color, size }) => {
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
        name="MyAccount"
        component={MyAccount}
        options={{
          headerShown: false,
          tabBarShowLabel: false
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular, 
    Montserrat_500Medium, 
    Montserrat_700Bold
  })

  if (!fontsLoaded) {
    return null;
  }

  return (
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{ headerShown: false, }}
          >
          <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false, gestureEnabled: false }} />
          <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Tabs} options={{ headerShown: false, gestureEnabled: false }} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
          <Stack.Screen 
            name="MyPersonalInformation" 
            component={MyPersonalInformation} 
            options={{ headerShown: false }} 
            initialParams={{ loggedUser: undefined }}/>      
          <Stack.Screen 
            name="EditMyInformation" 
            component={EditMyInformation} 
            options={{ headerShown: false }}
            initialParams={{ loggedUser: undefined }} />
          <Stack.Screen
            name="ViaCep"
            component={ViaCep}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
