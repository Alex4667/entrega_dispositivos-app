import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  submite = false;

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')

  })

  constructor(private _route: Router, private _usuarioService: UsuarioService, private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombres: ['', Validators.required],
      username: ['', Validators.required],
      identificacion: ['', Validators.required],
      celular: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  registrar(){
    this.submite = true;
    if (this.form.invalid) {
      return;
    }

    this._usuarioService.register(this.form.value).subscribe({
      next:(data)=>{
        console.log(data.msg);
        this._route.navigateByUrl('/login')
      },error:(error)=>{
        console.log(error);
      }
    });
    
  }

}
