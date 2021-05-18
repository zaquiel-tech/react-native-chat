import * as React from 'react';
import { StyleSheet } from 'react-native';

import chatRooms from '../data/ChatRooms';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import ChatListItem from '../components/ChatListItem';

export default function ChatsScreen() {
  return (
    <View style={styles.container}>
      <ChatListItem chatRoom={chatRooms[0]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
