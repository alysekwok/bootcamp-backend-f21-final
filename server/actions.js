import mongoDB from "./index"
import Restaurant from "./models/Restaurant"
import Neighborhood from "./models/Neighborhood"

export async function findRestaurant() {
    await mongoDB()
    // const boroughs = await Restaurant.findOne().distinct('borough')
    // const cuisines = await Restaurant.findOne().distinct('cuisine')
    const restaurant = await Restaurant.find({})
                                .limit(10)
                                .skip();
                                    
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

 
  export async function filter({ cuisine, borough }) {
    await mongodb()

    const rest = await Restaurant.findOne({ cuisine, borough })
    if (!rest) return "No Restaurant Found"
    return {
      ...rest.toObject(),
    }
  }



