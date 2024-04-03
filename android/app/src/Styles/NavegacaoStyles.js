import { StyleSheet } from 'react-native';

const NavegacaoStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#f0f0f0',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    elevation: 2,     
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default NavegacaoStyles;