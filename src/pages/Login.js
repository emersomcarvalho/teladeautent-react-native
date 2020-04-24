import React, {Component} from 'react';

import {Text, AsyncStorage, Alert, StyleSheet, TouchableOpacity, KeyboardAvoidingView, TextInput,
   Platform,Image, View} from 'react-native';

import devel from '../../assets/devel.png'

const  botaoPressionado = () => {
    Alert.alert('Fazendo Login...');
}

export default class Login extends Component{
   
    

render() {
    
    return (
 
        <KeyboardAvoidingView enable={Platform.OS === 'ios'} behavior="padding" style={styles.container}>
                <Image style={styles.devel}  source={devel} />
       <View style={StyleSheet.container}> 
        </View>

      <View style={styles.form}>
     
       <Text style={styles.label}>Seu E-mail*</Text>
       <TextInput style={styles.input}
       placeholder= "Digite seu E-mail"
       placeholderTextColor='#999'
       keyboardType="email-address"
       autoCapitalize="none"
       autoCorrect={true}
    //    value={email}
    //    onChangeText={setEmail}
       />
        <Text style={styles.label}>Sua senha*</Text>
       <TextInput style={styles.input}
       placeholder="Digite sua senha"
       keyboard="senha"
       placeholderTextColor="#999"
       autoCapitalize="words"
       autoCorrect={false}
       secureTextEntry
    //    value={senha}
    //   onChangeText={setSenha}
       />
       <TouchableOpacity onPress={botaoPressionado} style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        
       </View>
   </KeyboardAvoidingView>
    )
 }
}

const styles = StyleSheet.create({
   container: {
   backgroundColor:'black',
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center'
   
   },

   form: {
    alignSelf:'stretch',
    paddingHorizontal: 30,
    marginTop: 30
   },

   devel: {
    height: 155,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 10
   },
   
   label: {
   fontWeight: 'bold',
   color:'#444',
   marginBottom: 8,   
   },

   input: {
       borderWidth: 1,
       borderColor:'black',
       paddingHorizontal: 20,
       fontSize: 16,
       color: '#999',
       height: 44,
       marginBottom: 20,
       borderRadius: 2
   },

   button:{
    height: 42,
    backgroundColor:'purple',
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 2   
   },

   buttonText: {
       color: 'white'
   }

});