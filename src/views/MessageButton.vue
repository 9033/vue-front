<template>
  <main>
    <div>
      <h1>import</h1>
      <p>
        단순히 import함<br>
        Message의 clicked를 실행.
      </p>
      <Message/>
    </div>
    <div>
      <h1>template</h1>
      <p>
        지정한 template으로 대체<br>
        여기서는 myButton을 대체함.<br>
        MessageButton의 clicked를 실행.
      </p>
      <Message>
        <template #myButton>
          <a-button
            @click="clicked"
          >
            MessageButton
          </a-button>
        </template>
      </Message>
    </div>
    <div>
      <h1>slot props</h1>
      <p>
        하위 컴포넌트 에서 slot에 prop으로 넣어준 값을 가지고 온다.<br>
        여거서는 하위 컴포넌트의 clicked를 실행함.<br>
        Message의 clicked를 실행.
      </p>
      <Message>
        <template #myButton="messageProps">
          <a-button
            @click="messageProps.clicked"
          >
            MessageButton
          </a-button>
        </template>
      </Message>
    </div>
  </main>
</template>

<script>
import Message from '@/components/Message'

export default {
  name:'MessageButton',
  components: {
    Message
  },
  data () {
    return {
      myMessage:'MessageButton',
    }
  },
  methods: {
    clicked(){
      this.$message.success(this.myMessage)
    }
  },
}
</script>

<style scoped>
div{
  display: inline-block;
  border: 1px solid rgb(1,1,1,0.2);
  margin:4px;
  padding:8px;
  width:fit-content;
}
</style>
