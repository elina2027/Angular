import { MenusService } from './../../service/menus/menus.service';
import { Post } from './../../service/posts/posts.service';
import { AfterViewInit, Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { PostsService } from './../../service/posts/posts.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-Posts',
  templateUrl: './Posts.component.html',
  styleUrls: ['./Posts.component.css'],
})

export class PostsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  PostDetails: Post = {
    title: '',
    menu_id: '',
    content: ''
  };


  menusList: any;
  postForm: FormGroup;

  displayedColumns = ['id', 'title', 'menu_id', 'content', 'actions'];
  dataSource = new MatTableDataSource();

  constructor(
    private PostsService: PostsService,
    public dialog: MatDialog,
    private MenusService: MenusService,
    private fb: FormBuilder) {
      this.postForm = this.fb.group({
        title: new FormControl('', Validators.required),
        menu_id: new FormControl('', Validators.required),
        content: new FormControl('', Validators.required),
    });
  }
  ngOnInit(): void {
    this.PostsService.getPosts().subscribe((data: any) => {
      this.dataSource.data = data;
    });

    this.MenusService.getMenus().subscribe((data: any) => {
      this.menusList = data;
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

  addPost() {
    if (this.postForm.valid) {
      this.PostDetails = this.postForm.value;
      this.PostsService.addPost(this.PostDetails);
    }
  }

  editPost(postId: string, post: Post) {
    this.PostsService.updatePost(postId, post);
  }

  deletePost(postId: string) {
    this.PostsService.deletePost(postId);
  }

  openDialog(postId: string): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'true') {
        console.log('The dialog was closed ' + postId);
        this.deletePost(postId);
      }
    });
  }

  openEditDialog(
    postId: string,
    title: string,
    menu_id: string,
    content: string
  ): void {
    const dialogRef = this.dialog.open(EditPostComponent, {
      width: '250px',
      data: { title, menu_id, content, "menus": this.menusList },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('The Edit dialog was closed ');
        this.editPost(postId, result);
      }
    });
  }
 }
