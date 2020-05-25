import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, tap } from "rxjs/operators";

@Component({
  selector: "app-second-page",
  templateUrl: "./second-page.component.html",
  styleUrls: ["./second-page.component.css"]
})
export class SecondPageComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log("ngOnInit - SecondPageComponent");
    this.route.params
      .pipe(
        map(params => {
          return {
            id: parseInt(params.id)
          };
        }),
        tap(params => {
          this.id = params.id;
        })
      )
      .subscribe();
  }
}
