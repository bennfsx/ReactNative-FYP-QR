import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const INPUT_OFFSET = 110;

// Import your image from the assets folder
import ScansavvyLogo from "../assets/image/scansavvyTrans.png";

export default function Login() {
  const navigation = useNavigation();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    // Perform login logic here
    // For example, check credentials and if valid, navigate to the Home screen
    if (form.email === "q" && form.password === "e") {
      navigation.navigate("Home");
    } else {
      // Handle invalid credentials
      alert("Invalid email or password");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#e8ecf4" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerIcon}>
            {/* Use Image component for the logo */}
            <Image source={ScansavvyLogo} style={{ width: 200, height: 200 }} />
          </View>
          <Text style={styles.title}>
            Welcome to <Text style={{ color: "#FF8A36" }}>ScanSavvy</Text>
          </Text>
          <Text style={styles.subtitle}>Securing your credentials</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email address</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(email) => setForm({ ...form, email })}
              placeholder=""
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.email}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              autoCorrect={false}
              onChangeText={(password) => setForm({ ...form, password })}
              placeholder=""
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              secureTextEntry={true}
              value={form.password}
            />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity onPress={handleLogin}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Sign in</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.formActionSpacer} />
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.btnSecondary}>
                <MaterialCommunityIcons
                  color="#000"
                  name="face-recognition"
                  size={22}
                  style={{ marginRight: 12 }}
                />
                <Text style={styles.btnSecondaryText}>Face ID</Text>
                <View style={{ width: 34 }} />
              </View>
            </TouchableOpacity>
          </View>

          {/* Sign up link */}
          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            style={{ alignSelf: "center", marginTop: 20 }}
          >
            <Text style={{ color: "#000" }}>
              Don't have an account yet?{" "}
              <Text style={{ color: "#FF8A36" }}>Sign up here!</Text>
            </Text>
          </TouchableOpacity>

          <Text style={styles.formFooter}>
            By clicking "Sign in" above, you agree to ScanSavvy's{" "}
            <Text style={{ fontWeight: "600" }}>Terms & Conditions</Text> and{" "}
            <Text style={{ fontWeight: "600" }}>Privacy Policy</Text>.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    fontSize: 27,
    fontWeight: "700",
    color: "#1d1d1d",
    marginBottom: 6,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#929292",
    textAlign: "center",
  },
  header: {
    marginVertical: 36,
  },
  headerIcon: {
    alignSelf: "center",
    width: 200,
    height: 200,
    // marginBottom: 36,
    // borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    marginBottom: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginVertical: 24,
  },
  formActionSpacer: {
    marginVertical: 8,
  },
  formFooter: {
    marginTop: "auto",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "400",
    color: "#929292",
    textAlign: "center",
  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    position: "absolute",
    width: INPUT_OFFSET,
    lineHeight: 44,
    top: 0,
    left: 0,
    bottom: 0,
    marginHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 13,
    fontWeight: "500",
    color: "#c0c0c0",
    zIndex: 9,
  },
  inputControl: {
    height: 44,
    backgroundColor: "#fff",
    paddingLeft: INPUT_OFFSET,
    paddingRight: 24,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: "#000",
    borderColor: "#000",
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "600",
    color: "#fff",
  },
  btnSecondary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: "transparent",
    borderColor: "#000",
  },
  btnSecondaryText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "600",
    color: "#000",
  },
});
