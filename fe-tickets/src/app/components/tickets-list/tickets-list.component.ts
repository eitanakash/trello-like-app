import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketsListComponent implements OnInit {

  tickets: any;
  currentTicket = null;
  currentIndex = -1;
  title = '';

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.retrieveTickets();
  }

  retrieveTickets(): void {
    this.ticketService.getAll()
      .subscribe(
        data => {
          this.tickets = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }



  deleteTicket(ticket): void {
    console.log(`delete ticket ${ticket._id}`);

    this.ticketService.delete(ticket._id)
      .subscribe(
        data => {
          this.tickets = data;
          console.log(data);
          this.retrieveTickets()
        },
        error => {
          console.log(error);
        });

  }

  updateTicket(ticket, data): void {
    console.log(`updateTicket ticket ${ticket.title}`);
    {
      this.ticketService.update(ticket)
        .subscribe(
          data => {
            this.tickets = data;
            console.log(data);
            this.retrieveTickets();
          },
          error => {
            console.log(error);
          });

    }
  }
  ticketNextStep(ticket): void {
    console.log(`updateTicket ticket ${ticket.title}`);
    if (ticket.boardType >= 4) {
      console.log('alert last step');
      return;
    }
    const newTicket = ticket;
    newTicket.boardType += 1;
    {
      this.ticketService.update(newTicket)
        .subscribe(
          data => {
            this.tickets = data;
            console.log(data);
            this.refreshList()
          },
          error => {
            console.log(error);
          });

    }
  }
  ticketPreviousStep(ticket): void {
    console.log(`updateTicket ticket ${ticket.title}`);
    if (ticket.boardType <= 1) {
      console.log('alert last step');
      return;
    }
    const newTicket = ticket;
    newTicket.boardType -= 1;

    {
      this.ticketService.update(newTicket)
        .subscribe(
          data => {
            this.tickets = data;
            console.log(data);
            this.refreshList()
          },
          error => {
            console.log(error);
          });

    }
  }

  refreshList(): void {
    this.retrieveTickets();
  }


  searchTitle(): void {
    this.ticketService.findByTitle(this.title)
      .subscribe(
        data => {
          this.tickets = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}