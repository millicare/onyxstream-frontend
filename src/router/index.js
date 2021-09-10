import Vue from 'vue'
import VueRouter from 'vue-router'
/* Layouts */
const FrontendLayout = () => import('../layouts/FrontendLayout')
const Default = () => import('../layouts/BlankLayout')
const AuthLayout = () => import('../layouts/AuthLayout')

/* Extra Pages */
const ErrorPage = () => import('../views/Pages/ErrorPage')
const ComingSoon = () => import('../views/Pages/ComingSoon')
const Maintenance = () => import('../views/Pages/Maintenance')
const TimeLine = () => import('../views/Pages/TimeLines')
const BlankPage = () => import('../views/Pages/BlankPage')
const FAQ = () => import('../views/Pages/FAQ')
const Terms = () => import('../views/Pages/Terms')
const AboutUs = () => import('../views/Pages/AboutUs')
const ContactUs = () => import('../views/Pages/ContactUs')
const Invoice = () => import('../views/Pages/Invoice')
const CorporateInfo = () => import('../views/Pages/CorporateInfo')
const PrivacyPolicy = () => import('../views/Pages/PrivacyPolicy')
const LegalNotice = () => import('../views/Pages/LegalNotice')
const Help = () => import('../views/Pages/Help')
/* Authentic View */
const SignIn1 = () => import('../views/AuthPages/Default/SignIn1')
const SignUp1 = () => import('../views/AuthPages/Default/SignUp1')
const RecoverPassword1 = () => import('../views/AuthPages/Default/RecoverPassword1')
const ChangePassword1 = () => import('../views/AuthPages/Default/ChangePassword')
const LockScreen1 = () => import('../views/AuthPages/Default/LockScreen1')
const ConfirmMail1 = () => import('../views/AuthPages/Default/ConfirmMail1')

/* Show Routes */
const LandingPage = () => import('../views/FrontendPages/MainPage.vue')
const ShowCategory = () => import('../views/FrontendPages/ShowCategory.vue')
const CategoryDetail = () => import('../views/FrontendPages/ShowDetail.vue')
const MovieCatgeory = () => import('../views/FrontendPages/MovieCategory')
const MovieDetail = () => import('../views/FrontendPages/MovieDetail')
const SinglePage = () => import('../views/FrontendPages/SinglePage')
const VideoPage = () => import('../views/FrontendPages/Components/Trending/Video.vue')

const ManageProfile = () => import('../views/FrontendPages/UserProfile/ManageProfile.vue')
const ChangePassword = () => import('../views/FrontendPages/UserProfile/ChangePassword.vue')
const ChangeEmail = () => import('../views/FrontendPages/UserProfile/ChangeEmail.vue')
const Settings = () => import('../views/FrontendPages/UserProfile/Settings.vue')
const PricingPlanning = () => import('../views/FrontendPages/UserProfile/PricingPlan.vue')

Vue.use(VueRouter)

const defaultlayout = (prop) => [
  {
    path: 'help',
    name: prop + '.help',
    meta: { name: 'Help' },
    component: Help
  },
  {
    path: 'corporate-info',
    name: prop + '.corporate-info',
    meta: { name: 'Corporate Information' },
    component: CorporateInfo
  },
  {
    path: 'privacy-policy',
    name: prop + '.privacy-policy',
    meta: { name: 'Privacy Policy' },
    component: PrivacyPolicy
  },
  {
    path: 'legal-notice',
    name: prop + '.legal-notice',
    meta: { name: 'Legal Notice' },
    component: LegalNotice
  },
  {
    path: 'timeline',
    name: prop + '.timeline',
    meta: { auth: true, name: 'Timeline' },
    component: TimeLine
  },
  {
    path: 'invoice',
    name: prop + '.invoice',
    meta: { auth: true, name: 'Invoice' },
    component: Invoice
  },
  {
    path: 'blank-page',
    name: prop + '.blank-page',
    meta: { name: 'Blank Page' },
    component: BlankPage
  },
  {
    path: 'faq',
    name: prop + '.faq',
    meta: { name: 'Faq' },
    component: FAQ
  },
  {
    path: 'terms',
    name: prop + '.terms',
    meta: { name: 'Terms & Conditions' },
    component: Terms
  },
  {
    path: 'about-us',
    name: prop + '.about-us',
    meta: { name: 'About Us' },
    component: AboutUs
  },
  {
    path: 'contact-us',
    name: prop + '.contact-us',
    meta: { name: 'Contact Us' },
    component: ContactUs
  },
]
const authChildRoutes = (prop) => [
  {
    path: 'sign-in1',
    name: prop + '.sign-in1',
    meta: { auth: true },
    component: SignIn1
  },
  {
    path: 'sign-up1',
    name: prop + '.sign-up1',
    meta: { auth: true },
    component: SignUp1
  },
  {
    path: 'password-reset1',
    name: prop + '.password-reset1',
    meta: { mainClass: '' },
    component: RecoverPassword1
  },
  {
    path: 'password-change1',
    name: prop + '.password-change1',
    meta: {mainClass: ''},
    component: ChangePassword1,
    props: route => ({ token: route.query.token})
  },
  {
    path: 'lock-screen1',
    name: prop + '.lock-screen1',
    meta: { auth: true },
    component: LockScreen1
  },
  {
    path: 'confirm-mail1',
    name: prop + '.confirm-mail1',
    meta: { auth: true },
    component: ConfirmMail1
  }
]
const pagesChildRoutes = (prop) => [
  {
    path: 'error/:code',
    name: prop + '.error',
    meta: { auth: true },
    component: ErrorPage
  },
  {
    path: 'coming-soon',
    name: prop + '.coming-soon',
    meta: { auth: true },
    component: ComingSoon
  },
  {
    path: 'maintenance',
    name: prop + '.maintenance',
    meta: { auth: true },
    component: Maintenance
  }
]
const landingPageRoutes = (prop) => [
  {
    path: '',
    name: prop + '.landing-page',
    meta: { name: 'landing page 1', slider: 'true' },
    component: LandingPage
  },
  {
    path: '/show-category',
    name: prop + '.show-category',
    meta: { name: 'Show Category', category: 'true' },
    component: ShowCategory
  },
  {
    path: '/category-detail/:eId',
    name: prop + '.category-detail',
    meta: { auth: true, name: 'Category Details' },
    component: CategoryDetail
  },
  {
    path: '/movie-category',
    name: prop + '.movie-category',
    meta: { name: 'Movie Category', movieslider: 'true' },
    component: MovieCatgeory
  },
  {
    path: '/movie-detail/:mId',
    name: prop + '.movie-detail',
    meta: { auth: true, name: 'Movie Detail' },
    component: MovieDetail
  },
  {
    path: '/show-single/:sId',
    name: prop + '.show-single',
    meta: { name: 'Show Single' },
    component: SinglePage
  },
  {
    path: '/manage-profile',
    name: prop + '.manage-profile',
    meta: { auth: true, name: 'Manage Profile', mainClass: '' },
    component: ManageProfile
  },
  {
    path: '/profile-setting',
    name: prop + '.profile-setting',
    meta: { auth: true, name: 'Profile Setting', mainClass: '' },
    component: Settings
  },
  {
    path: '/change-password',
    name: prop + '.change-password',
    meta: { auth: true, name: 'Change Password', mainClass: '' },
    component: ChangePassword
  },
  {
    path: '/change-email',
    name: prop + '.change-email',
    meta: { auth: true, name: 'Change Email', mainClass: '' },
    component: ChangeEmail
  },
  {
    path: '/pricing-planning',
    name: prop + '.pricing-planning',
    meta: { auth: true, name: 'Price Planning', mainClass: '' },
    component: PricingPlanning
  },
  {
    path: '/video-page',
    name: prop + '.video-page',
    meta: { auth: true, name: 'Watch Video' },
    component: VideoPage
  }
]
const routes = [
  {
    path: '/',
    name: 'landing-page',
    component: FrontendLayout,
    meta: { auth: true },
    children: landingPageRoutes('landing-page')
  },
  {
    path: '/auth',
    name: 'auth1',
    component: AuthLayout,
    meta: { auth: true },
    children: authChildRoutes('auth1')
  },
  {
    path: '/pages',
    name: 'pages',
    component: Default,
    meta: { auth: true },
    children: pagesChildRoutes('default')
  },
  {
    path: '/extra-pages',
    name: 'extra-pages',
    component: FrontendLayout,
    meta: { auth: true },
    children: defaultlayout('extra-pages')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const store = router.app.$store

  const visited = store.getters['Tracker/visitState']
  if (!visited)
    store.dispatch('Tracker/visit')

  const publicPages = ['/auth/sign-in1', '/auth/sign-up1']
  if (publicPages.includes(to.path)) {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('user')
  if (to.meta.auth) {
    if (authRequired && loggedIn === null)
      return next('/auth/sign-in1')
  }

  const user = store.getters['Auth/userState']
  const authStatus = store.getters['Auth/authStatusState']
  const upgradeWarning = "To watch this video, you must upgrade your membership now."
  const purchaseWaring = "To watch this video, you must purchase membership now."
  let MatchRule = function(item) {
    return item.id == this
  }
  if (to.path.includes('movie-detail')) {

    console.log(localStorage.getItem('movieList'))
    const movies = store.getters['Movie/movieState']
    const movieId = to.path.split('movie-detail/')[1]
    if (!user || !authStatus.loggedIn || !movieId)
      return false
    let movie =  movies.find(MatchRule, movieId)
    if (!movie) {
      return false
    }
    if (user.memship.name == 'Free Trial') {
      alert(purchaseWaring)
      return false
    }
    if (!user.memship.enbHDQuality && !user.memship.enbUHDQuality)  {
      if (movie.quality.includes('HD')) {
        alert(upgradeWarning)
        return false
      }
    }
    if (user.memship.enbHDQuality && !user.memship.enbUHDQuality) {
      if (movie.quality.includes('UHD')) {
        alert(upgradeWarning)
        return false
      }
    }
    store.dispatch('Tracker/view', {content_type: 'movie', content_id: movieId})
  }
  if (to.path.includes('show-single')) {
    const shows = store.getters['Show/showState']
    const showId = to.path.split('show-single/')[1]
    if (!user || !authStatus.loggedIn || !showId)
      return false
    let show =  shows.find(MatchRule, showId)
    if (!show) {
      return false
    }
    if (user.memship.name == 'Free Trial') {
      alert(purchaseWaring)
      return false
    }
    if (!user.memship.enbHDQuality && !user.memship.enbUHDQuality)  {
      if (show.quality.includes('HD')) {
        alert(upgradeWarning)
        return false
      }
    }
    if (user.memship.enbHDQuality && !user.memship.enbUHDQuality) {
      if (show.quality.includes('UHD')) {
        alert(upgradeWarning)
        return false
      }
    }
    store.dispatch('Tracker/view', {content_type: 'show', content_id: showId})
  }
  if (to.path.includes('category-detail')) {
    const episodeId = to.path.split('category-detail/')[1]
    if (!user || !authStatus.loggedIn || !episodeId)
      return false
    if (user.memship.name == 'Free Trial') {
      alert(purchaseWaring)
      return false
    }
    store.dispatch('Tracker/view', {content_type: 'episode', content_id: episodeId})
  }
  next()
})

export default router
