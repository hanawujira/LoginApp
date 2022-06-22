import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OfferModel } from 'src/app/models/offers.model';
import { LoginService } from 'src/app/services/login.service';
import { OffersService } from 'src/app/services/offers.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  offerList: OfferModel[] = [];
  selectedOffer: OfferModel | undefined;
  displayedColumns: string[] = ['name','contractStartDate','contractEndDate'];

  constructor(private offersService:OffersService, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.getOffersList();
  }

  getOffersList(){
    this.offersService.getOffersList().subscribe(result=>{
      this.offerList = result.offers;
    },()=>{this.router.navigate(['login'])});
  }

  getOfferDetail(id: number){
    this.offersService.getOfferDetail(id).subscribe(result=>{
      this.selectedOffer = result;
      console.log(this.selectedOffer);
    })
  }

  logOut(){
    this.loginService.logout().subscribe(result => {
      LoginService.removeToken();
      this.router.navigate(['login']);
    })
  }

}
