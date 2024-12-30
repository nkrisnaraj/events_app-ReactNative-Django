import { Ionicons } from "@expo/vector-icons"
import { Text } from "react-native"

export const navOptions = (nav) => {
    return {
        headerTintColor: 'white',
        headerTitleAlign: 'center', 
        headerStyle: {
            backgroundColor: '#060270',

        },
        headerRight: () => (
            <Ionicons 
                name="menu"
                size={32}
                color={'white'}
                onPress={() => nav.toggleDrawer()}
            />
        ),
        headerLeft:() =>(
            <Text style={{color: 'white', fontSize: 20, marginLeft: 10}}>Logo</Text>
        )
    }
}