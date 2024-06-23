import React from 'react';
import {TouchableOpacity, Image, Text, StyleSheet} from 'react-native';

interface TabButtonProps {
  icon: any;
  label: string;
  tabName: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabButton: React.FC<TabButtonProps> = ({
  icon,
  label,
  tabName,
  activeTab,
  setActiveTab,
}) => {
  const isActive = activeTab === tabName;

  return (
    <TouchableOpacity
      style={[styles.tabButton, isActive ? styles.activeTab : null]}
      onPress={() => setActiveTab(tabName)}>
      <Image source={icon} style={styles.tabIcon} />
      <Text style={[styles.tabLabel, isActive ? styles.activeTabText : null]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tabButton: {
    alignItems: 'center',
  },
  tabIcon: {
    width: 24,
    height: 24,
  },
  tabLabel: {
    fontSize: 12,
    fontFamily: 'IBMPlexMono-SemiBold',
    color: 'black',
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#008080',
  },
  activeTabText: {
    color: '#008080',
  },
});

export default TabButton;
