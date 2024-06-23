import React from 'react';
import {ScrollView, View, Text, Image, StyleSheet} from 'react-native';
import Header from '../components/shared/Header';
import {WelcomeImage} from '../components/homeScreen';
import icons from '../assets';
import GuideCard from '../components/homeScreen/guideCard';
import Carousel from '../components/homeScreen/highlights';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';
import packageJson from '../../package.json';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'MainTabs'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const categoryData = packageJson.customData.categoryData;
const slidesData = packageJson.customData.slidesData.map(slide => ({
  ...slide,
  image: icons[slide.image.split('.').pop() as keyof typeof icons],
}));

const Categories: React.FC = () => {
  return (
    <View style={{backgroundColor: '#E6F2F2', flex: 1}}>
      <Text style={styles.headerText}>Categories</Text>
      {categoryData.map(category => (
        <View key={category.id} style={styles.categoryContainer}>
          <Text style={styles.categoryText}>{category.name}</Text>
          <Image source={icons.arrow_forward} style={styles.icon} />
        </View>
      ))}
    </View>
  );
};

interface Slide {
  image: any;
  title: string;
  description: string;
}

const HomeScreen: React.FC<Props> = () => {
  const handleItemSelected = (item: Slide) => {
    console.log('Selected item:', item);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <WelcomeImage />
        <Carousel slides={slidesData} onItemSelected={handleItemSelected} />
        <Categories />
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
    marginBottom: 20,
  },
  headerText: {
    fontSize: 16,
    marginLeft: 20,
    marginVertical: 20,
    fontFamily: 'IBMPlexMono-SemiBold',
    color: 'black',
  },
  categoryContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    marginHorizontal: 20,
    padding: 20,
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 15,
    fontFamily: 'IBMPlexMono-Bold',
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default HomeScreen;
