const { createApp } = Vue

tab = ['laise', 'full', 'va reviser le quran c bn sah']

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      tabs : tab
    }
  }
}).mount('body')


