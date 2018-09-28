import { Component } from '@angular/core';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private svc:TestService,private  http:HttpClient)
  {
    this.svc.printToConsole('got the service');
  }
  ngOnInit(){
   // let obj=this.http.get('https://api.themoviedb.org/3/movie/400155?api_key=df3b8fae120ac608bc201c6dc996d3e6&language=en-US');
   // obj.subscribe((res)=>console.log(res));
   // let obj2=this.http.get('https://api.themoviedb.org/3/movie/348350?api_key=df3b8fae120ac608bc201c6dc996d3e6&language=en-US');
   // obj2.subscribe((res)=>console.log(res));
    //let obj3=this.http.get('https://api.themoviedb.org/3/movie/ 351286?api_key=df3b8fae120ac608bc201c6dc996d3e6&language=en-US');
    //obj3.subscribe((res)=>console.log(res));
    //let obj4=this.http.get('https://api.themoviedb.org/3/trending/movie/day?api_key=df3b8fae120ac608bc201c6dc996d3e6');
   // obj4.subscribe((res1)=>console.log(res1));
    
  }
}
