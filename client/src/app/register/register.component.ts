import { Component, OnInit , Input, EventEmitter, Output } from '@angular/core';
import { error } from 'selenium-webdriver';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
// @Input() usersFromHomeComponent: any; // parent to child   int parent.html [usersFromHomeComponent]="users"
@Output() cancelRegister = new EventEmitter();
model: any = {};

  constructor(private AccountService: AccountService) { }

  ngOnInit(): void {
  }

  register(){
    this.AccountService.register(this.model).subscribe(response => {
      console.log(response);
      this.cancel()
    }, error => {
      console.log(error);
    })
  }

  cancel(){
    this.cancelRegister.emit(false);
  }
}
