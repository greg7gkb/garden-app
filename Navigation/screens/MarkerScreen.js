import * as React from 'react';
import { StatusBar, FlatList, Image, Text, View, StyleSheet, SafeAreaView} from 'react-native';


//TODO: create more markers (make sure the photo and text correspond), make box highlight upon click
// Inspiration: https://dribbble.com/shots/14154226-Rolodex-Scrolling-Animation/attachments/5780833?mode=media
//Inspo: https://www.google.com/search?rlz=1C1VDKB_enUS1038US1038&q=onstartShouldSetResponder+how+to+use&tbm=vid&sa=X&ved=2ahUKEwi3u87Mtd_8AhUlC0QIHdxSBBIQ0pQJegQIChAB&biw=1280&bih=601&dpr=1.5#fpstate=ive&vld=cid:a252efcf,vid:ru6KJ1bfZdg 
//list of different plants with their title, plant name, and image
const DATA = [
    {
        id: "1",
        title: "Marker 1",
        plant: 'Agave franzosinii',
        imge: require('../images/thumbnail_images/NM1.jpg'),
        whereTo: 'Marker 1'
    },
    {
        id: "2",
        title: "Marker 2",
        plant: 'Yucca',
        imge: require('../images/thumbnail_images/M2.jpg'),
        whereTo: 'Marker 2'
    },
    {
        id: "3",
        title: "Marker 3",
        plant: "Jubaea chilensis",
        imge: require('../images/thumbnail_images/M3.jpg'),
        whereTo: 'Marker 3'
    
    },
    {
        id: "4",
        title: "Marker 4",
        plant: "Aloe bed",
        imge: require('../images/thumbnail_images/NM4.jpg'),
        whereTo: 'Marker 4'
    },
    {
        id: "5",
        title: "Marker 5",
        plant: "Agave shawii",
        imge: require('../images/thumbnail_images/M5.jpg'),
        whereTo: 'Marker 5'
    },
    {
        id: "6",
        title: "Marker 6",
        plant: "Aloe ‘Hellskloofs Bells'",
        imge: require('../images/thumbnail_images/NM6.jpg'),
        whereTo: 'Marker 6'
    },
    {
      id: "7",
      title: "Marker 7",
      plant: "Arctostaphylos ‘Ruth Bancroft’",
      imge: require('../images/thumbnail_images/M7.jpg'),
      whereTo: 'Marker 7'
    },
    {
      id: "8",
      title: "Marker 8",
      plant: "Xanthorrhoea preisii",
      imge: require('../images/thumbnail_images/M8.jpg'),
      whereTo: 'Marker 8'
    },
    {
      id: "9",
      title: "Marker 9",
      plant: "Dasylirion longissimum",
      imge: require('../images/thumbnail_images/M9.jpg'),
      whereTo: 'Marker 9'
    },
    {
      id: "10",
      title: "Marker 10",
      plant: "Gasteria Mound",
      imge: require('../images/thumbnail_images/NM10.jpg'),
      whereTo: 'Marker 10'
    },
    {
      id: "11",
      title: "Marker 11",
      plant: "Aloe arborescens",
      imge: require('../images/thumbnail_images/NM11.jpg'),
      whereTo: 'Marker 11'
    },
    {
      id: "12",
      title: "Marker 12",
      plant: "Tradescantia pallida ‘Purple Heart’",
      imge: require('../images/thumbnail_images/NM12.jpg'),
      whereTo: 'Marker 12'
    },
    {
      id: "13",
      title: "Marker 13",
      plant: "Dyckia encholirioides",
      imge: require('../images/thumbnail_images/M13.jpg'),
      whereTo: 'Marker 13'
    },
    {
      id: "14",
      title: "Marker 14",
      plant: "Brahea armata",
      imge: require('../images/thumbnail_images/M14.jpg'),
      whereTo: 'Marker 14'
    },
    {
      id: "15",
      title: "Marker 15",
      plant: "Pond",
      imge: require('../images/thumbnail_images/NM15.jpg'),
      whereTo: 'Marker 15'
    },
    {
      id: "16",
      title: "Marker 16",
      plant: "Aloe striata x reynoldsii",
      imge: require('../images/thumbnail_images/M16.jpg'),
      whereTo: 'Marker 16'
    },
    {
      id: "17",
      title: "Marker 17",
      plant: "Echinocactus grusonii",
      imge: require('../images/thumbnail_images/M17.jpg'),
      whereTo: 'Marker 17'
    },
    {
      id: "18",
      title: "Marker 18",
      plant: "Opuntia ficus-indica",
      imge: require('../images/thumbnail_images/NM18.jpg'),
      whereTo: 'Marker 18'
    },
    {
      id: "19",
      title: "Marker 19",
      plant: "Chilopsis linearis",
      imge: require('../images/thumbnail_images/M19.jpg'),
      whereTo: 'Marker 19'
    },
    {
      id: "20",
      title: "Marker 20",
      plant: "Cereus hildmannianus",
      imge: require('../images/thumbnail_images/M20.jpg'),
      whereTo: 'Marker 20'
    },
    {
      id: "21",
      title: "Marker 21",
      plant: "Ceiba speciosa",
      imge: require('../images/thumbnail_images/M21.jpg'),
      whereTo: 'Marker 21'
    },
    {
      id: "22",
      title: "Marker 22",
      plant: "Aeonium canariense",
      imge: require('../images/thumbnail_images/M22.jpg'),
      whereTo: 'Marker 22'
    },
    {
      id: "23",
      title: "Marker 23",
      plant: "Parkinsonia ‘Desert Museum’",
      imge: require('../images/thumbnail_images/NM23.jpg'),
      whereTo: 'Marker 23'
    },
    {
      id: "24",
      title: "Marker 24",
      plant: "Encephalartos horridus",
      imge: require('../images/thumbnail_images/M24.jpg'),
      whereTo: 'Marker 24'
    },
]

// const Stack = createStackNavigator();

// function MainStackNavigator(MarkerX) {
//   const markers = [];
//   for (let i = 1; i <= 24; i++) {
//     const name = "Marker" + i;
//     markers.push(name);
//   }
//   return (
//     <NavigationContainer independent={true}>
//       <Stack.Navigator>
//         <Stack.Screen name="Marker1" component={MarkerX} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const MainStackNavigator =
// <NavigationContainer independent={true}>
//   <Stack.Navigator>
//     <Stack.Screen name="Marker1" component={Marker} />
//   </Stack.Navigator>
// </NavigationContainer>

//background image that's blurred later on                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
const BG_IMG = 'https://cdn.pixabay.com/photo/2013/07/02/22/20/bouquet-142876__340.jpg'

const SPACING = 20;
const AVATAR_SIZE = 70;

export default function MarkerScreen ({navigation={MainStackNavigator}}) {
  //const myNavigation = useNavigation();
      return (
        //first <Image> is the markerscreen's background
        //second is the display of the plant image from DATA along with the title and plant 
        //onResponderRelease={() => navigation.navigate('Marker1')}>
        <SafeAreaView style={styles.container}>
          <Image 
            source={{uri: BG_IMG}}
            style={StyleSheet.absoluteFillObject}
            blurRadius={25}
            >
          </Image>
          <FlatList
            data={DATA}
            keyExtractor={item => item.id}
            contentContainerStyle={{
                padding: SPACING,
            }}
            renderItem={({item}) => {  
              if (item.plant == "Aloe ‘Hellskloofs Bells'") {
                plantStyle = <Text><Text style = {styles.plant}>Aloe</Text><Text style = {styles.plantPlain}> 'Hellskloofs Bells' </Text></Text> //brute force approached... likely a better way of doing this
              }
              else if (item.plant == "Tradescantia pallida ‘Purple Heart’") {
                plantStyle = <Text><Text style = {styles.plant}>Tradescantia pallida</Text><Text style = {styles.plantPlain}> 'Purple Heart' </Text></Text>
              }
              else if (item.plant == "Arctostaphylos ‘Ruth Bancroft’") {
                plantStyle = <Text><Text style = {styles.plant}>Arctostaphylos</Text><Text style = {styles.plantPlain}> 'Ruth Bancroft' </Text></Text>
              }
              else if (item.plant == "Parkinsonia ‘Desert Museum’") {
                plantStyle = <Text><Text style = {styles.plant}>Parkinsonia</Text><Text style = {styles.plantPlain}> 'Desert Museum' </Text></Text>
              }
              else if(!((item.plant == 'Yucca' ||item.plant == 'Aloe bed' || item.plant == 'Pond'))) {
                plantStyle = <Text style= {styles.plant}>{item.plant}</Text>
              }
              else {
                plantStyle = <Text style={styles.plantPlain}>{item.plant}</Text>
              }
                return <View style={styles.item} 
                onStartShouldSetResponder ={() => true}
                onResponderRelease={() => navigation.navigate(item.whereTo)}> 
                    <Image
                        source= {item.imge}
                        style={styles.imge}
                        />

                    <View style={styles.txtbox} > 
                        <Text style={styles.title} >{item.title}</Text>
                        {plantStyle}
                    </View> 
                </View>
            }}
          />
        </SafeAreaView>
      );
    }
   

    //styling of various parts of each component

    const styles = StyleSheet.create({
      txtbox: {
        flex: 1,
        justifyContent: 'center',
      },
      imge: {
        width: AVATAR_SIZE,
        height: AVATAR_SIZE,
        borderRadius: AVATAR_SIZE,
        marginRight: SPACING/2
      },
      container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      },
      item: {
        backgroundColor: 'rgba(88, 141, 152, .9)',
        flexDirection: 'row', 
        padding: SPACING,
        marginBottom: SPACING,
        borderRadius: 12,
      },
      title: {
        fontSize: 25,
        color: "white",
        justifyContent: 'center',
        fontWeight: "bold",
      },
      plant: {
        fontSize: 16,
        color: "white",
        fontStyle: "italic"
      },
      plantPlain: {
        fontSize: 16,
        color: "white",
      },
    });
    