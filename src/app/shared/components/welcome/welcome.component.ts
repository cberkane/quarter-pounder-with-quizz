import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rediction-dialog',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WeclomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public gotoPlay() {
    this.router.navigate(['play'])
  }
}
