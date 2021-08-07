import { Component, OnInit } from '@angular/core';
import { ServesHttpService } from '../../services/serves-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name = "";
  comments = "";
  body = "";
  posts:any;
  data = "";
  constructor(private servesHttpService: ServesHttpService){}
 ngOnInit():void{
  this.servesHttpService.getProfile().subscribe(
    data => {
      this.name = data.name;
    }
  )
  this.servesHttpService.getComment().subscribe(
    data => {
      this.body = data
    }
  )
  this.servesHttpService.getPosts().subscribe(
    data => {
      this.posts = data
    }
  )

}
addPost(){
  const newData = {title:"testing",author:'author testing'};
  this.servesHttpService.addPosts(newData).subscribe(
    (data) => {
      this.posts.push(data);
    }
  )
}
 }
