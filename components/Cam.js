import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ActivityIndicator, Dimensions } from 'react-native'
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { IMG_API_KEY } from 'react-native-dotenv'
import { APP_API_ID, API_KEY } from 'react-native-dotenv'

export default class Cam extends Component {
    state = {
        hasPermission: null,
        type: Camera.Constants.Type.back,
        query: null,
        loading: false,
        isActive: false,
    }

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasPermission: status === 'granted' });
    }

    handleCameraType = () => {
        const { cameraType } = this.state
        this.setState({
            cameraType:
                cameraType === Camera.Constants.Type.BACK
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
        })
    }

    takePicture = async () => {
        if (this.camera) {
            this.camera.pausePreview()
            this.setState((previousState, props) => ({
                loading: true
            }))

            const options = { base64: true }
            
            let data = await this.camera.takePictureAsync(options);

            this.identifyImage(data.base64)
        }
    }

    identifyImage(imageData) {
        const Clarifai = require('clarifai');
        const app = new Clarifai.App({
            apiKey: IMG_API_KEY
        });
        app.models.predict("bd367be194cf45149e75f01d59f77ba7", { base64: imageData })
            .then((response) => this.displayAnswer(response.outputs[0].data.concepts[0].name)
                .catch((err) => alert(err))
            )
    }

    displayAnswer(identifiedImage) {
        this.setState({
            query: identifiedImage,
            loading: false,
            isActive: true,
        });

        const searchURL = `https://trackapi.nutritionix.com/v2/search/instant?query=${this.state.query}&detailed=true`
        fetch(searchURL, {
            method: "GET",
            headers: {
                "x-app-id": APP_API_ID,
                "x-app-key": API_KEY
            }
        }).then(response => response.json())
            .then(meal => this.props.navigation.navigate("Home", { searchMeal: meal.common[0] }))

        // Show an alert with the answer on
        // Alert.alert(
        //     this.state.query,
        //     '',

        //     { cancelable: false }
        // )
        // Resume the preview
        // this.camera.resumePreview();
    }

    render() {

        const { hasPermission } = this.state
        if (hasPermission === null) {
            return <View />;
        } else if (hasPermission === false) {
            return <Text>No access to camera</Text>;
        } else {

            return (
                <View style={{ flex: 1 }}>
                    <Camera style={{ flex: 1 }} type={this.state.cameraType} ref={ref => { this.camera = ref }}>
                        <ActivityIndicator size="large" style={styles.loadingIndicator} color="#fff" animating={this.state.loading} />
                        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", margin: 20 }}>
                            <TouchableOpacity style={{ alignSelf: 'flex-end', alignItems: 'center', backgroundColor: 'transparent' }}
                                onPress={() => this.setState({ isActive: true })}
                            >
                                <Ionicons name="ios-photos" style={{ color: "#fff", fontSize: 40 }} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ alignSelf: 'flex-end', alignItems: 'center', backgroundColor: 'transparent', }}
                                onPress={() => this.takePicture()}
                            >
                                <FontAwesome name="camera" style={{ color: "#fff", fontSize: 40 }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ alignSelf: 'flex-end', alignItems: 'center', backgroundColor: 'transparent' }}
                                onPress={() => this.handleCameraType()}
                            >
                                <MaterialCommunityIcons name="camera-switch" style={{ color: "#fff", fontSize: 40 }} />
                            </TouchableOpacity>
                        </View>
                    </Camera>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },

    loadingIndicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});