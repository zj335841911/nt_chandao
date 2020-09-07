<template>
  <div></div>
</template>

<script lang="ts">
import {
  Vue,
  Component,
  Prop,
  Provide,
  Emit,
  Watch
} from "vue-property-decorator";
@Component({
  components: {}
})
export default class MiddleMan extends Vue{
    
    public created(){
        let errorPage = this.$route.params.errorPage;
        switch(Number(errorPage)){
            case 404:this.openPopupModal({ viewname: 'app-404', title: '404'}, {}, {});break;
            case 500:this.openPopupModal({ viewname: 'app-500', title: '500'}, {}, {});break;
        }
    }

    /**
     * 模态打开错误提示页面
     *
     * @type {string}
     * @memberof AppRichTextEditor
     */
    private async openPopupModal(view: any, context: any, param: any): Promise<any> {
      const result: any = await this.$appmodal.openModal(view, context, param);

      if (result || Object.is(result.ret, 'OK')) {
        if (result.datas[0] === 'back') {
          if (window.history.length <= 1) {
            this.$router.push({ path: "/" });
          } else {
            this.$router.go(-1);
          }
        }

        if (result.datas[0] === 'goIndex') {
          this.$router.push({ path: "/" });
        }
      } 
    }
  }
      
</script>

<style>

</style>