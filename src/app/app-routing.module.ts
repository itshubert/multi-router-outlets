import { RouterModule, Routes } from '@angular/router';

import { SidebarComponent } from './sidebar/sidebar.component';
import { BodyComponent } from './body/body.component';
import { NgModule } from '../../node_modules/@angular/core';
import { ProductSidebarComponent } from './product-sidebar/product-sidebar.component';
import { ProductBodyComponent } from './product-body/product-body.component';

export const routes: Routes = [
    { path: '', component: BodyComponent },
    { path: 'product', pathMatch: 'full', component: ProductBodyComponent },
    { path: '', component: SidebarComponent, outlet: 'sidebar' },
    { path: 'product', component: ProductSidebarComponent, outlet: 'sidebar'},
    
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
