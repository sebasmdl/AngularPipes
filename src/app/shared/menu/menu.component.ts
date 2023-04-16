import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.items = [
        {
            label:'Pipes de Angular',
            icon: 'pi pi-desktop',
            items: [
                {
                label: 'Textos y fechas',
                icon: 'pi pi-align-left',
                command: () => this.router.navigate(['/'])
                 },
                {
                label: 'Números',
                icon: 'pi pi-align-left',
                command: () => this.router.navigate(['numbers'])
                 },
                 {
                    label: 'No comunes',
                    icon: 'pi pi-globe',
                    command: () => this.router.navigate(['uncommon'])
                }
            ]
        },
        {
            label:'Pipes personalizados',
            icon: 'pi pi-cog',
            items: [
              {
                label: 'Custom pipes',
                icon: 'pi pi-cog',
                command: () => this.router.navigate(['custom'])
              }
            ]
        }
    ]
  }

}
