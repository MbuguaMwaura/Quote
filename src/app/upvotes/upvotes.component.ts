import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upvotes',
  templateUrl: './upvotes.component.html',
  styleUrls: ['./upvotes.component.css']
})
export class UpvotesComponent implements OnInit {

  numberOfLikes:number = 0;

  numberOfDislike:number = 0;

  likeButtonClick(){
    this.numberOfLikes++;
  }
  
  dislikeButtonClick(){
    this.numberOfDislike++;
  }

  constructor() { }

  ngOnInit() {
  }

}
