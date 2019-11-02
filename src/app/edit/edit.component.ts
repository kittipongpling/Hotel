import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';  //คือการเด้งไปหน้านั้นๆ


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(public http:HttpClient,public router: Router) { 
    
  }

  ngOnInit() {
  }

  editUser(data){
    
    const dataSend = {
                    user_id_user : 26 || "ไม่ระบุ",
                    user_name_user :data.user_name || "ไม่ระบุ",
                    user_lastname_user : data.user_lastname || "ไม่ระบุ",
                    age_user : data.age || "ไม่ระบุ",
                    user_call_user : data.user_call || "ไม่ระบุ",
                    address_user : data.address || "ไม่ระบุ",
                    email_address_user : data.email_address || "ไม่ระบุ",

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

  onClickSubmit(data) {
    this.editUser(data)
    // alert("Entered Email id : " + data.emailid); 
    console.log(data.user_name)
    console.log(data.user_lastname)
    console.log(data.age)
    console.log(data.user_call)
    console.log(data.address)
    console.log(data.email_address)
    
 }



}
