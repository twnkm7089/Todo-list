function newList() {
    //list 추가
    var newItem = document.createElement("li");
    var plan = document.querySelector("#quest");
    var newPlan = document.createTextNode(plan.value);
  
    if(plan.value == "") {
        alert("내용을 입력해 주세요.");
    } else {
        newItem.appendChild(newPlan);

        var planList = document.querySelector("#planList");
        planList.insertBefore(newItem, planList.childNodes[0]);

    }

    plan.value="";




    //삭제
    var items = document.querySelectorAll("li");
    for(i = 0; i < items.length; i++) {
        items[i].addEventListener("click", function() {
            if(this.parentNode)
                this.parentNode.removeChild(this);
        })
    }
}

