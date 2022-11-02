import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[] = [    
        {  'titulo':"Dashboard",'url':'/','icono':'fa-solid fa-magnifying-glass' },
        {  'titulo':"Graficas",'url':'graficas', 'icono':'fa-solid fa-chart-simple' }
      ];
  constructor() { }
}
