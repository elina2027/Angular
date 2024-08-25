import { AfterViewInit, Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MenusService, Menu } from '../../service/menus/menus.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';


@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css'],
})
export class MenusComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  menuDetails: Menu = {
    title: '',
    url: '',
  };
  displayedColumns = ['id', 'title', 'url', "actions"];
  dataSource = new MatTableDataSource<Menu>();

  constructor(private menusService: MenusService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.menusService.getMenus().subscribe((data: Menu[]) => {
      this.dataSource.data = data;
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addMenu() {
    this.menusService.addMenu(this.menuDetails)
  }

  editMenu(menuId: string, menu: Menu) {
    this.menusService.updateMenu(menuId, menu);
  }

  deleteMenu(menuId: string) {
    this.menusService.deleteMenu(menuId);
  }

  openDialog(menuId: string): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'true') {
        console.log('The dialog was closed ' + menuId);
        this.deleteMenu(menuId);
      }
    });
  }

  openEditDialog(menuId: string, title: string, url: string): void {
    const dialogRef = this.dialog.open(EditMenuComponent, {
      width: '250px',
      data: { title, url },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('The Edit dialog was closed ');
        this.editMenu(menuId, result);
      }
    });
  }
 }
