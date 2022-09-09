
import React, { useState, useEffect , useRef,} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,
   Modal, Image, ImageBackground, PermissionsAndroid } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';



export default function POFF({navigation}) { 


  //const [imageURI, setImageURI] = useState('');
  const camRef = useRef(null);
  //const [hasPermission, setHasPermission] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [open, setOpen] = useState(false);
 
    
//Função para tirar a foto
async function takePicture(){
  if(camRef){
    const data = await camRef.current.takePictureAsync();
    setCapturedPhoto(data.uri);
    setOpen(true);
    console.log(data);
     //navigation.navigate('tela2');
     alert("Tire print do certificado ou clique no círculo para refazer o cálculo ou clique no X para voltar para tela Principal! ")
     }
  }
  //Função para Salvar a foto no celular
    
  
      //onPress={() =>navigation.navigate('PON')}> <Image source={certificado} style={{flex:1, justifyContent: 'center' }}/> 
  return (
    
    
    <View style={styles.container}>
      
    
      
       
      <Camera style={styles.camera} type={type} ref={camRef}>
        
        <View style={styles.buttonContainer}>
          
               
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.front
                  ? Camera.Constants.Type.back
                  : Camera.Constants.Type.front
              );
            }}>
            <FontAwesome name="retweet" size={30} color="#FF0000" />
        </TouchableOpacity>
        
        
        </View>
        
             
      </Camera> 
      <View>    

      {capturedPhoto &&
      <Modal 
      style={styles.modal}
      animationType='slide'
      transparent={true}
      visible={true}
      >      
      
     
      <View style={{ margin: 20}} 
         
      >
      <ImageBackground source={require('../imagens/certificadotela2.png')} 
      style={{ width: '100%', marginTop:'35%' }}>
    
       
       
 
         <Image style={{ width: 280, height: 200, transform:[{rotate:'90deg'}], 
         margin: 40, marginTop: 355 }}
       source={{uri:capturedPhoto}}/>
 
 <TouchableOpacity style={{margin: 210, position:'absolute', width: 150, maxWidth: '100%' , marginTop: 520}}
  onPress={()=>navigation.navigate("Calcular",alert("Tente refazer o Cálculo para ficar ON ou Tire outra foto"))}> 
       
       <FontAwesome name="bullseye" size={20} color='red'/>
     </TouchableOpacity>
     <TouchableOpacity style={{margin: 210, position:'absolute', width: 150,maxWidth: '100%' , marginTop: 370}}
     onPress={()=>navigation.navigate("Principal",alert("Não foi dessa vez que o(a) Pai/Mãe ficou ON, não fique triste, tente de novo!"))}> 
    
       
      <FontAwesome name="close" size={20} color='red'/>
     </TouchableOpacity> 

    
        </ImageBackground>
         
              
 
    </View>
    <View style={{ margin: 20}}>
        <View style={{margin: 175}}>     
        </View>
      </View>  
         
      
      </Modal>
      
      }
      
      <TouchableOpacity style={styles.buttons} onPress={takePicture}>
        <Text style={{fontSize: 25,
        color: 'white',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 5,
        alignSelf:'center',
        bottom:'-1%',        
        paddingStart: '10%',
        paddingEnd:'10%'}}>
          <FontAwesome name="camera" size={30} color="#ffff"/>
                 
        </Text>
    </TouchableOpacity>
  </View> 
      
      </View>
      
      
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    
  },
  camera: {
    flex: 1,   
    
    
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row-reverse',
    margin: 20,
  },
  buttons: {
    justifyContent: 'center',
    alignItems: 'center',
    height:50,
},
button: {
  justifyContent: 'center',
    margin: -4,
  borderRadius: 10,
  height:25,
  marginTop:-8,
  },
    modal: {
      
      padding: 10,
      width: '50%',
      height:'50%',
               
  },
  buttonText:{
    
    //justifyContent:'center',
    //alignItems: 'center',
    backgroundColor: '#fff',
    padding: 5,

    alignSelf:'center',
    bottom:'-10%',        
    paddingStart: '10%',
    paddingEnd:'10%',
    fontSize:15,
    color: 'red',

},
  text: {
    fontSize: 30,
    color: 'white',
    width: 100,
    
  },
});




