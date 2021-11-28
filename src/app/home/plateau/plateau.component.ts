import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'plateau',
  templateUrl: './plateau.component.html',
  styleUrls: ['./plateau.component.scss']
})
export class PlateauComponent implements OnInit, AfterViewInit {
  @ViewChild('columns') columns!: ElementRef;
  xAxisFields: number = 6;
  yAxisFields: number = 7;
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
    this.columns.nativeElement.style.gridTemplateColumns = new Array(this.xAxisFields).fill("auto").join(" ");
  }

  calculateFields() {
    const fields = this.xAxisFields * this.yAxisFields;
    this.fields = Array.from({length: fields}, (_, i) => i + 1);
  }

  changeFieldDimensions(xAxis: number, yAxis: number) {
    this.xAxisFields = xAxis;
    this.yAxisFields = yAxis;
  }

}
