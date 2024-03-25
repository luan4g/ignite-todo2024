import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 64,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: '#262626',
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 8,

    marginHorizontal: 24,
    marginBottom: 8
  },

  taskBox: {
    flex: 1,
    flexDirection: 'row',

    alignItems: 'center',

    marginVertical: 12,
  },

  checkbox: {
    width: 17,
    height: 17,

    alignItems: 'center',
    justifyContent: 'center',

    borderColor: '#4EA8DE',
    borderWidth: 1,
    borderRadius: 12,

    marginLeft: 12,
  },

  taskText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#fff',

    lineHeight: 20,

    paddingHorizontal: 14,
  },

  textRemoveButton: {
    width: 32,
    height: 32,

    alignItems: 'center',
    justifyContent: 'center',

    marginLeft: 16,
    marginRight: 8,
  }
})