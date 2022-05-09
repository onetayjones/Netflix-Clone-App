const { createApp } = window.Vue;
const { createRouter, createWebHashHistory } = window.VueRouter;

const HomePage = {
    template: `<h1>Homepage</h1>`
};

const AboutPage = {
    template: `<h1>About</h1>`
};

const ContactPage = {
    template: `<h1>Contact</h1>`
};

const MoviePage = {
    props: ['name', 'year'],

    mounted() {
        fetch(`/api/${this.year}/${this.name}/`).catch(console.log)
    },

    template: `<h1>{{ $route.params.name }} ({{ $route.params.year }}) some other info</h1><div>asdasd</div>`
}

const ErrorPage = {
    template: `<h1>404</h1>`
};

const routes = [
    { path: "/", component: HomePage },
    { path: "/about", component: AboutPage },
    { path: "/contact", component: ContactPage },
    { path: "/movie/:name/:year", component: MoviePage, props: true }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const RootComponent = {
    data() {
        return {};
    },

    template: `
  <header class="Header">
    <nav>
        <ul class="Header-list">
        <li>
            <router-link to="/" class="Header-item is-active"
            >Homepage</router-link
            >
        </li>
        <li>
            <router-link to="/about" class="Header-item">About Us</router-link>
        </li>
        <li>
            <router-link to="/contact" class="Header-item">Contact</router-link>
        </li>
        </ul>
    </nav>
    </header>
    <router-view></router-view>
  `
};

const app = createApp(RootComponent);
app.use(router);
app.mount("#app");

// const { createApp } = window.Vue;

// const calcRoute = () => {
//   const { pathname } = window.location;
//   if (pathname.endsWith("contact")) return "contact";
//   if (pathname.endsWith("about")) return "about";
//   if (pathname.endsWith("/") || pathname.endsWith("qBpeQZo")) return "home";
//   return false;
// };

// const RootComponent = {
//   data() {
//     return {
//       page: calcRoute()
//     };
//   },

//   computed: {
//     links() {
//       return [
//         {
//           "Header-item": true,
//           "is-active": this.page === "home"
//         },
//         {
//           "Header-item": true,
//           "is-active": this.page === "about"
//         },
//         {
//           "Header-item": true,
//           "is-active": this.page === "contact"
//         }
//       ];
//     }
//   },

//   template: `
//     <header class="Header">
//       <nav>
//         <ul class="Header-list">
//           <li><a href="/" :class="links[0]">Homepage</a></li>
//           <li><a href="/about-us" :class="links[1]">About Us</a></li>
//           <li><a href="/contact" :class="links[2]">Contact</a></li>
//         </ul>
//       </nav>
//     </header>

//     <main>
//       <h1 v-if="this.page === 'home'">Homepage</h1>
//       <h1 v-else-if="this.page === 'about'">About Us</h1>
//       <h1 v-else-if="this.page === 'contact'">Contact</h1>
//       <h1 v-else>404 Page does not exist</h1>
//     </main>
//   `
// };

// const app = createApp(RootComponent);
// app.mount("#app");




const Example = {
    data() {
        return {
            list: [
                {
                    image: 'https://picsum.photos/id/100/200/100',
                    title: 'Asdasdas',
                    description: 'asdasd',
                },
                {
                    image: 'https://picsum.photos/id/200/200/100',
                    title: 'Asdasdas',
                    description: 'asdasd',
                },
                {
                    image: 'https://picsum.photos/id/300/200/100',
                    title: 'Asdasdas',
                    description: 'asdasd',
                },
                {
                    image: 'https://picsum.photos/id/400/200/100',
                    title: 'Asdasdas',
                    description: 'asdasd',
                },
                {
                    image: 'https://picsum.photos/id/500/200/100',
                    title: 'Asdasdas',
                    description: 'asdasd',
                }
            ]
        }
    },

    template: /* html */ `
        <h1>Homepage</h1>

        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">

        <template v-for="(slide, index) in list">
          <button type="button" data-bs-target="#carouselExampleCaptions" :data-bs-slide-to="index" :class="{ active: index === 0 }" aria-current="index === 0" :aria-label="slide.title"></button>
        </template>

        </div>

        <div class="carousel-inner">
            <template v-for="(slide, index) in list">
                <div :class="{ 'carousel-item': true, active: index === 0 }" >
                    <img :src="slide.image" class="d-block w-100" :alt="slide.description">

                    <div class="carousel-caption d-none d-md-block">
                        <h5>{{ slide.title }}</h5>
                        <p>{{ slide.description }}</p>
                    </div>
                </div>
            </template>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>

        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    `
};
