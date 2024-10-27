import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Customer, Login } from './model/product';
import { FormsModule } from '@angular/forms';
import { MasterServiceService } from './service/master.service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

    if (typeof window !== 'undefined' && window.localStorage) {
        const isUser = localStorage.getItem('ecom18');
        if(isUser != null){
          this.loggedInUserData = JSON.parse(isUser);
        }
    }
  
  }

  title = 'ecomm';
  registrationModel : Customer = new Customer();
  loginModel : Login = new Login();
  loggedInUserData : Customer = new Customer();

  @ViewChild("registerModel") registerModel : ElementRef | undefined; 
  @ViewChild("loginModalPop") loginModalPop : ElementRef | undefined; 

  masterService = inject(MasterServiceService);

  openRegistrationModel(){
    if(this.registerModel){
      this.registerModel.nativeElement.style.display = "block";
    }
  }

  openLoginModel(){
    if(this.loginModalPop){
       this.loginModalPop.nativeElement.style.display = "block";
    }
  }

  closeRegistrationModel(){
    if(this.registerModel){
      this.registerModel.nativeElement.style.display = "none";
    }
  }

  closeLoginPopUpModel(){
    if(this.loginModalPop){
      this.loginModalPop.nativeElement.style.display = "none";
    }
  }

  onRegister(){
    this.masterService.registerNewCustomer(this.registrationModel).subscribe((res)=>{
      if(res.result){
        alert(res.message);
        this.closeRegistrationModel();
      }
      else{
        alert(res.message);
        this.closeRegistrationModel();
      }
    });
  }

  onLogin(){
    this.masterService.loginCustomer(this.loginModel).subscribe((res)=>{
      if(res.result){
        debugger;
       localStorage.setItem('ecom18', JSON.stringify(res.data));
       this.loggedInUserData = res.data;
       this.closeLoginPopUpModel();
      }else{
        alert('Some thing wend wrong please! Ensure you entered correct details');
        this.closeLoginPopUpModel();
      }
    });
  }

  logOff(){
    localStorage.removeItem('ecom18');
    this.loggedInUserData = new Customer();
  }
}
