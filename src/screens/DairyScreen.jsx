import { View } from "react-native"
import Dairy from "../components/Dairy"

const DairyScreen = () => {
    return (
        <View style={styles.container}>
            <Dairy />
        </View>
    )
}; 

const styles = {
    container: {
        width: "100%",
        height: "100%",
    }
}

export default DairyScreen;