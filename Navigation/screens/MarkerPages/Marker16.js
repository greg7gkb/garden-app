import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../Marker';

Text.defaultProps = {}
Text.defaultProps.maxFontSizeMultiplier = 2.5

const images = [
    require('../../images/Marker_16_1.jpg'),
    require('../../images/Marker_16_2.jpg'),
    require('../../images/Marker_16_3.jpg')
]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: 20 }}>   
        Along the path is a drift of aloes <Text style={{fontWeight: "bold", fontStyle: "italic"}}>(Aloe striata x reynoldsii)</Text>.
        {"\n"} {"\n"}
        Toward the center of the bed are the <Text style={{fontWeight: "bold"}}>only palms native to California, <Text style={{fontStyle: "italic"}}>Washingtonia filifera</Text>.</Text>
    </Text>

const popUpText = 
    <Text style={{padding: 15, fontFamily: "Times New Roman", fontSize: 20}}>
        The <Text style={{fontWeight: "bold"}}>shrub coral tree </Text><Text style={{fontWeight: "bold", fontStyle: "italic"}}>(Erythrina x bidwillii)</Text>, 
        to the right of the palms is ablaze with red flowers in the summer and is cut back in winter.     
    </Text> 

const map = require('../../images/map/16.jpg')
const directions = <Text style={{ padding: 20, fontFamily: "Times New Roman", fontSize: 20 }}>Keep walking to the tall green structure (“Ruth’s folly”). Marker 17 is in the bed on the right nearest to the Folly. </Text>


export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={16} text={text} popUpText={popUpText} navigation={navigation} map={map} directions={directions}></Marker>
    );
}