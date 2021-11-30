import { findBoroughs } from "../../../server/actions"

export const findBoroughsServerCall = async ({ }) => {
  try {
    const borough = await findBoroughs()
    return {
        borough,
    }
  } catch (e) {
    return {
      success: false,
      message: "Failed to run action!",
    }
  }
}

const handler = (req, res) =>
  findBoroughsServerCall({ borough: req.query.borough }).then((payload) => {
    if (payload.success) res.status(200)
    else res.status(500)
    res.json(payload)
  })

export default handler

