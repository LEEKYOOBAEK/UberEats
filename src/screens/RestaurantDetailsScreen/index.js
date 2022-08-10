import { View, Image, Text, FlatList, StyleSheet } from 'react-native';
import restaurants from '../../../assets/data/restaurants.json' ;

const restaurant = restaurants[0];
("");

const RestaurantDetailsPage = () => {
    return (
        <View style={styles.page}>
            <Image source={{uri: restaurant.image}} style={styles.image} />
            <View style={styles.container}>
                <Text style={styles.title}>{restaurant.name}</Text>
                    <Text style={styles.subtitle}>
                    ${restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    page: {
        flex:1,
    },
    image: {
        width: "100%",
        aspectRatio: 5/3,

    },
    title: {
        fontSize: 35,
        fontWeight: "600",
        marginVertical: 10,
        
    },
    subtitle: {
        fontSize: 15,
        color: "grey",

    },
    container:{
        margin: 10,
    },
});

export default RestaurantDetailsPage;