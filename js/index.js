function check(){
    var q = ["what is react", "Define components?", "what is JSX"];
    var a = ["React is a javascript library", "Components are the reusable codes", "JSX stands for JavaScript Extension"];

    var ip = document.getElementById("inp").value;

    for(let i=0; i<q.length; i++){
        if(q[i] == ip){
            alert(a[i]);
            return;
        }
    }

    alert("Enter valid question...");
}