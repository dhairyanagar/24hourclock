import React from "react";
import{StyleSheet,Text,View,Button,Alert} from 'react-native'


export default class MainActivity extends React.Component{

constructor(props){
  super(props)
  this.state={
    time:''
  }
}

componentDidMount(){
  this.Clock=setInterval(()=>this.GetTime(),1000)
}

componentWillUnmount(){
  clearInterval(this.Clock)
}









GetTime(){
  // create variable to hold time
  var date,timetype,hour,minutes,seconds,fullTime;

// create Date()function object
date=new Date();

//Getting current hour from Date Object
hour=date.getHours()


//checking if the Hour is less than equals to 11 then Set the Time as AM
if(hour<=11){
  timetype='AM'
}
else{
  timetype="PM"
}


// if current hour is greater than 12 then subtract 12 from current hours to make it 12 hr clock

if(hour>12){
  hour=hour-12
}

// If hour value is 0 then by default set its value to 12, because 24 means 0 in 24 hours time format. 

if(hour===0){
  hour=12
}

//get the current minutes from date object

minutes =date.getMinutes()

//checking if minutes is less than 10 then add 0 before minutes
if(minutes<10){
  minutes="0"+minutes.toString()
}

//get seconds from date object

seconds=date.getSeconds()

//checking if seconds is less than 10 then add 0 before minutes
if(seconds<10){
  seconds="0"+seconds.toString()
}

//Adding all the variables to create the fulltime variable
fullTime= hour.toString()+':'+minutes.toString()+":"+seconds.toString()+" "+timetype.toString()


//put this full time value to state
this.setState({
  time:fullTime
})

}

showTime=()=>{
alert(this.state.time.toString())
}



  render(){
    return(
<View style={styles.MainContainer}>
<Text style={styles.TextStyle}> {this.state.time}</Text>
<Button title="Click Me to Check the Current Time"  onPress={this.showTime}/>

</View>

    )
  }

}



const styles = StyleSheet.create(
  {
    MainContainer:
    {
       justifyContent: 'center',
       alignItems: 'center',
       flex:1,
       margin: 10
     
    },
   
    TextStyle:
    {
       fontSize: 26,
       textAlign: 'center',
       color: '#009688',
       marginBottom: 20,
    }
   
  });