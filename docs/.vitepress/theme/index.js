import DefaultTheme from 'vitepress/theme'
import LazyImage from '../components/LazyImage.vue'

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.component('LazyImage', LazyImage)
    }
}