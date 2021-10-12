import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import UserList from './userList';
import Header from './Header';
import {fetchUser, loader, removeUser} from '../src/store/action';
import {connect} from 'react-redux';

const Home = ({user, getUser, deleteUser, loader, isLoading}) => {
  useEffect(() => {
    getUser();
    loader(true);
  }, []);

  return (
    <View style={styles.box}>
      <Header title={'HOME'} />
      <View style={styles.bigContainer}>
        <View style={styles.container}>
          {isLoading ? (
            <View style={styles.loader}>
              <ActivityIndicator size="large" />
            </View>
          ) : (
            <View style={styles.content}>
              <Text style={styles.text}>USERS</Text>
              <View style={styles.list}>
                <FlatList
                  data={user}
                  keyExtractor={item => item.id}
                  removeClippedSubviews={false}
                  renderItem={({item}) => (
                    <UserList
                      item={item}
                      deleteUser={deleteUser}
                      isLoading={isLoading}
                    />
                  )}
                />
              </View>
            </View>
          )}
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
  bigContainer: {
    flex: 1,
    backgroundColor: '#f5f6f7',
  },
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: 30,
    flex: 1,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#f5f6f7',
    backgroundColor: '#c5e1fc',
    overflow: 'hidden',
  },
  list: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    margin: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  loader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '43%',
    marginBottom: 30,
  },
});

const mapStateToProps = state => {
  return {user: state.userReducer.data, isLoading: state.userReducer.isLoading};
};
const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(fetchUser()),
    deleteUser: id => dispatch(removeUser(id)),
    loader: val => dispatch(loader(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
