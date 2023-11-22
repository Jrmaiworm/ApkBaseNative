import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './RegisterStyles'; 


function RegisterScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    return (
        <View style={styles.container}>
          
          <TextInput
            style={styles.input}
            onChangeText={setNome}
            value={nome}
            placeholder="Nome"
            keyboardType="text"
          />
      
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
            keyboardType="email-address"
          />
      
 
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              value={password}
              placeholder="Senha"
              secureTextEntry={!isPasswordVisible}
            />
           
           <View>
           <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.create}>Cadastrar</Text>
          </TouchableOpacity>
           </View>
        
           
        </View>
      );
      
}

export default RegisterScreen;