import React, {component} from 'react';
import {
    StyleSheet,
    View,
    AppRegistry
  } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

export default class MapScreen extends Component {

    render() {
        const {loginStatus} = this.state;
        return (
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.container}
                initialRegion={{
                    latitude=39.7392,
                    longitude=-104.9903,
                    latitudeDelta=0.0922,
                    longitudeDelta=0.0421,
                }}>
            </MapView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});