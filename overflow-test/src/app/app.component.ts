import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  visible = false;
  y = 0;

  cambiar(elemento) {
    this.visible = !this.visible;
    this.updatePos(elemento);
  }

  updatePos(elemento) {
    this.y =
      elemento.getBoundingClientRect().top +
      window.scrollY +
      elemento.offsetHeight;
  }
}
