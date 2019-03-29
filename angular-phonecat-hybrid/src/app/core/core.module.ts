import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PhoneService } from './phone.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [PhoneService],
})
export class CoreModule {}
