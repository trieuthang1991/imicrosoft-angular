import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ProdcutComponent } from './prodcut/prodcut.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainComponent, ProdcutComponent]
})
export class MainModule { }
