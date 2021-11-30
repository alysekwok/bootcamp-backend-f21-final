import { findRestaurant } from "../../server/actions"

export const findRestaurantServerCall = async () => {
  try {
    const restaurant = await findRestaurant()
    return {
      restaurant,
    }
  } catch (e) {
    return {
      success: false,
      message: "Failed to run action!",
    }
  }
}

// @route   POST api/example
// @desc    Example API
// @access  Public
const handler = (req, res) =>
  findRestaurantServerCall().then((payload) => {
    if (payload.success) res.status(200)
    else res.status(500)
    res.json(payload)
  })

export default handler


