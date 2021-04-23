import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Strings } from '../constants';
import WeatherDetailScreen from '../modules/Weather/WeatherDetailScreen';
import WeatherListScreen from '../modules/Weather/WeatherListScreen';
import { createChannel } from '../services/NotificationServices';
import { Colors, Fonts } from '../theme';

const Stack = createStackNavigator();

const headerOptions = {
  title: Strings.weatherHeader,
  headerLayoutPreset: 'center',
  headerStyle: {
    backgroundColor: Colors.primary
  },
  headerTintColor: Colors.white,
  headerTitleStyle: {
    fontFamily: Fonts.roboto,
  },
  headerTitleAlign: 'center'
};

const AppNavigation = () => {

  useEffect(() => {
    createChannel()
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WeatherListScreen" component={WeatherListScreen} options={headerOptions} />
        <Stack.Screen
          name="WeatherDetailScreen"
          component={WeatherDetailScreen}
          options={headerOptions}
        />
      </Stack.Navigator>
    </NavigationContainer >
  );
};

export default AppNavigation;
