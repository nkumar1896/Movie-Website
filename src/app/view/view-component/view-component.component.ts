import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {

  userid:number;
  res:any;
  res1:any;
  res2:any;
  show:boolean;
  constructor(private http: HttpClient) {
   
   }

  ngOnInit() {
    let obj=this.http.get('https://api.themoviedb.org/3/trending/movie/day?api_key=df3b8fae120ac608bc201c6dc996d3e6')
    obj.subscribe((res1)=>{
      this.res1=res1;
      console.log(this.res1);
    })
    let obj2=this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=df3b8fae120ac608bc201c6dc996d3e6&language=en-US&page=1')
    obj2.subscribe((res2)=>{
      this.res2=res2;
      console.log(this.res2);
    })
   
  }
  
  search(){
    this.http.get('https://api.themoviedb.org/3/movie/'+ this.userid +'?api_key=df3b8fae120ac608bc201c6dc996d3e6&language=en-US')
    .subscribe((res)=>{
      this.res=res;
      this.show=true;
      console.log(this.res);
    })
  }
  
}

