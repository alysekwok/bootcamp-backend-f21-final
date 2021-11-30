import mongoDB from "./index"
import Restaurant from "./models/Restaurant"
import Neighborhood from "./models/Neighborhood"

export async function findRestaurant() {
    await mongoDB()
    const restaurant = await Restaurant.find({}).limit(10)
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




