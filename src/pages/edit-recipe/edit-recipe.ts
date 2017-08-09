import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ActionSheetController, Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-edit-recipe',
  templateUrl: 'edit-recipe.html',
})
export class EditRecipePage implements OnInit {

  mode: string;
  recipeForm: FormGroup;

  options: string[] = ['Easy', 'Medium', 'Hard'];
  defaultOption: string = 'Easy';

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public actionSheetCtrl: ActionSheetController,
              public platform: Platform) {
  }

  ngOnInit() {
    this.mode = this.navParams.get('mode')
    this.initializeForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditRecipePage');
  }

  onChangeSelect() {
    
  }

  onSubmit() {
    console.log(this.recipeForm);
  }

  onManageIngredients() {
    let actionSheet: any;
    if (this.platform.is('android')) {
      actionSheet = this.actionSheetCtrl.create({
        title: 'What do you want to do?',
        buttons: [
          {
            text: 'Add',
            icon: 'add',
            handler: () => {}
          },
          {
            text: 'Remove All',
            icon: 'trash',
            role: 'destructive',
            handler: () => {}
          },
          {
            text: 'Cancel',
            icon: 'close',
            role: 'cencel',
            handler: () => {}
          }
        ]
      });
    } else if (this.platform.is('ios')) {
      actionSheet = this.actionSheetCtrl.create({
        title: 'What do you want to do?',
        buttons: [
          {
            text: 'Add',
            handler: () => {}
          },
          {
            text: 'Remove All',
            role: 'destructive',
            handler: () => {}
          },
          {
            text: 'Cancel',
            role: 'cencel',
            handler: () => {}
          }
        ]
      });
    }

    actionSheet.present();
  }

  private initializeForm() {
    this.recipeForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      difficulty: new FormControl(this.defaultOption, Validators.required)
    })
  }

}
