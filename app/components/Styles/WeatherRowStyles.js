import { StyleSheet } from 'react-native';
import { Fonts } from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    flexDirection: 'row'
  },
  nameContainer: {
    flex: 1
  },
  nameText: {
    fontSize: 16,
    fontFamily: Fonts.roboto
  },
  descText: {
    marginTop: 12,
    fontSize: 12,
    fontFamily: Fonts.roboto
  },
  tempText: {
    fontSize: 30,
    fontFamily: Fonts.roboto,
    marginRight: 8
  }
});
