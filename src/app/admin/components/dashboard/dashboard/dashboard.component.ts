import { Component, OnInit } from '@angular/core';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../../../../services/ui/custom-toastr.service';
import { ToastrService } from 'ngx-toastr';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent extends BaseComponent implements OnInit {

  constructor(private alertifyService:AlertifyService,private customToastrService:CustomToastrService,spinner:NgxSpinnerService){
    super(spinner)
  }
  ngOnInit(): void {
  
    this.showSpinner(SpinnerType.BallScaleMultiple)
  }

  m(){
    this.alertifyService.message("Başarılı",{
      messageType:MessageType.Error,
      delay:5,
      position:Position.BottomRight,
      dismissOthers:false
    })
    this.customToastrService.message("Sipariş Başarılı","Sipariş",{
      toastrmessageType:ToastrMessageType.Error,
      toastrPosition:ToastrPosition.BottomCenter
    })
  }
  dismiss(){
    this.alertifyService.dismiss()
  }

}
