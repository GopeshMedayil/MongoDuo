import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
    imports: [MatToolbarModule, MatButtonModule, MatListModule, MatIconModule, MatCardModule, MatDividerModule],
    exports: [MatToolbarModule, MatButtonModule, MatListModule, MatIconModule, MatCardModule, MatDividerModule]
})
export class MaterialModule {

}