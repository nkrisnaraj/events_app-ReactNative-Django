import { HeaderBackButton } from "@react-navigation/elements";
import { useNavigation, useRoute } from "@react-navigation/native"
import { useLayoutEffect } from "react";
import { Text, View } from "react-native";

const ProfileDetailsScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const {profileId} = route.params;

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerLeft : ()=> (
                <HeaderBackButton 
                    tintColor="white"
                    label="Back"
                    onPress={()=>navigation.goBack()}
                    />
            ),
        })
    },[])
    return (
        <View>
            <Text>Profile Details Screen</Text>
            <Text>Profile ID : {profileId}</Text>
        </View>
    )
}
export default ProfileDetailsScreen;