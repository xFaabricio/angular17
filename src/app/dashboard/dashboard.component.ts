import { Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription, debounceTime } from 'rxjs';
import { Product } from '../entity/product';
import { LayoutService } from '../service/app.layout.service';
import { ProductService } from '../service/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { PanelMenuModule } from 'primeng/panelmenu';
import {} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from '../app.component';
import { ChartService } from '../service/chart.service';

@Component({
    selector: 'app-dashboard',
    imports: [CommonModule,
        FormsModule,
        ChartModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        ButtonModule,        
        AppComponent],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit, OnDestroy {

    items!: MenuItem[];

    products!: Product[];

    chartData: any;

    chartOptions: any;

    subscription!: Subscription;

    constructor(public chartService: ChartService, public layoutService: LayoutService, public appComponent: AppComponent, private cookieService: CookieService, private renderer: Renderer2, private el: ElementRef, private productService: ProductService) {
        if (this.cookieService.check('colorScheme')) {
            if(this.cookieService.get('colorScheme') === 'light') {        
                this.appComponent.changeTheme('mdc-light-indigo', 'light');        
            }else if(this.cookieService.get('colorScheme') === 'dark') {
                if(this.cookieService.get('theme') === 'bootstrap4-dark-blue') {          
                    this.appComponent.changeTheme('bootstrap4-dark-blue', 'dark');          
                }else {          
                    this.appComponent.changeTheme('mdc-dark-indigo', 'dark');          
                }
            }
        } else {      
            this.appComponent.changeTheme('mdc-light-indigo','light');      
        }
        /*this.subscription = this.layoutService.configUpdate$
        .pipe(debounceTime(25))
        .subscribe((config) => {
            this.initChart();
        });*/
    }

    ngOnInit() {        
        this.initChart();
        this.productService.getProductsSmall().then(data => this.products = data);

        this.items = [
            { label: 'Add New', icon: 'pi pi-fw pi-plus' },
            { label: 'Remove', icon: 'pi pi-fw pi-minus' }
        ];
    }    

    async initChart() {        
        if(getComputedStyle !== undefined){
          const documentStyle = getComputedStyle(document.documentElement);
          const textColor = documentStyle.getPropertyValue('--text-color');
          const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
          const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
          
          this.chartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--bluegray-700'),
                    borderColor: documentStyle.getPropertyValue('--bluegray-700'),
                    tension: .4
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--green-600'),
                    borderColor: documentStyle.getPropertyValue('--green-600'),
                    tension: .4
                }
            ]
        };

        this.chartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };

        }        
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
