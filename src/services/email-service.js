const { TicketRepository } = require("../repositories");
const { MAILER } = require("../config");
const ticketRepository = new TicketRepository();
async function sendEmail(mailFrom, mailTo, subject, text) {
  try {
    let response = await MAILER.sendMail({
      from: mailFrom,
      to: mailTo,
      subject: subject,
      text: text,
    });
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function createTicket(data) {
  try {
    let response = await ticketRepository.create(data);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
async function getPendingEmails() {
  try {
    const pendingTickets = ticketRepository.getPendingTickets();
    return pendingTickets;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
module.exports = {
  sendEmail,
  createTicket,
  getPendingEmails,
};
