import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {

  @Input() session: any;

  constructor() { }

  ngOnInit(): void {
  }

  inscription()
  {  console.log(this.session);
    this.session.participants = this.session.participants + 1;
    console.log(this.session.participants);
  }
}
