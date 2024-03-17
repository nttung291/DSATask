import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getWeekTop10Movies } from '../../../services/api';
import { Movie } from '../../../types/movie';

type MovieState = {
  movies: Movie[];
  loading: boolean;
  error: unknown;
};

const initialState: MovieState = {
  movies: [],
  loading: false,
  error: null,
};

export const fetchWeekTop10Movies = createAsyncThunk(
  'movies/fetchWeekTop10Movies',
  async () => {
    const response = await getWeekTop10Movies();
    return response;
  },
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchWeekTop10Movies.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeekTop10Movies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchWeekTop10Movies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export actions and reducer
export const {} = moviesSlice.actions; // No additional actions defined
export default moviesSlice.reducer;
