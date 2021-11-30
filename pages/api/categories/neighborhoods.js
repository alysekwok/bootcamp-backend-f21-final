import { findNeighborhood } from "../../../server/actions"

export const findNeighborhoodServerCall = async ({}) => {
  try {
    const neighborhood = await findNeighborhood()
    return {
        neighborhood,
    }
  } catch (e) {
    return {
      success: false,
      message: "Failed to run action!",
    }
  }
}

const handler = (req, res) =>
  findNeighborhoodServerCall({ name: req.query.name }).then((payload) => {
    if (payload.success) res.status(200)
    else res.status(500)
    res.json(payload)
  })

export default handler