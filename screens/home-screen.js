import { useNavigation } from "@react-navigation/native";
import { View, Text , StyleSheet, Button} from "react-native"
import EventList from "../components/events/event-list";

const HomeScreen = () => {
    const navigation = useNavigation();
  return (
   <View>
        <EventList />
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
export default HomeScreen
