import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBinidngComponent } from './data-binidng.component';

describe('DataBinidngComponent', () => {
  let component: DataBinidngComponent;
  let fixture: ComponentFixture<DataBinidngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBinidngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBinidngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
