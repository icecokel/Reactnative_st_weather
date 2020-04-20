import React , {Component} from "react";
import {StyleSheet , Text , View ,Image}  from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from "prop-types";

const weatherState = {
    Rain : {
        color  : ['#00C6FB', '#005BEA'],
        title : "비",
        subtitle : "밖에 비온다 주룩주룩",
        icon : "weather-rainy"
    },
    Clear : {
        color  : ['#FEF253', '#FF7300'],
        title : "맑음",
        subtitle : "빨래 긔!",
        icon : "weather-sunny"
    },
    Thunderstorm : {
        color  : ['#00ECBC', '#007ADF'],
        title : "천둥,번개,바람",
        subtitle : "색종이 휘리릭",
        icon : "weather-lightning"
    },
    Clouds : {
        color  : ['#D7D2CC', '#304352'],
        title : "흐림",
        subtitle : "빨래는 다음으로 미루는게 어떤지?",
        icon : "weather-cloudy"
    },
    Snow : {
        color  : ['#7DE2FC', '#B9B6E5'],
        title : "눈",
        subtitle : " Do you want to build a Snowman?",
        icon : "weather-snowy"
    },
    Drizzle : {
        color  : ['#89F7FE', '#66A6FF'],
        title : "이슬비",
        subtitle : "파전에 막걸리 크으!",
        icon : "weather-rainy"
    }


}

Weather.prototype = {
    temp : PropTypes.number,
    Wname : PropTypes.string.isRequired
}
function Weather({temp, Wname}){
     
    return(
    <LinearGradient colors={weatherState[Wname].color} 
            style={styles.container} > 
            <View style={styles.upper}>
                <MaterialCommunityIcons size={144} color="white" name ={weatherState[Wname].icon}/>
    
    <Text style={styles.temp}> {temp} </Text>
            </View>

           <View>
    <Text style={styles.title}> {weatherState[Wname].title}</Text>
            <Text style={styles.subtitle}> {weatherState[Wname].subtitle}</Text>

            </View>
            </LinearGradient>

    )
}

export default Weather;


const styles = StyleSheet.create({
    container :{
        flex :1,
       
    },
    upper :{
        flex : 1,
        alignItems : "center",
        justifyContent : "center"
    },
    temp :{
        fontSize : 50,
        backgroundColor : "transparent",
        color : "white",
        marginTop : 24
    },
    lower : {
        flex : 1,
        alignItems : "flex-start",
        justifyContent : "flex-end",
        paddingLeft : 25 
    },
    title :{
        fontSize: 38,
        backgroundColor : "transparent",
        color : "white",
        marginBottom :24,
        fontWeight : "300"
    },
    subtitle :{
        fontSize : 24,
        backgroundColor : "transparent",
        color : "white",
        marginBottom :24
    }
})