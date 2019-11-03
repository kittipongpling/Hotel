import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  public users;
  public users_firt;
  public keep_data;
  
  constructor(public http:HttpClient,public router: Router,private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe(params => {
      // let  params;
      console.log(params); // Print the parameter to the console. 
  });
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

  cliclToEdit(item) {
    this.router.navigate(['/edit', item]);
  }
  
}
