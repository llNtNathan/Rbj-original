<template>
  <div class="main st-container">
    <div class="row">
      <div class="col-md-3">
        <aside class="aside">
          <ul v-for="(item, index) in items" :key="index"  class="list-group">
            <router-link :to="item.to" class="list-item list-group-item-action"><span>{{ item.icon }}</span><span>{{ item.title }}</span></router-link>
          </ul>
        </aside>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
      name: 'App',
      data:() => ({
      drawer: true,
      persistent: true,
      isMobile: false,
      items:[
          {title: 'Home',icon: '', to: '/'},
          {title: 'Noticias',icon: '', to: '/noticias'},
          {title: 'Matérias',icon: '', to: '/materias'},
          {title: 'Programação',icon: '', to: '/news'},
          {title: 'Entrevistas',icon: '', to: '/news'},
          {title: 'Eventos',icon: '', to: '/news'},
          {title: 'TV Rádio Bom Jesus',icon: '', to: '/news'},
          {title: 'Galeria de fotos',icon: '', to: '/news'},
          {title: 'A equipe',icon: '', to: '/news'},
          {title: 'A rádio',icon: '', to: '/news'},
          {title: 'Parceiros',icon: '', to: '/news'},
            //colocar o fale conosco em um lugar muito bom
          {title: 'Fale conosco',icon: '', to: '/news'},
    ]
  })
}
</script>
<style>
  .aside{
    background-color: orange;
    width: 250px;
    height: 657px;
    position: fixed;
    overflow: scroll;
  }
  .list-item{
    position: relative;
    display: block;
    padding: 0.75rem 1.25rem;
  }
</style>