import * as Font from 'expo-font';

export const Fonts = {
  AvenirBlack: 'Avenir-Black',
  AvenirBlackOblique: 'Avenir-BlackOblique',
  AvenirHeavy: 'Avenir-Heavy',
  AvenirHeavyOblique: 'Avenir-HeavyOblique',
  Copperplate: 'Copperplate',
  Baskerville: 'Baskerville',
};

Font.loadAsync({
  [Fonts.AvenirBlack]: require('../assets/fonts/avenir/AvenirLTProBlack.otf'),
  [Fonts.AvenirBlackOblique]: require('../assets/fonts/avenir/AvenirLTProBlackOblique.otf'),
  [Fonts.AvenirHeavy]: require('../assets/fonts/avenir/AvenirLTProHeavy.otf'),
  [Fonts.AvenirHeavyOblique]: require('../assets/fonts/avenir/AvenirLTProHeavyOblique.otf'),
  [Fonts.Copperplate]: require('../assets/fonts/Copperplate.otf'),
  [Fonts.Baskerville]: require('../assets/fonts/LibreBaskerville-Italic.ttf'),
});
