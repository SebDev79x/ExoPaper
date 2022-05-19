import { SearchBar } from 'react-native-elements';
import React, { useState } from "react";


const Search = () =>{
    const state = {
        search: '',
      };
     const updateSearch = (search) => {
        this.setState({ search });
      };
        const { search } = state;
        const [value, setValue] = React.useState("");
        console.log("value",value)
return (
    <SearchBar
    platform="default"
    containerStyle={{}}
    inputContainerStyle={{}}
    inputStyle={{}}
    leftIconContainerStyle={{}}
    rightIconContainerStyle={{}}
    loadingProps={{}}
    onChangeText={newVal => setValue(newVal)}
    onClearText={() => console.log(onClearText())}
    placeholder="Tu cherches un truc ?"
    placeholderTextColor="blanchedalmond"
    cancelButtonProps={{}}
    onCancel={() => console.log(onCancel())}
    value={value}
  />)
}

export default Search;