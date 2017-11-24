import componentScreens from './componentScreens';
import componentScreenScreens from './componentScreenScreens';
import listScreens from './listScreens';
import styleScreens from './styleScreens';
import animationScreens from './animationScreens';
import realExamples from './realExamples';
import wrapperScreens from './wrapperScreens';
import PlaygroundScreen from './PlaygroundScreen';
import MainScreen from './MainScreen';

export default {
  ...componentScreens,
  ...componentScreenScreens,
  ...listScreens,
  ...styleScreens,
  ...animationScreens,
  ...realExamples,
  ...wrapperScreens,
  PlaygroundScreen: { screen: PlaygroundScreen },
  MainScreen: { screen: MainScreen }
}