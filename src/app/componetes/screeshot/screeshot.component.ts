import { Component, OnInit } from "@angular/core";
import { Screenshot } from "@ionic-native/screenshot/ngx";

@Component({
  selector: "app-screeshot",
  templateUrl: "./screeshot.component.html",
  styleUrls: ["./screeshot.component.scss"],
})
export class ScreeshotComponent implements OnInit {
  constructor( private screenshot: Screenshot) {}
  screen: any;
  state: boolean = false;

  ngOnInit() {}
  screenShot() {
      this.screenshot.save("jpg", 80, "myscreenshot.jpg").then((res) => {
      this.screen = res.filePath;
      this.state = true;
      this.reset();
    });
    // Take a screenshot and get temporary file URI
  }

  reset() {
    var self = this;
    setTimeout(function () {
      self.state = false;
    }, 4000);
  }

  screenShotURI() {
    this.screenshot.URI(80).then((res) => {
      this.screen = res.URI;
      this.state = true;
      this.reset();
    });
  }
}
