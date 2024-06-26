import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../Marker';

Text.defaultProps = {}
Text.defaultProps.maxFontSizeMultiplier = 2.5

const images = [
    require('../../images/Marker_18_1.jpg'),
    require('../../images/Marker_18_2.jpg'),
    require('../../images/Marker_18_3.jpg'),
    require('../../images/Marker_18_4.jpg'),
]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: 20 }}>   
        This garden bed is dominated by cacti of various species and forms, all native to the Americas.
        {"\n"} {"\n"}
        You can see the <Text style={{fontWeight: "bold"}}>three principal forms cacti</Text> take: 
        the <Text style={{fontWeight: "bold"}}>spherical barrel</Text> cacti, 
        the <Text style={{fontWeight: "bold"}}>columnar cacti</Text>, 
        and the <Text style={{fontWeight: "bold"}}>paddle cacti.</Text>
    </Text>
const popUpText = 
    <Text style={{padding: 15, fontFamily: "Times New Roman", fontSize: 20}}>
        The paddle cactus, or <Text style={{fontWeight: "bold", fontStyle: "italic"}}>Oputia</Text> pads <Text style={{fontWeight: "bold"}}>(<Text style={{fontStyle: "italic"}}>nopales</Text>) </Text>
        are used in Mexican cuisine; their fruit is also edible (known as
        <Text style={{fontWeight: "bold"}}><Text style={{fontStyle: "italic"}}> tunas</Text> or prickly pears)</Text>. 
        {"\n"} {"\n"}
        <Text style={{fontStyle: "italic"}}>Are any plants in the Garden used in your culture’s cuisine?</Text>
    </Text>

const map = require('../../images/map/18.jpg')
const directions = <Text style={{ padding: 20, fontFamily: "Times New Roman", fontSize: 20 }}>Continue onward to the fence. Before you reach it, start looking for the white haired cacti on the right and Marker 19.</Text>


export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={18} text={text} popUpText={popUpText} navigation={navigation} map={map} directions={directions}></Marker>
    );
}