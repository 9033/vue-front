<template>
  <main>
      <a-table
        :dataSource="dataSource"
        :columns="columns"
        bordered 
      >
      </a-table>
      <a-button @click="fetchData">re listing</a-button>
  </main>
</template>

<script>

const sampleData=[];//db-api서버에서 오는 데이터 셈플.
sampleData.push({id:1,name:"apple",color:"red"});
sampleData.push({id:2,name:"banana",color:"yellow"});
sampleData.push({id:3,name:"mango",color:"bright-yellow"});

export default {
    components:{        
    },
    data(){
        return {
            dataSource:sampleData.map(v=>{v.key=v.id;return v;}),//key필드를 추가.
            columns:[
                {
                    title:"Name",
                    dataIndex:"name",
                },
                {
                    title:"Color",
                    dataIndex:"color",
                },
            ],
        }
    },
    mounted(){
    },
    watch:{
    },
    computed:{//template안에 변수를 출력하는 로직을 써놓으면 지저분할때 이용하는곳.
        drawData:function(){//raw값을 변환해줌.
            console.log('drawData');
            return JSON.stringify(this.sampleData);
        },
    },
    methods:{
        fetchData(){// 값을 받는 함수.
            console.log('fetchData');            
            this.dataSource.push({key:(this.dataSource.length+1),name:"test",color:"test"});
        },
    },
}
</script>

<style>

</style>
