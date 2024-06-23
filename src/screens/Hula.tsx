import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import Header from '../components/shared/Header';
import icons from '../assets';
import GuideCard from '../components/homeScreen/guideCard';

const Hula: React.FC = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <View>
          <Image
            source={icons.hula_slide}
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
              color: 'black',
              paddingHorizontal: 20,
              marginBottom: 10,
              letterSpacing: 2,
              fontFamily: 'IBMPlexMono-SemiBold',
            }}>
            Hawaii is the capital of modern Hula. This group of Pacific islands
            gets swell from all directions, so there are plenty of pristine surf
            spots for all.
          </Text>
        </View>

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

export default Hula;
