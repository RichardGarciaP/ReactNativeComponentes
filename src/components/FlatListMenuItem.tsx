import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MenuItem} from '../interfaces/appInterfaces';

const FlatListMenuItem = ({components, icon, name}: MenuItem) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(components as never)}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Icon name={icon} size={22} color={'gray'} />
          <Text style={styles.itemText}>{name}</Text>
        </View>
        <Icon name="chevron-forward-outline" size={22} color="gray" />
      </View>
    </TouchableOpacity>
  );
};

export default FlatListMenuItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerContainer: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19,
  },
});
