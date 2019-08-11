import React from "react"
import { Text, View, StyleSheet, Button, FlatList } from "react-native"
import axios from "axios"
import { jsxAttribute } from "@babel/types";
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 1,
      articles: []
    }
  }
  componentDidMount() {
    const url = "https://newsapi.org/v2/everything?q=bitcoin&from=2019-07-11&sortBy=publishedAt&apiKey=c41c232f8713419c8a445de4a7876df8"
    axios.get(url).then((res) => {
      this.setState({ articles: res.data.articles });
    }).catch(err => {
      alert(JSON.stringify(err))
    });
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <View style={styles.main}>

        <View style={styles.toolbar}>
          <Text style={styles.text}>News App</Text>
          <Text style={styles.text}>More</Text>
        </View>
        <FlatList
          data={this.state.articles}
          renderItem={
            ({ item }) => {
              return (
                <View>
                  <Text>{item.author}</Text>
                </View>
              )
            }
          }
        />

      </View>
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
