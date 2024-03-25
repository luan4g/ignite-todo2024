import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  infoText: {
    fontFamily: 'Inter_700Bold',
    fontSize: 14,
    color: '#8284FA',

    marginRight: 8,
  },

  infoValueContainer: {
    width: 25,
    height: 19,

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 999,

    backgroundColor: '#333',
  },

  infoValue: {
    fontWeight: 'bold',
    fontSize: 12,
    color: "#D9D9D9",
  },
})