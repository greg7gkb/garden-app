//Change Marker.js navigation of marker 24 after creating this page!

import * as React from 'react';
import { View, Text, Linking, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const BG_IMG= require('../images/thumbnail_images/M22.jpg');
// import { ScrollView } from 'react-native-gesture-handler'; //note: use M19 for image
import Ionicons from 'react-native-vector-icons/Ionicons';
//const chosenImage= require('../images/thumbnail_images/M19.jpg');

export default function EndScreen({navigation}) {
    React.useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity onPress={() => {navigation.navigate("Markers")}}>
                    <Ionicons name="chevron-back-outline" size={20}>All Markers</Ionicons>
                </TouchableOpacity>
            )
        });
    })

    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#efe4be"}}>
            <Image 
                source={BG_IMG}
                style={StyleSheet.absoluteFillObject}
                blurRadius={15}
                >
            </Image>
                <View style = {styles.boxRound}>
                    <Text
                        style={styles.titleText}> We hope you enjoyed this {'\n'} self-guided tour. 
                    </Text>
                    <Text
                    style= {styles.bodyText}>
                        {'\t'}To learn more about the Garden and our many programs and events, please sign-up for our Ruth’s Garden with our{space}
                    <Text/> 
                    <Text style={styles.linkText}
                        onPress={() => Linking.openURL('https://www.ruthbancroftgarden.org/join-our-mailing-list/')}>
                        mailing list.
                    </Text>
                        {'\n'}
                        {'\n'} We also encourage you to consider becoming a member. Membership helps support the Garden and uphold our mission of preservation and education. It also comes with many benefits. Learn more{space}
                        <Text style={styles.linkText}
                        onPress={() => Linking.openURL('https://www.ruthbancroftgarden.org/membership/')}>
                        here.
                        </Text>
                    </Text>
                    <View style={styles.buttonText}>
                </View>
                </View>
                <View style = {{marginBottom: 20}}/>
                <TouchableOpacity
                    style = {styles.button}
                    onPress = {() => Linking.openURL("https://www.ruthbancroftgarden.org/membership/")}>
                    <Text style = {styles.buttonText}> Join </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: "rgb(217, 81, 31)",
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.75,
        elevation: 6,
        shadowRadius: 10 ,
        shadowOffset : { width: 1, height: 6},
    },
    buttonText: {
        fontSize: 30,
        color: "white",
        padding: 10,
    },
    linkText: {
        color: 'blue', 
        fontSize: 20, 
        lineHeight: 30,
        paddingLeft: 30, 
        padding:20,
        fontWeight: 'bold'
    },
    boxRound: {
        marginTop: 30,
        padding: 10,
        backgroundColor: "#efe4be",
                borderRadius: 15,
        width: '95%',
    },
    titleText: {
        paddingTop: 30,
        paddingBottom: 20,
        lineHeight: 35,
        fontSize: 28, 
        padding: 10,
        fontWeight: 'bold',  
        fontFamily: "Times New Roman", 
        textAlign: 'center',
    },
    container: {
        resizeMode: 'contain',
        flex: 0.35,
        height:  180, // percentile heights was giving problems
        width: '100%',
      justifyContent: 'center',
    },
    bodyText: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 20,
        paddingTop: 20,
        fontSize: 20,
        lineHeight: 30,
        textAlign: 'justify',
        fontFamily: "Times New Roman", 
        alignSelf: "center", 
    },
    scrollStyle: {
        flex: 1,
        backgroundColor: "#efe4be",
        paddingTop: 25,
        paddingBottom: 25,  
     },
    learnMoreText: {
        paddingLeft: 30,
        paddingRight: 20,
        paddingBottom: 10,
        fontSize: 16,
        //color: 'red',
        lineHeight: 30,
    },
})
