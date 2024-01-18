import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../Marker';

Text.defaultProps = {}
Text.defaultProps.maxFontSizeMultiplier = 2.5

const images = [
    require('../../images/Marker_11_1.jpg'),
    require('../../images/Marker_11_2.jpg'),
    require('../../images/Marker_11_3.jpg'),
]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: 20 }}>   
        Straight ahead you will notice a large stand of Aloes <Text style={{fontWeight: "bold"}}>(Aloe arborescens)</Text>. 
        These winter bloomers provide color and a special treat for hummingbirds in the cold months. {"\n\n"}

        Two other remarkable plants are in this bed. The <Text style={{fontWeight: "bold"}}>Eucalyptus kitsoniana</Text> 
        with its wavy bark sits in the left corner of the bed. The <Text style={{fontWeight: "bold"}}>tree-like Hercules 
        aloe (Aloe barberae x A. dichotoma)</Text> towers above the bed. 
    </Text>

const popUpText = 
    <Text style={{padding: 15, fontFamily: "Times New Roman", fontSize: 20}}>
        You will notice that unlike most gardens that are arranged by plant type or origin, 
        this Garden is arranged compositionally. There is an <Text style={{fontWeight: "bold"}}>intentional lack of signage</Text>, 
        to preserve Ruth’s original vision.
    </Text> 

const map = require('../../images/map/11.jpg')

const directions = <Text style={{ padding: 20, fontFamily: "Times New Roman", fontSize: 20 }}>
   Pass through the clearing towards the bench and pine tree. Near the base of the tree you will find Marker 12.
   </Text>

export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={11} text={text} popUpText={popUpText} navigation={navigation} map={map} directions={directions}></Marker>
    );
}