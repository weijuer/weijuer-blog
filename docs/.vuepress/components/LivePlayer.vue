<template>
    <div class="container">
        <div class="player">
            <video-player
                class="video-player vjs-custom-skin"
                ref="videoPlayer"
                :playsinline="true"
                :options="playerOptions"
            ></video-player>
        </div>
    </div>
</template>

<script>
import "video.js/dist/video-js.css";
import { videoPlayer } from "vue-video-player";
import "videojs-flash";
import "videojs-contrib-hls";

export default {
    name: "live-player",
    data() {
        return {
            playerOptions: {
                //playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                autoplay: false, //如果true,浏览器准备好时开始回放。
                muted: false, // 默认情况下将会消除任何音频。
                loop: false, // 导致视频一结束就重新开始。
                preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                language: "zh-CN",
                aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                sources: [
                    // {
                    //     type: "rtmp/mp4",
                    //     src: "rtmp://live.hkstv.hk.lxdns.com/live/hks"
                    // },
                    {
                        type: "application/x-mpegURL",
                        src: "http://localhost:8000/live/bhtv2/playlist.m3u8"
                    },
                    // {
                    //     type: "video/mp4",
                    //     src:
                    //         "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm" //你的m3u8地址（必填）
                    // }
                ],
                poster: "./poster.jpg", //你的封面地址
                width: document.documentElement.clientWidth,
                notSupportedMessage: "此视频暂无法播放，请稍后再试" //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                //  controlBar: {
                //   timeDivider: true,
                //   durationDisplay: true,
                //   remainingTimeDisplay: false,
                //   fullscreenToggle: true //全屏按钮
                //  }
            }
        };
    },
    components: {
        videoPlayer
    }
};
</script>

<style lang="less">
.video-js {
    button {
        outline: none;
    }

    .vjs-big-play-button {
        line-height: 2em;
        height: 2em;
        width: 2em;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}

</style>