import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const EventItem = ({id, title, description}) => {
    const navigation = useNavigation();
    return(
        <TouchableOpacity style={styles.card} onPress={()=>{navigation.navigate("Event",{EventID: id,title,description})}}>
            <Text>{title}</Text>
            <Text>{description}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    card: {
        padding: 30,
        margin: 10,
        borderColor: "black",
        borderRadius: 10,
        marginVertical: 10,
        borderWidth: 1,
    },
});
export default EventItem;