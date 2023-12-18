const CrudRepository = require("./crud-repositories");
const { Ticket } = require("../models");

class TicketRepository extends CrudRepository {
  constructor() {
    super(Ticket);
  }
  async getPendingTickets() {
    try {
      let pendingTickets = Ticket.findAll({
        where: {
          status: "pending",
        },
      });
      return pendingTickets;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = TicketRepository;
