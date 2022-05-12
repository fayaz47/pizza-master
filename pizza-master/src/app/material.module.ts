import { NgModule } from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";

@NgModule(
    {
        exports : [MatButtonModule, MatIconModule, MatFormFieldModule,MatNativeDateModule,MatInputModule,MatDatepickerModule ],
        imports : [MatButtonModule, MatIconModule, MatFormFieldModule,MatNativeDateModule, MatInputModule,MatDatepickerModule ]
    }
)
export class MaterialModule {


}