<template>
  <div class="w-dropzone-container">
    <div class="w-dropzone" ref="dropzone" :class="[typeClass]" @drop="dropHandler($event)">
      <div class="w-drop-desc" v-show="!isdroped">{{ message }}</div>
      <div class="w-drop-preview" v-show="isdroped">
        <img v-if="isImage" :src="file.dataURL">
        <div v-if="isFile" class="file-preview">{{ file.content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Dropzone",
    props: {
      message: String,
      type: {
        type: String,
        default: "default"
      }
    },
    data() {
      return {
        file: {
          name: null,
          size: null,
          type: null,
          dataURL: null,
          content: null
        }
      };
    },
    created() {
      ["dragleave", "drop", "dragenter", "dragover"].forEach(type => {
        document.addEventListener(type, this.preventDefaultEvent, false);
      });
    },
    computed: {
      typeClass() {
        return `w-dropzone--${this.type}`;
      },
      isImage() {
        return this.file.type && /^image/i.test(this.file.type);
      },
      isFile() {
        return !this.isImage;
      },
      isdroped() {
        return this.file.type;
      }
    },
    methods: {
      preventDefaultEvent(event) {
        // 阻止冒泡
        event.stopPropagation();
        // 阻止浏览器默认事件
        event.preventDefault();
      },
      dropHandler(event) {
        event.stopPropagation();
        event.preventDefault();
        const filesArray = event.dataTransfer.files;
        // 图片处理
        this.handleFiles(filesArray);
      },
      handleFiles(files) {
        for (let i = 0; i < files.length; i++) {
          this.handleFile(files[i]);
        }
      },
      handleFile(file) {
        // 图片
        if (file.type.startsWith("image/")) {
          if(window.URL.createObjectURL) {
              this.handleImage(file);
          } else {
            this.imagePreview(file);
          }
        } else {
          this.filePreview(file);
        }
      },
      handleImage(file) {
        let self = this;

        // 是否支持不支持FileReader
        if (!file || !window.URL.createObjectURL) return;
        self.file.name = file.name;
        self.file.size = file.size;
        self.file.type = file.type;
        self.file.dataURL = window.URL.createObjectURL(file);
        window.URL.revokeObjectURL(this.src);
      },
      imagePreview(file) {
        let self = this;
        // 是否支持不支持FileReader
        if (!file || !window.FileReader) return;
        // 创建一个reader
        const reader = new FileReader();
        // 将图片将转成 base64 格式
        reader.readAsDataURL(file);
        // 读取成功后的回调
        reader.onloadend = event => {
          if (event.target.readyState === FileReader.DONE) {
            self.file.name = file.name;
            self.file.size = file.size;
            self.file.type = file.type;
            self.file.dataURL = reader.result;
            self.file.content = reader.result;
          }
        };
      },
      filePreview(file) {
        let self = this;
        // 是否支持不支持FileReader
        if (!file || !window.FileReader) return;
        // 创建一个reader
        const reader = new FileReader();
        // 读取指定的 Blob 中的内容
        reader.readAsText(file);
        // 读取成功后的回调
        reader.onloadend = event => {
          if (event.target.readyState === FileReader.DONE) {
            self.file.name = file.name;
            self.file.size = file.size;
            self.file.type = file.type;
            self.file.dataURL = reader.result;
            self.file.content = reader.result;
          }
        };
      }
    },

    destroyed() {
      ["dragleave", "drop", "dragenter", "dragover"].forEach(e => {
        document.removeEventListener(type, this.preventDefaultEvent, false);
      });
    }
  };
</script>

<style lang="stylus">
  .w-dropzone-container {
    position: relative;

    .w-dropzone {
      min-height: 200px;
      max-height: 300px;
      border: 2px dashed #46bd87;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>