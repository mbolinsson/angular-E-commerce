import { Component } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  public regForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      addressline: ['', Validators.required],
      postalCode: [
        '',
        [Validators.required, Validators.minLength(5), Validators.maxLength(5)],
      ],
      city: ['', [Validators.required]],
      programmingSkills: this.formBuilder.array([]),
      acceptTerms: [false, [Validators.requiredTrue]],
    });
  }

  addProgrammingSkill() {
    this.programmingSkills.push(this.formBuilder.control(''));
  }

  removeProgrammingSkill(index) {
    this.programmingSkills.removeAt(index);
  }

  get programmingSkills() {
    return this.regForm.get('programmingSkills') as FormArray;
  }

  onSubmit() {
    this.userService.register(this.regForm.value).subscribe(
      (res) => console.log('submitted and successful: ' + res),
      (error) => console.error('submitted but failed: ' + error.message)
    );
  }
}
