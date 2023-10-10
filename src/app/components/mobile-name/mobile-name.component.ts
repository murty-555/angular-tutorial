import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MobilesService } from 'src/app/services/mobiles.service';

@Component({
  selector: 'app-mobile-name',
  templateUrl: './mobile-name.component.html',
  styleUrls: ['./mobile-name.component.css'],
})
export class MobileNameComponent implements OnInit {
  public mobiles = [];
  public errMsg: string = '';
  public selectedId;
  constructor(private _mobileService: MobilesService, private _router: Router, private _activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this._mobileService.getMobiles().subscribe((data) => (this.mobiles = data),
    error => this.errMsg = error);
    this._activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = parseInt(params.get('id'))
    })
  }
  onSelect(mobile){
    this._router.navigate(["/mobiles", mobile.id])
  }
  selected(mobile){
    return mobile.id === this.selectedId
  }
}
