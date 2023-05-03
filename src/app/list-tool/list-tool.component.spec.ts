import { ListToolsService } from './../list-tools.service';
import { Tool } from './../model/Tool';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListToolComponent } from './list-tool.component';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';

class MockListToolService extends ListToolsService{
  override getTools(): Observable<Tool[]> {
      let tools: Tool[] = [];
      let tool : Tool = {
        name:"Hammer",
        description:"Una herramienta",
        brand:"Bosch",
        image:"imagen1",
        price:123,
        amount:12};
      tools.push(tool);
      const obsertool$ = of(tools);
      return obsertool$;
  }
}


describe('En esta suite se probara el funcionamiento del componente para listar herramientas', () => {
  let component: ListToolComponent;
  let fixture: ComponentFixture<ListToolComponent>;
  let listToolsService: ListToolsService;

  beforeEach(async () => {

    TestBed.overrideComponent(
      ListToolComponent,
      {set:{providers:[{provide:ListToolsService,useClass:MockListToolService}]}});

    await TestBed.configureTestingModule({
      declarations: [ ListToolComponent ],
      imports:[HttpClientModule]
    })
    .compileComponents();
    listToolsService = TestBed.inject(ListToolsService);
    fixture = TestBed.createComponent(ListToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Se busca probar que getTools traiga herramientas',() =>{
    listToolsService.getTools().subscribe(
      data => {
        console.log(data);
        expect(data).toHaveSize(1);
      });
  });
});
