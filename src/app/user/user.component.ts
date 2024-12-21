import { Component, computed, EventEmitter, input, Input, Output, output, signal } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";
//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //selectedUser = DUMMY_USERS[randomIndex];
  //selectedUser = signal(DUMMY_USERS[randomIndex]);
  
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;

  // }
 //imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
  
 @Input({ required: true}) user!: User; 
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!:string;
  
  // avatar = input<string>();
  // name = input<string>();
  @Input( {required: true}) selected!: boolean;
  @Output() select = new EventEmitter();
  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser() {
    //const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    //this.selectedUser.set(DUMMY_USERS[randomIndex]);
    //this.selectedUser = DUMMY_USERS[randomIndex];
    this.select.emit(this.user.id);
  }
}
