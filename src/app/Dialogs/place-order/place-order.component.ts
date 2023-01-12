import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { ServiceService } from 'src/app/service.service';
import { Carts } from 'src/app/shared/services/carts';
import { Products } from 'src/app/shared/services/products';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent  {

}
