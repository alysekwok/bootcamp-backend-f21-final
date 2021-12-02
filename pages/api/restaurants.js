import { findRestaurant, filter } from "../../server/actions"



export const findRestaurantServerCall = async () => {
  try {
    const restaurant = await findRestaurant()
  
    return restaurant
  } catch (e) {
    return {
      success: false,
      message: "ruh roh",
    }
  }
}

export const filterServerCall = async (q = {}) => {
  try {
    const { borough } = q
    const bor = await filter({ borough })
    return {
      success: true,
      payload: bor,
    }
  } catch (e) {
    return {
      success: false,
      message: "Failed to run action!",
    }
  }
}


const handler = (req, res) =>
  
  findRestaurantServerCall().then((payload) => {
    const cuisine = req.query.cuisine
    const borough = req.query.borough
    let specifications = {};
    if (cuisine) {
      specifications['cuisine'] = cuisine;
    }
    if (borough) {
      specifications['borough'] = borough;
    }
    const sorting = req.query.sort_by;
    let sortRestaurants = {};
    if (sorting) {
      const val = sorting.split('.')[1]
      if (val === 'asc') {
        sortRestaurants['grades.0.score'] = 1
      } else {
        sortRestaurants['grades.0.score'] = -1
      }
      specifications['grades.0.score'] = {$gt : 0};
    }
    if (payload.success) res.status(200)
    else res.status(500)
    res.json(payload)
  })


export default handler



