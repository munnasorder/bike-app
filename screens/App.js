import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  SectionList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import communityImg from '../assets/community.png';
import browseImg from '../assets/market-analysis.png';
import accessoriesImg from '../assets/accressories.png';
import trackerImg from '../assets/tracker.png';
import resellerImg from '../assets/resaller.png';
import serviceImg from '../assets/service.png';
import registrationImg from '../assets/registration.png';
import helpImg from '../assets/help.png';
import shareByImg from '../assets/share-by.png';
import mapImg from '../assets/map.png';
import contactUsImg from '../assets/contact.png';
import socialWorkImg from '../assets/network.png';
// import Carousel from 'react-native-snap-carousel';

const App = () => {
  const quickLinksData = [
    {
      title: 'Community',
      bg: '#16a34a3b',
      imageUrl: communityImg,
    },
    {
      title: 'Browse',
      bg: '#3dbcbc3b',
      imageUrl: browseImg,
    },
    {
      title: 'Accessories',
      bg: '#ca8a043b',
      imageUrl: accessoriesImg,
    },
    {
      title: 'Tracker',
      bg: '#e11d483b',
      imageUrl: trackerImg,
    },
    {
      title: 'Reseller',
      bg: '#d977063b',
      imageUrl: resellerImg,
    },
    {
      title: 'Services',
      bg: '#c026d33b',
      imageUrl: serviceImg,
    },
    {
      title: 'Registration',
      bg: '#4f46e53b',
      imageUrl: registrationImg,
    },
    {
      title: 'Help',
      bg: '#db27773b',
      imageUrl: helpImg,
    },
    {
      title: 'Share By',
      bg: '#c91e1e3b',
      imageUrl: shareByImg,
    },
    {
      title: 'Map',
      bg: '#16a34a3b',
      imageUrl: mapImg,
    },
    {
      title: 'Contact Us',
      bg: '#dc26263b',
      imageUrl: contactUsImg,
    },
    {
      title: 'Social Work',
      bg: '#57534e3b',
      imageUrl: socialWorkImg,
    },
  ];
  return (
    <View className="flex-1">
      {/* home page header */}
      <View className="flex-row justify-between items-center px-5 mt-3">
        <Text className="font-semibold text-xl text-gray-700">
          Bike4Rider.com
        </Text>
        <View className="flex-row items-center space-x-3">
          <TouchableOpacity>
            <Image
              source={require('../assets/message.png')}
              className="w-10 h-10"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/notification.png')}
              className="w-10 h-10"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/girl.png')}
              className="w-10 h-10"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* sponsor banner */}
      <View className="mt-5 relative h-[200] justify-center items-center">
        <Image
          blurRadius={6}
          source={{
            uri: 'https://images.unsplash.com/photo-1467307983825-619715426c70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=777&q=80',
          }}
          className="w-full h-full absolute top-0"
        />
        <Text className="text-white font-bold text-3xl">Sponsor Banner</Text>
      </View>

      {/* quick view */}
      <View className="mx-3 mt-3 bg-indigo-700/80 py-2 rounded">
        <Text className="text-white font-bold text-center text-lg">
          Quick Link
        </Text>
      </View>

      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View className="flex-row flex-wrap flex-shrink mt-1 mx-3">
          {quickLinksData.map((item, i) => (
            <TouchableOpacity
              key={item.title + i}
              className=" basis-1/3 p-1 shadow-lg">
              <View
                style={{backgroundColor: `${item.bg}`}}
                className={'p-1 rounded'}>
                <Image
                  className="w-16 h-16 object-contain mx-auto"
                  source={item.imageUrl}
                />
                <Text className="text-base text-gray-800 text-center pt-1">
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default App;
