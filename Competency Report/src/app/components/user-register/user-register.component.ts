import { DataService } from './../../services/data.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  model: User = new User();
  retypePassword: string;
  showAlert = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  //true = bnt disable
  //false = enabled
  shouldSaveDisable() {
    if (!this.model.userName || !this.model.email || !this.model.employeeNumber) {
      return true; //disable
    }

    // validate passwords
    if (!this.model.password || this.model.password != this.retypePassword) {
      return true; //disable
    }

    return false;
  }

  saveUser() {
    //console.log("Saving user", this.model);
    // Save the User
    this.dataService.saveUser(this.model);

    // Clear the form
    this.model = new User();
    this.retypePassword = "";

    // show success message
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 3000);
  }

}
