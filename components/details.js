import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './Header';

const Details = ({route}) => {
  const {data} = route.params;
  return (
    <View style={styles.box}>
      <Header title={'DETAILS'} isUserDetails={true} />
      <View style={styles.container}>
        <Text style={styles.heading}>User Details</Text>
        <View style={styles.information}>
          <Text style={styles.text}>Username: {data.username}</Text>
          <Text style={styles.text}>Email: {data.email}</Text>
          <Text style={styles.text}>Phone: {data.phone}</Text>
          <Text style={styles.text}>City: {data.address.city}</Text>
          <Text style={styles.text}>Company: {data.company.name}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: '#f5f6f7',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    marginLeft: 100,
  },
  information: {
    justifyContent: 'center',
  },
  heading: {
    fontSize: 25,
    marginBottom: 50,
    color: '#000',
    fontWeight: 'bold',
  },
  text: {
    padding: 5,
    color: '#000',
  },
});

export default Details;
