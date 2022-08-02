function newList() {
    var newItem = document.createElement("li");
    var plan = document.querySelector("#quest");
    var newPlan = document.createTextNode(plan.value);
    console.log(newPlan)
    if(plan.value == "") {
        alert("내용을 입력해 주세요.");
    } else {
        newItem.appendChild(newPlan);

        var planList = document.querySelector("#planList");
        planList.insertBefore(newItem, planList.childNodes[0]);
    }

    plan.value="";
}