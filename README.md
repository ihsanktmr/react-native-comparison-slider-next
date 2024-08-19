# React Native Comparison Slider Next

Compare any two components side by side in your React Native app.

![Example](./example/assets/teaser.gif)

## Installation

To install the package, run the following command:

```
npm install react-native-comparison-slider-next
```

## Props

| Prop                   | Type                                 | Required | Default value                       | Description                                    |
| ---------------------- | ------------------------------------ | :------: | ----------------------------------- | ---------------------------------------------- |
| `before`               | `ReactNode`                          |    ✓     | `undefined`                         | The first component to display in the slider.  |
| `after`                | `ReactNode`                          |    ✓     | `undefined`                         | The second component to display in the slider. |
| `containerSize`        | `{ width: number; height: number; }` |    ✓     | `{ width: '100%', height: '100%' }` | Dimensions of the container.                   |
| `sliderSize`           | `{ width: number; height: number; }` |          | `{ width: 50, height: 50 }`         | Dimensions of the slider's handle.             |
| `SliderComponent`      | `ReactNode`                          |          | `undefined`                         | Custom component for the slider's handle.      |
| `sliderStyles`         | `ViewStyle`                          |          | `undefined`                         | Styles for the slider's handle.                |
| `showSeparationLine`   | `boolean`                            |          | `undefined`                         | Whether to show the separation line.           |
| `separationLineStyles` | `ViewStyle`                          |          | `undefined`                         | Styles for the separation line.                |

## Usage

Here's a basic example of how to use the `CompareSlider` component:

```jsx
import { CompareSlider } from 'react-native-comparison-slider-next';
import { Image } from 'react-native';

const imageBefore = require('./path/to/imageBefore.jpg');
const imageAfter = require('./path/to/imageAfter.jpg');

<CompareSlider
  before={<Image source={imageBefore} resizeMode="cover" />}
  after={<Image source={imageAfter} resizeMode="cover" />}
  containerSize={{ width: 350, height: 100 }}
/>;
```

## Contributing

If you'd like to contribute, please check out the [contributing guide](CONTRIBUTING.md) for more information on the development workflow and how to get involved.

## License

This project is licensed under the MIT License.

---

Made with ❤️ using [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
