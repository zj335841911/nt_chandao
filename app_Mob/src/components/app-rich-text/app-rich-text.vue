<template>
  <div class="richtext">
    <quill-editor
      class="ql-editor quill-editor"
      v-model="resloutValue"
      ref="myQuillEditor"
      :options="editorOption"
    ></quill-editor>
    <ion-toolbar class="quill-editor-button">
      <van-uploader v-show="false" :after-read="afterRead" ref="upload" />
      <ion-button @click="onClickCancel" color="light">{{$t('app.button.cancel')}}</ion-button>
      <ion-button @click="onClickOk">{{$t('app.button.confirm')}}</ion-button>
    </ion-toolbar>
  </div>
</template>
<script lang = 'ts'>
import {
  Vue,
  Component,
  Prop,
  Model,
  Watch,
  Emit,
} from "vue-property-decorator";
import { Subject } from "rxjs";
import { Environment } from "@/environments/environment";
import axios from "axios";
import qs from "qs";
@Component({})
export default class AppRichTextEditor extends Vue {
  public editorOption = {
    modules: {
      toolbar: {
        container: [
          "bold",
          "italic",
          "underline",
          "strike",
          "image",
          { list: "ordered" },
          { list: "bullet" },
          { color: [] },
          { background: [] },
        ],
        handlers: {
          image: () => {
            this.uploadFile(this.uploadUrl, {});
          },
        },
      },
    },
  };

  /**
   * 视图参数
   *
   * @type {string}
   * @memberof AppRichTextEditor
   */
  @Prop() protected _viewparams!: string;

  /**
   * 上传文件路径
   *
   * @type {string}
   * @memberof AppRichTextEditor
   */
  public uploadUrl = Environment.UploadFile;

  /**
   * 下载路径
   *
   * @type {string}
   * @memberof AppRichTextEditor
   */
  public downloadUrl = Environment.BaseUrl + Environment.ExportFile;

  /**
   * 双向绑定值
   *
   * @type {string}
   * @memberof AppRichTextEditor
   */
  public resloutValue: any = "";

  /**
   * 生命周期
   *
   * @type {string}
   * @memberof AppRichTextEditor
   */
  public mounted() {
    this.resloutValue = JSON.parse(this._viewparams).value;
  }

  /**
   * 确定
   *
   * @memberof AppRichTextEditor
   */
  public onClickOk(): void {
    this.$emit("close", [this.resloutValue]);
  }

  /**
   * 取消
   *
   * @memberof AppRichTextEditor
   */
  public onClickCancel(): void {
    this.$emit("close", null);
  }

  /**
   * 上传文件
   *
   * @param url 路径
   * @param formData 文件对象
   * @memberof AppRichTextEditor
   */
  public uploadFile(url: string, formData: any) {
    let up: any = this.$refs.upload;
    if (up) {
      up.chooseFile();
    }
  }

  /**
   * 开发模式文件数组
   *
   * @private
   * @type {Array<any>}
   * @memberof AppRichTextEditor
   */
  private devFiles: Array<any> = [];

  /**
   * 文件选择完成
   *
   * @protected
   * @param {*} file 文件信息
   * @param {*} detail 详情
   * @memberof AppRichTextEditor
   */
  protected afterRead(file: any, detail: any): void {
    const params = new FormData();
    params.append("file", file.file, file.file.name);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    axios
      .post(this.uploadUrl, params, config)
      .then((response: any) => {
        if (response && response.data && response.status === 200) {
          let data: any = response.data;
          if (process.env.NODE_ENV === "development") {
            this.devFiles.push(Object.assign({}, data, { url: file.content }));
            this.dataProcess(Object.assign({}, data, { url: file.content }));
          }
        } else {
        }
      })
      .catch((response: any) => {});
  }

  /**
   * 数据处理
   *
   * @private
   * @memberof AppRichTextEditor
   */
  private dataProcess(file: any): void {
    let _uploadUrl = `${Environment.BaseUrl}${Environment.UploadFile}`;
    this.uploadUrl = _uploadUrl;
    if (process.env.NODE_ENV === "development") {
      let index = this.devFiles.findIndex((devFile: any) =>
        Object.is(devFile.id, file.id)
      );
      if (index !== -1) {
        file.url = this.devFiles[index].url;
        file.isImage = true;
      }
    }
    let _downloadUrl = `${this.downloadUrl}/${file.id}`;
    file.isImage = true;
    file.url = _downloadUrl;
    this.resloutValue = '<img src="' + file.url + '" alt="">';
  }
}
</script>
<style lang="less">
.richtext{
.quill-editor {
  -webkit-touch-callout: text !important;
  -webkit-user-select: text !important;
  -khtml-user-select: text !important;
  -moz-user-select: text !important;
  -ms-user-select: text !important;
}
.richtext {
  height: calc(100% - 10vh);
}
.quill-editor-button {
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  ion-button {
    width: 48%;
  }
}
.ql-container {
  height: calc(100% - 65px);
}
}

</style>