import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  map: {
    width: '100%',
    height: '68%'
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 20
  },
  textContainer: {
    flex: 1
  },
  tempContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainTitle: {
    flex: 1,
    fontFamily: Fonts.robotoBold,
    fontSize: 18,
    marginBottom: 5
  },
  descTitle: {
    flex: 1,
    fontFamily: Fonts.roboto,
    fontSize: 15
  },
  tempTitle: {
    fontFamily: Fonts.roboto,
    fontSize: 30
  },
  tempIcon: {
    height: 100,
    width: 100
  }
});
