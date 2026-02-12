import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { DefaultWebViewOptions, InAppBrowser } from '@capacitor/inappbrowser';
import { Platform } from '@ionic/angular';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.page.html',
  styleUrls: ['./empty.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class EmptyPage implements OnInit, OnDestroy {

  constructor(
    private platform: Platform,
  ) {
    this.platform.ready().then(() => {
      console.log('Platform ready - opening URL');
      this.openUrl();
      
      App.addListener('resume', () => {
        this.reopenBrowser();
      });
    });
  }
  ngOnInit() {
    // throw new Error('Method not implemented.');
      this.openUrl();
  }

  async openUrl() {
    await InAppBrowser.openInWebView({
      url: "https://srv1286876.hstgr.cloud/chatbot/login",
      // options: DefaultWebViewOptions
      options: {
        ...DefaultWebViewOptions,
        showToolbar: false,
        showURL: true

      }
    })
  }
    reopenBrowser() {
    // if (!this.browser) {
      this.openUrl();
    // }
  }
  removelissener() {
    InAppBrowser.removeAllListeners();
  }
  ngOnDestroy() {
    this.removelissener();
  }
}
