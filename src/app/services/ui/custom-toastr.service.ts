import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toastrService:ToastrService) { }

  message(message:string, title:string,toastrOptions:Partial<ToastrOptions>){
    this.toastrService[toastrOptions.toastrmessageType](message,title,{
      positionClass:toastrOptions.toastrPosition,
      messageClass:toastrOptions.toastrmessageType
    })
  }
}

export enum ToastrMessageType{
Success="success",
Info="info",
Warning="warning",
Error="error"
}

export enum ToastrPosition{
TopRight="toast-top-right",
BottomRight="toast-bottom-right",
BottomLeft="toast-bottom-left",
TopLeft="toast-top-left",
TopFullWidth="toast-top-full-width",
BottomFullWidth="toast-bottom-full-width",
TopCenter="toast-top-center",
BottomCenter="toast-bottom-center"

}

export class ToastrOptions{
  toastrmessageType:ToastrMessageType=ToastrMessageType.Success
  toastrPosition:ToastrPosition
}
