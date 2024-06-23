import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import Header from '../components/shared/Header';
import icons from '../assets';
import GuideCard from '../components/homeScreen/guideCard';
const topSpotsData = [
  {name: 'Maui', image: icons.scence1},
  {name: 'Oahu', image: icons.scence1},
  {name: 'Kauai', image: icons.scence1},
  {name: 'Big Island', image: icons.scence1},
];

const Surfing: React.FC = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <View>
          <Image
            source={icons.surf_slide}
            style={{
              width: '100%',
              height: 200,
              marginBottom: 20,
              resizeMode: 'cover',
            }}
          />

          <Text
            style={{
              fontSize: 16,
              fontFamily: 'IBMPlexMono-SemiBold',
              color: 'black',
              paddingHorizontal: 20,
              letterSpacing: 2,
            }}>
            Hawaii is the capital of modern surfing. This group of Pacific
            islands gets swell from all directions, so there are plenty of
            pristine surf spots for all.
          </Text>
        </View>

        <Text
          style={{
            fontSize: 18,
            fontFamily: 'IBMPlexMono-Bold',
            color: 'black',
            marginVertical: 20,
            marginLeft: 15,
          }}>
          Top spots
        </Text>
        {topSpotsData.map((spot, index) => (
          <View key={index} style={{flex: 1, backgroundColor: '#E6F2F2'}}>
            <View
              style={{
                backgroundColor: '#fff',
                marginTop: 10,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 20,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#008080',
                  fontFamily: 'IBMPlexMono-Bold',
                  marginLeft: 20,
                }}>
                {index + 1}. {spot.name}
              </Text>
              <Image source={spot.image} />
            </View>
          </View>
        ))}

        <GuideCard />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Surfing;
