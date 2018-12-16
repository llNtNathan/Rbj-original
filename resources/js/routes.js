import Home from './components/Pagination/Index/Home.vue';
import News from './components/Pagination/News/News.vue';


export const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    /*{
        path: '/schedule',
        name: 'Schedule',
        component: view('Schedule')
    },
    {
        path: '/schedule/:id',
        name: 'Schedule.Child',
        component: view('Schedule/Child')
    },*/
    {
        path: '/news',
        name: 'News',
        component: News,
        /*meta: {
            fetch: {
                url: '/api/news',
                action: 'News/setNews',
                getter: 'News/pagination'
            }
        }*/
    },
    /*{
        path: '/giro',
        name: 'Giro',
        component: view('Giro')
    },
    {
        path: '/news/:id',
        name: 'News.Child',
        component: view('News/Child'),
        beforeEnter(to, from, next) {
            axios.get(`/api/news/${to.params.id}`)
                .then(res => {
                    store.dispatch('News/setCurrent', res.data)
                })
                .catch(console.log)

            next()
        }
    },
    {
        path: '/interviews',
        name: 'Interviews',
        component: view('Interviews'),
        meta: {
            fetch: {
                url: '/api/interviews',
                action: 'Interviews/setInterviews',
                getter: 'Interviews/pagination'
            }
        }
    },
    {
        path: '/interviews/:id',
        name: 'Interviews.Child',
        component: view('Interviews/Child'),
        beforeEnter(to, from, next) {
            axios.get(`/api/interviews/${to.params.id}`)
                .then(res => {
                    store.dispatch('Interviews/setCurrent', res.data)
                })
                .catch(console.log)

            next()
        }
    },
    {
        path: '/posts',
        name: 'Posts',
        component: view('Posts'),
        meta: {
            fetch: {
                url: '/api/posts',
                action: 'Posts/setPosts',
                getter: 'Posts/pagination'
            }
        }
    },
    {
        path: '/posts/:id',
        name: 'Posts.Child',
        component: view('Posts/Child'),
        beforeEnter(to, from, next) {
            axios.get(`/api/posts/${to.params.id}`)
                .then(res => {
                    store.dispatch('Posts/setCurrent', res.data)
                })
                .catch(console.log)

            next()
        }
    },
    {
        path: '/events',
        name: 'Events',
        component: view('Events'),
        meta: {
            fetch: {
                url: '/api/events',
                action: 'Events/setEvents',
                getter: 'Events/pagination'
            }
        }
    },
    {
        path: '/events/:id',
        name: 'Events.Child',
        component: view('Events/Child', 'index.vue'),
        beforeEnter(to, from, next) {
            axios.get(`/api/events/${to.params.id}`)
                .then(res => {
                    store.dispatch('Events/setCurrent', res.data)
                })
                .catch(console.log)
            next()
        }
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: view('Gallery'),
        meta: {
            fetch: {
                url: '/api/photos',
                action: 'Gallery/setGallery',
                getter: 'Gallery/pagination'
            }
        }
    },
    {
        path: '/videos',
        name: 'Videos',
        component: view('Videos'),
        meta: {
            fetch: {
                url: '/api/videos',
                action: 'Videos/setVideos',
                getter: 'Videos/pagination'
            }
        }
    },
    {
        path: '/team',
        name: 'Team',
        component: view('Team'),
        meta: {
            fetch: {
                url: '/api/teams',
                action: 'Team/setTeam',
                getter: 'Team/pagination'
            }
        }
    },
    {
        path: '/about',
        name: 'About',
        component: view('About')
    },
    {
        path: '/partners',
        name: 'Partners',
        component: view('Partners'),
        meta: {
            fetch: {
                url: '/api/partners',
                action: 'Partners/setPartners',
                getter: 'Partners/pagination'
            }
        }
    },
    {
        path: '/chat',
        name: 'Chat',
        component: view('Chat'),
        async beforeEnter(to, from, next) {
            if (!store.getters['Chat/messages'].length) {
                let {data} = await axios.get('/api/messages')

                store.dispatch('Chat/setMessages', data)
            }

            next()
        }
    },*/
    {
        path: '*',
        redirect: '/'
    }
];
