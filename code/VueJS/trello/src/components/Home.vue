<!--
  - Created by Eunjin Yang on 5/17/19 6:06 PM
  - Github : http://github.com/jinny920311
  - Copyright (c) 2019. All rights reserved.
  -->
<template>
  <div>
    <div class="home-title">Personal Boards</div>
    <div class="board-list" ref="boardList">
      <div class="board-item" v-for="b in boards" :key="b.id"
           :data-bgcolor="b.bgColor" ref="boardItem">
        <router-link :to="`/b/${b.id}`">
          <div class="board-item-title">{{b.title}}</div>
        </router-link>
      </div>
      <div class="board-item board-item-new">
        <a class="new-board-btn" href="" @click.prevent="SET_IS_ADD_BOARD(true)">
          Create new board...
        </a>
      </div>
    </div>
    <AddBoard v-if="isAddBoard" @close="isAddBoard=false" @submit="onAddBoard"></AddBoard>
  </div>
</template>

<script>
  import {board} from '../api'
  import AddBoard from  './AddBoard'
  import {mapState, mapMutations} from 'vuex'

  export default {
    components: {
      AddBoard
    },
    data() {
      return {
        loading: false,
        boards: [],
        error: '',
      }
    },
    computed: {
      ...mapState([
       'isAddBoard'
      ])
    },
    created() {
      this.fetchData()
    },
    updated() {
      this.$refs.boardItem.forEach(el => {
        el.style.backgroundColor = el.dataset.bgcolor
      })
    },
    methods: {
      ...mapMutations([
        'SET_IS_ADD_BOARD'
      ]),
      fetchData() {
        this.loading = true
        board.fetch()
          .then(data => {
            this.boards = data.list
          })
          .finally(() => {
            this.loading = false
          })
      },
      // addBoard() {
      //   // this.isAddBoard = true
      // //  변이사용
      //   this.$store.commit('SET_IS_ADD_BOARD', true)
      // },
      onAddBoard() {
        // console.log(title)
      //  api 호출하기(보드 추가하기)
      //  보드가 추가되면 새로 패치데이터 불러옴
      //   board.create(title)
      //     .then(() => this.fetchData())
        this.fetchData()
      }
        // console.log('addBoard()')
        //axios lib를 이용한 방식
        // axios.get('http://localhost:3000/boards')
        //   .then(res => {
        //     this.boards = res.data
        //   })
        //   .catch(res => {
        //     this.$router.replace('/login')
        //   })
        //   .finally(()=> {
        //     this.loading = false
        //   })

        // XMLHttpRequest를 이용한 방식
        // const req = new XMLHttpRequest()
        //
        // req.open('GET', 'http://localhost:3000/health')
        //
        // req.send()
        //
        // req.addEventListener('load', () => {
        //   this.loading = false
        //   this.apiRes = {
        //     status: req.status,
        //     statusText: req.statusText,
        //     response: JSON.parse(req.response)
        //   }
        // })
    }
  }
</script>

<style scoped>
  .home-title {
    padding: 10px;
    font-size: 18px;
    font-weight: bold;
  }
  .board-list {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
  }
  .board-item {
    width: 23%;
    height: 100px;
    margin: 0 2% 20px 0;
    border-radius: 3px;
  }
  .board-item-new {
    background-color: #ddd;
  }
  .board-item a {
    text-decoration: none;
    display: block;
    width: 100%;
    height: 100%;
  }
  .board-item a:hover,
  .board-item a:focus {
    background-color: rgba(0,0,0, .1);
    color: #666;
  }
  .board-item-title {
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    padding: 10px;
  }
  .board-item a.new-board-btn {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    height: 100px;
    width: inherit;
    color: #888;
    font-weight: 700;
  }
</style>
