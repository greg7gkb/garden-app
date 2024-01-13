import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../Marker';

Text.defaultProps = {}
Text.defaultProps.maxFontSizeMultiplier = 2.5

const images = [
    require('../../images/Marker_21_1.jpg'),
    require('../../images/Marker_21_2.jpg')
]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: 20 }}>   
        This tree with a remarkably spiny trunk is a <Text style={{fontWeight: "bold"}}>silk floss tree (<Text style={{fontStyle: "italic"}}>Ceiba speciosa)</Text>.</Text>
        {"\n"} {"\n"}
        The cotton-like fibers within its seed pods were traditionally used for insulation in sleeping bags and clothing.
        {"\n"} {"\n"}
        Its large, pink, orchid-like flowers are profuse in autumn, appearing just as its leaves drop.
    </Text>

const popUpText = 
    <Text style={{padding: 15, fontFamily: "Times New Roman", fontSize: 20}}>
        The <Text style={{fontWeight: "bold"}}>cavity in its trunk is from freeze damage that occured in 1990.</Text>. 
        Despite scarring, it continues to grow.  
    </Text> 

const map = require('../../images/map/21.jpg')
const directions = <Text style={{ padding: 20, fontFamily: "Times New Roman", fontSize: 20 }}>Ten feet ahead at the edge of the covered structure, find Marker 22. </Text>


export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={21} text={text} popUpText={popUpText} navigation={navigation} map={map} directions={directions}></Marker>
    );
}