import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent {
  constructor(private ac: ActivatedRoute) {}
  params: any;
  QueryParams: any;
  ngOnInit() {
    this.params = this.ac.snapshot.params;
    this.QueryParams = this.ac.snapshot.queryParams;
  }
}
