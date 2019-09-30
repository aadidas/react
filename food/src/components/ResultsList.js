import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import ResultsDetail from "./ResultsDetail";
import { withNavigation } from "react-navigation";

const ResultsList = ({ title, results, navigation }) => {
  if (!results.lenghth) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> {title} </Text>
      <Text> Results: {results.lenghth} </Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ResultsShow", { id: item.id })
              }
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5
  },
  container: {
    marginBottom: 15
  }
});

export default withNavigation(ResultsList);
