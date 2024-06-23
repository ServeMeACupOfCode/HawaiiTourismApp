import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import icons from '../../assets';

const UserCard: React.FC = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.infoContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Hadwin Malone</Text>
          <Text style={styles.subtitle}>Guide since 2012</Text>
        </View>
        <Image source={icons.guide} style={styles.profileImage} />
      </View>
      <TouchableOpacity style={styles.contactButton} onPress={() => {}}>
        <Text style={styles.buttonText}>Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

const GuideCard: React.FC = () => {
  return (
    <View style={{flex: 1, height: 300, backgroundColor: '#E6F2F2'}}>
      <Text
        style={{
          fontSize: 18,
          fontFamily: 'IBMPlexMono-SemiBold',
          color: 'black',
          marginLeft: 20,
          marginTop: 10,
        }}>
        Travel Guide
      </Text>

      <UserCard />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    marginTop: 10,
    marginHorizontal: 25,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
  },
  heading: {
    fontSize: 20,
    fontFamily: 'IBMPlexMono-Bold',
    color: 'black',
  },
  subtitle: {
    fontSize: 17,
    color: 'gray',
    fontFamily: 'IBMPlexMono-SemiBold',
    letterSpacing: 2,
    marginVertical: 10,
  },
  profileImage: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    borderRadius: 25,
  },
  contactButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderColor: '#008080',
    borderWidth: 1,
    alignItems: 'center',
    width: '40%',
    marginLeft: 22,
  },
  buttonText: {
    color: '#008080',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GuideCard;
