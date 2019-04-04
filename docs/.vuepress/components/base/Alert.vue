<template>
  <transition name="w-alert-fade">
    <div
      class="w-alert"
      :class="[typeClass, center ? 'is-center' : '']"
      v-show="visible"
      role="alert"
    >
      <i
        class="w-alert__icon"
        :class="[iconClass, isBigIcon]"
        v-if="showIcon"
      ></i>
      <div class="w-alert__content">
        <span
          class="w-alert__title"
          :class="[isBoldTitle]"
          v-if="title || $slots.title"
        >
          <slot name="title">{{ title }}</slot>
        </span>
        <p class="w-alert__description" v-if="$slots.default && !description">
          <slot></slot>
        </p>
        <p class="w-alert__description" v-if="description && !$slots.default">
          {{ description }}
        </p>
        <i
          class="w-alert__closebtn"
          :class="{
            'is-customed': closeText !== '',
            'w-icon-close': closeText === ''
          }"
          v-show="closable"
          @click="close()"
          >{{ closeText }}</i
        >
      </div>
    </div>
  </transition>
</template>

<script>
  const TYPE_CLASSES_MAP = {
    success: "w-icon-success",
    warning: "w-icon-warning",
    error: "w-icon-error"
  };
  export default {
    name: "Alert",
    props: {
      title: {
        type: String,
        default: ""
      },
      description: {
        type: String,
        default: ""
      },
      type: {
        type: String,
        default: "info"
      },
      closable: {
        type: Boolean,
        default: true
      },
      closeText: {
        type: String,
        default: ""
      },
      showIcon: Boolean,
      center: Boolean
    },
    data() {
      return {
        visible: true
      };
    },
    methods: {
      close() {
        this.visible = false;
        this.$emit("close");
      }
    },
    computed: {
      typeClass() {
        return `w-alert--${this.type}`;
      },
      iconClass() {
        return TYPE_CLASSES_MAP[this.type] || "w-icon-info";
      },
      isBigIcon() {
        return this.description || this.$slots.default ? "is-big" : "";
      },
      isBoldTitle() {
        return this.description || this.$slots.default ? "is-bold" : "";
      }
    }
  };
</script>

<style lang="stylus">
    
</style>