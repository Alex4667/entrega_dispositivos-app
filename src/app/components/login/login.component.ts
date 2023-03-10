import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/Services/jwt.service';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submite = false;


  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private _route: Router, private _usuarioService: UsuarioService, private fb: FormBuilder,
    private _jwt:JwtService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login(): void {
    this.submite = true;
    if (this.form.invalid) {
      return;
    }

    this._usuarioService.login(this.form.value).subscribe({
      next: (data)=>{
          this._jwt.login(data.access_token);
         void this._route.navigateByUrl('dashboard');
      }
    });

    
  }

  cerrarSesion(){
    localStorage.clear();
  }
  get f(): { [key: string]:AbstractControl }{
    return this.form.controls;
  }

}
