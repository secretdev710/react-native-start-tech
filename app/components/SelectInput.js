import React from "react";
import { View, StyleSheet } from "react-native";
import RNPickerSelect from 'react-native-picker-select';

import { theme } from "../core/theme";

export default function SelectInput({ errorText, description, ...props }) {
  return (
    <View style={styles.container}>
      <RNPickerSelect
        // style={styles.input}
        style={{
          inputIOS: {
            paddingTop: 10,    // Padding top 10px
            paddingBottom: 10, // Padding bottom 10px
            paddingLeft: 0,    // Padding left 0px
            paddingRight: 0,   // Padding right 0px
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 5,
          },
          inputAndroid: {
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 0,
            paddingRight: 0,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 5,
          },
        }}
        selectionColor={theme.colors.primary}
        underlineColor="transparent"
        mode="outlined"
        {...props}
      />
      {/* <Input
        style={styles.input}
        selectionColor={theme.colors.primary}
        underlineColor="transparent"
        mode="outlined"
        {...props}
      />
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 12,
  },
  input: {
    backgroundColor: theme.colors.surface,
    height: 48,
    paddingTop: 10,
    paddingBottom: 10,
    fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
    letterSpacing: 0.15,
    lineHeight: 19.2,
    fontSize: 16,
    // color: rgb(28, 27, 31),
    // verticalAlign: 'middle',
    // textAlign: 'left',
    // minWidth: 65,
    // outline: none,
    // paddingTop: 10,    // Padding top 10px
    // paddingBottom: 10, // Padding bottom 10px
    // paddingLeft: 0,    // Padding left 0px
    // paddingRight: 0,   // Padding right 0px
    // borderWidth: 1,
    // borderColor: '#ccc',
    // borderRadius: 5,
  },
  description: {
    fontSize: 13,
    color: theme.colors.secondary,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,
  },
});