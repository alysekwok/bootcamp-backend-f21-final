import mongoDB from "./index"
import Restaurant from "./models/Restaurant"
import Neighborhood from "./models/Neighborhood"

export async function findRestaurant(cuisine, borough, sortVar) {
    await mongoDB()
    // const boroughs = await Restaurant.findOne().distinct('borough')
    // const cuisines = await Restaurant.findOne().distinct('cuisine')
      const restaurant = await Restaurant.find({}).where()
                                // .distinct('borough')
                                .where('borough').equals(borough)
                                .where('cuisine').equals(cuisine)
                                .sort(sortVar)
                                .limit(10)
                                .skip();
  
    
    return restaurant
  }

export async function findRestaurantNeighborhood(neighborhood) {
  await mongoDB()
  const denver = { type: 'Point', coordinates: [ -73.8601152, 40.7311739] };
  
  // const denver = { type: 'Point', coordinates: [-104.9903, 39.7392] };
  const geo = await Neighborhood.findOne({name:neighborhood}).distinct('geometry')
  const restaurantCoord = await Restaurant.find({}).where('address.coord').equals(denver.coordinates)
  // console.log(restaurantCoord)

  const restaurant = await Restaurant.find({}).where()
                            .where(denver.coordinates)
                            .within().geometry(geo[0])
                            .skip();
  // console.log(restaurant)
  return restaurant
}

export async function findBoroughs() {
  await mongoDB()
  const boroughs = await Restaurant.find().distinct('borough')
  return boroughs
}

export async function findCuisine() {
  await mongoDB()
  const cuisines = await Restaurant.find().distinct('cuisine')
  return cuisines
}

export async function findNeighborhood() {
  await mongoDB()
  const neighborhood = await Neighborhood.find().distinct('name')
  return neighborhood
}

 



