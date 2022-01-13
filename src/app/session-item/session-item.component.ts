import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FakeSessionItemService } from '../admin/fake-session-item.service';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {

  @Input() session: any;

  // @Output() nbParticipants = new EventEmitter<any>();

  constructor(private sessionItemService: FakeSessionItemService) { }

  ngOnInit(): void {
  }

  inscription()
  {  console.log(this.session);
    this.session.participants = this.session.participants + 1;
    console.log(this.session.participants);
  }

  onDelete()
  {this.sessionItemService.delete(this.session);}

}
