import React from 'react';
import {Column as Col, Row} from 'react-native-flexbox-grid';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';


const HomeType = () =>{
 return(
    <View style={styles.container}> 
    <View style={styles.title} >
        <Text>What type of home do you live in?</Text>
    </View>       
    <Row size={12} style={{marginLeft: '16%'}}>
      <Col sm={6} md={4} lg={3}>
      <View style={styles.card} />
        <Text style={{marginLeft: '10%'}}>Condo</Text>
      </Col>
      <Col sm={6} md={4} lg={3}>
      <View style={styles.card} />
        <Text >Townhouse</Text>
      </Col>
      <Col sm={6} md={4} lg={3}>
      <View style={styles.card} />
        <Text style={{marginLeft: '10%'}}>Detached </Text>
        <Text style={{marginLeft: '10%'}}>Townhome</Text>
      </Col>
      <Col sm={6} md={4} lg={3}>
      <View style={styles.card} />
        <Text style={{marginLeft: '10%'}}>Bungalow</Text>
      </Col>
    </Row> 
    <View style={styles.nextButton}>
    <Button
     style={styles.nextButton}
     title="Next"
     color="#46D0B6"
   /> 
    </View>
  </View>
 );
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      flex: 1,
      marginTop: -70,
      flexDirection: 'column',
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
        marginBottom: 30,
    },
    card: {
        width: 81,
        marginTop: 30,
        height: 71,
        backgroundColor: '#C4C4C4' 
    },
    nextButton: {
        marginTop: 50,
    }
  });

export default HomeType;