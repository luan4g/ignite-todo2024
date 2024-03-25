import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#1A1A1A'
  },

  header: {
    width: '100%',
    height: 173,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#0D0D0D'
  },

  headerLogo: {
    height: 32,

    resizeMode: 'contain'
  },

  form: {
    width: '100%',
    height: 54,

    maxHeight: 54,
    minHeight: 54,

    marginTop: -27,
    paddingHorizontal: 24,

    flexDirection: 'row',
  },

  input: {
    flex: 1,

    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#fff',

    paddingHorizontal: 16,
    borderColor: '#0D0D0D',
    borderWidth: 1,
    borderRadius: 6,

    backgroundColor: '#262626',
  },

  buttonAdd: {
    width: 54,
    height: 54,

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 6,
    marginLeft: 4,

    backgroundColor: '#1E6F9F',
  },

  infoContainer: {
    width: '100%',

    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',

    marginVertical: 24,
    paddingHorizontal: 24,
  }
})