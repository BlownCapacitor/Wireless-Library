import React from 'react';
import {Image,StyleSheet} from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import TransactionScreen from './screens/BookTransactionScreen';
import SearchScreen from './screens/SearchScreen';
import LoginForm from './screens/LoginForm';
export default class App extends React.Component {
  render(){
  return (
   <AppContainer/>
  );
}
}
const TabNavigator = createBottomTabNavigator({
Transaction: {screen: TransactionScreen},
Search:{screen: SearchScreen}
},
{
  defaultNavigationOptions : ({navigation}) => ({
    tabBarIcon: () =>{
      const routeName = navigation.state.routeName
      if(routeName === "Transaction"){
        return(
        <Image source = {require('./assets/book.png')}
        style = {{width : 50, height : 50}}
        />
        )
      }
      else if(routeName === "Search"){
        return(
          <Image source = {require('./assets/searchingbook.png')}
          style = {{width:50,height:50}}
          />)
      }
    }
  })
}
);
const switchNavigator = createSwitchNavigator({
  LoginForm: {screen: LoginForm},
  TabNavigator:{screen: TabNavigator}
  })
const AppContainer = createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  contianer:{
    flex : 1,
    backgroundColor: 'orange',
    justifyContent : 'center',
    alignItems : 'center',
  }
})