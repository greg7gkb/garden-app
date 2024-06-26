import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../Marker';

Text.defaultProps = {}
Text.defaultProps.maxFontSizeMultiplier = 2.5

const images = [
    require('../../images/Marker_14_1.jpg'),
    require('../../images/Marker_14_2.jpg'),
    require('../../images/Marker_14_3.jpg'),
    require('../../images/Marker_14_4.jpg')
]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: 20 }}>   
        Overhead, the <Text style={{fontWeight: "bold"}}>Mexican blue fan palm (<Text style={{fontStyle: "italic"}}>Brahea armata</Text>) </Text>
        is an example of a palmate leaf palm, with radiating leaflets.
        {"\n"} {"\n"}
        <Text style={{fontWeight: "bold"}}>Palm leaves may also take a feather form, also known as pinnate.</Text>
        
       
    </Text>

const popUpText = 
    <Text style={{padding: 15, fontFamily: "Times New Roman", fontSize: 20}}>
         The bed to the right contains many <Text style={{fontWeight: "bold"}}>Euphorbias. </Text>Some <Text style={{fontWeight: "bold"}}>look a lot like cacti, but once again, this is an example of convergent evolution</Text>. 
        Similar adaptations occur in lineages that emerged in geographic isolation from one another.
    </Text> 

const map = require('../../images/map/14.jpg')
const directions = <Text style={{ padding: 20, fontFamily: "Times New Roman", fontSize: 20 }}>Head towards the large green gazebo-like structure (AKA Ruth’s Folly). Find Marker 15 on the bank of the pond.</Text>


export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={14} text={text} popUpText={popUpText} navigation={navigation} map={map} directions={directions}></Marker>
    );
}