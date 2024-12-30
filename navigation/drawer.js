import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import HomeScreen from '../screens/home-screen';
import { HomeStack, ProfileStack } from './stack';
import { Image, SafeAreaView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Drawer = createDrawerNavigator();

export const  MyDrawer  = ()=> {
  return (
    <Drawer.Navigator 
      drawerContent={(props)=>{
        return (
          <SafeAreaView style={{flex:1, paddingTop:20, backgroundColor:'gray'}} >
            <View style={{justifyContent:'center', alignItems:'center', height:150}}>
              <Image 
                style={{width:120, height:120, borderRadius:60 , resizeMode:'contain'}}
                source={require('../assets/images/logos/abstract-8750691_1280.png')}
              />
            </View>
            <DrawerItemList {...props } />
            {/* <StatusBar style='auto'/>
             */}
          </SafeAreaView>
        )
      }}
    
    screenOptions={{headerShown: false}}>
      <Drawer.Screen name="HomeStack" component={HomeStack} options={{
        title:'Home',
              }}/>
       <Drawer.Screen name="ProfileStack" component={ProfileStack} options={{
        title:'Profiles',
      }}/>
    </Drawer.Navigator>
  );
}