import React, { Component } from 'react';
import { Platform,AppRegistry,Divider, TextInput ,ImageBackground, TouchableOpacity,StyleSheet,Text,Image,Picker,Button,View,ScrollView,} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Actions } from 'react-native-router-flux';

 class WelcomeClass extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
    this.state = {
      state: 'Montreal'
    }
    this.state = { restauTosearch: 'Search for restaurants or cuisine' };
    //this.state. restauTosearch.style={{fontSize: 20,fontWeight: 'bold'}}
  }
  setSearch(text){
    this.setState({
        restauTosearch: text
    })
}

  render() {
    return (
      <View style={{flex:1,}}>
      <ImageBackground source={{uri: "https://previews.123rf.com/images/romastudio/romastudio1603/romastudio160300203/54088672-healthy-food-background-studio-photo-of-different-fruits-and-vegetables-on-white-wooden-table-high-r.jpg"}} style={{width: 350, height: 200 ,flexDirection:"column",justifyContent: 'space-between'}}>

       <Image
          style={{width: 100, height: 100}}
          source={{uri: "https://lh3.googleusercontent.com/-VJLX0EoQmYU/AAAAAAAAAAI/AAAAAAAAAAA/2362JxuxpWw/s900-c-k-no/photo.jpg"}}
        />
        <Text style={styles.titleText}>
          Find the best restaurant everywhere in  {'\n'}
          <Text style={{color: 'red'}}>
            Canada
          </Text>
        </Text>

      </ImageBackground>
      <View style={{flexDirection:"row", }} >
        <TextInput
            style={{height: 35,width:220, borderColor: "#841584", borderWidth: 1,margin:10,}}
            onChangeText = {(text) => this.setSearch(text)}
            placeholder="Search for restaurants or cuisine"

          />
            <Picker
              style={{width: 130}}
              selectedValue={this.state.language}
              onValueChange={(lang) => this.setState({language: lang})}>
              <Picker.Item label="Montreal" value="Montreal" />
              <Picker.Item label="Ottawa" value="Ottawa" />
              <Picker.Item label="Toronto" value="Toronto" />
              <Picker.Item label="Waterloo" value="Waterloo" />
            </Picker>

        </View>
        <View style={{marginLeft:15,marginRight:15,width:300,height:30,}}>
          <Button
            title="Search"
            color="#841584"
            onPress={() => this.props.navigation.navigate('RestaulistPage')}
      /></View>

     <Text style={{fontSize: 20,fontWeight: 'bold',textDecorationLine: 'underline',textAlign: 'center',
    marginTop:15,}}>
        Collections
       </Text>
       <ScrollView id="foodTypeSection"   style={{flex:1 ,flexDirection:"column",justifyContent: 'space-between', }}>
       <ImageBackground source={{uri:"http://www.thecanadaguide.com/wp-content/uploads/top-photo-food.jpg" }} style={{width: 300, height: 175,marginLeft:15,marginRight:15,marginTop:15,}}>
            <Text style={styles.foodTypeText}>
                Breakfast
            </Text>
       </ImageBackground>
       <ImageBackground source={{uri:"https://amp.insider.com/images/5ad792ffbd967146008b45d9-750-562.jpg" }} style={{width: 300, height: 175,marginLeft:15,marginRight:15,marginTop:15,}}>
            <Text style={styles.foodTypeText}>
                Lunch
            </Text>
       </ImageBackground>
        <ImageBackground source={{uri:"https://crackerbarrel.com/-/media/CrackerBarrel/Menu/Dinner/Wholesome-Fixins/Southern_Grilled_Caesar_Salad-H_780x390.jpg?h=390&w=780&la=en&hash=D2B8D4DA924FBECD22C1CCD638DCF28EB897BADB" }} style={{width: 300, height: 175,marginLeft:15,marginRight:15,marginTop:15,}}>
            <Text style={styles.foodTypeText}>
               Dinner
            </Text>
       </ImageBackground>
       <ImageBackground source={{uri:"https://maikereist.files.wordpress.com/2018/03/img_20180208_132519174155970159.jpg?w=656&h=300&crop=1" }} style={{width: 300, height: 175,marginLeft:15,marginRight:15,marginTop:15,marginBottom:10,}}>
            <Text style={styles.foodTypeText}>
                Other
            </Text>
       </ImageBackground>
       </ScrollView>

      </View>
    );
  }
}

 class RestauListClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Useless Multiline Placeholder',
    };
  }

  // If you type something in the text box that is a color, the background will change to that
  // color.
  render() {
    return (
      <View style={{flex:1,}}>
       <View>
       <Image
          style={{width: 100, height: 100}}
          source={{uri: "https://lh3.googleusercontent.com/-VJLX0EoQmYU/AAAAAAAAAAI/AAAAAAAAAAA/2362JxuxpWw/s900-c-k-no/photo.jpg"}}
        />
        <Text style={{marginTop:25,marginLeft:70,textDecorationLine:"underline",fontWeight:"bold",fontSize:30,}}>
          Local Restaurants
        </Text>
      </View>
     <ScrollView style={{flex:1,}}>

      <View id="restauList" style={{ flexDirection:"column",justifyContent:"space-between",marginTop:50,}}>
      <View>
      <View style={{flexDirection:"row",marginLeft:5,}}>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate('MenuPage')}>
              <Image style={{width: 200, height: 210,marginLeft:3}}
                source={{uri: "http://i.huffpost.com/gen/2991600/images/o-THE-KEG-NUTRITION-facebook.jpg"}}>
              </Image>
          </TouchableOpacity>

        <View id="restauInfos">
        <Text style={{marginLeft:5,marginRight:5,}}>Steak Seafood {'\n'} {'\n'} 10$-50$  {'\n'} {'\n'}5pm-11pm  {'\n'} {'\n'} 307 Richmond Road {'\n'} {'\n'}Ottawa, ON K1Z 6X2 {'\n'} </Text>
        <Text style={{height: 20,width:30, borderColor: "#841584", borderWidth: 20,marginLeft:90,fontWeight:"bold",color:"white",}}>
          4.7
        </Text>

      </View>
        </View>
        <Text id ="restauName" style={{marginLeft:30,marginTop:2,fontSize:30,fontWeight:"bold",color:"#841584"}}>The Keg</Text>

        </View>

         <View>
      <View style={{flexDirection:"row",marginLeft:5,marginTop:20,}}>
       <TouchableOpacity onPress={()=>this.props.navigation.navigate('MenuPage')}>
        <Image
          style={{width: 200, height: 210,marginLeft:3}}
          source={{uri: "https://s3-media2.fl.yelpcdn.com/bphoto/ibBx-p2GSAZEoaL03v3a6Q/ls.jpg"}}>
        </Image>
        </TouchableOpacity>
        <View id="restauInfos">
        <Text style={{marginLeft:5,marginRight:5,}}>Steak Seafood {'\n'} {'\n'} 10$-50$  {'\n'} {'\n'}5pm-11pm  {'\n'} {'\n'} 307 Richmond Road {'\n'} {'\n'}Ottawa, ON K1Z 6X2 {'\n'} </Text>
        <Text style={{height: 20,width:30, borderColor: "#841584", borderWidth: 20,marginLeft:90,fontWeight:"bold",color:"white",}}>
          4.7
        </Text>

      </View>
        </View>
        <Text id ="restauName" style={{marginLeft:30,marginTop:2,fontSize:30,fontWeight:"bold",color:"#841584"}}>Trio Lounge</Text>

        </View>

         <View>
      <View style={{flexDirection:"row",marginLeft:5,marginTop:20}}>
       <TouchableOpacity onPress={()=>this.props.navigation.navigate('MenuPage')}>
        <Image
          style={{width: 200, height: 210,marginLeft:3}}
          source={{uri: "https://media-cdn.tripadvisor.com/media/photo-s/05/d1/87/1c/jack-astor-s.jpg"}}>
        </Image>
        </TouchableOpacity>
        <View id="restauInfos">
        <Text style={{marginLeft:5,marginRight:5,}}>Steak Seafood {'\n'} {'\n'} 10$-50$  {'\n'} {'\n'}5pm-11pm  {'\n'} {'\n'} 307 Richmond Road {'\n'} {'\n'}Ottawa, ON K1Z 6X2 {'\n'} </Text>
        <Text style={{height: 20,width:30, borderColor: "#841584", borderWidth: 20,marginLeft:90,fontWeight:"bold",color:"white",}}>
          4.7
        </Text>

      </View>
        </View>
        <Text id ="restauName" style={{marginLeft:30,marginTop:2,fontSize:30,fontWeight:"bold",color:"#841584"}}>Jack Astors</Text>

        </View>

         <View>
      <View style={{flexDirection:"row",marginLeft:5,marginTop:20}}>
       <TouchableOpacity onPress={()=>this.props.navigation.navigate('MenuPage')}>
        <Image
          style={{width: 200, height: 210,marginLeft:3}}
          source={{uri: "https://3emsiq36oenj2cmlhdjc290x-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/Bazille-DEC2017-dish_4-780x439.jpg"}}>
        </Image>
        </TouchableOpacity>
        <View id="restauInfos">
        <Text style={{marginLeft:5,marginRight:5,}}>Steak Seafood {'\n'} {'\n'} 10$-50$  {'\n'} {'\n'}5pm-11pm  {'\n'} {'\n'} 307 Richmond Road {'\n'} {'\n'}Ottawa, ON K1Z 6X2 {'\n'} </Text>
        <Text style={{height: 20,width:30, borderColor: "#841584", borderWidth: 20,marginLeft:90,fontWeight:"bold",color:"white",}}>
          4.7
        </Text>

      </View>
        </View>
        <Text id ="restauName" style={{marginLeft:30,marginTop:2,fontSize:30,fontWeight:"bold",color:"#841584"}}>Bazille</Text>

        </View>

         <View>
      <View style={{flexDirection:"row",marginLeft:5,marginTop:20}}>
       <TouchableOpacity onPress={()=>this.props.navigation.navigate('MenuPage')}>
        <Image
          style={{width: 200, height: 210,marginLeft:3}}
          source={{uri: "http://biteburgerhouse.com/img/about-us.jpg"}}>
        </Image>
        </TouchableOpacity>
        <View id="restauInfos">
        <Text style={{marginLeft:5,marginRight:5,}}>Steak Seafood {'\n'} {'\n'} 10$-50$  {'\n'} {'\n'}5pm-11pm  {'\n'} {'\n'} 307 Richmond Road {'\n'} {'\n'}Ottawa, ON K1Z 6X2 {'\n'} </Text>
        <Text style={{height: 20,width:30, borderColor: "#841584", borderWidth: 20,marginLeft:90,fontWeight:"bold",color:"white",}}>
          4.7
        </Text>

      </View>
        </View>
        <Text id ="restauName" style={{marginLeft:30,marginTop:2,marginBottom:10,fontSize:30,fontWeight:"bold",color:"#841584"}}>Bite Burger </Text>

        </View>


      </View>



    </ScrollView>
    </View>
    );
  }
}

class MenuClass extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
    this.state = {
      state: 'Montreal',
      totalPrice:0,
      message:"View Cart",
    }

  }
  setSearch(text){
    this.setState({
        restauTosearch: text
    })
}
setPrice(text){
  var pric=parseInt(text, 10) + this.state.totalPrice;
  const mess=" View Cart                                    "+pric+" $";
  this.setState ( {
      totalPrice:pric,
      message:mess,
    })
}

  render() {
    return (
      <View style={{flex:1,}}>
       <View>
       <Image
          style={{width: 100, height: 100}}
          source={{uri: "https://lh3.googleusercontent.com/-VJLX0EoQmYU/AAAAAAAAAAI/AAAAAAAAAAA/2362JxuxpWw/s900-c-k-no/photo.jpg"}}
        />
        <Text style={{marginTop:25,marginLeft:70,textDecorationLine:"underline",fontWeight:"bold",fontSize:30,}}>
          Menus
        </Text>
      </View>
       <TouchableOpacity  style={{ height: 40, marginTop: 5 ,marginLeft:5 ,marginRight:2,}}>
          <Button
            title={this.state.message}
            color="#841584"
            onPress={()=>this.props.navigation.navigate('CommandPage')}
        />

      </TouchableOpacity>
      <ScrollView style={{flex:1,flexDirection:"column",justifyContent:"space-between"}}>
        <View style={{flexDirection:"row",marginLeft:5,marginTop:10}}>
        <Image
          style={{width: 150, height: 150,marginLeft:10}}
          source={{uri: "https://img-3.journaldesfemmes.fr/SthRtfetTJNRrJ0WFLNIHmQMID4=/750x/smart/image-icu/392895_4878906469.jpg"}}>
        </Image>
        <View id="foodInfos">
        <Text style={{marginLeft:5,marginRight:5,}}>Canard Saute aux {'\n'} cinqs Parfums  </Text>
        <Text id="foodPrice" style={{height: 20,width:30,marginTop:45, marginLeft:150,marginRight:2,fontWeight:"bold",color:"black",}}            >45$</Text>

       <TouchableOpacity  style={{ height: 30, marginTop: 5 ,width:30,marginLeft:150 ,marginRight:2,}}>
          <Button
            title="+"
            color="#841584"
            onPress={() => this.setPrice("45")}
        />

      </TouchableOpacity>

        </View>

      </View>

      <View style={{flexDirection:"row",marginLeft:5,marginTop:10}}>
        <Image
          style={{width: 150, height: 150,marginLeft:10}}
          source={{uri: "https://d5q6n6g7.stackpathcdn.com//content/images/thumbs/0001404.jpeg"}}>
        </Image>
        <View id="foodInfos">
        <Text style={{marginLeft:5,marginRight:5,}}>Royal Steak{"\n"}{"\n"} </Text>
        <Text id="foodPrice" style={{height: 20,width:30,marginTop:45, marginLeft:150,marginRight:2,fontWeight:"bold",color:"black",}}            >60$</Text>

       <TouchableOpacity style={{ height: 30, marginTop: 5 ,width:30,marginLeft:150 ,marginRight:2,}}>
          <Button
            title="+"
            color="#841584"
            onPress={() => this.setPrice("45")}
        />

      </TouchableOpacity>

        </View>

      </View>

      <View style={{flexDirection:"row",marginLeft:5,marginTop:10}}>
        <Image
          style={{width: 150, height: 150,marginLeft:10}}
          source={{uri: "http://www.womentribe.com/wp-content/uploads/2017/04/hibiscusteacover.jpg"}}>
        </Image>
        <View id="foodInfos">
        <Text style={{marginLeft:5,marginRight:5,}}>Bissap{"\n"}{"\n"} </Text>
        <Text id="foodPrice" style={{height: 20,width:30,marginTop:45, marginLeft:150,marginRight:2,fontWeight:"bold",color:"black",}}            >10$</Text>

       <TouchableOpacity style={{ height: 30, marginTop: 5 ,width:30,marginLeft:150 ,marginRight:2,}}>
          <Button
            title="+"
            color="#841584"
            onPress={() => this.setPrice("10")}
        />

      </TouchableOpacity>

        </View>

      </View>


      <View style={{flexDirection:"row",marginLeft:5,marginTop:10,marginBottom:10,}}>
        <Image
          style={{width: 150, height: 150,marginLeft:10}}
          source={{uri: "https://img-3.journaldesfemmes.fr/r3GZrr0SfIIhqBBVC8xpKqAuLUo=/750x/smart/9ffbde1536474bc2bfa84673e3176214/recipe-jdf/10035131.jpg"}}>
        </Image>
        <View id="foodInfos">
        <Text style={{marginLeft:5,marginRight:5,}}>Poulet Roti{"\n"}{"\n"} </Text>
        <Text id="foodPrice" style={{height: 20,width:30,marginTop:45, marginLeft:150,marginRight:2,fontWeight:"bold",color:"black",}}            >10$</Text>

       <TouchableOpacity style={{ height: 30, marginTop: 5 ,width:30,marginLeft:150 ,marginRight:2,}}>
          <Button
            title="+"
            color="#841584"
            onPress={() => this.setPrice("10")}
        />

      </TouchableOpacity>

        </View>

      </View>

      </ScrollView>

      </View>
    );
  }
}


class CommandPageClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      state: 'Montreal',
      prixTotal:220,
      nbreItems:2,

       arr : [
      {
        key:"Canards Sautees",
        price: 10,
        numb:2,
        totPrice:20,
        removeItem:false,
      },
      {
        key: "Royal Steak",
        price: 20,
        numb:3,
        totPrice:60,
        removeItem:false,
      },
      {
        key: "Bissap",
        price: 30,
        numb:1,
        totPrice:30,
        removeItem:false,
      }],


    }

  }

  getIndex(name) {
      var index=0;

      for(let i = 0; i < this.state.arr.length; i++){
        var childArray = this.state.arr[i].key;
        if(childArray==name){
          index=i;
        }

      }
    // return childArray;
      return index;
}

  minusButton(name){
    var index=this.getIndex(name);

    var newArray = this.state.arr;
    newArray[index].numb-= 1;
    newArray[index].totPrice-=newArray[index].price;
    var nombre=this.state.nbreItems;
    if(newArray[index].numb<=0){
      newArray[index].removeItem=true;
      nombre-=1;
    }
    if(nombre<=0){
      this.props.navigation.navigate('MenuPage')
    }
    var prix=this.state.prixTotal-newArray[index].price;

    this.setState({arr: newArray,
    prixTotal:prix,
    nbreItems:nombre,
    });


  }
  plusButton(name){
    var index=this.getIndex(name);

    var newArray = this.state.arr;
    newArray[index].numb+= 1;
    newArray[index].totPrice+=newArray[index].price;
    var prix=this.state.prixTotal+newArray[index].price;
    this.setState({arr: newArray,
    prixTotal:prix,
    });


  }



  render() {
    return (
      <View>
      <Image
          style={{width: 100, height: 100}}
          source={{uri: "https://lh3.googleusercontent.com/-VJLX0EoQmYU/AAAAAAAAAAI/AAAAAAAAAAA/2362JxuxpWw/s900-c-k-no/photo.jpg"}}
        />
        <Text style={{ marginLeft:100,fontSize:30,textDecorationLine: 'underline',color:"black",fontWeight:"bold",}}>Commande</Text>
        { this.state.arr[0].removeItem == false ? (

        <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:40,}}>
        <View id="item" style={{flexDirection:"row",marginLeft:20,}}>
            <TouchableOpacity onPress={(e) =>this.minusButton("Canards Sautees")}style={{height: 20,width:30, marginRight:2,fontWeight:"bold",color:"#841584",}} >
              <Text style={{color:"#841584",fontWeight:"bold",}} id="minus">-</Text>
            </TouchableOpacity>
            <Text style={{height: 20,width:30, marginRight:2,color:"black",}} >2</Text>
            <TouchableOpacity onPress={(e) =>this.plusButton("Canards Sautees")} style={{height: 20,width:30, fontWeight:"bold",color:"#841584",}} >
              <Text style={{color:"#841584",fontWeight:"bold",}}id="plus">+</Text>
            </TouchableOpacity>
            </View>
            <Text style={{height: 20, marginRight:2,color:"black",}}  id="itemName">Canards Sautees</Text>
            <Text id="itemPrice" style={{height: 20,width:30, marginRight:2,fontWeight:"bold",color:"black",}}  >{this.state.arr[0].totPrice}$</Text>

      </View>) : null  }




      { this.state.arr[1].removeItem == false ? (
      <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:40,}}>
        <View id="item" style={{flexDirection:"row",marginLeft:20,}}>
            <TouchableOpacity onPress={(e) =>this.minusButton("Royal Steak")} style={{height: 20,width:30, marginRight:2,fontWeight:"bold",color:"#841584",}} >
              <Text style={{color:"#841584",fontWeight:"bold",}} id="minus">-</Text>
            </TouchableOpacity>
            <Text style={{height: 20,width:30, marginRight:2,color:"black",}} >{this.state.arr[1].numb}</Text>
            <TouchableOpacity onPress={(e) =>this.plusButton("Royal Steak")}style={{height: 20,width:30, fontWeight:"bold",color:"#841584",}} >
              <Text style={{color:"#841584",fontWeight:"bold",}}id="plus">+</Text>
            </TouchableOpacity>
            </View>
            <Text style={{height: 20, marginRight:2,color:"black",}}  id="itemName">Royal Steak</Text>
            <Text id="itemPrice" style={{height: 20,width:30, marginRight:2,fontWeight:"bold",color:"black",}}  >{this.state.arr[1].totPrice}$</Text>




      </View> ) : null  }
      <View id="total"style={{flexDirection:"row"}}>
        <Text style={{marginTop:45, marginLeft:20,fontWeight:"bold",color:"black",}} >Total({" "}{this.state.nbreItems}{" "} items)</Text>
        <Text id="itemPrice" style={{marginTop:45, marginLeft:210,fontWeight:"bold",color:"black",}}  >{this.state.prixTotal}$</Text>
      </View>
    <View style={{width:320,height:30,marginLeft:20,marginTop:20,}}>
      <Button
        title="Checkout"
        color="#841584"
        onPress={() => this.props.navigation.navigate('PaiementPage')}
      />
      </View>

    </View>
    );
  }
}











class PaiementPageClass extends Component {
  constructor(props) {
    super(props);
    this.state = { address: "" ,
                  date:"",
                  security:"",
                  numcart:"",
                  hasError: false,
                  errorText: '',
                  addressPlace:"Veuillez entrer l'adresse de livraison",
                   datePlace:"dd/mm/yyyy",
                  securityPlace:"Veuillez entrer le numero de securite",
                  numCartPlace:"Veuillez enter le numero de la carte",
                  addressError:false,
                  dateError:false,
                  securityError:false,
                  numCartError:false,
                  placeColor:"gray",
                  };
    //this.state. restauTosearch.style={{fontSize: 20,fontWeight: 'bold'}}
  }
  setAdress(text){

    var ad=text;
    var result = ad.split(' ').join('');
    var comp=true;
    if(result.length<2){
        comp =false;
    }
    else{

      var sub1=result.substring(0,1);
      var sub2=result.substring(1);
            //var sub1Int= parseInt(sub1, 10);
            //var sub2Int= parseInt(sub2, 10);
            //var isNumber= sub1Int>0 &&sub2Int<=0;
             comp=(!isNaN(sub1) &&isNaN(sub2));

            //if(isNumber){
             // comp= true;
            //}
            //else{
              //comp= false;
            //}
          }
    var hasError=!comp;

    this.setState({
        address: text,
        addressError:hasError,

    })
}
setDate(date){

    var res=date.split(' ').join('');
    var result=res.split("/").join("");
   var comp=isNaN(result) || result.length!=8;

    this.setState({
        date: date,
        dateError:comp,
    })
}
setSecurity(text){
  var cart=text
   var res = cart.split(" ").join("");
  var resultat=isNaN(res)||res.length!=3;


  this.setState({
     security: text,
     securityError:resultat,
  })
}
setNumCart(text){
  var cart=text
   var res = cart.split(" ").join("");
  var resultat=isNaN(res)||res.length!=12;

    this.setState({
      numCartError:resultat,
        numcart: text
    })
}


//Verify information
 pay() {
    if(this.state.addressError==false && this.state.numCartError==false && this.state.securityError==false && this.state.dateError==false &&this.state.address!=""&&this.state.numcart!=""&& this.state.date!=""&&this.state.security!="") {
      this.props.navigation.navigate('SuccessPage');

    }
    else{
    //Validate adress
    if(this.state.addressError==true || this.state.address==""){
       this.setState({
         address:"",
         placeColor:"red",
         addressPlace:"Veuillez enter uune addresse valide",

    })
    }

    if(this.state.numCartError==true || this.state.numcart==""){
       this.setState({
         numcart:"",
         numCartPlace:"veuillez entrer un numero a 12 chiffres",
         placeColor:"red",
      })
    }

     if(this.state.dateError==true || this.state.date==""){
       this.setState({
         date:"",
         datePlace:"veuillez entrer une date sur le format:dd/mm/yyy",
         placeColor:"red",
      })
    }
     if(this.state.securityError==true || this.state.security==""){
       this.setState({
         security:"",
         securityPlace:"veuillez entrer un code a 3 chiffres",
         placeColor:"red",
     })
    }
    }


 }






  render() {
    return (
      <View>
      <Image
          style={{width: 100, height: 100}}
          source={{uri: "https://lh3.googleusercontent.com/-VJLX0EoQmYU/AAAAAAAAAAI/AAAAAAAAAAA/2362JxuxpWw/s900-c-k-no/photo.jpg"}}
        />
        <Text id ="restauName" style={{marginLeft:30,marginTop:15,fontSize:20,fontWeight:"bold",      color:"black"}}>Valeur de la commande (250$)</Text>
        <View>
          <Text id ="restauName" style={{marginLeft:30,marginTop:15,fontSize:15,fontWeight:"bold",      color:"black"}}>Adresse de livraison </Text>
          <TextInput
                style={{height: 30, borderColor: "#841584", borderWidth: 3,margin:10,}}
                onChangeText = {(text) => this.setAdress(text)}
                 placeholder={this.state.addressPlace}
                 placeholderTextColor={this.state.placeColor}

                />


          <Text id ="restauName" style={{marginLeft:30,marginTop:15,fontSize:15,fontWeight:"bold",      color:"black"}}>Type de Carte </Text>
          <View id="typeCartSection"style={{flexDirection:"row",justifyContent: 'space-between' }} >
          <TextInput
            style={{height: 30, borderColor: "#841584", borderWidth: 3,marginTop:10,marginLeft:10,}}
            onChangeText = {(text) => this.setNumCart(text)}
            placeholder={this.state.numCartPlace}
            placeholderTextColor={this.state.placeColor}

          />
            <Picker
              style={{width: 100}}
              selectedValue={this.state.language}
              onValueChange={(lang) => this.setState({language: lang})}>
              <Picker.Item label="Visa" value="Visa" />
              <Picker.Item label="Credit" value="Credit" />
              <Picker.Item label="Debit" value="Debit" />
              <Picker.Item label="Visa-Debit" value="Visa-Debit" />
            </Picker>

        </View>
          <Text id ="restauName" style={{marginLeft:30,marginTop:15,fontSize:15,fontWeight:"bold",color:"black"}}>Date d'expiration </Text>
      <TextInput
            style={{height: 30, borderColor: "#841584", borderWidth: 3,margin:10,}}
            onChangeText = {(text) => this.setDate(text)}
            placeholder={this.state.datePlace}
             placeholderTextColor={this.state.placeColor}
            />

            <Text id ="restauName" style={{marginLeft:30,marginTop:15,fontSize:15,fontWeight:"bold",color:"black"}}>Carte de Securite </Text>
      <TextInput
            style={{height: 30, borderColor: "#841584", borderWidth: 3,margin:10,}}
            onChangeText = {(text) => this.setSecurity(text)}
           placeholder={this.state.securityPlace}
            placeholderTextColor={this.state.placeColor}/>

      </View>
      <Button

        title="Confirm"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        onPress={() => this.pay()}
      />



      </View>
    );
    }
  }






const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textAlign: 'center',
    margin:0,
  },
  foodTypeText:{
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textAlign: 'center',
    margin:50,

  },


});
class SuccessPageClass extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
      <Image
          style={{width: 100, height: 100}}
          source={{uri: "https://lh3.googleusercontent.com/-VJLX0EoQmYU/AAAAAAAAAAI/AAAAAAAAAAA/2362JxuxpWw/s900-c-k-no/photo.jpg"}}
        />
      <Text style={{marginLeft:30,marginTop:15,fontSize:15,fontWeight:"bold",color:"green"}}>Merci!Votre Commande a ete bien placee</Text>




      </View>
    );
    }
  }





const RootStack = createStackNavigator(
  {
    Home:WelcomeClass ,
    RestaulistPage: RestauListClass,
    MenuPage:MenuClass,
    CommandPage:CommandPageClass,
    PaiementPage:PaiementPageClass,
    SuccessPage:SuccessPageClass,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
