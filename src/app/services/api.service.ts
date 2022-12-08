import { Injectable } from "@angular/core";
import { catchError, Observable, of, timeout } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { monthlySales } from "../dashboard/dashboard-components/monthly-sales/monthly-sales-data";

@Injectable()
export class ApiService{

    constructor(private httpclient: HttpClient) {}

    getSales(): Promise<monthlySales[]> {
        return new Promise((resolve, reject) =>  {
            const output = this.httpclient.get("http://localhost:5000/data", {
                responseType: "text",
            });
            let data = "";
            output
                .pipe(
                    timeout(5000),
                    catchError((err) => {
                        reject(err);
                        return of(null);
                    })
                )
                .subscribe({
                complete() {
                    try{
                        const result = JSON.parse(data) as monthlySales[];
                        resolve(result);
                    }catch(err){
                        reject(err);
                    }
                },
                next(value) {
                    data += value;
                },
                error(err){
                    reject(err);
                }
            })
        })
    }
}
