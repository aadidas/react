import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = price => {
    return results.filter(result => {
      results.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="cost effective"
        />
        <ResultsList results={filterResultsByPrice("$$")} title="bit pricer" />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="big spender!"
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
