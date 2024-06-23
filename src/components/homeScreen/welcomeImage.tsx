import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import icons from '../../assets';

const WelcomeImage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={icons.main} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: 0.9,
  },
});

export default WelcomeImage;
