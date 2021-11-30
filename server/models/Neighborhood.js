const mongoose = require('mongoose')

const { Schema } = mongoose

const neighborhoodSchema = new Schema({
    geometry: {
        coordinates: Array,
        type: String
    },
    name: String
})

export default mongoose.models.Neighborhood ?? mongoose.model("Neighborhood", neighborhoodSchema)
