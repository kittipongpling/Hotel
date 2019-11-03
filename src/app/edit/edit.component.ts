import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';  //คือการเด้งไปหน้านั้นๆ


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  user_id
  user_name
  user_lastname
  age
  user_call
  address
  email_address




  public users_firt;

  constructor(public http:HttpClient,public router: Router,private activatedRoute: ActivatedRoute) { 
    
    this.activatedRoute.params.subscribe(params => {
      this.user_id = params.user_id
      this.user_name  = params.user_name
      this.user_lastname = params.user_lastname
      this.age = params.age
      this.user_call = params.user_call
      this.address = params.address
      this.email_address = params.email_address
      console.log(params); // Print the parameter to the console. 
      console.log(this.age)
      console.log(this.email_address)
      console.log(this.user_id)
  });

  }

  ngOnInit() {
    
  }

  editUser(user){
    
    const dataSend = {
                    user_id_user : user.user_id || "ไม่ระบุ",
                    user_name_user :user.user_name || "ไม่ระบุ",
                    user_lastname_user : user.user_lastname || "ไม่ระบุ",
                    age_user : user.age || "ไม่ระบุ",
                    user_call_user : user.user_call || "ไม่ระบุ",
                    address_user : user.address || "ไม่ระบุ",
                    email_address_user : user.email_address || "ไม่ระบุ",

      //  f_name : data.fname || "ไม่ระบุ",
      //  l_name : data.lname || "ไม่ระบุ" ,
      //  pass_word :data.password || "ไม่ ระบุ",
      //  role_user :data.role || "ไม่ระบุ", 
      //  nike_name: data.nikcname  || "ไม่ระบุ"
    }
    console.log(dataSend)
      
    this.http.post("http://127.0.0.1:9999/api/getUpdate_User", dataSend)
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
    this.editUser(user)
    // alert("Entered Email id : " + user.emailid); 
    console.log(user.user_name)
    console.log(user.user_lastname)
    console.log(user.age)
    console.log(user.user_call)
    console.log(user.address)
    console.log(user.email_address)
    
 }


 getuser_first(){
  const dataSend = {
    "user_id_user": 30
    
  }
    
  this.http.post("http://kittipong.com:9999/api/getUser_Firt", dataSend)
  .subscribe(
  data  => {
    // console.log(user_id);
    

    console.log("POST Request is successful ", data[0]);
    this.users_firt = data
  },
  error  => {
    
    console.log("Error", error);
    
  }
  
  );
}


}
