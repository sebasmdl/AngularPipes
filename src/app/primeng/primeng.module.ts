import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';

import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
const modules = [
    ButtonModule,
    CardModule,
    MenubarModule,
    PanelModule,
    PanelMenuModule,
    ToolbarModule,
    TableModule,
    FieldsetModule
]
@NgModule({
    imports:[modules],
    exports:[modules],
})
export class PrimeNgModule {}