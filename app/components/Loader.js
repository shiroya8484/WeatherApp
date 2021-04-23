import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Colors } from '../theme';
import styles from './Styles/LoaderStyles';

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" color={Colors.primary} />
    </View>
  );
};

export default Loader;
