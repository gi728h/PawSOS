import {Dimensions,SafeAreaView,StyleSheet,Text,View,Image,} from "react-native";

export default function CustomSplashScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.photoView}>
                <Image
                    style={{ width: 200, height: 200, marginBottom: 10 }}
                    source={require("../assets/PawSOS.png")}
                />
            </View>
            <View style={styles.labelView}>
                <Image
                    resizeMode="contain"
                    style={{ height: 100 }}
                    source={require("../assets/label.png")}
                />
                <Image
                    source={require("../assets/animation.gif")}
                    resizeMode="resize"
                    style={{ width: 400, height: 400 }}
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffe2c2",
        alignItems: "center",
        justifyContent: "center",
    },
    photoView: {
        flex: 2,
        justifyContent: "flex-end",
    },
    labelView: {
        flex: 3,
        justifyContent: "space-between",
        alignItems: "center",
    },
});
