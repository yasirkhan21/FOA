
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms'
import { MatIconModule } from '@angular/material/icon'
import { MaterialModule } from './materialModule';
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from '@angular/material/menu';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BillingComponent } from './billing/billing.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CartComponent } from './cart/cart.component';
import { MenuComponent } from './menu/menu.component';
import { ToastrModule } from 'ngx-toastr';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthService } from "src/app/shared/services/auth.service";
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environment/environment';
import { UPIComponent } from './Dialogs/upi/upi.component';
import { PlaceOrderComponent } from './Dialogs/place-order/place-order.component';
import { RemoveCouponComponent } from './Dialogs/remove-coupon/remove-coupon.component';
import { CancelOrderComponent } from './Dialogs/cancel-order/cancel-order.component';
import { CardComponent } from './Dialogs/card/card.component';
import { OrderConfirmedComponent } from './Dialogs/order-confirmed/order-confirmed.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminDashboardComponent,
    BillingComponent,
    RegisterComponent,
    LoginComponent,
    AdminDashboardComponent,
    CustomerDashboardComponent,
    CartComponent,
    MenuComponent,
    SignInComponent,
    UPIComponent,
    PlaceOrderComponent,
    RemoveCouponComponent,
    CancelOrderComponent,
    CardComponent,
    OrderConfirmedComponent
    
  ],
  imports: [
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    ModalModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MaterialModule,
    MatMenuModule,
    HttpClientModule,
    MatCardModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }


