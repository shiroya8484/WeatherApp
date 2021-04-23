import PropTypes from 'prop-types';
import React from 'react';
import { Image, TouchableHighlight } from 'react-native';
import { Icons } from '../assets';
import { Colors } from '../theme';
import styles from './Styles/LeftHeaderStyles';

const LeftHeader = ({ onLeftPress }) => {
  return (
    <TouchableHighlight onPress={onLeftPress} underlayColor={Colors.touchableHighlightUnderlayColor}>
      <Image source={Icons.back} style={styles.backArrow} />
    </TouchableHighlight>
  );
};

LeftHeader.propTypes = {
  onLeftPress: PropTypes.func
};

export default LeftHeader;
