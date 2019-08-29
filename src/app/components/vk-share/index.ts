import {
  Component,
  ElementRef,
  AfterViewInit,
  OnInit,
  Input,
  ChangeDetectorRef
} from "@angular/core";
import jsonp from "jsonp";

import { WindowRef } from "../../services/window-ref/window-ref.service";

@Component({
  selector: "vk-share",
  template: `<a (click)=\"shareVk()\" class=\"share-link vk\"><i class=\"fa fa-vk\"></i><span class=\"share-text\">Поделиться</span><span class=\"share-count\">{{vkShareCount}}</span></a>`
})
export class VkShareComponent implements OnInit {
  appRef: any;
  nativeWindow: any;
  @Input() url = "";
  vkShareCount: number = 0;

  constructor(private winRef: WindowRef, private chRef: ChangeDetectorRef) {
    this.nativeWindow = winRef.getNativeWindow();
    this.chRef = chRef;

    if (!this.nativeWindow.VK) {
      this.nativeWindow.VK = {};
    }
    this.nativeWindow.VK.callbacks = [];
    this.nativeWindow.VK.Share = {};
  }

  public ngOnInit(): void {
    setTimeout(() => {
      this.vkShareCountRequest(this.url, count => {
        this.vkShareCount = count;
        this.chRef.detectChanges();
      });
    }, 200);
  }

  objectToGetParams = object => {
    return (
      "?" +
      Object.keys(object)
        .filter(key => !!object[key])
        .map(key => `${key}=${encodeURIComponent(object[key])}`)
        .join("&")
    );
  };

  vkShareCountRequest = (shareUrl, callback) => {
    if (!this.nativeWindow.VK) {
      this.nativeWindow.VK = {
        Share: {
          count: (index, count) => this.nativeWindow.VK.callbacks[index](count)
        },
        callbacks: []
      };
    }
    this.nativeWindow.VK.Share.count = (index, count) =>
      this.nativeWindow.VK.callbacks[index](count);
    const url = "https://vk.com/share.php";
    const index = this.nativeWindow.VK.callbacks.length;
    this.nativeWindow.VK.callbacks.push(callback);
    return jsonp(
      url +
        this.objectToGetParams({
          act: "count",
          index,
          url: shareUrl
        })
    );
  };

  getVkShareUrl = () => `https://www.vk.com/share.php?url=${this.url}`;

  public shareVk(): void {
    const url = this.getVkShareUrl();
    const width = 640;
    const height = 320;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;
    this.nativeWindow.open(
      url,
      "",
      `width=${width},height=${height},left=${left},top=${top},location=no,toolbar=no,menubar=no`
    );
  }
}
