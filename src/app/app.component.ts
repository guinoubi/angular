import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'training-app';
  session_name='Formation Web Avancee';

  session = {
      id: 1,
      name: 'Formation Web',
      track: 'MEAN Stack',
      date: new Date('2018-06-13'),
      duree: 3,
      local: 'Lyon',
      participants: 0
  };

  nombrePart : number =0;

  nbrParticipantChange(event) {
    this.nombrePart = event.value;
    console.log(event.value);
  }


}


