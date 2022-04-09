import React, { Component } from "react";
import { View, Text, Image } from "react-native"
import axios from "axios";

class app extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      copyright: "",
      date: "",
      explanation: "",
      imageUrl: ""
    }
  }

  componentDidMount() {

    this.callNasa();
  }


  callNasa = () => {
    let count = 0
    var config = {
      method: "GET",
      url: "https://api.nasa.gov/planetary/apod?api_key=FwY1i70PGA0JPWvgLVGLotCOVWnTJuSljphw0OZ7"
    }
    axios(config).then(async response => {
      count++
      console.log("@@@ Response API 1 ======>", response);
      this.setState({ title: response.data.title })
      this.setState({ copyright: response.data.copyright })
      this.setState({ imageUrl: response.data.hdurl })
    }).catch(function (error) {
      console.log("@@@ Error =====>", error);
    })


    var data = {
      method: "GET",
      url: "https://api.nasa.gov/planetary/apod?api_key=FwY1i70PGA0JPWvgLVGLotCOVWnTJuSljphw0OZ7"
    }
    axios(data).then(async response => {
      count++
      console.log("@@@ Response API 2 ======>", response);
    }).catch(function (error) {
      console.log("@@@ Error =====>", error);
    })


    var share = {
      method: "GET",
      url: "https://api.nasa.gov/planetary/apod?api_key=FwY1i70PGA0JPWvgLVGLotCOVWnTJuSljphw0OZ7"
    }
    axios(share).then(async response => {
      count++
      console.log("@@@ Response API 3 ======>", response);
    }).catch(function (error) {
      console.log("@@@ Error =====>", error);
    })


    var nasa = {
      method: "GET",
      url: "https://api.nasa.gov/planetary/apod?api_key=FwY1i70PGA0JPWvgLVGLotCOVWnTJuSljphw0OZ7"
    }
    axios(nasa).then(async response => {
      count++
      console.log("@@@ Response API 4 ======>", response);
    }).catch(function (error) {
      console.log("@@@ Error =====>", error);
    })


    var log = {
      method: "GET",
      url: "https://api.nasa.gov/planetary/apod?api_key=FwY1i70PGA0JPWvgLVGLotCOVWnTJuSljphw0OZ7"
    }
    axios(log).then(async response => {
      count++
      console.log("@@@ Response API 5 ======>", response);
    }).catch(function (error) {
      console.log("@@@ Error =====>", error);
    })

    return count
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "lightblue" }}>
        <Text>Title :- {this.state.title}</Text>
        <Text>CopyRight :- {this.state.copyright}</Text>
        <Image source={{ uri: this.state.imageUrl }} resizeMode="contain" style={{ height: 100, width: 200 }} />
      </View>
    )
  }
}

export default app