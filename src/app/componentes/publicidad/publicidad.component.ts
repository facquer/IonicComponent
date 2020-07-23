import { Component, OnInit } from "@angular/core";
import { Platform } from "@ionic/angular";
import {
  AdMobFree,
  AdMobFreeBannerConfig,
  AdMobFreeRewardVideoConfig,
  AdMobFreeInterstitialConfig,
} from "@ionic-native/admob-free/ngx";
@Component({
  selector: "app-publicidad",
  templateUrl: "./publicidad.component.html",
  styleUrls: ["./publicidad.component.scss"],
})
export class PublicidadComponent implements OnInit {
  RewardVideoConfig: AdMobFreeRewardVideoConfig = {
    isTesting: true, // Remove in production
    autoShow: false, //,
    //id: "ca-app-pub-3940XXXXXXX42544/6300978111"
  };
  //Interstitial Ad's Configurations
  interstitialConfig: AdMobFreeInterstitialConfig = {
    // add your config here
    // for the sake of this example we will just use the test config
    isTesting: true,
    autoShow: false,
    //id: "ca-app-pub-39402XXXXXXXX2544/6300978111"
  };

  constructor(private admobFree: AdMobFree, public platform: Platform) {}

  //Reward Video Ad's Configurations

  ngOnInit() {}
  BannerAd() {
    let bannerConfig: AdMobFreeBannerConfig = {
      isTesting: true, // Remove in production
      autoShow: true, //,
      //id: "ca-app-pub-39402XXXXXXX44/6300978111"
    };
    this.admobFree.banner.config(bannerConfig);

    this.admobFree.banner
      .prepare()
      .then(() => {
        // success
      })
      .catch((e) => alert(e));
  }

  InterstitialAd() {
    //Check if Ad is loaded
    this.admobFree.interstitial
      .isReady()
      .then(() => {
        //Will show prepared Ad
        this.admobFree.interstitial
          .show()
          .then(() => {})
          .catch((e) => alert("show " + e));
      })
      .catch((e) => alert("isReady " + e));
  }

  RewardVideoAd() {
    //Check if Ad is loaded
    this.admobFree.rewardVideo
      .isReady()
      .then(() => {
        //Will show prepared Ad
        this.admobFree.rewardVideo
          .show()
          .then(() => {})
          .catch((e) => alert("show " + e));
      })
      .catch((e) => alert("isReady " + e));
  }
}
