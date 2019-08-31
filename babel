// bullshit routes for demo

const Default = {
  template: `
      <div class="content">
        <h1>Hello There!</h1>
        <p>Please select a delicious item from our menu selector above!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illo maxime, vel accusamus commodi est beatae voluptatibus eius ab corporis mollitia iure deserunt provident. Alias placeat veniam dolores laudantium nam.</p>
      </div>
  `
}

const Pizza = {
  template: `
      <div class="content">
        <h1>Pizza</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illo maxime, vel accusamus commodi est beatae voluptatibus eius ab corporis mollitia iure deserunt provident. Alias placeat veniam dolores laudantium nam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illo maxime, vel accusamus commodi est beatae voluptatibus eius ab corporis mollitia iure deserunt provident. Alias placeat veniam dolores laudantium nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illo maxime, vel accusamus commodi est beatae voluptatibus eius ab corporis mollitia iure deserunt provident. Alias placeat veniam dolores laudantium nam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illo maxime, vel accusamus commodi est beatae voluptatibus eius ab corporis mollitia iure deserunt provident. Alias placeat veniam dolores laudantium nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illo maxime, vel accusamus commodi est beatae voluptatibus eius ab corporis mollitia iure deserunt provident. Alias placeat veniam dolores laudantium nam.</p>
      </div>
  `
}

const Tacos = {
  template: `
      <div class="content">
        <h1>Tacos</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
      </div>
  `
}

const Burger = {
  template: `
      <div class="content">
        <h1>Burger</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquam ea quam placeat, consectetur assumenda vel. Commodi alias repellat deleniti totam quas quod dicta quasi quos ipsum, molestiae culpa veniam.</p>
      </div>
  `
}

const Burrito = {
  template: `
      <div class="content">
        <h1>Burrito</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illo maxime, vel accusamus commodi est beatae voluptatibus eius ab corporis mollitia iure deserunt provident. Alias placeat veniam dolores laudantium nam.</p>
        <ul>
          <li>List Item about Burritos</li>
          <li>List Item about Burritos</li>
          <li>List Item about Burritos</li>
          <li>List Item about Burritos</li>
        </ul>
      </div>
  `
}

const Sushi = {
  template: `
      <div class="content">
        <h1>Sushi</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illo maxime, vel accusamus commodi est beatae voluptatibus eius ab corporis mollitia iure deserunt provident. Alias placeat veniam dolores laudantium nam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illo maxime, vel accusamus commodi est beatae voluptatibus eius ab corporis mollitia iure deserunt provident. Alias placeat veniam dolores laudantium nam.</p>
      </div>
  `
} 

// our actual app

const router = new VueRouter({
  routes: [
    { name: 'Home', path: '/', component: Default },
    { name: 'Pizza', path: '/pizza/', component: Pizza },
    { name: 'Tacos', path: '/tacos/', component: Tacos },
    { name: 'Burger', path: '/burger/', component: Burger },
    { name: 'Burrito', path: '/burrito/', component: Burrito },
    { name: 'Sushi', path: '/sushi/', component: Sushi }
  ]
})

const App = new Vue({
  el: '#app',
  router,
  data () {
    return {
      selected: '👉 Choose an option 👈',
      expanded: false,
      prevHeight: 0,
      items: [
        { label: 'Pizza', icon: '🍕', path: '/pizza/' },
        { label: 'Tacos', icon: '🌮', path: '/tacos/' },
        { label: 'Burger', icon: '🍔', path: '/burger/' },
        { label: 'Burrito', icon: '🌯', path: '/burrito/' },
        { label: 'Sushi', icon: '🍣', path: '/sushi/' }
      ]
    }
  },
  methods: {
    toggleFlyout () {
      this.expanded = !this.expanded
    },
    closeFlyout () {
      this.expanded = false
    },
    setTopLevel (ev) {
      const icon = ev.target.children[0].innerHTML
      const text = ev.target.children[1].innerHTML
      this.selected = `${icon} ${text}`
      this.toggleFlyout()
    },
    leave (el) {
      this.prevHeight = getComputedStyle(el).height
    },
    enter (el) {
      const { height } = getComputedStyle(el)
      el.style.height = this.prevHeight
      setTimeout(() => {
        el.style.height = height
      })
    }
  }
})
