import { StyleSheet, View, Image, Dimensions } from 'react-native';
import { CompareSlider } from 'react-native-comparison-slider-next';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function App() {
  return (
    <View style={styles.container}>
      <CompareSlider
        before={
          <Image
            source={{
              uri: 'https://fastly.picsum.photos/id/1060/200/200.jpg?hmac=M0E6SK-_reDe8rAPtwDpww5ihTgL6yewgERGc7eX5z8',
            }}
            resizeMode="cover"
            width={windowWidth}
            height={windowHeight}
          />
        }
        after={
          <Image
            source={{
              uri: 'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
            }}
            resizeMode="cover"
            width={windowWidth}
            height={windowHeight}
          />
        }
        containerSize={{ width: windowWidth, height: windowHeight }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
