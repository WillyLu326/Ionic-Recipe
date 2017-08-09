import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

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
              public actionSheetCtrl: ActionSheetController) {
  }

  ngOnInit() {
    this.mode = this.navParams.get('mode')
    this.initializeForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditRecipePage');
  }

  onChangeSelect() {
    let actionSheet = this.actionSheetCtrl.create({
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

    actionSheet.present();
  }

  onSubmit() {
    console.log(this.recipeForm);
  }

  onManageIngredients() {
    
  }

  private initializeForm() {
    this.recipeForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      difficulty: new FormControl(this.defaultOption, Validators.required)
    })
  }

}
