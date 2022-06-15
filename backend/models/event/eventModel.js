const eventSchema = require('./eventSchema')
const Event= require('./eventSchema')


// -- GET ALL PRODUCTS -- //

exports.getAllEvents = (req, res) => {

    Event.find({}, (err, events) => {

        if(err) {
            return res.status(500).json({
                statusCode: 500, 
                status: false, 
                message: 'Something went wrong when fetching the products...',
                err
            })
        }

        res.status(200).json(events)

    })
}



// -- GET ONE Event-- //

exports.getOneEvent= (req, res) => {

    Event.exists({ _id: req.params.id }, (err, result) => {

        if(err) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'Ooops something went wrong...',
            })
        }

        if(!result) {
            return res.status(404).json({
                statusCode: 404,
                status: false,
                message: 'Ooops this Eventdoes not exist...'
            })
        }

        Event.findById(req.params.id)
            .then(event=> res.status(200).json(event))
            .catch( err => {
                res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: 'Internal server error',
                    err
                })
            })

    })
}


// -- CREATE NEW Event-- //

exports.createEvent= (req, res) => {

    Event.exists({ title: req.body.title }, (err, result) => {

        if(err) {
            return res.status(500).json(err)
        }

        if(result) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'A Eventwith that description already exists...'
            })
        }

       Event.create({
            event_start_date: req.body.event_start_date,
            event_end_date:req.body.event_end_date,
            description:req.body.description,
            venue_name:req.body.venue_name,
            url:    req.body.url,
            meal:req.body.meal,
            dresscode:req.body.dresscode,
            price: req.body.price,
            city_name: req.body.city_name,
            title: req.body.title
        })
        .then(event=> {
            res.status(201).json({
                statusCode: 201,
                status: true,
                message: 'Eventcreated successfully!',
                event
            })
        })
        .catch(err => {
            res.status(500).json({
                statusCode: 500,
                status: false,
                message: 'Failed to createEvent...',
                err
            })
        })

    })

}


// -- UPDATE Event-- //

exports.updateEvent= (req, res) => {

   Event.exists({ _id: req.params.id }, (err, result) => {

        if(err) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'Ooops something went wrong...',
            })
        } 

        if(!result) {
            return res.status(404).json({
                statusCode: 404,
                status: false,
                message: 'Ooops this Eventdoes not exist...'
            })
        }

       Event.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(event=> {
                res.status(200).json({
                    statusCode: 200,
                    status: true,
                    message: 'Eventupdated successfully!',
                   event
                })
            })
            .catch(err => {
                
                if(err.code === 11000) {
                    return res.status(400).json({
                        statusCode: 400,
                        status: false,
                        message: 'A Eventwith that name already exists...'
                    })
                }

                res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: 'Failed to updateEvent...',
                    err
                })
            })    

    })

}


// -- DELETE Event-- //

exports.deleteEvent= (req, res) => {

    Event.exists({ _id: req.params.id }, (err, result) => {

        if(err) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'Ooops something went wrong...',
            })
        }

        if(!result) {
            return res.status(404).json({
                statusCode: 404,
                status: false,
                message: 'Ooops this Eventdoes not exist...'
            })
        }

        Event.findByIdAndDelete(req.params.id)
            .then(event=> {
                res.status(200).json({
                    statusCode: 200,
                    status: true,
                    message: 'Eventdeleted successfully!',
                    event
                })
            })
            .catch(err => {
                res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: 'Failed to delete product...',
                    err
                })
            })

    })

}