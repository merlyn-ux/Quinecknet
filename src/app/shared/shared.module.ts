import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule, 
    MatIconModule,
    MatGridListModule,
    MatToolbarModule,
    MatDividerModule,
    MatExpansionModule,
    MatBadgeModule,
    MatTabsModule
    
  
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatToolbarModule,
    MatDividerModule,
    MatExpansionModule,
    MatBadgeModule,
    MatTabsModule
   
  ]
})
export class SharedModule { }
