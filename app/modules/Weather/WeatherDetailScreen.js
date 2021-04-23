import PropTypes from 'prop-types';
import React, { useLayoutEffect } from 'react';
import { Image, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { LeftHeader, WeatherMarker } from '../../components';
import { convertKelvinToCelsius, getImageFromUrl } from '../../services/Utils';
import styles from './Styles/WeatherDetailScreenStyles';

const WeatherDetailScreen = ({ navigation, route }) => {
  const { name, coord, main, weather, wind } = route?.params?.item;
  useLayoutEffect(() => {
    navigation.setOptions({ headerLeft: () => (<LeftHeader onLeftPress={() => navigation.goBack()} />) });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: coord?.lat,
          longitude: coord?.lon,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        <WeatherMarker lat={coord?.lat} long={coord?.lon} />
      </MapView>
      <View style={styles.bottomContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.mainTitle}>{name}</Text>
          <Text style={styles.descTitle}>{weather?.[0]?.description || ''}</Text>
          <Text style={styles.descTitle}>{`Humidity: ${main?.humidity}`}</Text>
          <Text style={styles.descTitle}>{`Wind Speed: ${wind?.speed}`}</Text>
          <Text style={styles.descTitle}>{`Max. Temp.: ${convertKelvinToCelsius(main?.temp_max)}`}</Text>
          <Text style={styles.descTitle}>{`Min. Temp.: ${convertKelvinToCelsius(main?.temp_min)}`}</Text>
        </View>
        <View style={styles.tempContainer}>
          <Text style={styles.tempTitle}>{convertKelvinToCelsius(main?.temp)}</Text>
          <Image source={{ uri: getImageFromUrl(weather?.[0]?.icon) }} style={styles.tempIcon} resizeMode={'contain'} />
        </View>
      </View>
    </View >
  );
};

WeatherDetailScreen.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object
};

export default WeatherDetailScreen;
