import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Profile from '../pages/Profile'
import New from '../pages/New'
import Home from '../pages/Home';

import { activate } from "firebase/remote-config";

const AppDrawer = createDrawerNavigator();

function AppRoutes(){
    return(
        <AppDrawer.Navigator
        screenOptions={{
           // headerShown: false,
            drawerStyle: {
                backgroundColor: '#171717',
            },
            drawerLabelStyle: {
                fontWeight: 'bold',
            },
            drawerActiveTintColor: '#FFF',
            drawerActiveBackgroundColor: '#00b94a',
            drawerInactiveBackgroundColor: '#000',
            drawerInactiveTintColor: '#DDD',
            drawerItemStyle: {
                marginVertical: 5,
            },
            
        }}
     
        >
            <AppDrawer.Screen name="Home" component={Home}/>
            <AppDrawer.Screen name="Registrar" component={New}/>
            <AppDrawer.Screen name="Perfil" component={Profile}/>
        </AppDrawer.Navigator>
    
    );
}

export default AppRoutes;
