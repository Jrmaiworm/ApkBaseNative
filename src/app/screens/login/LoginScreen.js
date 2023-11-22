import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './LoginScreenStyles'; 


function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const bgScreen = require('../../../assets/wave.jpg');
    return (

      <ImageBackground  source={bgScreen}  style={styles.backgroundImage}>
             <View style={styles.container}>
      <View style={styles.titulo}><Text>Título do App</Text>
      </View>
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
            <Text style={styles.create}>Entrar</Text>
          </TouchableOpacity>
           </View>
        
      
            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.forgotPasswordText}>Não possui cadastro?</Text>
          </TouchableOpacity>
      
          <TouchableOpacity onPress={() => { /* Navegação para a tela de recuperação de senha */ }}>
            <Text style={styles.forgotPasswordText}>Esqueci a senha</Text>
          </TouchableOpacity>
          </View>
        </ImageBackground>
      );
      
}

export default LoginScreen;