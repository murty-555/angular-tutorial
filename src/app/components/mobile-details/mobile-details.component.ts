import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MobilesService } from 'src/app/services/mobiles.service';

@Component({
  selector: 'app-mobile-details',
  templateUrl: './mobile-details.component.html',
  styleUrls: ['./mobile-details.component.css'],
})
export class MobileDetailsComponent implements OnInit {
  public mobileDetails = [];
  public errMsg: string = '';
  public mobileId;
  constructor(private _mobilesService: MobilesService, private _activatedRoute: ActivatedRoute, private _router: Router) {}
  ngOnInit() {
    this._mobilesService
      .getMobiles()
      .subscribe((data) => (this.mobileDetails = data),
      error => this.errMsg = error);

    // let capturedId = parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
    // this.mobileId = capturedId;
    this._activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let capturedId = parseInt(params.get('id'))
      this.mobileId = capturedId
    })
    console.log(this.mobileId)
    console.log(typeof(this.mobileId))
  }

  onPrevious(){
    let previousId = this.mobileId - 1;
    this._router.navigate(['/mobiles',previousId])
  }

  onNext(){
    let nextId = this.mobileId + 1;
    this._router.navigate(['/mobiles', nextId])
  }
  goBack(){
    let selectedId = this.mobileId;
    this._router.navigate(['../', {id: selectedId}], {relativeTo: this._activatedRoute})
  }
  showReviews(){
    this._router.navigate(['full-details'], {relativeTo:this._activatedRoute})
  }
  
}
