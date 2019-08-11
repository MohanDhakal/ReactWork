import React from "react"
import { Text, View, StyleSheet, Button } from "react-native"
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 1
    }
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <view style={styles.main}>

        <view style={styles.toolbar}>
          <Text style={styles.text}>News App</Text>
          <Text style={styles.text}>More</Text>
        </view>

        <view style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>
            {this.state.count}
          </Text>
        </view>
        <Button title="Click" onPress={() => this.increment} style={{ flex: 1 }} />
      </view>

    )
  }
}
export default App;
const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  toolbar: {
    height: 60,
    flexDirection: "row",
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 8,
  },
  text: {
    fontSize: 20,
    color: "#ffffff"
  }
})
