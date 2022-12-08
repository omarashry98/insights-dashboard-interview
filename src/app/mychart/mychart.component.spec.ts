import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiService } from '../services/api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { MychartComponent } from './mychart.component';
import { request } from 'http';

describe('ApiService', () => {
  
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [ApiService]
  }));

  beforeEach(() => {
    // Increase the default timeout interval to 10 seconds
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    const httpTestingController = TestBed.get(HttpTestingController);
    httpTestingController.verify();
  });
  
  it('should be created', () => {
  const service: ApiService = TestBed.get(ApiService);
  expect(service).toBeTruthy();
  });

  it('should have getData function', () => {
  const service: ApiService = TestBed.get(ApiService);
  expect(service.getSales).toBeTruthy();
  });



  // it('should return the expected data from the API', async () => {
  //   const service: ApiService = TestBed.get(ApiService);

  //   const data = await service.getSales();
  //   expect
  //   expect(data).toEqual([
  //       { invoice_year: "2022", invoice_month: "11", amount: "10436345.43"}, 
  //       { invoice_year: "2028", invoice_month: "12", amount: "7484683.43"}
  //     ]);

  // });

  // it('should get data from the API', () => {
  //   const mockData = [{ invoice_year: "2022", invoice_month: "11", amount: "10436345.43"}, 
  //   { invoice_year: "2028", invoice_month: "12", amount: "7484683.43"}];
  //   const httpTestingController = TestBed.get(HttpTestingController);
  //   const req = httpTestingController.expectOne('http://localhost:5000/data');
  //   expect(req.request.method).toEqual('GET');
  //   req.flush(mockData);
  // });
  
});
