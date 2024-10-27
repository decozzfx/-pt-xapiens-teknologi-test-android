import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    paddingBottom: 8,
    alignItems: 'center',
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
    // height: 32,
    // marginTop: 1,
  },
  mr12: {
    marginRight: 12,
  },
  ml12: {
    marginLeft: 12,
  },
});

export default Style;
