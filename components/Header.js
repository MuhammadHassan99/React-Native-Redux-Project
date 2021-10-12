import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icon} from 'native-base';
import {useNavigation} from '@react-navigation/core';

const Header = ({title, isUserDetails}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {!isUserDetails ? (
        <Text style={styles.titleWithButton}>{title}</Text>
      ) : (
        <View style={styles.box}>
          <View>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => navigation.goBack()}>
              <Text style={styles.backBtn}>
                <Icon
                  name="md-chevron-back-circle"
                  type="Ionicons"
                  style={{fontSize: 36, color: '#fef'}}
                />
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2973ab',
    alignItems: 'center',
    justifyContent: 'center',
    height: '12%',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    marginRight: 50,
    fontWeight: 'bold',
  },
  content: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  backBtn: {
    marginLeft: 3,
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
  },
  titleWithButton: {
    color: '#fff',
    fontSize: 20,
    marginRight: 10,
    fontWeight: 'bold',
  },
});

export default Header;
