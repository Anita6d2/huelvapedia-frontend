import { Component, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";

import Swal from "sweetalert2"
import { Router } from "@angular/router";

@Component({
  selector: "app-register-page",
  templateUrl: "./register-page.component.html",
  styleUrls: ["./register-page.component.css"]
})

export class RegisterPageComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router      = inject(Router);

  public myForm: FormGroup = this.fb.group({
    name:     ["Neto", [Validators.required, Validators.minLength(4)]],
    email:    ["correo@correo.com", [Validators.required, Validators.email]],
    password: ["123456", [Validators.required, Validators.minLength(6)]],
  });

  singup() {
    const { name, email, password } = this.myForm.value;
    this.authService.singup(name, email, password)
      .subscribe({
        next: (response) => {
          //const successMessage = response.message; // Asumo que el back-end devuelve un objeto con un campo "message"
          Swal.fire("¡Bienvenido!", "Se registró el nuevo usuario", "success").then(() => {
            this.router.navigateByUrl("/dashboard");
          });
        },
        error: (message) => {
          Swal.fire("Error", message, "error");
        }
      });
  }
}
