<template>


<div class="container">
    <h1 class="text-center">Task Tracker</h1>
<div class="block1 ">
   
     <input type="text" placeholder="Add Task here" v-model="inputfield">
     <input type="date" v-model="Cdate">
    
     <button class="btn btn-dark" @click="addTask">Submit  </button>
     
</div>

<div class="block2 text-center">
   
    <div class="row">
        <div class="col-6"><h4>Task</h4></div>
        <div class="col-6"><h4>Date</h4></div>
    </div>
     <p class="mt-4" v-if="arr.length===0">No Task</p>
     <ul v-else class="taskList">
         <li class="task row" v-for="task in arr" :key="task">
             <p class="col-6">{{task.name}}</p>
             <p class="col-6">{{task.id}}</p>
         </li>
     </ul>
</div>
</div>


</template>


<script>
export default {
data() {
    return {
        inputfield : "",
        arr : [],
        Cdate : ''
    }
},
methods: {
    addTask (){
        if (this.inputfield==''  ){
            alert("TO do task cant be empty ")
        }else{
            // this.arr.name = this.inputfield
            // this.arr.date = this.Cdate
            

            this.arr.push({name:this.inputfield, id:this.Cdate})
            console.log(this.arr)
        }
}
}
}


</script>


<style scoped>
.container{
    max-width: 600px;
    margin: 40px auto;
    border: 3px solid lightgray;
    padding: 20px;
   
}
.block1{
     display: flex;
    align-items: center;
    justify-content: space-around;
}
.block2{
    margin: 40px 0;
    padding: 20px;
}
.taskList{
    padding: 0;
}
.task{
    display: flex;
    align-items: center;
    justify-content: space-around;
}
</style>
