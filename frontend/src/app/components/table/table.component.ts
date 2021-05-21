import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { NotificationService } from '../../services/notification.service';





@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  
  loginUserData ={};
  allUserData:any =[];
  result={};
  userResult:any=[];
  displayModal:String='block';
  email:string='';
  userData={};
  flag:Number=0;
  isModalShown:Boolean=false;
  UserId:String='';

  constructor( private fb: FormBuilder,private Service: UserService,private notification: NotificationService) { }

 
  registerForm = this.fb.group({
    fullName:['',Validators.required],
    email:['',Validators.required],
    dob:['',Validators.required],
    address:['',Validators.required]
  })

// get address(){return this.registerForm.get('address')}

  ngOnInit(): void {

    let url = '/people';
    this.Service.displayAllUsers(url).subscribe(res=>{
      console.warn(res)
      this.userResult = res;
      this.allUserData = this.userResult.result;

    })
  }

  onCreateButton(){
    this.flag=0;
    this.registerForm.reset();
  }

  // Create-function
  onSubmit() {
    this.isModalShown = !this.isModalShown;
    
    let url = '/people';
    this.flag=0;
    this.loginUserData =this.registerForm.value;
    console.warn(this.loginUserData)
    this.Service.addNewUser(url,this.loginUserData).subscribe(res=>{
      console.warn(res)
      this.result=res;
      this.notification.showSuccess("Inserted Successfully!", null)
      this.isModalShown = !this.isModalShown;
      this.ngOnInit();
    },err=>{
      console.warn(err)
      this.isModalShown = !this.isModalShown;

    })
  }

  // Delete-function
  onDelete(userId:any){
    let url = `/remove/${userId}`;
    this.Service.deleteUser(url).subscribe(res=>{
      this.notification.showError("Deleted Successfully!", null)
      this.ngOnInit();
    },err=>{console.warn(err)})
  }

  closemodal(){
    this.isModalShown = !this.isModalShown;
  }


  getDataById(data:any){
    let  obj :any={};
    console.warn("My all Obj")
    console.log(data.email)
    this.flag=1;
    this.UserId =data._id;
    obj["email"] =data.email;
    obj["fullName"]=data.full_name
    obj["address"]= data.address;
    obj["dob"]=data.dob;
    this.registerForm.patchValue(obj)
  }


  // Update-function
  onUpdate(){
    this.isModalShown = !this.isModalShown;
    console.warn(this.registerForm.value);
    let url = `/people/${this.UserId}`;
    this.flag=0;
    this.loginUserData =this.registerForm.value;
    console.warn(url,this.loginUserData)
    this.Service.updateUserData(url,this.loginUserData).subscribe(res=>{
      console.warn(res)
      this.result=res;
      this.notification.showSuccess("Updated Successfully!", null)
      this.isModalShown = !this.isModalShown;
      this.ngOnInit();

    },err=>{
      console.warn(err)
    })
  }
}
