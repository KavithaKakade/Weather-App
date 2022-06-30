import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  city_name="Coimbatore";
  data:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
 getWeather(){
  var baseURL="https://api.openweathermap.org/data/2.5/weather?q="+this.city_name+"&appid=4fa580e5c2c98d7f3ef316e0f57615cd";
  this.http.get(baseURL)
  .subscribe(
    res => {
      this.data=res;
    },
    err =>{
      alert("error")
    }
  )
    


 }
}
