import { Movie } from '../types';
import React, { useContext } from 'react';
import { Image, Text, View } from 'react-native';
import { ThemeContext } from '../config';

interface MovieItemProps {
  item: Movie;
}

export const MovieItem: React.FC<MovieItemProps> = ({
  item,
}: MovieItemProps) => {
  const { theme }: any = useContext(ThemeContext);

  if (item?.empty) {
    return (
      <View style={[theme.styles.card, { backgroundColor: 'transparent' }]} />
    );
  }

  const { imageUrl } = item?.primaryImage;

  return (
    <View style={theme.styles.card}>
      <View>
        <Image style={theme.styles.cardImage} source={{ uri: imageUrl }} />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={theme.styles.cardTextH2}>{item?.titleText?.text}</Text>
        <Text style={theme.styles.cardTextBody}>
          {item?.plot?.plotText?.plainText}
        </Text>
      </View>
    </View>
  );
};
