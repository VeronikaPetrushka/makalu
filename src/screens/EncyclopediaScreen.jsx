import { View } from "react-native"
import Encyclopedia from "../components/Encyclopedia"

const EncyclopediaScreen = () => {
    return (
        <View style={styles.container}>
            <Encyclopedia />
        </View>
    )
}; 

const styles = {
    container: {
        width: "100%",
        height: "100%",
    }
}

export default EncyclopediaScreen;