import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <ImageBackground
        source={require("./assets/Pokemon1.jpg")}
        style={styles.image}
      >
        <View style={styles.box}>
          <Text style={styles.tittle}>Welcome to PokeStats!</Text>
          <Text style={styles.subTittle}>
            Here you can see stats of all your Pokemons
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            alert("PokeStats Login");
          }}
        >
          <Text style={styles.tittle}>Login</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "contain",
  },
  box: {
    backgroundColor: "white",
    borderRadius: 24,
    padding: 14,
    margin: 36,
    marginTop: 36,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 12,
    margin: 40,
    height: 80,
  },
  tittle: {
    color: "black",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTittle: {
    backgroundColor: "white",
    padding: 12,
    color: "red",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
