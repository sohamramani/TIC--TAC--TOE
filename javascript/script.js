$(document).ready(function(){
    // modal
   let mymodal = new bootstrap.Modal(("#mymodal"), {});


    // reset game
    $(document).on("click", '#reset', function (){
        location.reload();
    });
 
    // playgame heading click event
    $("#playgame").click(function(){
        let player1 = $("#player1").val();
        let player2 = $("#player2").val();

        if (player1 == "" || player2 == ""){
            alert("please enter both names")
            return;
        }
        $("#table").css("display", "block");
        $("#playgame").hide();
        $("#namefields").hide();
        $("#turn").text(player1 +" "+ "turn : ")
    });

    // box cell click event and append symbols
    let turn = 1;
    let move = 0;

    $(".fortd").click(function () {
            if (turn == 1) {
                if ($(this).text() == "x" || $(this).text() == "o") {
                    return;
                }
                else {
                    $("#turn").text($("#player2").val() +" "+ "turn : ");
                    $(this).text("x");
                    turn = 2;
                    move++ 
                }
            }

            else if (turn == 2) {
                if ($(this).text() == "x" || $(this).text() == "o") {
                    return;
                }  
                else {
                     $("#turn").text($("#player1").val() +" "+ "turn : ");
                    $(this).text("o");
                    turn = 1;
                    move++ 
                }
            }
            if (move > 4) {
                checkwin()
            }
    }); 

    // win condition 
    function checkwin() {
        let value = $(".fortd").text();
        const wincondition = [
            [0,1,2], 
            [3,4,5], 
            [6,7,8], 
            [0,3,6], 
            [1,4,7], 
            [2,5,8], 
            [0,4,8], 
            [2,4,6],
        ];

        for (let k = 0; k <= 7; k++){
            let symbol = wincondition[k];
            let firstval =  value[symbol[0]];
            let secoundval = value[symbol[1]];
            let thirdval = value[symbol[2]];

            if (firstval !== " " && secoundval !== " " && thirdval !== " "){
                if (firstval === secoundval && firstval === thirdval){
                    if (firstval == "x"){
                        $('#line').attr('class' , 'line'+ k)
                        mymodal.show()
                        $("#modal-body").text( $("#player1").val() +" "+ "won")
                } 
                    else if (firstval == "o"){
                        $('#line').attr('class' , 'line'+ k)
                        mymodal.show()
                        $("#modal-body").text( $("#player2").val() +" "+ "won")
                    } 
                    break;
                } 
                else if (move == 9 && firstval !== secoundval && firstval !== thirdval){
                        mymodal.show()
                        $("#modal-body").text("match draw");
                } 
            }
        }  
    } 
});


