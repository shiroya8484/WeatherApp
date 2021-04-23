import PropTypes from 'prop-types';
import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { convertKelvinToCelsius } from '../services/Utils';
import { Colors } from '../theme';
import styles from './Styles/WeatherRowStyles';

const WeatherRow = ({ name, weather, main, onPress }) => {
  return (
    <TouchableHighlight style={styles.container} onPress={onPress} underlayColor={Colors.touchableHighlightUnderlayColor}>
      <>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.descText}>{weather?.[0]?.description}</Text>
        </View>
        <Text style={styles.tempText}>{convertKelvinToCelsius(main?.temp)}</Text>
      </>
    </TouchableHighlight>
  );
};

WeatherRow.propTypes = {
  onPress: PropTypes.func,
  name: PropTypes.string,
  weather: PropTypes.array,
  main: PropTypes.object
};

export default WeatherRow;

