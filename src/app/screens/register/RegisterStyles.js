// LoginScreenStyles.js

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    title:{
     flex:1,
     justifyContent:'flex-start',
     height:20
     
    },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    color:'#fff',
  },
  input: {
    width: '100%',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    color:'#fff',
  },
  create: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign:'center',
    width: '100%',
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    padding:5,
    backgroundColor:'#0000ff',
    color:'#fff',
    padding:10
  },
  eyeButton: {
    marginRight: 10,
  },
  forgotPasswordText: {
    marginTop: 20,
    color: '#0000ff',
  },
});
