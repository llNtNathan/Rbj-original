<template>
    <div class="container">
        <div class="row">
            <div class="col-md-5 offset-md-2">
                <gallery fetch="/api/posts/latest" route="Posts.Child" sk="PostLatest">Últimas matérias</gallery>
            </div>
             <div class="col-md-5">
                <gallery fetch="/api/news/latest" route="News.Child" sk="NewsLatest">Últimas noticias</gallery>
            </div>
        </div>
    </div>
</template>
<script>
import Gallery from './Gallery.vue';
export default {
    components:{
        Gallery
    }
}
</script>

