import React, { Component } from 'react';
import { Title, View, ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';

class About extends Component {
    render() {
        return (
            <ScrollView>
                <Mission/>
            </ScrollView>
        );
    }

    static navigationOptions = {
        title: 'About Us'
    }

}

function Mission(){
    if(1) {
        return (
            <Card>
                <Text>
                    We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.
                </Text>
            </Card>
        )
    }
}

export default About;