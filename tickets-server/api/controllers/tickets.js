const mongoose = require("mongoose");
const Tickets = require('../models/tickets');

exports.addTickets = (req, res, next) => {
  //  TODO: add validation to input
  console.log(req.body);

  const msg = new Tickets({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    description: req.body.description,
    members: req.body.members.split(','),
    dueDate: new Date(req.body.dueDate),
    boardType: req.body.boardType,
  })
  msg.save().then((msg) => {
    return res.status(200).json({ messages: 'message 111 sent successfully', id: msg.title })
  })

};
exports.updateTickets = (req, res, next) => {
  const filter = { _id: req.body._id };
  const update = { boardType: req.body.boardType };
  Tickets.findOneAndUpdate(filter, update)
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Ticket updated"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};
exports.getAllTickets = async (req, res, next) => {
  Tickets.find()
    .then(tickets => {
      if (tickets) {
        console.log(tickets);
        res.status(200).json(tickets)
      } else {
        res.status(200).json({ message: `No new tickets ):` })
      }
    }).catch(err => {
      res.status(500).json({
        error: err.message
      });
    })
};


exports.deleteTicket = async (req, res, next) => {

  Tickets.remove({ _id: req.params.id })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Ticket deleted"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });

};

// exports.readMessage = async (req, res, next) => {
//   const msgID = await req.user.readMessage()

//   await Message.findOne({ _id: msgID }).populate('sender')
//     .then(msg => {
//       if (msg) {
//         const message = {
//           subject: msg.subject,
//           message: msg.message,
//           createdAt: msg.createdAt,
//           sender: msg.sender.email
//         }
//         res.status(200).json({ message })
//       } else {
//         res.status(200).json({ message: 'No new messages ):' })
//       }
//     }).catch(err => {
//       res.status(500).json({
//         error: err.message
//       });
//     })
// };


// exports.getAllUnreadMessages = (req, res, next) => {
//   User.findOne({ _id: req.user.id })
//     .select("unreadInbox").populate('unreadInbox')
//     .then(messages => {
//       if (messages) {
//         res.status(200).json(messages.unreadInbox)
//       } else {
//         res.status(200).json({ message: `No new messages from ${req.params.user} ):` })
//       }
//     }).catch(err => {
//       res.status(500).json({
//         error: err.message
//       });
//     })
// };

// // Just sender (owner) can delete message
// exports.deleteMessage = async (req, res, next) => {
//   try {
//     const result = await req.user.deleteMessage(req.params.msgId);
//     if (result) {
//       res.status(200).json({ message: `message ID ${req.params.msgId}, from ${result} of user: ${req.user.email} deleted` });
//     } else {
//       res.status(400).json({ message: `message ID ${req.params.msgId} not exist` });
//     }
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

