import { findCuisine } from "../../../server/actions"

export const findCuisineServerCall = async ({ }) => {
  try {
    const cuisine = await findCuisine()
    return {
        cuisine,
    }
  } catch (e) {
    return {
      success: false,
      message: "Failed to run action!",
    }
  }
}

const handler = (req, res) =>
  findCuisineServerCall({ cuisine: req.query.cuisine }).then((payload) => {
    if (payload.success) res.status(200)
    else res.status(500)
    res.json(payload)
  })

export default handler