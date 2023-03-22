import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'cartera',
    loadChildren: () => import('./pages/cartera/cartera.module').then(m => m.CarteraModule)
  },
  {
    path: 'compra',
    loadChildren: () => import('./pages/compra/compra.module').then(m => m.CompraModule)
  },
  {
    path: 'crm',
    loadChildren: () => import('./pages/crm/crm.module').then(m => m.CrmModule)
  },
  {
    path: 'documental',
    loadChildren: () => import('./pages/documental/documental.module').then(m => m.DocumentalModule)
  },
  {
    path: 'financiero',
    loadChildren: () => import('./pages/financiero/financiero.module').then(m => m.FinancieroModule)
  },
  {
    path: 'inventario',
    loadChildren: () => import('./pages/inventario/inventario.module').then(m => m.InventarioModule)
  },
  {
    path: 'juridico',
    loadChildren: () => import('./pages/juridico/juridico.module').then(m => m.JuridicoModule)
  },
  {
    path: 'recursohumano',
    loadChildren: () => import('./pages/recursohumano/recursohumano.module').then(m => m.RecursohumanoModule)
  },
  {
    path: 'tesoreria',
    loadChildren: () => import('./pages/tesoreria/tesoreria.module').then(m => m.TesoreriaModule)
  },
  {
    path: 'transporte',
    loadChildren: () => import('./pages/transporte/transporte.module').then(m => m.TransporteModule)
  },
  {
    path: 'turno',
    loadChildren: () => import('./pages/turno/turno.module').then(m => m.TurnoModule)
  },
  {
    path: 'venta',
    loadChildren: () => import('./pages/venta/venta.module').then(m => m.VentaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
