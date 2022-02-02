import { StyleSheet, View, Image, Text } from 'react-native';

const Intronduction = () => {
    const bodyText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    const titleText = "Welcome to you in our Home page"
    return (
        <View style={styles.container} >
            <Image
                style={styles.image}
                source={{
                    uri: 'https://seuppcdn01.1x.com/images/user/c80319e06b8c392d4bc479da76ef65f7-hd2.jpg',
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 50,
      flex: 1,
      alignSelf: 'stretch',
      width: null,
      backgroundColor:'#efefef'
    },
    image: {
      width: '100%',
      height: '100%',
    }
  });

export default Intronduction