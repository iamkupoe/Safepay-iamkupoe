import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";

import LogInScreen from "../../../src/components/screens/LogInScreen";
import SignUpScreen from "../../../src/components/screens/SignUpScreen";
import HomeScreen from "../../../src/components/screens/HomeScreen";
import GetStarted from "../../../src/components/screens/GetStartedScreen copy";
import Select from "../../../src/components/screens/OptionScreen copy";
import Details from "../../../src/components/screens/TransactionDetailScreen";
import Summary from "../../../src/components/screens/SummaryScreen";
import Payment from "../../../src/components/screens/PaymentScreen";
import Alert from "../../../src/components/screens/AlertScreen";

const Stack = createStackNavigator();

function AppContainer({ auth }) {
  return (
    <NavigationContainer>
      {auth.login ? (
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="HomeScreen"
            component={HomeScreen}
          />

          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="GetStarted"
            component={GetStarted}
          />

          <Stack.Screen
            options={{
              headerTitle: "Select option",
              headerStyle: {
                backgroundColor: "#4470da",
              },
              headerTintColor: "white",
              headerTitleAlign: "center",
            }}
            name="Select"
            component={Select}
          />

          <Stack.Screen
            options={{
              headerTitle: "Transaction Details",
              headerStyle: {
                backgroundColor: "#4470da",
              },
              headerTintColor: "white",
              headerTitleAlign: "center",
            }}
            name="Details"
            component={Details}
          />

          <Stack.Screen
            options={{
              headerTitle: "Transaction Summary",
              headerStyle: {
                backgroundColor: "#4470da",
              },
              headerTintColor: "white",
              headerTitleAlign: "center",
            }}
            name="Summary"
            component={Summary}
          />

          <Stack.Screen
            options={{
              headerTitle: "Payment",
              headerStyle: {
                backgroundColor: "#4470da",
              },
              headerTintColor: "white",
              headerTitleAlign: "center",
            }}
            name="Payment"
            component={Payment}
          />

          <Stack.Screen
            options={{
              headerTitle: "Alert",
              headerStyle: {
                backgroundColor: "#4470da",
              },
              headerTintColor: "white",
              headerTitleAlign: "center",
            }}
            name="Alert"
            component={Alert}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="LogInScreen">
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="LogInScreen"
            component={LogInScreen}
          />

          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="SignUpScreen"
            component={SignUpScreen}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state,
  };
};

export default connect(mapStateToProps)(AppContainer);
