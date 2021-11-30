
const mongoose = require('mongoose')

const { Schema } = mongoose

const restaurantsSchema = new Schema({ 
    address: {
        building: String,
        coord: Array,
        street: String,
        zipcode: String
    },
    borough: String,
    cuisine: String,
    grades: [{
        date: String,
        grade: String,
        score: Number
    }],
    name: String,
    restaurant_id: String
})

export default mongoose.models.Restaurant ?? mongoose.model("Restaurant", restaurantsSchema)
