import React from 'react'
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'
import mainimg from "../../../images/sumsung.png";
import p1img from "../../../images/proteinslide.png";
import p2img from "../../../images/Dietslide.png";
import { ProductCarousel } from './Carousel';
import Search from './Search';
const data = [
  {
    id: 1,
    title: "Protein",
    price: 9999,
    image: p1img
  },
  {
    id: 2,
    title: "Deit plan",
    price: 9999,
    image: p2img
  },
]
export const OfferProductList = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={{ marginTop: 10 }}>
        <Search />
        <View>
          <Text style={[mystyle.text, { color:"black",borderBottomColor: 'black', borderBottomWidth: 2, width: 150 }]}>  Best deals</Text>

          <View>
            <ProductCarousel />
          </View>
          <View style={[mystyle.outerBox]} >
            {
              data.map((item, index) => (
                <View key={index} style={[mystyle.innerBox, mystyle.box]}>
                  <ScrollView horizontal={true}>
                    <View style={[mystyle.inner, mystyle.box]}>
                      <TouchableOpacity onPress={() => navigation.navigate("productdetails")} >
                        <Text style={[mystyle.text, { fontWeight: 'bold', color: "#ffff" }]}>From ₹{item.price}*</Text>
                        <Text style={[mystyle.text, mystyle.title]}>Best deals on {item.title}</Text>
                        <Image source={item.image} style={[mystyle.proImg]} />
                      </TouchableOpacity>
                    </View>
                  </ScrollView>
                </View>
              ))
            }</View>
        </View>
      </View>
    </SafeAreaView>
  )
}
export const mystyle = StyleSheet.create({
  title: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    fontSize: 13,
    margin: 2,
    padding: 2,
    borderRadius: 6
  },
  text: {
    color: '#fff',
    fontSize: 20
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  outerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
   
  },
  innerBox: {
 
    margin: 5,
    width: 160,
    height: 230,
    backgroundColor: '#FA8200'
  },
  headbox: {
    
    width: 360,
    height: 200,
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#fa8200'
  },
  headinfo: {
    flexDirection: 'column',
    gap: 5,
    marginLeft: 10
  },
  bottomText: {
    fontSize: 12,
    marginTop: 20,
    backgroundColor: 'gray',
    color: '#fff',
    padding: 3,
    borderRadius: 5,

  },
  proImg: {
    width: 150,
    height: 150,
    zIndex: 10,
    borderRadius: 2,
  },
  inner: {
    marginBottom: 2,
    width: 170,
    height: 220,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 10,

  }
})

