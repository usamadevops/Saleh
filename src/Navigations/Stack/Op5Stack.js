/* eslint-disable prettier/prettier */
// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screens from '../../Screens';
import * as Component from '../../Components';

const Stack = createNativeStackNavigator();

export default function Op5Stack(){
    return(
        <Stack.Navigator>
             <Stack.Screen
        name="Op1"
        options={{
          header: ({ navigation }) => (
            <Component.Header.OptionsHeader name={'التشخيص'}  navigation={navigation}/>
          ),
        }}
        component={Screens.Dashobard.Options.Op5.Op5}
      />
        </Stack.Navigator>
    );
}