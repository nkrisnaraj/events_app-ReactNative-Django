import { HeaderBackButton } from "@react-navigation/elements";
import { useNavigation, useRoute } from "@react-navigation/native"
import { useLayoutEffect } from "react";
import { View, Text , StyleSheet} from "react-native"

const EventDetailScreen = () => {
    const route = useRoute();
    const {EventID,description,title} = route.params;
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "new title",
            headerLeft: () =>(
              <HeaderBackButton
                tintColor="white"
                label="Back"
                onPress={()=>navigation.goBack()}
                />
            )
        });
    },[]);
  return (
   <View>
        <Text style={{ fontSize: 22 }}> This is the Event details  for {EventID}</Text>
        <Text style={{ fontSize: 22 }}> {title}</Text>
        <Text style={{ fontSize: 22 }}> {description}</Text>
   </View>
  )
}
const styles = StyleSheet.create({
    screen: {
        padding: 10,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})
export default EventDetailScreen
