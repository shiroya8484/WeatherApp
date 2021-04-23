import PropTypes from 'prop-types';
import React from 'react';
import { Image } from 'react-native';
import { Marker } from 'react-native-maps';
import { Icons } from '../assets';
import styles from './Styles/WeatherMarkerStyles';

const WeatherMarker = ({ lat = 37.78825, long = -122.4324 }) => {
  return (
    <Marker
      coordinate={{ latitude: lat, longitude: long }}>
      <Image source={Icons.pin} style={styles.pin} />
    </Marker>
  );
};

WeatherMarker.propTypes = {
  lat: PropTypes.string,
  long: PropTypes.string,
};

export default WeatherMarker;
