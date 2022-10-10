import React, { useState } from "react";
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import Svg, { Path } from "react-native-svg";


const MemesCard =  props => {
    const [modal, setModal] = useState(false)
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setModal(true)}>
                <Image style={styles.img}source={{uri:props.url}} />
                <Text style={styles.text}>{props.name}</Text>
            </TouchableOpacity>
            <Modal visible={modal}>
                <View style={styles.modalView}>
                    <TouchableOpacity style={styles.close} onPress={() => setModal(false)}>
                        <Svg width="32" height="32" viewBox="0 0 24 24"><Path fill={'red'} d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z"/></Svg>
                    </TouchableOpacity>
                    <Image
                        style={styles.modalImg} source={{uri:props.url}}
                    />
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        margin:20,
        backgroundColor: '#495C83',
        borderRadius: wp(5),
        borderWidth: wp(0.2),
        borderColor: 'black',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,

        elevation: 21,
        },
    text: {
        flex: 1,
        alignItems: 'center',
        color: 'white',
        fontSize: 25,
        fontFamily: 'RobotoMono-Medium',
        padding: 10,
        textAlign: 'center',
    },
    img: {
        width: wp(89),
        height: wp(90),
        borderTopLeftRadius: wp(5),
        borderTopRightRadius: wp(5),
      },
      modalView:{
        flex:1 ,
        justifyContent: 'center',
        backgroundColor: '#7A86B6'
      },
      modalImg: {
        width: wp(100),
        height: wp(99),
        borderWidth: 2,
        borderColor: 'black',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,

        elevation: 21,
      },
      close: {
        justifyContent: "flex-start",
        margin: 10  
      }
})

export default MemesCard;