import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {
  constructor( private httpClient : HttpClient){}
  title = 'multipart-udith';

  public selectedFile:any;
  public event1: any;
  imgURL:any;
  receivedImageData:any;
  base64Data:any;
  convertedImage:any;
  baseurl = "http://localhost:8081/check/upload";

  public onFileChanged(event:any){
    this.selectedFile=event.target.files[0];

let reader=new FileReader();
reader.readAsDataURL(event.target.files[0])
reader.onload=(event2)=>{
  this.imgURL=reader.result;
};

  }

onUpload(){
  const uploadData = new FormData();
  uploadData.append('myFile',this.selectedFile,this.selectedFile.name);
  
  
  this.httpClient.post(this.baseurl,uploadData)
  .subscribe(
    res=>{
    this.receivedImageData=res;
    this.base64Data=this.receivedImageData.pic;
    this.convertedImage='data:image.jpeg;base64,'+this.base64Data;
    console.log('image added')
    alert('Image added successfully')
  },  
    err=>{console.log('Error occured during saving:' +err)
    alert('Image not added')}
  );
}

}
