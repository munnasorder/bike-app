import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
// import Carousel from 'react-native-snap-carousel';

const App = () => {
  return (
    <View>
      {/* home page header */}
      <View className="flex-row justify-between items-center px-5 mt-3">
        <Text className="font-semibold text-xl text-green-300">
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
      <View className="mx-3 mt-5 bg-indigo-700/80 py-2 rounded">
        <Text className="text-white font-bold text-center text-lg">
          Quick Link
        </Text>
      </View>

      {/* <View>
        <View>
          <Image />
          <Text>Community</Text>
        </View>
      </View> */}
    </View>
  );
};

export default App;
