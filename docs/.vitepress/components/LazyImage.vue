<template>
  <div class="lazy-image-wrapper">
    <img
      :data-src="src"
      :alt="alt"
      class="lazy-image"
      ref="lazyImage"
      :class="{ 'is-loaded': isLoaded }"
    />
    <div class="lazy-image-placeholder" v-if="!isLoaded"></div>
  </div>
</template>

<script>
export default {
  name: 'LazyImage',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isLoaded: false,
      observer: null
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(this.handleIntersect, {
      root: null,
      rootMargin: '50px',
      threshold: 0.01
    })
    
    if (this.$refs.lazyImage) {
      this.observer.observe(this.$refs.lazyImage)
    }
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect()
    }
  },
  methods: {
    handleIntersect(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.dataset.src
          img.onload = () => {
            this.isLoaded = true
          }
          this.observer.unobserve(img)
        }
      })
    }
  }
}
</script>

<style scoped>
.lazy-image-wrapper {
  position: relative;
  width: 100%;
  min-height: 100px;
  background: #f5f5f5;
  overflow: hidden;
}

.lazy-image {
  width: 100%;
  height: auto;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.lazy-image.is-loaded {
  opacity: 1;
}

.lazy-image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f5f5f5 25%, #e9e9e9 50%, #f5f5f5 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>