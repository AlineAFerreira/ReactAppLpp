import React, { Component } from 'react'
import { WebView } from "react-native-webview";

class Home extends Component {
    render(){
        return <WebView source={{ uri: 'https://loucosporpontos.com.br/' }} />
    }
}
export default Home