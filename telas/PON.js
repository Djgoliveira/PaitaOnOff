
import React, { useState, useEffect , useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,
   Modal, Image, ImageBackground } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';
import { captureScreen } from 'react-native-view-shot';


  


export default function PON({navigation}) { 

  

  const camRef = useRef(null);
  //const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [open, setOpen] = useState(false);
  const [imageURI, setImageURI] = useState(null);
  const [savedImagePath, setSavedImagePath] = useState(null);
 // const saveTela = savePicture;
 
 
     
//Função para tirar a foto
   async function takePicture(){
    if(camRef){
      const data = await camRef.current.takePictureAsync();
      setCapturedPhoto(data.uri);
      setOpen(true);
      console.log(data);
     //navigation.navigate('tela2');
     alert("Tire print do certificado e compartilhe com seus amigos!Depois clique no X para voltar para tela Principal ou no círculo para tirar outra foto! ")
     }
  }
  //Função para Salvar a foto no celular
  
    async function savePicture(){
      const asset = await MediaLibrary.createAlbumAsync("PaitaOff")
      const assets = await MediaLibrary.getAlbumAsync("PaitaOff")
      //onPress=>navigation.navigate('tela2')
      captureScreen({
        // Either png or jpg (or webm Android Only), Defaults: png
        format: 'jpg',
        // Quality 0.0 - 1.0 (only available for jpg)
        quality: 0.9,         
      })
      .then((uri)=>{
        setSavedImagePath(uri);
        setImageURI(uri);
        alert('Imagem Salva com sucesso ! ');

      })
      .catch(error =>{
        console.log('err', error);
      })
  }
 
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
            <FontAwesome name="retweet" size={30} color="green" />
        </TouchableOpacity>
        
        
        </View>
        
             
      </Camera>      

      {capturedPhoto &&
      <Modal 
      style={styles.modal}
      animationType='slide'
      transparent={true}
      visible={true}
      >      
      
     
      <View style={{ margin: 20}}>
        
      <ImageBackground source={require('../imagens/certificadotela1.png')} 
      style={{ width: '100%', marginTop:'35%' }}>

      
    
       
       
 
         <Image style={{ width: 280, height: 180, transform:[{rotate:'90deg'}], 
         margin: 40, marginTop: 355 }}
       source={{uri:capturedPhoto}}/>
 
 <TouchableOpacity style={{margin: 210, position:'absolute', width: 150, marginTop: 520}} 
  onPress={()=>navigation.navigate("Calcular",alert("Tire uma foto boa o Pai/Mãe está ON"))}> 
       
       <FontAwesome name="bullseye" size={20} color='green'/>
     </TouchableOpacity>
     <TouchableOpacity style={{margin: 210, position:'absolute', width: 150, marginTop: 370}}
     onPress={()=>navigation.navigate("Principal",alert("Não precisa refazer seu cálculo o Pai/Mãe está ON esse Mês!"))}> 
    
       
      <FontAwesome name="close" size={20} color='green'/>
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
        backgroundColor: 'green',
        padding: 5,
        alignSelf:'center',
        bottom:'-1%',        
        paddingStart: '10%',
        paddingEnd:'10%'}}>
          <FontAwesome name="camera" size={30} color="#ffff"/>
                 
        </Text>
    </TouchableOpacity>
  
      
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
        color: 'green',
    
  },
  text: {
    fontSize: 30,
    color: 'white',
    width: 100,
    
  },
});




