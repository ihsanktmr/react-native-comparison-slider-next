import { StyleSheet, View, Image, Dimensions } from 'react-native';
import { CompareSlider } from 'react-native-comparison-slider-next';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function App() {
  const height = windowHeight / 4;
  return (
    <View style={styles.container}>
      <CompareSlider
        before={
          <Image
            source={{
              uri: 'https://i.ibb.co/b3ydhRK/Screenshot-2024-08-19-at-23-41-14.png',
            }}
            resizeMode="cover"
            width={windowWidth}
            height={height}
          />
        }
        after={
          <Image
            source={{
              uri: 'https://i.ibb.co/CtHqB9Y/Screenshot-2024-08-19-at-23-41-21.png',
            }}
            resizeMode="cover"
            width={windowWidth}
            height={height}
          />
        }
        containerSize={{ width: windowWidth, height: height }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
