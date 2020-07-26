import React, { Component } from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';

export default class ScreenB extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 5}}>
        <View style={{flex:1, backgroundColor: 'green', justifyContent: 'center', height: 200, width: 400, alignItems: 'center', marginBottom: 20 }}>
          <Text style={{ marginBottom: 10, fontSize: 35, color: 'white' }}> Success </Text>
        </View>
        <View style={{flex: 1}}>
        <Text><Text style={styles.textView}>First Name:</Text> {this.props.route.params.fname} </Text>
          <Text><Text style={styles.textView}>Last Name:</Text> {this.props.route.params.lname} </Text>
          <Text><Text style={styles.textView}>Email:</Text> {this.props.route.params.email} </Text>
          <Text><Text style={styles.textView}>Phone:</Text> {this.props.route.params.phone}</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 25}}>Thank You!</Text>
        </View>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    textView: {
      fontWeight: 'bold', 
      fontSize: 18
    }
})