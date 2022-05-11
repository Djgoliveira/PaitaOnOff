import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity,  
  KeyboardAvoidingView, ImageBackground, TextInput, Platform } from 'react-native';
import {nome} from './Home';

export default function Calcular({navigation}) {  
  const nome1 = nome;
  const [conta1, setConta1] = useState('');
  const [conta2, setConta2] = useState('');
  const [conta3, setConta3] = useState('');
  const [conta4, setConta4] = useState('');
  const [conta5, setConta5] = useState('');
  const [conta6, setConta6] = useState('');
  const [conta7, setConta7] = useState('');
  const [conta8, setConta8] = useState('');
  const [salario, setSalario] = useState('');
  const pon = "Pai ta On";
 const poff = "Pai ta Off";
 const [contaT, setContaT] = useState('');
 var media = ('');

 
 if (contaT == 1) {
   media = parseInt(conta1)/parseInt(1)
 }else if (contaT == 2) {
     media = (parseInt(conta1) + parseInt(conta2))/parseInt(2) 
     }else if (contaT == 3) {
        media = (parseInt(conta1) + parseInt(conta2) + parseInt(conta3))/parseInt(3)
          }else if (contaT == 4) {
            media = (parseInt(conta1) + parseInt(conta2) + parseInt(conta3)+parseInt(conta4))/parseInt(4)
              }else if (contaT == 5) {
                media = (parseInt(conta1) + parseInt(conta2) + parseInt(conta3)+parseInt(conta4)+parseInt(conta5))/parseInt(5)    
                  }else if (contaT == 6) {
                      media = (parseInt(conta1) + parseInt(conta2) + parseInt(conta3)+parseInt(conta4)+parseInt(conta5)+parseInt(conta6))/parseInt(6)     
                         }else if (contaT == 7) {
                            media = (parseInt(conta1) + parseInt(conta2) + parseInt(conta3)+parseInt(conta4)+parseInt(conta5)+parseInt(conta6)+parseInt(conta7))/parseInt(7)     
                              }else if (contaT == 8) {
                                  media = (parseInt(conta1) + parseInt(conta2) + parseInt(conta3)+ parseInt(conta4)+ parseInt(conta5)+ parseInt(conta6)+parseInt(conta7)+parseInt(conta8))/parseInt(8) 
                                     }
  
  //const media = media;
  var result = '';
  var resultado = (salario*20)/100;
  if (media < resultado) {
   result = <TouchableOpacity style={styles.button} onPress={() =>
      navigation.navigate('PON', alert( `Tire uma foto e depois Tire Print do Certificado e mostre à todos que está ON `))}><Text style={{fontSize: 16, color: '#fff'}}>CLIQUE PARA IMPRIMIR SEU CERTIFICADO</Text></TouchableOpacity>
         
  }else{
    result = <TouchableOpacity style={styles.button} onPress={() =>
      navigation.navigate('POFF', 
      alert(`Não é vergonha está OFF, faça o cálculo de novo ou tire foto para imprimir seu Certificado `))} ><Text style={{fontSize: 16, color: '#fff'}}>CLIQUE PARA IMPRIMIR SEU CERTIFICADO</Text></TouchableOpacity>
    /*'PAI TA OFF';
    {props.navigation.navigate('POFF')};*/
    
    
    //print (poff);
  };
  return(
       
    
    <KeyboardAvoidingView 
    behavior={Platform.OS == "ios"? "padding": "height"}
    keyboardVerticalOffset={90}> 
    
    <ImageBackground
    source={require('../imagens/PlanoF.png')}
    style={{width:'100%', height: '100%'}}
    
    > 
  
            
      <TextInput 
    
      placeholderTextColor={'green'}
      style={styles.input}
      onChangeText={(contaT)=>contaT.length ? setContaT(parseInt(contaT)): setContaT(0)}
      value={String(contaT)}
      placeholder="INFORME SEUS GASTOS DE 1 ATÉ 8?"
      keyboardType="numeric"
      textAlign={"center"}
      />
          
              
    <TextInput
      placeholderTextColor={'green'}
      style={styles.input}
      onChangeText={(salario)=>salario.length ? setSalario(parseInt(salario)): setSalario(0) }
      value={String(salario)}
      placeholder="INFORME SEU SALÁRIO/RENDA"
      keyboardType="numeric"
      textAlign={"center"}
      />
      
    
      <TextInput
        placeholderTextColor={'green'}
        style={styles.input}
        onChangeText={(conta1) => conta1 ? setConta1(parseInt(conta1)): setConta1(0)}
        value={String(conta1)}
        placeholder="EX: CONTA DE LUZ"
        keyboardType={"numeric"}
        textAlign={"center"}
      />

      <TextInput
        placeholderTextColor={'green'}
        style={styles.input}
        onChangeText={(conta2) => conta2.length ? setConta2(parseInt(conta2)): setConta2(0)}
        value={String(conta2)}
        placeholder="EX: ALUGUEL"
        keyboardType={"numeric"}
        textAlign={"center"}
      />
      <TextInput
      placeholderTextColor={'green'}
        style={styles.input}
        onChangeText={(conta3) => conta3.length ? setConta3(parseInt(conta3)): setConta3(0)}
        value={String(conta3)}
        placeholder="EX: CONTA DE ÁGUA"
        keyboardType={"numeric"}
        textAlign={"center"}
      />
      
      <TextInput
      placeholderTextColor={'green'}
        style={styles.input}
        onChangeText={(conta4) => conta4.length ? setConta4(parseInt(conta4)): setConta4(0)}
        value={String(conta4)}
        placeholder="EX: CONTA DE CELULAR"
        keyboardType={"numeric"}
        textAlign={"center"}
      />

      <TextInput
      placeholderTextColor={'green'}
        style={styles.input}
        onChangeText={(conta5) => conta5.length ? setConta5(parseInt(conta5)): setConta5(0)}
        value={String(conta5)}//.toLocaleString('pt-BR',{style:'currency', currency:'BRL'}))}
        placeholder="EX: PENSÃO"
        keyboardType={"numeric"}
        textAlign={"center"}
      />

      <TextInput
      placeholderTextColor={'green'}
        style={styles.input}
        onChangeText={(conta6) => conta6.length ? setConta6(parseInt(conta6)): setConta6(0)}
        value={String(conta6)}//.toLocaleString('pt-BR',{style:'currency', currency:'BRL'}))}
        placeholder="EX: BESTEIRAS"
        keyboardType={"numeric"}
        textAlign={"center"}
      />

      <TextInput
      placeholderTextColor={'green'}
        style={styles.input}
        onChangeText={(conta7) => conta7.length ? setConta7(parseInt(conta7)): setConta7(0)}
        value={String(conta7)}//.toLocaleString('pt-BR',{style:'currency', currency:'BRL'}))}
        placeholder="EX: CONTAS AVULSAS"
        keyboardType={"numeric"}
        textAlign={"center"}
      />

      <TextInput
      placeholderTextColor={'green'}
        style={styles.input}
        onChangeText={(conta8) => conta8.length ? setConta8(parseInt(conta8)): setConta8(0)}
        value={String(conta8)}//.toLocaleString('pt-BR',{style:'currency', currency:'BRL'}))}
        placeholder="EX: OUTRAS CONTAS"
        keyboardType={"numeric"}
        textAlign={"center"}
      />
      
      <TouchableOpacity 
      style={styles.button}> 
      {result}
      </TouchableOpacity>
     </ImageBackground> 
     
     </KeyboardAvoidingView>
    
    
  );

}
const styles = StyleSheet.create({
        
    
 input: {
    backgroundColor: '#FFF',    
    color: '#222',    
    marginBottom: 5, 
    flex: 12,    
    textAlign: 'center',
    fontSize: 18,

   },
   frase:{
    
    width: '100%',
    color: '#fff',
    fontSize: 18,  
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 25
  
   },

   frase1:{
    
    width: '50%',
    textAlign: 'center',
    marginBottom: 50,
    color: '#191919',
    fontSize: 20,  
    padding: 18,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor:'red'
   },
   button:{
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 8,
    backgroundColor: '#41Aef4',
    padding: 5,
  },
   btnSubmit1:{

    backgroundColor: '#35AAFF',
    width: '50%',
    alignItems: 'center',
    marginBottom: 10,
    color: '#FFF',
    fontSize: 20,  
    padding: 18,
    borderRadius: 7
   }

});
