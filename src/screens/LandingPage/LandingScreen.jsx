import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

import LoginScreenImage from "./../../../assets/LoginScreen/images-new-mmm.png";

export const LandingScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <LinearGradient
        colors={["rgba(162, 3, 105, 0.75)", "rgba(118, 35, 171, 0.75),95.2%"]}
      >
        <Image source={LoginScreenImage} style={{ width: 400, height: 350 }} />
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  imageStye: {
    width: 300,
    height: 300,
  },
});
