import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Picker,
  StyleSheet,
} from "react-native";
import { connect } from "react-redux";

function PaymentScreen({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("Network");
  return (
    <View style={styles.parentContainer}>
      <View style={styles.paymentTextContainer}>
        <Text style={styles.paymentText}>Payment</Text>
      </View>

      <View style={styles.totalAmount}>
        <Text style={styles.amountText}>GH{"\u20B5"}1,820.20</Text>
      </View>

      <View style={styles.momoTextContainer}>
        <Text style={styles.momoText}>
          Enter your mobile money{"\n"}number and provider to start{"\n"}the
          payment
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="050 000 0000"
          keyboardType="numeric"
          style={styles.input}
        />
      </View>

      <View style={styles.picker}>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 300 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item
            label="Choose Provider"
            value="Choose Provider"
            color="grey"
          />
          <Picker.Item label="MTN" value="MTN" color="blue" />
          <Picker.Item label="AirtelTigo" value="AirtelTigo" color="blue" />
          <Picker.Item label="Vodafone" value="Vodafone" color="blue" />
        </Picker>
      </View>

      <View style={styles.confirmContainer}>
        <TouchableOpacity
          style={styles.confirmOpacity}
          onPress={() => {
            navigation.navigate("Alert");
          }}
        >
          <Text style={styles.confirmText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    justifyContent: "space-around",
  },

  paymentText: {
    color: "#00d3ff",
    fontSize: 25,
    fontWeight: "bold",
    paddingLeft: 30,
  },

  totalAmount: {
    backgroundColor: "lightgrey",
    height: 150,
    width: 300,
    alignSelf: "center",
  },

  amountText: {
    fontSize: 25,
    textAlign: "center",
    paddingTop: 70,
    fontWeight: "bold",
    color: "#423706",
  },

  momoTextContainer: {
    alignSelf: "center",
  },

  momoText: {
    textAlign: "center",
    fontSize: 20,
  },

  input: {
    width: 300,
    height: 50,
    backgroundColor: "lightgrey",
    marginLeft: 30,
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 15,
  },

  picker: {
    backgroundColor: "lightgrey",
    borderRadius: 8,
    height: 50,
    marginTop: 10,
    borderRadius: 10,
    width: 300,
    marginLeft: 30,
  },

  confirmOpacity: {
    backgroundColor: "#00d3ff",
    width: 150,
    height: 50,
    borderRadius: 30,
    alignSelf: "center",
  },

  confirmText: {
    color: "#fff",
    textAlign: "center",
    paddingTop: 12,
    fontWeight: "bold",
    fontSize: 20,
  },
});

const mapStateToProps = (state) => {
  return {
    transact: state.transactions,
  };
};

export default connect(mapStateToProps, null)(PaymentScreen);
