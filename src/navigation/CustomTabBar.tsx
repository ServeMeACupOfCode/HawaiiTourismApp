import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import icons from '../assets';
import TabButton from './TabButton';

interface CustomBottomTabsProps {
  setActiveTab: (tab: string) => void;
  activeTab: string;
}

const CustomBottomTabs: React.FC<CustomBottomTabsProps> = ({
  setActiveTab,
  activeTab,
}) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.bookButton}
        onPress={() => console.log('Book a trip button pressed')}>
        <Text style={styles.bookButtonText}>Book a trip</Text>
      </TouchableOpacity>
      <View style={styles.tabContainer}>
        <TabButton
          icon={icons.home}
          label="Home"
          tabName="Home"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabButton
          icon={icons.surfing}
          label="Surfing"
          tabName="Surfing"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabButton
          icon={icons.hula}
          label="Hula"
          tabName="Hula"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabButton
          icon={icons.vulcano}
          label="Vulcano"
          tabName="Vulcano"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  bookButton: {
    position: 'absolute',
    top: -70,
    left: 10,
    backgroundColor: '#008080',
    padding: 15,
    borderRadius: 5,
    width: '95%',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  bookButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default CustomBottomTabs;
