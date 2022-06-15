const mongoose = require('mongoose');


const eventSchema = mongoose.Schema({
    
          event_start_date: { type: Date, required: true, unique: true },
            event_end_date: { type: Date, required: true, unique: true },
            description:{ type: String, required: true },
            venue_name:{ type: String, required: true },
            url:   { type: String, required: true },
            meal: { type: String, required: true },
            dresscode:{ type: String, required: true },
            price: { type: Number, required: true },
            city_name: { type: String, required: true },
            title: { type: String, required: true }

   

},  { timestamps: true })


module.exports = mongoose.model('Event', eventSchema);