/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-09-21 10:37:03
 * @version $Id$
 */

(function() {
    var drowObj = {};
    $(".tsdownbtn").each(function(index) {
        var canvasNum = ($(this).attr("data-downbtn"));
        var canvasBox = drowObj[canvasNum] = {

        }
        canvasBox.imageObj = new Image();
        canvasBox.imageObj.src = 'images/ts-slide-dbg' + canvasNum + ".jpg";
        canvasBox.interani = {};
        canvasBox.doneTime = 0;
        canvasBox.leave = false;


        var width = $(this).width(),
            height = $(this).height();

        console.log(drowObj);
        $(this).hover(function(event) {
            var _this = $(this);
            if (!canvasBox.leave) {
                canvasBox.leave = true;
                // clearInterval(interani);
                var offsetX = event.offsetX;
                var offsetY = event.offsetY;
                $("#tsdorwbox" + canvasNum).remove();
                canvasBox.context = {};
                canvasBox.doneTime = 0;
                $(this).append('<canvas id="tsdorwbox' + canvasNum + '" class="tsdowcanvas" height="100%" width="100%"></canvas>')
                canvasBox.canvas = document.getElementById('tsdorwbox' + canvasNum);
                canvasBox.canvas.style.width = width + "px";
                canvasBox.canvas.style.height = height + "px";
                canvasBox.canvas.height = height * 2;
                canvasBox.canvas.width = width * 2;
                if (canvasBox.canvas.getContext) {
                    canvasBox.context = canvasBox.canvas.getContext('2d');
                    canvasBox.context.scale(2, 2);

                }
                _this.find(".btncover").hide();

                var _context = canvasBox.context;



                _context.drawImage(canvasBox.imageObj, 0, 0);
                _context.globalCompositeOperation = "destination-out";
                _context.arc(offsetX, offsetY, 0, 0, Math.PI * 2, true);
                _context.fillStyle = "#fff";
                _context.fill();
                _context.globalCompositeOperation = "source-over"

                canvasBox.interani = setInterval(function() {
                    if (isFirefox = navigator.userAgent.indexOf("Firefox") > 0) {
                        canvasBox.canvas.height = height * 2;
                        canvasBox.canvas.width = width * 2;
                        canvasBox.context.scale(2, 2);
                    }


                    if (canvasBox.doneTime > width + 150) {
                        canvasBox.doneTime = 0;
                        clearInterval(canvasBox.interani)
                        return false;
                    }

                    var rGrd = _context.createRadialGradient(offsetX, offsetY, canvasBox.doneTime * 0.7, offsetX, offsetY, canvasBox.doneTime * 0.9, offsetX, offsetY, canvasBox.doneTime * 0.1);
                    rGrd.addColorStop(0, 'rgba(255,255,255,1)');
                    rGrd.addColorStop(0, 'rgba(255,255,255,1)');
                    rGrd.addColorStop(1, 'rgba(255,255,255,0)');

                    canvasBox.doneTime = canvasBox.doneTime + 7;
                    _context.drawImage(canvasBox.imageObj, 0, 0);
                    _context.globalCompositeOperation = "destination-out";

                    _context.arc(offsetX, offsetY, canvasBox.doneTime, 0, Math.PI * 2, true);
                    _context.fillStyle = rGrd;
                    _context.fill();
                    _context.closePath();
                    _context.globalCompositeOperation = "source-over";
                }, 5)

            }
        }, function(event) {
            var _this = $(this);
            clearInterval(canvasBox.interani)
                // if (canvasBox.doneTime == 0) {
                //     canvasBox.doneTime = width + 150;
                // }
            console.log(canvasBox.doneTime);
            _this.find(".btncover").fadeIn(250, function() {

            });
            canvasBox.leave = false;
        })
    })
})()
