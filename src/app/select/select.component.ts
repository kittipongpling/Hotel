import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  public users;
  public users_firt;

  constructor(public http:HttpClient,public router: Router) { 

  }

  ngOnInit() {
    
    this.getuser()
  }

  getuser(){
    const dataSend = {
      "user_id": 12
    }
      
    this.http.post("http://kittipong.com:9999/api/getUser_User", dataSend)
    .subscribe(
    data  => {
      console.log("POST Request is successful ", data[0]);
      this.users = data
    },
    error  => {
      
      console.log("Error", error);
      
    }
    
    );
  }
  getdelete(user_id){
    const dataSend = {
      
      "user_id_user": user_id
    }
      
    this.http.post("http://127.0.0.1:9999/api/getDelete_user", dataSend)
    .subscribe(
    data  => {
      
      this.getuser()
    },
    error  => {
      
      console.log("Error", error);
      
    }
    
    );
    
  }

  getuser_first(user_id){
    const dataSend = {
      "user_id_user": user_id
      
    }
      
    this.http.post("http://kittipong.com:9999/api/getUser_Firt", dataSend)
    .subscribe(
    data  => {
      console.log(user_id);
      console.log("POST Request is successful ", data[0]);
      this.users_firt = data
    },
    error  => {
      
      console.log("Error", error);
      
    }
    
    );
  }


  edit_user(user){
    const dataSend = {
      // user_id_user : data.user_id,
  user_name_user : user.user_name
  // user_lastname_user : user.user_lastname,
  //  age_user : user.age,
  // user_call_user : user.user_call,
  // address_user : user.address,
  // email_address_user : user.email_address

    }
    console.log(dataSend)

    this.http.post("http://kittipong.com:9999/api/getUpdate_User", dataSend)
    .subscribe(
    data  => {
      
      this.router.navigate(['/select' ]);
      
    },
    error  => {
      
      console.log("Error", error);
      
    }
    
    );

  }
  onClickSubmit(user) {
    console.log('object')
    // this.edit_user(user)
    // alert("Entered Email id : " + user.emailid); 
    console.log(user.user_name)
    console.log(user)
    // console.log(user.user_lastname)
    // console.log(user.age)
    // console.log(user.user_call)
    // console.log(user.address)
    // console.log(user.email_address)
    
 }
}
