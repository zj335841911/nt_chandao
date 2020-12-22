<template>
  <div class="app-img-cropper">
    <div class="operList">
      <van-button class="oper oper_1" @click="unImg">取消</van-button>
      <van-button class="oper oper_2" @click="rotateRight">↻</van-button>
      <van-button class="oper oper_3" @click="sureImg">确认</van-button>
    </div>
    <VueCropper
    ref="cropper"
    class="cropper"
    :img="img"
    maxImgSize="max"
    :fixed="true"
    :original="true"
    :fixedBox="true"
    :autoCrop="true"
    :canMove="true"
    :canMoveBox="false"
    :centerBox="true"
    :autoCropWidth="1000"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { VueCropper }  from 'vue-cropper' 
@Component({
    components: {
      VueCropper
    },
})
export default class AppImgCropper extends Vue {

  /**
     * 图片路径
     *
     * 
     * @memberof AppImgCropper
     */
  @Prop() public img!:any;
  
  /**
     * base64图片转换文件格式
     *
     * 
     * @memberof AppImgCropper
     */
  public dataURLtoFile(dataurl:any, filename:string = 'file') {
          let arr = dataurl.split(',')
          let mime = arr[0].match(/:(.*?);/)[1]
          let suffix = mime.split('/')[1]
          let bstr = atob(arr[1])
          let n = bstr.length
          let u8arr = new Uint8Array(n)
          while (n--) {
              u8arr[n] = bstr.charCodeAt(n)
          }
          return new File([u8arr], `${filename}.${suffix}`, {
              type: mime
          })
      }

    /**
     * 确认截图
     *
     * 
     * @memberof AppImgCropper
     */
    public sureImg():void {
    let cropper:any = this.$refs.cropper;
     if (cropper && this.$util.isFunction(cropper.getCropData)) {
       cropper.getCropData((data:any) => {
         this.$emit('getCropData',this.dataURLtoFile(data));
         this.$emit('closeCrop',false);
        })
      }
  }
  /**
     * 取消截图
     *
     * 
     * @memberof AppImgCropper
     */
    public unImg():void {
     this.$emit('closeCrop',false);
    }

  /**
     * 放大和缩小
     *
     * 
     * @memberof AppImgCropper
     */
  public changeScale(num:number):void { 
    num = num || 1; 
    let cropper:any = this.$refs.cropper;
     if (cropper && this.$util.isFunction(cropper.changeScale)) {
        cropper.changeScale(num);
      }
    }
  /**
     * 左旋转
     *
     * 
     * @memberof AppImgCropper
     */
  public rotateLeft():void { 
    let cropper:any = this.$refs.cropper;
     if (cropper && this.$util.isFunction(cropper.rotateLeft)) {
        cropper.rotateLeft();
      }
    }

  /**
     * 右旋转
     *
     * 
     * @memberof AppImgCropper
     */
  public rotateRight():void { 
    let cropper:any = this.$refs.cropper;
     if (cropper && this.$util.isFunction(cropper.rotateRight)) {
        cropper.rotateRight();
      }
  }


}

 
</script>

<style lang="less">
@import "./app-img-cropper.less";
</style>