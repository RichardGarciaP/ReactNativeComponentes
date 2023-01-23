import React, {useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  Image,
  ImageStyle,
  StyleProp,
  View,
} from 'react-native';
import useAnimation from '../hooks/useAnimation';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

const FadeInImage = ({uri, style = {}}: Props) => {
  const {fadeIn, opacity} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {isLoading && (
        <ActivityIndicator
          color="#5856d6"
          size={30}
          style={{position: 'absolute'}}
        />
      )}
      <Animated.Image
        onLoadEnd={() => finishLoading()}
        source={{uri}}
        style={{...(style as any), opacity}}
      />
    </View>
  );
};

export default FadeInImage;
