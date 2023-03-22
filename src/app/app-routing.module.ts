import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';
const routes: Routes = [
  {
    path: 'login',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./core/pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'cartera',
        loadChildren: () => import('./core/pages/cartera/cartera.module').then(m => m.CarteraModule)
      },
      {
        path: 'compra',
        loadChildren: () => import('./core/pages/compra/compra.module').then(m => m.CompraModule)
      },
      {
        path: 'crm',
        loadChildren: () => import('./core/pages/crm/crm.module').then(m => m.CrmModule)
      },
      {
        path: 'documental',
        loadChildren: () => import('./core/pages/documental/documental.module').then(m => m.DocumentalModule)
      },
      {
        path: 'financiero',
        loadChildren: () => import('./core/pages/financiero/financiero.module').then(m => m.FinancieroModule)
      },
      {
        path: 'inventario',
        loadChildren: () => import('./core/pages/inventario/inventario.module').then(m => m.InventarioModule)
      },
      {
        path: 'juridico',
        loadChildren: () => import('./core/pages/juridico/juridico.module').then(m => m.JuridicoModule)
      },
      {
        path: 'recursohumano',
        loadChildren: () => import('./core/pages/recursohumano/recursohumano.module').then(m => m.RecursohumanoModule)
      },
      {
        path: 'tesoreria',
        loadChildren: () => import('./core/pages/tesoreria/tesoreria.module').then(m => m.TesoreriaModule)
      },
      {
        path: 'transporte',
        loadChildren: () => import('./core/pages/transporte/transporte.module').then(m => m.TransporteModule)
      },
      {
        path: 'turno',
        loadChildren: () => import('./core/pages/turno/turno.module').then(m => m.TurnoModule)
      },
      {
        path: 'venta',
        loadChildren: () => import('./core/pages/venta/venta.module').then(m => m.VentaModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
