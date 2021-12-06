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
  const geo = await Neighborhood.findOne({name:neighborhood}).distinct('geometry')
  const restaurant = await Restaurant.find({}).where()
                            .where('address.coord')
                            .within().geometry(geo[0])
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

 



