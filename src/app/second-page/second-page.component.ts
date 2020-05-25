import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, tap, switchMap } from "rxjs/operators";
import { Observable, of, combineLatest } from "rxjs";

@Component({
  selector: "app-second-page",
  templateUrl: "./second-page.component.html",
  styleUrls: ["./second-page.component.css"]
})
export class SecondPageComponent implements OnInit {
  id$: Observable<number>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log("ngOnInit - SecondPageComponent");
    const params$ = this.route.params.pipe(
      // map(unTypedParams => {
      //   return {
      //     id: parseInt(unTypedParams.id)
      //   };
      // })
      map(this.typeParams)
      // tap(params => {
      //   this.id$ = params.id;
      // })
    );
    // .subscribe();
    this.id$ = params$.pipe(map(params => params.id));
    const customer$ = combineLatest(this.id$, params$).pipe(
      switchMap(([id, params]) => {
        return of({
          id,
          customername: "jinesh"
        });
      })
    );
  }

  typeParams(data: any) {
    return {
      id: parseInt(data.id)
    };
  }
}
