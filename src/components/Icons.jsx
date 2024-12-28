import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Icons = ({ type, light }) => {

  let imageSource;
  let iconStyle = [styles.icon];

  switch (type) {
    case 'close':
      imageSource = require('../assets/common/close.png');
      iconStyle.push(styles.color);
      break;
    case 'settings':
      imageSource = require('../assets/common/settings.png');
      iconStyle.push(styles.color);
      break;
    case 'play':
      imageSource = require('../assets/common/play.png');
      iconStyle.push(styles.color);
      break;
    case 'pause':
      imageSource = require('../assets/common/pause.png');
      iconStyle.push(styles.color);
      break;
    case 'vibration':
      imageSource = require('../assets/common/vibration.png');
      iconStyle.push(styles.color);
      break;
    case 'vibration-off':
      imageSource = require('../assets/common/vibration-off.png');
      iconStyle.push(styles.color);
      break;
  }

  return (
    <Image 
      source={imageSource} 
      style={iconStyle} 
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  color: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    tintColor: '#3d4145',
  },
  light: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    tintColor: '#fa982f',
  },
  contain: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  }
});

export default Icons;
