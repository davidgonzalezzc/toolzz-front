import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListToolComponent } from './list-tool.component';
import { of } from 'rxjs';
import { ListToolsService } from '../list-tools.service';
import { DataService } from '../data.service';
import { Tool } from '../model/Tool';
import { HttpClientModule } from '@angular/common/http';

describe('ListToolComponent', () => {
  let component: ListToolComponent;
  let fixture: ComponentFixture<ListToolComponent>;
  let mockListToolsService: jasmine.SpyObj<ListToolsService>;
  let mockDataService: jasmine.SpyObj<DataService>;

  beforeEach(async () => {
    mockListToolsService = jasmine.createSpyObj('ListToolsService', ['getPaginatedTools', 'searchToolByName', 'getTools']);
    mockDataService = jasmine.createSpyObj('DataService', ['data']);

    await TestBed.configureTestingModule({
      declarations: [ListToolComponent],
      imports:[HttpClientModule],
      providers: [
        { provide: ListToolsService, useValue: mockListToolsService },
        { provide: DataService, useValue: mockDataService },

      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListToolComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call getTools and setPage on ngOnInit', () => {
    const mockSearchResult: Tool[] = [
      { id: 1, name: 'Tool 1', description: 'Description 1', brand:{brand_id:1,name:'Brand1'}, image: 'image1.jpg', price: 10,amount:10,city:[] },
      { id: 2, name: 'Tool 2', description: 'Description 2', brand:{brand_id:1 ,name:'Brand2'}, image: 'image2.jpg', price: 20,amount:10,city:[] },
    ];
    mockListToolsService.getTools.and.returnValue(of(mockSearchResult));

    spyOn(component, 'setPage');

    component.ngOnInit();

    expect(mockListToolsService.getTools).toHaveBeenCalled();
    expect(component.tools).toEqual(mockSearchResult);
    expect(component.setPage).toHaveBeenCalledWith(component.currentPage);
  });

  it('should update pagedItems and call searchToolByName on ngOnInit when dataService.data changes', () => {
    const mockData = 'search query';
    const mockSearchResult = [{ id: 1, name: 'Tool 1', description: 'Description 1', brand:{brand_id:1,name:'Brand1'}, image: 'image1.jpg', price: 10,amount:10,city:[] },
  ];

    mockListToolsService.searchToolByName.and.returnValue(of(mockSearchResult));
    mockDataService.data = mockData;

    component.ngOnInit();

    expect(mockListToolsService.searchToolByName).toHaveBeenCalledWith(mockData);
    expect(component.pagedItems).toEqual(mockSearchResult);
  });

  it('should set the current page and update pagedItems correctly on setPage', () => {
    const mockTools = [
      { id: 1, name: 'Tool 1', description: 'Description 1', brand:{brand_id:1,name:'Brand1'}, image: 'image1.jpg', price: 10,amount:10,city:[] },
      { id: 2, name: 'Tool 1', description: 'Description 1', brand:{brand_id:1,name:'Brand1'}, image: 'image1.jpg', price: 10,amount:10,city:[] },
      { id: 3, name: 'Tool 1', description: 'Description 1', brand:{brand_id:1,name:'Brand1'}, image: 'image1.jpg', price: 10,amount:10,city:[] },
      { id: 4, name: 'Tool 1', description: 'Description 1', brand:{brand_id:1,name:'Brand1'}, image: 'image1.jpg', price: 10,amount:10,city:[] },
      { id: 5, name: 'Tool 1', description: 'Description 1', brand:{brand_id:1,name:'Brand1'}, image: 'image1.jpg', price: 10,amount:10,city:[] },
      { id: 6, name: 'Tool 1', description: 'Description 1', brand:{brand_id:1,name:'Brand1'}, image: 'image1.jpg', price: 10,amount:10,city:[] },

    ];

    component.tools = mockTools;
    component.pageSize = 3;

    component.setPage(2);

    expect(component.currentPage).toBe(2);
    expect(component.pagedItems).toEqual([
      { id: 4, name: 'Tool 1', description: 'Description 1', brand:{brand_id:1,name:'Brand1'}, image: 'image1.jpg', price: 10,amount:10,city:[] },
      { id: 5, name: 'Tool 1', description: 'Description 1', brand:{brand_id:1,name:'Brand1'}, image: 'image1.jpg', price: 10,amount:10,city:[] },
      { id: 6, name: 'Tool 1', description: 'Description 1', brand:{brand_id:1,name:'Brand1'}, image: 'image1.jpg', price: 10,amount:10,city:[] },

    ]);
  });

  it('should calculate the correct totalPages', () => {
    component.tools = [
      { id: 1, name: 'Tool 1', description: 'Description 1', brand:{brand_id:1,name:'Brand1'}, image: 'image1.jpg', price: 10,amount:10,city:[] },
      { id: 2, name: 'Tool 1', description: 'Description 1', brand:{brand_id:1,name:'Brand1'}, image: 'image1.jpg', price: 10,amount:10,city:[] },
      { id: 3, name: 'Tool 1', description: 'Description 1', brand:{brand_id:1,name:'Brand1'}, image: 'image1.jpg', price: 10,amount:10,city:[] },
      { id: 4, name: 'Tool 1', description: 'Description 1', brand:{brand_id:1,name:'Brand1'}, image: 'image1.jpg', price: 10,amount:10,city:[] },
      { id: 5, name: 'Tool 1', description: 'Description 1', brand:{brand_id:1,name:'Brand1'}, image: 'image1.jpg', price: 10,amount:10,city:[] },
      { id: 6, name: 'Tool 1', description: 'Description 1', brand:{brand_id:1,name:'Brand1'}, image: 'image1.jpg', price: 10,amount:10,city:[] },

    ];

    component.pageSize = 3;

    expect(component.totalPages).toEqual([1, 2]);
  });

  it('should call setPage with the previous page number on previousPage', () => {
    spyOn(component, 'setPage');

    component.currentPage = 3;
    component.previousPage();

    expect(component.setPage).toHaveBeenCalledWith(2);
  });

  it('should call setPage with the next page number on nextPage', () => {
    spyOn(component, 'setPage');

    component.currentPage = 3;
    component.nextPage();

    expect(component.setPage).toHaveBeenCalledWith(4);
  });
});
