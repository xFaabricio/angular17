import { Component, ElementRef, ViewChild } from '@angular/core';
import { LayoutService } from '../../service/app.layout.service';
import { MenuComponent } from "../menu/menu.component";
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
    imports: [MenuComponent, MenuItemComponent]
})
export class SidebarComponent {

  @ViewChild(MenuItemComponent) menu!: MenuItemComponent;

  constructor(public layoutService: LayoutService, public el: ElementRef) { }
}
