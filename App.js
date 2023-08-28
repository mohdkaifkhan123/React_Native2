/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useState, useEffect} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Hamburger} from './assets/SVG';
import Color from './assets/UI/Color';
import {SearchIcon} from './assets/SVG';
import {Scroller} from './assets/SVG';
import {Filter} from './assets/SVG';
import LottieView from 'lottie-react-native';
import {
  Nike,
  Converse,
  Nike2,
  Nike3,
  Nike4,
  Nike5,
  Nike6,
  Nike7,
  Converse2,
  Heart,
  Nike8,
} from './assets/SVG';

const Fun = () => {
  const [change, setChange] = useState(true);
  const checkWork = () => {
    if (change) {
      setChange(false);
    } else {
      setChange(true);
    }
  };
  return (
    <TouchableOpacity onPress={checkWork}>
      <View style={styles.heart}>
        {change && <Heart />}
        {!change && (
          <LottieView
            source={require('./assets/SVG/HeartLottie.json')}
            autoPlay
            loop={false}
            style={styles.lotte}
          />
          //hdudh
        )}
      </View>
    </TouchableOpacity>
  );
};
const App = () => {
  const DATA = [
    {
      id: 1,
      heading: 'Nike',
      subheadhing: 'Air Force 1 Jester XX Black Sonic Yellow ...',
      image: <Nike />,
      price: '$96',
      heart: <Heart />,
    },
    {
      id: 2,
      heading: 'Converse',
      subheadhing: 'Run Star Hike Three Color Unisex',
      image: <Converse />,
      price: '$85.5',
      heart: <Heart />,
    },
    {
      id: 3,
      heading: 'Nike',
      subheadhing: 'Air Jordan 1 Retro High Obsidian UNC ',
      image: <Nike2 />,
      price: '$196',
      heart: <Heart />,
    },
    {
      id: 4,
      heading: 'Nike',
      subheadhing: 'Air Force 1 Jester XX Black Sonic Yellow ...',
      image: <Nike3 />,
      price: '$115',
      heart: <Heart />,
    },
    {
      id: 5,
      heading: 'Nike',
      subheadhing: 'Air Force 1 Jester XX Black Sonic Yellow ...',
      image: <Nike4 />,
      price: '$98',
      heart: <Heart />,
    },
    {
      id: 6,
      heading: 'Nike',
      subheadhing: 'Air Force 1 Jester XX Black Sonic Yellow ...',
      image: <Nike5 />,
      price: '$99',
      heart: <Heart />,
    },
    {
      id: 7,
      heading: 'Nike',
      subheadhing: 'Air Force 1 Jester XX Black Sonic Yellow ...',
      image: <Nike6 />,
      price: '$96',
      heart: <Heart />,
    },
    {
      id: 8,
      heading: 'Nike',
      subheadhing: 'Air Force 1 Jester XX Black Sonic Yellow ...',
      image: <Nike7 />,
      price: '$96',
      heart: <Heart />,
    },
    {
      id: 9,
      heading: 'Converse',
      subheadhing: 'Air Force 1 Jester XX Black Sonic Yellow ...',
      image: <Converse2 />,
      price: '$96',
      heart: <Heart />,
    },
    {
      id: 10,
      heading: 'Nike',
      subheadhing: 'Air Force 1 Jester XX Black Sonic Yellow ...',
      image: <Nike8 />,
      price: '$96',
      heart: <Heart />,
    },
  ];

  return (
    <>
      <SafeAreaView style={styles.sectionContainer}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.topbar}>
            <Hamburger />
          </View>
          <View style={styles.input}>
            <SearchIcon style={styles.SearchIcon} />
            <TextInput style={styles.itext} placeholder="Search product" />
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.Text}>Sneakers</Text>
          <View style={styles.icon}>
            <Scroller />
            <Filter />
          </View>
        </View>
        <View style={styles.item}>
          <Text>10 products found</Text>
        </View>

        <View style={styles.container}>
          <FlatList
            data={DATA}
            numColumns={2}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.irender}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.shoes}>{item.image}</View>
                  <Fun />
                </View>
                <Text style={styles.title}>{item.heading}</Text>
                <Text style={styles.subheadhing}>{item.subheadhing}</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: Color.lightCream,
  },
  topbar: {
    marginTop: 29,
    marginLeft: 20,
    flexDirection: 'row',
  },
  SearchIcon: {
    marginLeft: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    marginLeft: 25,
    margin: 15,
    borderRadius: 10,
    backgroundColor: Color.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 1,
    color: Color.white,
    fontSize: 14,
    fontWeight: '600',
  },
  itext: {
    color: Color.lightGrey,
    fontSize: 16,
    fontWeight: '500',
  },
  section: {
    paddingTop: 20,
    flexDirection: 'row',
  },
  Text: {
    color: Color.black,
    fontWeight: 'bold',
    fontSize: 37,
    paddingLeft: 20,
  },
  icon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 7,
    paddingRight: 20,
  },
  item: {
    color: Color.black,
    fontSize: 28,
    fontWeight: '400',
    paddingTop: 7,
    paddingLeft: 20,
  },
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingTop: 20,
  },
  irender: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: Color.white,
    marginBottom: 20,
    marginRight: 20,
  },
  shoes: {
    paddingHorizontal: 15,
    paddingTop: 35,
  },
  heart: {
    position: 'absolute',
    right: 10,
    top: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  subheadhing: {
    fontSize: 13,
    flexWrap: 'wrap',
    paddingTop: 7,
    paddingHorizontal: 15,
  },
  price: {
    fontSize: 13,
    paddingTop: 7,
    paddingHorizontal: 15,
    paddingBottom: 15,
    fontWeight: '700',
  },
  lotte: {
    right: -32,
    top: -37,
    height: 90,
    width: 88,
  },
});

export default App;
