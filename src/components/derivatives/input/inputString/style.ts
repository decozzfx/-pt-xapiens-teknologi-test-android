import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
  topContainer: {
    flex: -1,
    height: 58,
    flexDirection: 'row',
    borderBottomWidth: 1,
    marginBottom: 2,
  },

  hint: {
    marginTop: 8,
  },
  leftcontainer: {
    flex: -1,
    minWidth: 32,
    justifyContent: 'flex-end',
  },
  Iconcontainer: {
    flex: -1,
    height: 32,
    marginTop: 2,
  },

  rightcontainer: {
    flex: 1,
  },

  rightinput: {
    flex: -1,
    height: 32,
    marginTop: 1,
    fontFamily: 'Montserrat SemiBold',
  },
});

export default Style;
