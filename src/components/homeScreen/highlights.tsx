import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
  ListRenderItem,
} from 'react-native';
import icons from '../../assets';

const {width} = Dimensions.get('window');

interface Slide {
  image: any;
  title: string;
  description: string;
}

interface CarouselProps {
  slides: Slide[];
  onItemSelected: (item: Slide) => void;
}

const Carousel: React.FC<CarouselProps> = ({slides, onItemSelected}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);
  const flatListRef = useRef<FlatList<Slide>>(null);

  useEffect(() => {
    startSlideShow();
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, []);

  const startSlideShow = () => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide(prevSlide => {
        const nextSlide = (prevSlide + 1) % slides.length;
        if (flatListRef.current) {
          flatListRef.current.scrollToIndex({index: nextSlide, animated: true});
        }
        return nextSlide;
      });
    }, 3000);
  };

  const nextSlide = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
    setCurrentSlide(prevSlide => {
      const nextSlide = (prevSlide + 1) % slides.length;
      if (flatListRef.current) {
        flatListRef.current.scrollToIndex({index: nextSlide, animated: true});
      }
      startSlideShow();
      return nextSlide;
    });
  };

  const renderItem: ListRenderItem<Slide> = ({item, index}) => (
    <TouchableOpacity
      onPress={() => {
        onItemSelected(item);
      }}
      style={[styles.slide, index === 0 && styles.firstSlide]}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.navigation}>
        <TouchableOpacity onPress={nextSlide} style={styles.navButton}>
          <Image source={icons.arrow} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.carouselContainer}>
      <Text style={styles.carouselTitle}>Highlights</Text>
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScrollToIndexFailed={() => {}}
        getItemLayout={(_, index) => ({
          length: width * 0.8,
          offset: width * 0.8 * index,
          index,
        })}
        contentContainerStyle={{paddingHorizontal: 10}}
        snapToInterval={width * 0.8 + 10}
        decelerationRate="fast"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  carouselTitle: {
    fontSize: 24,
    fontFamily: 'IBMPlexMono-SemiBold',
    color: 'black',
    marginBottom: 20,
  },
  slide: {
    width: width * 0.8,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 10,
  },
  firstSlide: {
    marginLeft: 0,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontFamily: 'IBMPlexMono-SemiBold',
    fontSize: 20,
    color: '#008080',
    lineHeight: 20,
    marginBottom: 10,
    marginLeft: 20,
  },
  description: {
    fontFamily: 'IBMPlexMono-Bold',
    textAlign: 'center',
    fontSize: 16,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 20,
  },
  navButton: {
    padding: 10,
  },
});

export default Carousel;
