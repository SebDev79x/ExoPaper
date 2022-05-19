import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import ListActivities from './list'
import Search from './searchbar'
import { SafeAreaProvider } from 'react-native-safe-area-context';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
}

/* const RightContent = props => <Avatar.Icon {...props} icon="folder" />
 */export default function App() {
  

  return (
    <SafeAreaProvider>
    <PaperProvider theme={theme}>

      <Appbar >
      <Appbar.Content title="Activity Tracker" subtitle="I'm watching you !" />
        {/* <Appbar.Action
          icon="archive"
          onPress={() => console.log('Pressed archive')}
        />
        <Appbar.Action icon="mail" onPress={() => console.log('Pressed mail')} />
        <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
        <Appbar.Action
          icon="delete"
          onPress={() => console.log('Pressed delete')}
        /> */}
        <Avatar.Image style={styles.avatar} size={36} source={require('./assets/vador.png')} />
      </Appbar>
      <View>
        <Text style={styles.home}>Home</Text>

      </View>
      <Search/>
      <ListActivities/>
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions> */}
        <Appbar style={styles.bottom}>
        <Appbar.Action icon="mail" onPress={() => console.log('Pressed mail')} />
        <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
        <Appbar.Action
          icon="delete"
          onPress={() => console.log('Pressed delete')}
        />
        </Appbar>
    </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    position:'absolute',
    right: 0,
    left:0,
    bottom: 0,
  },
  home :{
    fontSize:35
  }
  
});
