import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {Icon} from 'native-base';

const UserList = ({item, deleteUser, isLoading}) => {
  const navigation = useNavigation();

  return (
    <>
      {isLoading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.touch}>
            <View style={styles.text}>
              <Text style={styles.id}>{item.id}. </Text>
            </View>
            <TouchableOpacity
              style={styles.list}
              onPress={() => [
                navigation.navigate('Details', {
                  data: item,
                }),
              ]}>
              <View style={styles.text}>
                <Text style={styles.name}>{item.name}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteUser(item.id)}>
              <Icon style={styles.delete} name="deleteuser" type="AntDesign" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  list: {
    display: 'flex',
    justifyContent: 'flex-start',
    padding: 4,
    flex: 1,
  },
  text: {
    color: '#000',
    padding: 5,
    backgroundColor: '#fff',
    borderBottomColor: '#bbabd9',
    borderRightColor: '#bbabd9',
    borderLeftColor: '#f5f6f7',
    borderTopColor: '#f5f6f7',
    borderWidth: 1.5,
    borderRadius: 5,
  },
  touch: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 10,
  },
  delete: {
    color: '#9e0d0d',
  },
  id: {
    color: '#000',
    alignItems: 'center',
    marginLeft: 4,
  },
  name: {
    color: '#000',
    marginLeft: 2,
  },
});
export default UserList;
