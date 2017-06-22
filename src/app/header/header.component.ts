import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { DataService } from '../shared/data-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent{
  constructor(private dataService: DataService){}
  onSaveData(){
    this.dataService.storeRecipes().subscribe(
      (response:Response) => {
        console.log(response);
      }
    );
  }

  onFetchData(){
    this.dataService.getRecipes();
  }
}
