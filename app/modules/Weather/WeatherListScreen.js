import Geolocation from '@react-native-community/geolocation';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Alert, FlatList, View } from 'react-native';
import PushNotification from 'react-native-push-notification';
import { useDispatch, useSelector } from 'react-redux';
import { ItemSeparator, WeatherRow } from '../../components';
import { getWeatherList } from '../../redux/actions';
import { weatherCurrentLoc } from '../../services/Api';
import { convertKelvinToCelsius, getImageFromUrl } from '../../services/Utils';
import styles from './Styles/WeatherListScreenStyles';
const WeatherListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { weatherList, loading } = useSelector(state => state.weather);
  const [currentLocation, setCurrentLocation] = useState({ lat: 23.68, long: 90.35 });

  //Calling current weather api on location change listener and
  //update info in local notification
  useEffect(() => {
    Geolocation.watchPosition(async (position) => {
      const { latitude, longitude } = position?.coords
      const response = await weatherCurrentLoc({ lat: latitude, long: longitude })
      if (response.status === 200) {
        const { main, weather } = response?.data
        localNoti(`Current Temperature ${convertKelvinToCelsius(main?.temp)}`, weather?.[0]?.icon);
      }
    });
  }, [])

  //Getting current location and api call
  useEffect(() => {
    Geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position?.coords;
      setCurrentLocation({ lat: latitude, long: longitude });
      dispatch(getWeatherList({ lat: latitude, long: longitude }));
    }, (error) => Alert.alert('WeatherApp', 'Please enable location permission'));
  }, [dispatch, getWeatherList]);

  const onRefresh = () => {
    dispatch(getWeatherList(currentLocation));
  }

  //set local notification
  const localNoti = (title, icon) => {
    PushNotification.localNotification({
      channelId: 'localNotification',
      id: 0,
      title: "Weather App",
      message: title,
      ongoing: true,
      largeIconUrl: getImageFromUrl(icon)
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={weatherList}
        refreshing={loading}
        keyExtractor={(item) => item?.id}
        renderItem={({ item }) => <WeatherRow {...item} onPress={() => navigation.navigate('WeatherDetailScreen', { item })} />}
        ItemSeparatorComponent={() => <ItemSeparator />}
        onRefresh={onRefresh}
      />
    </View>
  );
};

WeatherListScreen.propTypes = {
  navigation: PropTypes.object
};

export default WeatherListScreen;
