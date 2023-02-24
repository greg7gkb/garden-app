import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../../../assets/Marker';

const images = [
    require('../../images/Marker_15_1.jpg'),
    require('../../images/Marker_15_2.jpg'),
]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: '20' }}>   
        The <Text style={{fontWeight: "bold"}}> pond provides an oasis within the Garden </Text>, 
        acting as a cool, shady counterpoint to the sun-exposed areas.
        {"\n"} {"\n"}
        To your back sits <Text style={{fontWeight: "bold"}}>Ruth’s Folly, the tall gazebo structure </Text>
        that once <Text style={{fontWeight: "bold"}}>served as the Garden’s entrance.</Text>
    </Text>

export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={15} text={text}></Marker>
    );
}