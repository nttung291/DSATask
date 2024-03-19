import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, Animated, Platform, Image } from 'react-native';
import { Movie } from '../../types';
import {
  W_WIDTH,
  getCarouselWidth,
  getCarouselHeight,
  vs,
} from '../../helpers/device';
import { isEmpty } from 'lodash';

const SPACING = 10;

type MovieCarousel = Movie | { key: string; id: string };
interface MoviesCarouselProps {
  data: MovieCarousel[];
}

export const MoviesCarousel: React.FC<MoviesCarouselProps> = props => {
  const [movies, setMovies] = useState<MovieCarousel[]>([]);
  const scrollX = useRef(new Animated.Value(0)).current;
  const carouselWidth = getCarouselWidth();
  const carouselHeight = getCarouselHeight();
  const EMPTY_ITEM_SIZE = (W_WIDTH - carouselWidth) / 2;

  useEffect(() => {
    if (isEmpty(movies)) {
      setMovies([
        { key: 'empty-left', id: 'empty-left' },
        ...props.data,
        { key: 'empty-right', id: 'empty-right' },
      ]);
    }
  }, [props.data]);

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={movies}
        keyExtractor={item => item?.id}
        horizontal
        contentContainerStyle={{
          height: carouselHeight + vs(120),
          marginTop: vs(-10),
        }}
        bounces={false}
        decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
        renderToHardwareTextureAndroid
        snapToInterval={carouselWidth}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false },
        )}
        renderItem={({ item, index }: { item: Movie; index: number }) => {
          const imageUrl = item?.primaryImage?.imageUrl;
          if (!imageUrl) {
            return <View style={{ width: EMPTY_ITEM_SIZE }} />;
          }

          const inputRange = [
            (index - 2) * carouselWidth,
            (index - 1) * carouselWidth,
            index * carouselWidth,
          ];

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [100, 50, 100],
            extrapolate: 'clamp',
          });

          return (
            <View
              style={{
                width: carouselWidth,
                height: carouselHeight,
              }}>
              <Animated.View
                style={[
                  styles.carouselContainer,
                  { height: carouselHeight, transform: [{ translateY }] },
                ]}>
                <Image
                  style={[styles.posterImage]}
                  source={{ uri: imageUrl }}
                />
              </Animated.View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 120,
  },
  container: {
    flex: 1,
  },
  carouselContainer: {
    flex: 1,
    marginHorizontal: SPACING,
    padding: 6,
    alignItems: 'center',
    backgroundColor: 'rgba(240, 240, 240, 0.8)',
    borderRadius: 16,
  },
  posterImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 12,
    paddingTop: 100,
  },
});
