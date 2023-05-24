import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ListToolsService } from '../list-tools.service';
import { Tool } from '../model/Tool';
import { Tool2 } from '../model/Tool2';

@Component({
  selector: 'app-form-create-tool',
  templateUrl: './form-create-tool.component.html',
  styleUrls: ['./form-create-tool.component.css']
})
export class FormCreateToolComponent implements OnInit {

  tool = new FormGroup({
    amount: new FormControl(''),
    brand: new FormControl(''),
    brand_id: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl(''),
    city: new FormControl(''),
    city_id :new FormControl('')
  });

  toolObject: Tool2 ={
    amount: 0,
    brand: {brand_id:0,name:''},
    description: '',
    image: '',
    name: '',
    price: 0,
    city: []
  }


  constructor(private toolService:ListToolsService) { }

  ngOnInit(): void {
  }

  onSubmit():void{
    console.log(this.tool.value.amount);
    this.toolObject.amount = Number(this.tool.value.amount);
    this.toolObject.brand.name = String(this.tool.value.brand);
    this.toolObject.brand.brand_id = Number(this.tool.value.brand_id);
    this.toolObject.description = String(this.tool.value.description);
    this.toolObject.image = String(this.tool.value.image);
    this.toolObject.name = String(this.tool.value.name);
    this.toolObject.price = Number(this.tool.value.price);
    this.toolObject.city.push({city_id:Number(this.tool.value.city_id),name:String(this.tool.value.city)});

    this.toolService.post(this.toolObject).subscribe(
      response => {
        console.log('Response',response);
      },
      error =>{
        console.log('Error',error)
      }
    );
  }
}
