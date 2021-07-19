import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  mainTitle = '';
  mainContent = '';
  public cusValidator = false;
  constructor() {}

  @Output() senddata = new EventEmitter();

  sendPost() {
    if (this.mainTitle && this.mainContent) {
      const post = { title: this.mainTitle, content: this.mainContent };
      this.cusValidator = false;
      this.senddata.emit(post);
    } else {
      this.cusValidator = true;
    }
  }

  ngOnInit() {}
}
