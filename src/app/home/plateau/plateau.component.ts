import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'plateau',
  templateUrl: './plateau.component.html',
  styleUrls: ['./plateau.component.scss']
})
export class PlateauComponent implements OnInit, AfterViewInit {
  xAxisFields: number = 7;
  @ViewChild('columns') columns!: ElementRef;
  yAxisFields: number = 4;
  fields: number[] = [];

  constructor() {
  }

  ngAfterViewInit() {
    this.injectProperties();
  }

  ngOnInit(): void {
    this.calculateFields();
  }

  injectProperties() {
    let property: string = "";
    for (let i = 0; i < this.xAxisFields; i++) {
      property += "auto";
      if(i !== this.xAxisFields){
        property += " ";
      }
    }
    this.columns.nativeElement.style.gridTemplateColumns = property;
  }

  calculateFields() {
    const fields = this.xAxisFields * this.yAxisFields;
    for (let i = 1; i <= fields; i++) {
      this.fields.push(i);
    }
  }

  changeFieldDimensions(xAxis: number, yAxis: number) {
    this.xAxisFields = xAxis;
    this.yAxisFields = yAxis;
  }

}
