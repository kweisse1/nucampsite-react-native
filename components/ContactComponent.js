import React, { Component } from 'react';
import { Title, View, ScrollView, Text } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

class Contact extends Component {
    render() {
        return (
            <ScrollView>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                    <Card wrapperStyle={{ margin: 20 }} title="Contact Information">
                        <Text style={{ marginBottom: 10 }}>
                            {"1 Nucamp Way\n"}
                            {"Seattle, WA 98001\n"}
                            {"U.S.A."}
                        </Text>
                        <Text>
                            {"Phone: 1-206-555-1234\n"}
                            {"Email: campsites@nucamp.co"}
                        </Text>
                    </Card>
                </Animatable.View>
            </ScrollView>
        );
    }

    static navigationOptions = {
        title: 'Contact Us'
    }
}

export default Contact;