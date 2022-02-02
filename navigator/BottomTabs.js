import * as React from 'react';
import AboutMe from '../views/HomePage'
import ContactUs from '../views/ContactUs'
import Introduction from '../views/image'
import TearmsAndConditions from '../views/TearmsAndConditions'
import Icon from 'react-native-vector-icons/Feather';
import { AnimatedTabBarNavigator, DotSize, TabElementDisplayOptions } from 'react-native-animated-nav-tab-bar'

const Tab = AnimatedTabBarNavigator();
const tabScreen = [{ name: 'Home', tabBarLabel: 'Home', component: AboutMe, icon: 'home' },
{ name: 'Image', tabBarLabel: 'Image', component: Introduction, icon: 'target' },
{ name: 'T&C', tabBarLabel: 'T&C', component: TearmsAndConditions, icon: 'sun' },
{ name: 'Contact Us', tabBarLabel: 'ContactUs', component: ContactUs, icon: 'headphones' },
];

const BottomTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: "#2b2d2d",
                inactiveTintColor: "#919b9f",
                activeBackgroundColor: '#00bcd4',
            }}
            appearance={{
                shadow: true,
                floating: true,
                whenActiveShow: TabElementDisplayOptions.ICON_ONLY,
                dotSize: DotSize.SMALL
            }}
        >
            {
                tabScreen.map((tab,index) => {
                    return (
                        <Tab.Screen
                            key ={index}
                            name={tab.name}
                            component={tab.component}
                            options={{
                                tabBarShowLabel: false,
                                tabBarIcon: ({ focused, color, size }) => (
                                    <Icon
                                        name={tab.icon}
                                        size={size ? size : 24}
                                        focused={focused}
                                        tintColor={color}
                                    />
                                ),
                            }} />
                    )
                })
            }
        </Tab.Navigator>
    );
}


export default BottomTabs