---
home: true
heroImage: /assets/img/logo.png
heroText: Weijuer's Blog
tagline: Welcome
actionText: go →
actionLink: /en/guide/
features:
  - title: WEB DESIGN
    details: Layout and beautification of webpage design page
  - title: MOBILE APPS
    details: Web and Mobile H5 Development
  - title: CAMPAIGNS
    details: Nursery Scaffolding Course, Starting from scratch
footer: MIT Licensed | Copyright © 2019-present Weijuer
# 自定义主题
pageClass: default
---

![An image](/blog/assets/img/keep-running.gif)

<script>
    export default {
        name: "md-en-index",
        data() {
            return {
                message: document.getSelection().toString() || `Welcome to Weijuer's Blog`
            }
        },
        computed: {
        },
        created() {
          document.addEventListener('copy', function (e) {
            e.clipboardData.setData('text/plain', 'Hello, world!');
            e.clipboardData.setData('text/html', '<b>Hello, world!</b>');
            e.preventDefault();
          });

          document.addEventListener('mouseup', this.speakerHandler);
        },
        mounted() {
          setTimeout(() => {
            this.speak(this.message);
          }, 1000);
        },
        methods: {
          speakerHandler(event) {
            event.preventDefault();
            this.speak(this.message);
          },
          speak(textToSpeak) {
              // 创建一个 SpeechSynthesisUtterance的实例
              var newUtterance = new SpeechSynthesisUtterance();

              // 设置文本
              newUtterance.text = textToSpeak;

              // 添加到队列
              window.speechSynthesis.speak(newUtterance);
          }
        },
        destroyed() {
          document.removeEventListener('mouseup', this.speakerHandler);
        }
    }
</script>
