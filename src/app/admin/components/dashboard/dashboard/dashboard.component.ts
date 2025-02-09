import { Component, OnInit } from '@angular/core';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  constructor(private alertifyService:AlertifyService){}
  ngOnInit(): void {
    
  }

  m(){
    this.alertifyService.message("Başarılı",{
      messageType:MessageType.Warning,
      delay:5,
      position:Position.BottomRight,
      dismissOthers:false
    })

  }
  dismiss(){
    this.alertifyService.dismiss()
  }

}
