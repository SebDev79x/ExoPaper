import React from 'react';
import { SearchBar } from 'react-native-elements';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Appbar, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

/* import ListActivities from './list'
 *//* import Search from './searchbar'
 */import { SafeAreaProvider } from 'react-native-safe-area-context';
/* import List from './activities'
 */const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
}
const list = [
  {
    activity: 'Marche à pied',
    date: '26/05/2022',
    distance: '6',
    time: '0h50'
  },
  {
    activity: 'Marche sans les pieds',
    date: '26/05/2022',
    distance: '6',
    time: '0h50'
  },
  {
    activity: 'Canapé',
    date: '21/05/2022',
    distance: '',
    time: '48h00'
  },
  {
    activity: 'Gaming',
    date: '20/01/2023',
    distance: '',
    time: '48h00'
  },
  {
    activity: 'Glandage',
    date: '20/01/2023',
    distance: '',
    time: '21h00'
  }, {
    activity: 'Couture',
    date: '20/01/2023',
    distance: '',
    time: '08h00'
  }
]
export default function App() {
  // Activities list in const
  // the value of the search field 
  const [activity, setActivity] = useState('');

  // the search result
  const [foundActivity, setfoundActivity] = useState(list);
  const filter = (e) => {
    const keyword = e.target.value;
    if (keyword !== '') {
      const results = list.filter((e) => {
        return e.activity.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setfoundActivity(results);
    } else {
      setfoundActivity(list);
      // If the text field is empty, show all users
    }

    setActivity(keyword);
  };
  console.log("filter", filter)
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
        <SearchBar
          platform="default"
          containerStyle={{}}
          inputContainerStyle={{}}
          inputStyle={{}}
          leftIconContainerStyle={{}}
          rightIconContainerStyle={{}}
          loadingProps={{}}
          onChange={filter}
          onClearText={() => console.log(onClearText())}
          placeholder="Tu cherches un truc ?"
          placeholderTextColor="blanchedalmond"
          cancelButtonProps={{}}
          onCancel={() => console.log(onCancel())}
          value={activity}
        />
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
        <View>

          <FlatList

            data={foundActivity}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
              <View style={{
                alignItems: 'center'
              }}
              >
                <Card style={{
                  borderWidth: 1,
                  borderColor: "black",
                  marginBottom: 10,
                  elevation: 30,
                  shadowColor: 'black',
                  width: '80%'
                }}>
                  <Card.Content style={[styles.content, { flex: 1 }]}>
                    <View style={[styles.contentColumn, { flex: .5 }]}>
                      <Paragraph>{item.date}</Paragraph>
                      <Title>{item.activity}</Title>
                    </View>
                    <View style={[{ flex: .5 }]}>
                      <Card.Cover style={{ width: '80%', height: '100%' }} source={{ uri: 'https://picsum.photos/700' }} /></View>
                  </Card.Content>
                  <Card.Content style={styles.content}>
                    <Paragraph>Distance : </Paragraph>
                    <Paragraph>Durée : </Paragraph>
                  </Card.Content>
                  <Card.Content style={styles.content}>
                    <View>{
                      item.distance == '' ? <Paragraph>Aucune</Paragraph> : <Paragraph>{item.distance} mn</Paragraph>
                    }</View>
                    <Paragraph>{item.time} mn</Paragraph>
                  </Card.Content>
                </Card>
              </View>
            }
          />
        </View>
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
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
  },
  home: {
    fontSize: 35
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  contentColumn: {
    flexDirection: 'column',
  }

});
