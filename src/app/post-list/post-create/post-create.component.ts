import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  mainTitle = '';
  mainContent = '';
  constructor() { }
 
   @Output() senddata = new EventEmitter();
  
  sendPost(){
    const post = {title:this.mainTitle, content:this.mainContent}
    this.senddata.emit(post);
  }

  ngOnInit() {
    
  }

  

}