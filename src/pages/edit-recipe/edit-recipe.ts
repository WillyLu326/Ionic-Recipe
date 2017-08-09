import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.mode = this.navParams.get('mode')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditRecipePage');
  }

  onChangeSelect() {
    
  }

  private initializeForm() {
    this.recipeForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      difficulty: new FormControl(this.defaultOption, Validators.required);
    })
  }

}
