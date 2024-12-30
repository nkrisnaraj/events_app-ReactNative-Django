import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home-screen';
import EventDetailScreen from '../screens/event-details-screen';
import { useNavigation } from '@react-navigation/native';
import { navOptions } from './options';
import ProfilesScreen from '../screens/profiles/profiles-screen';
import ProfileDetailsScreen from '../screens/profiles/profile-details-screen';

const Stack = createStackNavigator();

export const HomeStack = ()=> {
    const navigation = useNavigation();
  return (
    <Stack.Navigator 
      screenOptions={navOptions(navigation)}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Event" component={EventDetailScreen} />
    </Stack.Navigator>
  );
}

export const ProfileStack = ()=> {
  const navigation = useNavigation();
return (
  <Stack.Navigator 
    screenOptions={navOptions(navigation)}>
    <Stack.Screen name="Profiles" component={ProfilesScreen} />
    <Stack.Screen name="Profile" component={ProfileDetailsScreen} />
  </Stack.Navigator>
);
}