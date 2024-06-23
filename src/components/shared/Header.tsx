import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import icons from '../../assets';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={icons.welcome} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 6,
  },
});

export default Header;
