import React, { useContext, useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, FlatList, ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { fetchWeekTop10Movies } from '../../state/reducers/movie';
import { MovieItem } from '../../components/MovieItem';
import { ThemeContext } from '../../config';
import { W_WIDTH } from '../../helpers/device';
import { formatData, calcNumColumns } from '../../helpers/utils';
import { MoviesCarousel } from '../../components/CarousellList';

export const HomeScreen: React.FunctionComponent = () => {
  const { theme }: any = useContext(ThemeContext);
  const dispatch = useDispatch();
  const { movies, loading } = useSelector((state: RootState) => state.movie);
  const [numColumns, setNumColumns] = useState(calcNumColumns(W_WIDTH));

  const formatedMovies = useMemo(
    () => formatData(movies, numColumns),
    [movies],
  );

  useEffect(() => {
    dispatch(fetchWeekTop10Movies());
  }, []);

  useEffect(() => {
    setNumColumns(calcNumColumns(W_WIDTH));
  }, [W_WIDTH]);

  return (
    <View style={theme.styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView style={{ width: '100%' }}>
          <MoviesCarousel data={movies} />
          <View style={{ flex: 1 }}>
            <FlatList
              key="movie-list"
              scrollEnabled={false}
              keyExtractor={item => item?.id}
              numColumns={numColumns}
              data={formatedMovies}
              renderItem={({ item }) => <MovieItem item={item} />}
            />
          </View>
        </ScrollView>
      )}
    </View>
  );
};
