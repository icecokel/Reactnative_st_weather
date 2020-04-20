import React,{ Component }  from 'react';
import { StyleSheet, Text, View, ActivityIndicator, StatusBar} from 'react-native';
import Weather from "./Weather";

const apiKey ="3cfa20a3a1af182a109cb54387e82b39"

export default class App extends Component {
  state = {
    isLoaded : false,
    error : null,
    temperature : null,
    name : null 
  };
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this._getWeather(position.coords.latitude , position.coords.longitude)
      },
      error => {
        
          this.setState({
            error : error
          }) 

      }
    )
  }

  _getWeather = (lat , lon) => {
    const url = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+apiKey
    fetch(url).then(response => response.json())
    .then(json =>{
      console.log(json.weather[0].main)
      this.setState({
        temperature : json.main.temp,
        name : json.weather[0].main,
        isLoaded : true
      })
     
    } 
    )   
  }


  render() {
    const { isLoaded , error,temperature,name}  = this.state;

    return (
      <View style={styles.container}>
          <StatusBar />
          {isLoaded ? (
          <Weather temp={Math.floor(temperature - 273.15)} Wname={name} />
          ) : (
          <View style ={styles.loading}>

            <ActivityIndicator></ActivityIndicator>

            <Text style={styles.loadingText}>날씨 정보를 가져 오는 중입니다.</Text>
          {error ? <Text style={styles.errorText}>{error}</Text>:null}
            </View>
            )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
  loading :{
    flex: 1,
    backgroundColor : "#FDF6AA",
    alignItems : "center",
    justifyContent : "flex-end"
  },
  loadingText :{
    paddingRight : 25,
    paddingLeft : 25,
    fontSize : 30,
    marginBottom: 100
  },
  errorText : {
    color : "red",
    backgroundColor : "transparent",
    marginBottom :40
  }
});