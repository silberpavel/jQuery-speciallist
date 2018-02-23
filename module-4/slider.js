(function($){
    
    var viewUL = $("div#view")
                .css("overflow", "hidden")
                .children("ul"),
        imgs = viewUL.find("img"),
        imgW = 400,
        imgsLen = imgs.length,
        totalImgsW = imgsLen * imgW,
        current = 1;

    $("div#show").show()
        .find("button").on("click", function(){
            var dir = $(this).attr("id"),
                pos = imgW;
            // if(dir == "next")
            //     current++;
            // else 
            //     current--;
            (dir == "next") ? current++ : current--;
            if(current == 0){
                current = imgsLen;
                dir = "next";
                pos = totalImgsW-imgW;
            } else if(current-1 == imgsLen) {
                current = 1;
                pos = 0;
            }
            movePictures(viewUL, pos, dir);
            console.log(current);
        }) ;

    function movePictures(container, pos, dir){
        var op ; // + or -
        if(pos != 0)
            op = (dir == "next") ? "-=" : "+=";
        container.animate(
            {"margin-left": op ? (op+pos) : pos}
        );
    }

})(jQuery)