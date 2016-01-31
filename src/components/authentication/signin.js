var React = require('react-native');
var {
  View,
  Text,
  TextInput,
  StyleSheet
} = React;

module.exports = React.createClass({
  render: function() {
    return (
      <View style = {styles.container}>
        <Text style={styles.signin}> Sign in </Text>
        <Text style={styles.label}> Username:</Text>
        <TextInput style={styles.input} />
        <Text style={styles.label}> Password:</Text>
        <TextInput secureTextEntry={true} style={styles.input} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  },
  signin:{
    fontSize: 22,
    marginBottom: 20
  },
  label: {
    fontSize: 18
  }
});
