import { StyleSheet, View, ImageBackground, Text } from 'react-native';

const ContactUs = () => {
    const image = { uri: "https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80" };
    return (
        <View style={styles.container} >
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>ContactUs Page!</Text>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    }
  });

export default ContactUs