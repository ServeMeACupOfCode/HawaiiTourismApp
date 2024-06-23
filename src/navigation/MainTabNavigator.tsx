import React, {useState} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';
import HomeScreen from '../screens/HomeScreen';
import Surfing from '../screens/Surfing';
import Hula from '../screens/Hula';
import Vulcanoes from '../screens/Vulcanoes';
import CustomBottomTabs from './CustomTabBar';

const MainTabNavigator: React.FC = () => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'MainTabs'>>();
  const [activeTab, setActiveTab] = useState<string>('Home');

  const renderScreen = () => {
    switch (activeTab) {
      case 'Home':
        return <HomeScreen navigation={navigation} />;
      case 'Surfing':
        return <Surfing />;
      case 'Hula':
        return <Hula />;
      case 'Vulcano':
        return <Vulcanoes />;
      default:
        return <HomeScreen navigation={navigation} />;
    }
  };

  return (
    <View style={{flex: 1}}>
      {renderScreen()}
      <CustomBottomTabs setActiveTab={setActiveTab} activeTab={activeTab} />
    </View>
  );
};

export default MainTabNavigator;
