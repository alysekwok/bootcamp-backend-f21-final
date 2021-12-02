
import { findRestaurant, findRestaurantNeighborhood } from "../../server/actions"


export const findRestaurantServerCall = async (cuisine, borough, sortVar) => {
  try {
    const restaurant = await findRestaurant(cuisine, borough, sortVar)
    return restaurant
  } catch (e) {
    return {
      success: false,
      message: "ruh roh",
    }
  }
}

export const findRestaurantNeighborhoodServerCall = async (neighborhood) => {
  try {
    const restaurant = await findRestaurantNeighborhood(neighborhood)
    return restaurant
  } catch (e) {
    return {
      success: false,
      message: "ruh roh",
    }
  }
}

const handler = (req, res) => {
  const cuisine = req.query.cuisine
  const borough = req.query.borough
  const sorting = req.query.sort_by
  const neighborhood = req.query.neighborhood
  // console.log(neighborhood)
  // console.log(coord)
  let sortVar = null
  if (sorting) {
    const val = sorting.split('.')[1]
    if (val === 'asc') {
      sortVar = '-grades.0.score'
    } 
    if (val === 'desc') {
      sortVar = 'grades.0.score'
    }
  }

  if (neighborhood) {
    findRestaurantNeighborhoodServerCall(neighborhood).then((payload) => {
      if (payload.success) res.status(200)
      else res.status(500)
      res.json(payload)
    })

  } else {
  findRestaurantServerCall(cuisine, borough, sortVar).then((payload) => {
    if (payload.success) res.status(200)
    else res.status(500)
    res.json(payload)
  })
  }
}


export default handler



