import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FakeSessionItemService } from '../fake-session-item.service';
import { Session } from '../session';

@Component({
  selector: 'app-session-edit-form',
  templateUrl: './session-edit-form.component.html',
  styleUrls: ['./session-edit-form.component.css']
})
export class SessionEditFormComponent implements OnInit {

  //tracks = ['MEAN', 'Angular', 'NodeJS', 'Android', 'Swift', 'Xamarin'];
  //session = new Session(1, 'Web', this.tracks[0], new Date('2018-06-11'), 10, 'Lyon', 0, false);

  id;
  sub: any;
  session:any;
  tracks = ['MEAN', 'Angular', 'NodeJS', 'Android', 'Swift', 'Xamarin'];

  constructor(private route: ActivatedRoute, private sessionItemService: FakeSessionItemService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
    this.id = params['id']; // (+) converts string 'id' to a number
  });
  console.log('Session ID ' + this.id.toString());
  this.session = this.sessionItemService.getSession(this.id);
  }

  editSession(sessionItem) {
   console.log(sessionItem);
  }

}
