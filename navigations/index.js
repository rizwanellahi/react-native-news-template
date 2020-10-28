import * as React from 'react';
import {Platform, Platfrom} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
// Main Screens
import Home from './../screens/Home/';
import Sports from './../screens/Sports/';
import Technology from './../screens/Technology/';
import Business from './../screens/Business/';
import SingleScreen from './../screens/SingleScreen/';
import WebPage from './../screens/WebPage/';
// Inside More Screens
import MoreScreen from './../screens/More/';
import Bitcoin from './../screens/More/Bitcoin/';
import Entertainment from './../screens/More/Entertainment/';
import General from './../screens/More/General/';
import Health from './../screens/More/Health/';
import TechCrunch from './../screens/More/TechCrunch/';

// Stack Screens
const HomeStack = createStackNavigator();
const SportsStack = createStackNavigator();
const TechnologyStack = createStackNavigator();
const BusinessStack = createStackNavigator();
const MoreStack = createStackNavigator();

// Bottom Tab
const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'earth' : 'earth-outline';
            } else if (route.name === 'Sports') {
              iconName = focused ? 'baseball' : 'baseball-outline';
            } else if (route.name === 'Technology') {
              iconName = focused ? 'rocket' : 'rocket-outline';
            } else if (route.name === 'Business') {
              iconName = focused ? 'bar-chart' : 'bar-chart-outline';
            } else if (route.name === 'More') {
              iconName = focused ? 'grid' : 'grid-outline';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: '#a2a2a2',
          tabStyle: {backgroundColor: '#f5f5f5'},
          style: {
            borderTopWidth: 0,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            overflow: 'hidden',
            backgroundColor: '#f5f5f5',
            zIndex: 8,
            position: 'absolute',
            bottom: 0,
            padding: 5,
            paddingBottom: 4,
            height: 60,
            ...Platform.select({
              ios: { 
                paddingBottom: 10,
                height: 60,
              }
            })
          },
        }}>
        {/* ---- Home Screens Navigation ---- */}
        <Tab.Screen name="Home">
          {() => (
            <HomeStack.Navigator>
              <HomeStack.Screen
                options={{headerShown: false}}
                name="Home"
                component={Home}
              />
              <HomeStack.Screen
                options={{headerShown: false}}
                name="SingleScreen"
                component={SingleScreen}
              />
              <HomeStack.Screen
                options={{headerTitle: false, headerBackTitle: false}}
                name="WebPage"
                component={WebPage}
              />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
        {/* ---- Sports Screens Navigations ---- */}
        <Tab.Screen name="Sports">
          {() => (
            <SportsStack.Navigator>
              <SportsStack.Screen name="Sports" component={Sports} />
              <SportsStack.Screen
                options={{headerShown: false}}
                name="SingleScreen"
                component={SingleScreen}
              />
              <SportsStack.Screen
                options={{headerTitle: false, headerBackTitle: false}}
                name="WebPage"
                component={WebPage}
              />
            </SportsStack.Navigator>
          )}
        </Tab.Screen>
        {/* ---- Technology Screens Navigations ---- */}
        <Tab.Screen name="Technology">
          {() => (
            <TechnologyStack.Navigator>
              <TechnologyStack.Screen
                name="Technology"
                component={Technology}
              />
              <TechnologyStack.Screen
                options={{headerShown: false}}
                name="SingleScreen"
                component={SingleScreen}
              />
              <TechnologyStack.Screen
                options={{headerTitle: false, headerBackTitle: false}}
                name="WebPage"
                component={WebPage}
              />
            </TechnologyStack.Navigator>
          )}
        </Tab.Screen>
        {/* ---- Business Screens Navigations ---- */}
        <Tab.Screen name="Business">
          {() => (
            <BusinessStack.Navigator>
              <BusinessStack.Screen name="Business" component={Business} />
              <BusinessStack.Screen
                options={{headerShown: false}}
                name="SingleScreen"
                component={SingleScreen}
              />
              <BusinessStack.Screen
                options={{headerTitle: false, headerBackTitle: false}}
                name="WebPage"
                component={WebPage}
              />
            </BusinessStack.Navigator>
          )}
        </Tab.Screen>
        {/* ---- More Screens Navigations ---- */}
        <Tab.Screen name="More">
          {() => (
            <MoreStack.Navigator>
              <MoreStack.Screen name="More" component={MoreScreen} />
              <MoreStack.Screen name="Bitcoin" component={Bitcoin} />
              <MoreStack.Screen
                name="Entertainment"
                component={Entertainment}
              />
              <MoreStack.Screen name="General" component={General} />
              <MoreStack.Screen name="Health" component={Health} />
              <MoreStack.Screen name="TechCrunch" component={TechCrunch} />
              <MoreStack.Screen
                options={{headerShown: false}}
                name="SingleScreen"
                component={SingleScreen}
              />
              <MoreStack.Screen
                options={{headerTitle: false, headerBackTitle: false}}
                name="WebPage"
                component={WebPage}
              />
            </MoreStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
