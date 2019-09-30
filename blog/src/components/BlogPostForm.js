import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View>
      <Text style={styles.lable}> Enter Title: </Text>
      <TextInput
        value={title}
        onChangeText={text => setTitle(text)}
        style={styles.input}
      />
      <Text style={styles.lable}> Enter Content: </Text>
      <TextInput
        value={content}
        onChangeText={text => setContent(text)}
        style={styles.input}
      />
      <Button title="SAVE BLOG POST" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: { title: "", content: "" }
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  lable: {
    fontSize: 25,
    marginBottom: 5
  }
});

export default BlogPostForm;
