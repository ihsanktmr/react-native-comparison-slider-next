<div align="center">
  <h1>React Native Comparision Slider Next</h1>
  <p>Compare any two components</p>

![Example](./example/assets/slider-teaser.gif)

## Installation

```sh
npm install react-native-comparison-slider-next
```

## Props

| Prop                   | Type                                 | Required | Default value  | Description                         |
| ---------------------- | ------------------------------------ | :------: | -------------- | ----------------------------------- |
| `before`               | `ReactNode`                          |    ✓     | `undefined`    | First component to show in slider.  |
| `after`                | `ReactNode`                          |    ✓     | `undefined`    | Second component to show in slider. |
| `containerSize`        | `{ width: number; height: number; }` |    ✓     | `{100%, 100%}` | Container dimensions.               |
| `sliderSize`           | `{ width: number; height: number; }` |          | `{50, 50}`     | Slider's handle dimensions.         |
| `SliderComponent`      | `ReactNode`                          |          | `undefined`    | Slider's handle component.          |
| `sliderStyles`         | `ViewStyle`                          |          | `undefined`    | Slider's handle styles.             |
| `showSeparationLine`   | `boolean`                            |          | `undefined`    | Separation line visibility.         |
| `separationLineStyles` | `ViewStyle`                          |          | `undefined`    | Separation line styles.             |


## Usage

```jsx
import { CompareSlider } from 'react-native-compare-slider';

<CompareSlider
  before={<Image source={imageBefore} resizeMode="cover" />}
  after={<Image source={imageAfter}      resizeMode="cover" />}
  containerSize={{ width: 350, height: 100 }}
/>
```


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
