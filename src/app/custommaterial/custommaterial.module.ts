import { NgModule } from '@angular/core';
import { MatTableModule, MatTabsModule, MatButtonModule, MatCardModule, MatDividerModule, MatInputModule, MatSelectModule, MatIconModule, MatSortModule, MatDialogModule } from '@angular/material';

@NgModule({
  imports: [ MatTableModule, MatTabsModule, MatButtonModule, MatCardModule, MatDividerModule, MatInputModule,
    MatSelectModule, MatIconModule, MatSortModule, MatDialogModule ],
  exports: [ MatTableModule, MatTabsModule, MatButtonModule, MatCardModule, MatDividerModule, MatInputModule,
    MatSelectModule, MatIconModule, MatSortModule, MatDialogModule ],
  declarations: []
})
export class CustommaterialModule { }
