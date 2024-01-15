window.onload = function () {

    (function () {
        var dragContainer = document.getElementById("dragContainer");
        var dragBg = document.getElementById("dragBg");
        var dragText = document.getElementById("dragText");
        var dragHandler = document.getElementById("dragHandler");
        var maxHandleOffset = dragContainer.clientWidth -  dragHandler.clientWidth;
        isVertifySucc = false;

        initDrag();

        function initDrag(){

            dragText.textContent = "Drag Box";
            dragHandler.addEventListener("mousedown", onDragHandlerMouseDown);
        }
        function onDragHandlerMouseDown(){
            document.addEventListener("mousemove", onDragHandlerMouseMove);
            document.addEventListener("mouseup", onDragHandlerMouseUp);
        }

        function onDragHandlerMouseMove (){
            var left = event.clientX - dragHandler.clientWidth / 2;
            if(left < 0){
                left = 0;
            }else if(left > maxHandleOffset ){
                left = maxHandleOffset;
            }
            dragHandler.style.left = left + "px";
            dragBg.style.width = dragHandler.style.left;
        }
        function onDragHandlerMouseUp () {
            document.removeEventListener("mousemove", onDragHandlerMouseMove);
            document.removeEventListener("mouseup", onDragHandlerMouseUp);
            var left = event.clientX - dragHandler.clientWidth / 2;
            if(left > maxHandleOffset){
                left = maxHandleOffset;
                verifySucc();
            }else{
                dragHandler.style.left = 0;
                dragBg.style.width = 0;
            }
        }

        function getIsVertifySucc(){
            return isVertifySucc;
        }

        function verifySucc(){
            isVertifySucc = true;
            dragText.textContent = "Finish";
            dragText.style.color = "white";
            dragHandler.setAttribute("class","dragHandlerOkBg");
            dragHandler.removeEventListener("mousedown", onDragHandlerMouseDown);
            document.removeEventListener("mousemove", onDragHandlerMouseMove);
            document.removeEventListener("mouseup", onDragHandlerMouseUp);
        }

    })()
}
function signIn(){
    if (isVertifySucc) {
        //var readInfo = data[userName];
        //var readPassword = readInfo[0];
        //console.log("[Username]" + userName);
        ////console.log("[Password]" + readPassword);
        //if (readPassword === password) {
        //alert("Welcome back | 欢迎回来");
        //}
        //else {
        //alert("Username or password wrong | 用户名或密码错误");
        //}
    }
    else {
        alert("Please do the test");
    }
}