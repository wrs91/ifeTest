var list = document.getElementById("list"),
    lInsert = document.getElementById("lInsert"),
    rInsert = document.getElementById("rInsert"),
    lDelete = document.getElementById("lDelete"),
    rDelete = document.getElementById("rDelete"),
    ipt = document.getElementById("num");


var delBlock = function(pos,num){

},
    addBlock = function(pos){

    },
    init = function(){
        lInsert.onclick = function(){
            addBlock('left')
        }
        rInsert.onclick = function(){
            var last = list.length-1;
            addBlock('right');
        }
        lDelete.onclick = function(){
            delBlock(0)
        }
        rDelete.onclick = function(){
            var last = list.length-1;
            delBlock(last);
        }
        list.getElementsByTagName("li").onclick = function(e){
            var index = this.index;
            delBlock(index);
        }
    };

init();
