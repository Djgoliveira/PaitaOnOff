//import { StatusBar } from 'expo-status-bar';
//import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {ImageBackground, StyleSheet, 
  Text, View, TouchableOpacity, KeyboardAvoidingView,
   Animated, Keyboard, LogBox, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';
//import { FontAwesome } from '@expo/vector-icons';
//var [nome, setNome]= useState(`${nome}`) ;
export var nome = (`${nome}`);

//var nome = getGmail;


export default function Home({ navigation }) 

{
  
  
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 95}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState (new Animated.ValueXY({x: 190, y: 273}));
  
  
  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
}, [])

  useEffect(()=> {
    const KeyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    const KeyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);


   Animated.parallel([
    Animated.spring(offset.y, {
      toValue: 0,
      speed: 4,
      bounciness: 20
    }),
   Animated.timing(opacity,{
     toValue: 1,
     duration: 700,
   })
   ]).start();
    
    
  }, []);

  function keyboardDidShow(){
  Animated.parallel([
    Animated.timing(logo.x,{
      toValue: 80,
    duration: 100,
    }),
     Animated.timing(logo.y,{
        toValue: 105,
      duration: 100,
      }),
  ]).start();
}

function keyboardDidHide(){
  Animated.parallel([
    Animated.timing(logo.x,{
      toValue: 190,
    duration: 100,
    }),
     Animated.timing(logo.y,{
        toValue: 273,
      duration: 100,
      }),
  ]).start();
}
return (      
    
<KeyboardAvoidingView style={styles.background}
behavior={Platform.OS == "ios"? "padding": "height"}
keyboardVerticalOffset={90}>

<ImageBackground
    source={require('../imagens/PlanoF.png')}
    style={{ width:'100%', height: '100%'}}>
     
    <Animated.View style={[
      
      styles.tinyLogo,
      {
        opacity: opacity,
        transform: [
          { translateY: offset.y }
        ]
            }
    ]}
    >

      <Animated.Image style={
        
      { resizeMode: "contain",width: logo.x, height: logo.y, justifyContent:'center'}} 
        
      source={require('../imagens/logo.png')}/>
    </Animated.View>
    
<View>

  <Animatable.View 
  delay={2000}
  animation= "fadeInUp" 
  style={styles.containerForm}>
    <Text style={styles.h1}>Mostre aos seus amigos(a) que está <Text style={{color:'red'}}>ON</Text> ou <Text style={{color:'green'}}>OFF</Text>
    </Text>  

      <TouchableOpacity 
      style={styles.button}    
      onPress={() =>
      window.alert(`Seja Bem vindo(a), agora informe seus gastos`) + navigation.navigate('Calcular')}>
      <Text style={styles.buttonText}> Avançar</Text>
      </TouchableOpacity>

      
     

  </Animatable.View>  
      
</View>
      </ImageBackground>
      
  </KeyboardAvoidingView>
  );
}

//onPress={() => navigation.replace('Root')
const styles = StyleSheet.create({
  background: {
    flex: 1,    
    alignItems: 'center',
    justifyContent: 'center',   
    
  },
  containerForm:{
    height: 230,
    borderTopRightRadius: 25,
    borderTopLeftRadius:25,
    backgroundColor:"#fff", 
    paddingStart: '5%',
    paddingEnd:'-2%'      

  },
  h1:{
    fontSize: 25,
    fontWeight:'bold',
    marginTop: 28,
    marginBottom: 5
  },
  go:{
    color:'#a1a1a1',
    bottom:'1%'
  },
  title:{    
    margin: 10,
    textAlign: 'center',
    marginTop: 25,
    fontSize: 20,
    color:"#fff",
    
  },
  input:{
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 25,
    //margin:15,
    padding:20,
    margin: 10,
    color:'#121212',
    fontSize:20,
  },
  input2:{
    alignItems: 'center',
    borderRadius: 25,
    margin:15,
    padding:20,
    color:'#121212',
    fontSize:20,
    bottom:"10%"
    
  },
  button:{
    
    borderRadius: 20,
    margin: 80,
    position:'absolute',
    backgroundColor: '#41Aef4',
    padding: 10,
    alignSelf: 'center',
    bottom:'1%',
            
  },
  button2:{
    
    borderRadius: 20,
    margin: 60,
    //marginHorizontal:100,
    position:'absolute',
    backgroundColor: '#41Aef4',
    padding: 10,
    alignSelf:'center',
    bottom:'5%'   
    
  },
  buttonText:{
    justifyContent:'flex-end',
    color: '#fff',
    fontSize: 30,
    alignItems:'center',
    fontWeight:'bold'
  },
  buttonText2:{
     color: '#fff',
    fontSize: 20,
    alignItems:'center'
    
  },
  tinyLogo:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', 
  }
  
});




