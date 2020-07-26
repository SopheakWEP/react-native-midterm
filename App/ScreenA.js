import React, { Component } from 'react';
import { View, Text, SafeAreaView, TextInput, Button, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';
export default class ScreenA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: null,
            lname: null,
            email: null,
            phone: null,
            attempt: false
        };
    }

    getFName(tmp) {
        this.setState({ fname: tmp })
    }
    getLName(tmp) {
        this.setState({ lname: tmp })
    }
    getEmail(tmp) {
        this.setState({ email: tmp })
    }
    getPhone(tmp) {
        this.setState({ phone: tmp })
    }

    submit() {
        const { fname, lname, email, phone } = this.state;
        if (email) {
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (reg.test(email) === false) {
                this.setState({ email: email })
                Alert.alert("Invalid email")
                return
            }
        }
        fname == null || lname == null || email == null || phone == null ?
            this.setState({ attempt: true }) :
            this.props.navigation.push('Success', { fname: this.state.fname, lname: this.state.lname, email: this.state.email, phone: this.state.phone })
    }


    render() {
        return (
            <KeyboardAvoidingView
                // behavior={Platform.OS === "ios" ? "padding" : null}
                behavior={"padding"}
                style={{ flex: 1 }}
            >
                <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center', }}>
                    <View style={{ backgroundColor: 'lightblue', justifyContent: 'center', height: 200, width: 400, alignItems: 'center', marginBottom: 20 }}>
                        <Text style={{ marginBottom: 10, fontSize: 35 }}> Register Form </Text>
                    </View>
                    <View style={{}}>

                        <TextInput placeholder="Enter first name" onChangeText={(txt) => this.getFName(txt)}
                            style={[styles.input, { borderColor: this.state.attempt == true && this.state.fname == null ? 'red' : 'lightblue', }]} />
                        <TextInput placeholder="Enter last name" onChangeText={(txt) => this.getLName(txt)}
                            style={[styles.input, { borderColor: this.state.attempt == true && this.state.lname == null ? 'red' : 'lightblue', }]} />
                        <TextInput placeholder="Enter Email" onChangeText={(txt) => this.getEmail(txt)}
                            style={[styles.input, { borderColor: this.state.attempt == true && this.state.email == null ? 'red' : 'lightblue', }]} />
                        <TextInput placeholder="Enter Phone" onChangeText={(txt) => this.getPhone(txt)} keyboardType="number-pad"
                            style={[styles.input, { borderColor: this.state.attempt == true && this.state.phone == null ? 'red' : 'lightblue', }]} />
                        <TouchableOpacity
                            style={{
                                width: 350,
                                height: 40,
                                borderRadius: 10,
                                alignItems: "center",
                                padding: 10,
                                paddingBottom: 10,
                                backgroundColor: 'lightblue'
                            }}
                            onPress={() => this.submit()}>
                            <Text>Submit</Text>
                        </TouchableOpacity>
                    </View>

                </SafeAreaView>
            </KeyboardAvoidingView>

        );
    }
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,  // size/width of the border
        paddingLeft: 10,
        width: 350,
        height: 40,
        borderRadius: 5,
        marginBottom: 10
    }
})