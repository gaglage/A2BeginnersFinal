import { Component } from '@angular/core';


@Component({
  selector: 'my-app',

  template: `<h1>Gabi App</h1>
  <input type="text" 
    [value]="title" 
    (input)="title = $event.target.value">

  <input type="text"  
    [(ngModel)]="title">

  <input type="button" 
    (click)="title = ''" 
    value="Clear">  

  Preview: {{title}}
  <courses></courses>
  <authors></authors>

  
  <h2>Práctica star </h2>
  <favorite 
    [isFavorite]="post.isFavorite"
    (change)="onChangeFavorite($event)"  
  ></favorite> 
  

    <h2>Práctica likes </h2>
    <like 
      [isLiked]="likes.isLiked"
      [numberLikes]="likes.numLikes"
       
    ></like> 
     <h2>Práctica likes </h2>
    <voter 
      [voteCounter] = "votes.counter"
      [myVote] ="votes.cachedVote"
      (vote)="onChangeVote($event)"
       
    ></voter>   
    <br>
    <br>
    <h2>Práctica Tweet</h2>
    <tweet></tweet>
     
  `,

})
export class AppComponent {
  title = "test";

  votes = {
    counter: 10,
    cachedVote: 1
  }

  likes={
    numLikes :10,
    isLiked:false

  }

  post = {
    title: "title",
    isFavorite: true
  }

  onChangeFavorite($event) {
    console.log($event);
  }
  onChangeVote($event) {
    console.log($event);    
  }

}
