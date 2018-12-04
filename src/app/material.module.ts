import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio'




@NgModule({
    imports: [MatToolbarModule, MatButtonModule, MatListModule, MatRadioModule,
        MatIconModule, MatCardModule, MatDividerModule, MatDialogModule, MatFormFieldModule, MatInputModule],
    exports: [MatToolbarModule, MatButtonModule, MatListModule, MatIconModule, MatRadioModule,
        MatCardModule, MatDividerModule, MatDialogModule, MatFormFieldModule, MatInputModule]
})
export class MaterialModule {

}