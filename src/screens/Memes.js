import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import MemesCard from "../components/MemeCard";

const Memes = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [url, setUrl] = useState('https://api.imgflip.com/get_memes');


    const getData = async () => {
        const response = await (await fetch(url)).json();
        setUrl(response.info);
        setData([...data, ...response.data.memes]);
        console.log('active');
      };
      useEffect(() => {
        setError('');
        getData().catch(err => {
          console.log('err', err);
          setError('Something went wrong!');
        });
      }, []);

    const renderData = ({item}) => <MemesCard name={item.name} url={item.url}/>
    return (
        <SafeAreaView style={styles.main}>
            <Text style={styles.title}>Memes</Text>
            <FlatList data={data} 
            onEndReached={() => {
            if (url) {
              getData();
              console.log('reload')
            }
            }}
            renderItem={renderData}/>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    main:{
        backgroundColor: "#F9F5EB"
    },
    title:{
        textAlign: "center",
        fontFamily: 'RobotoMono-SemiBold',
        fontSize: 30,
        margin: 5,
        color: '#002B5B'


    }
})

export default Memes;