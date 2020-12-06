const express = require('express');
const router = express.Router();
const ticketsController = require('../controllers/tickets');


router.post('/add', ticketsController.addTickets);

router.get('/all', ticketsController.getAllTickets);

router.delete('/delete/:id', ticketsController.deleteTicket);

router.post('/update', ticketsController.updateTickets);

module.exports = router;
