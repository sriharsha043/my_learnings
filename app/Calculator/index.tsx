import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  // Function to handle button press
  const handlePress = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input).toString()); // Evaluate the input string
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput(input + value);
    }
  };

  return (
    <View style={styles.container}>
      {/* Display Section */}
      <View style={styles.displayContainer}>
        <Text style={styles.inputText}>{input}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>

      {/* Button Grid */}
      <View style={styles.buttonContainer}>
        {[
          ["7", "8", "9", "/"],
          ["4", "5", "6", "*"],
          ["1", "2", "3", "-"],
          ["C", "0", "=", "+"],
        ].map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((btn) => (
              <TouchableOpacity
                key={btn}
                style={[
                  styles.button,
                  btn === "=" && styles.equalButton, // Apply green background to "=" button
                ]}
                onPress={() => handlePress(btn)}
              >
                <Text style={styles.buttonText}>{btn}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Calc by Harsha</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
  },
  displayContainer: {
    flex: 2,
    backgroundColor: "#2c3e50",
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 20,
  },
  inputText: {
    color: "#ecf0f1",
    fontSize: 36,
    marginBottom: 10,
  },
  resultText: {
    color: "#bdc3c7",
    fontSize: 24,
  },
  buttonContainer: {
    flex: 5,
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  button: {
    flex: 1,
    backgroundColor: "#34495e",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    margin: 5,
    height: 60,
  },
  equalButton: {
    backgroundColor: "#27ae60", // Green background for "=" button
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  footer: {
    padding: 10,
    backgroundColor: "#ecf0f1",
    alignItems: "center",
  },
  footerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2c3e50",
  },
});
