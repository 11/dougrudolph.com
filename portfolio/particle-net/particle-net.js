var canvas;

window.onload  = function(){
    //setting up the canvas and the ctx
    canvas = document.getElementById("Canvas");
    canvas.width = window.innerWidth * .49;
    canvas.height = window.innerHeight * .4;
    var ctx = canvas.getContext("2d");

    //NODE CLASS
    class Node
    {
        //CONSTRUCTOR
        constructor(x,y,radius)
        {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.dx = randFromZero(7)/10;
            this.dy = randFromZero(7)/10;
            this.color="#F0F0F0";
        }

        //DRAWS THE NODES TO THE CANVAS
        draw()
        {
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        }

        //BOUNCES NODES OFF WALLS
        update()
        {
            this.x += this.dx;
            this.y += this.dy;

            if(this.x + this.dx > canvas.width || this.x + this.dx < 0)
            {
                this.dx = -(this.dx);
            }

            if(this.y + this.dy > canvas.height || this.y + this.dy < 0)
            {
                this.dy = -(this.dy);
            }
        }

        //CALCULATES THE DISTANCE BETWEEN 2 NODES
        static distance(n1, n2)
        {
            return Math.sqrt(Math.pow(Math.abs(n2.x - n1.x), 2)
                    + Math.pow(Math.abs(n2.y - n1.y),2));
        }
    }

    //GENERATES RANDOM NUMBER
    function rand(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function randFromZero(num){
        return Math.floor(Math.random() * (num*2)) - num;
    }

    //create a list of nodes and populate it
    var node_list = [];
    for(var x = 0; x < 65; x++)
    {
        node_list.push(new Node(rand(1, canvas.width), rand(1, canvas.height), 4));
    }

    //DRAW LINES BETWEEN NODES
    function drawLines()
    {
        var threshold = 100;

        for(var i = 0; i < node_list.length; i++)
        {
            for(var j = 0; j < node_list.length; j++)
            {
                var distance = Node.distance(node_list[i], node_list[j]);
                //if the nodes aren't the same & the distance is less than ten
                if(i != j && threshold > distance)
                {
                    ctx.beginPath();
                    ctx.moveTo(node_list[i].x, node_list[i].y);
                    ctx.lineTo(node_list[j].x, node_list[j].y);
                    ctx.globalAlpha = distance/threshold*.5;
                    ctx.strokeStyle = node_list[i].color;
                    ctx.stroke(); //ctx.fill(), but for lines
                    ctx.closePath();
                }
            }
        }
    }

    //runs the node simulation
    function run()
    {
        //CLEAR PREVIOUS FRAME
        ctx.clearRect(0,0,canvas.width, canvas.height);

        //UPDATE - update the position of all the nodes
        node_list.forEach(function(n){
            n.update();
        });

        //RENDER - render the updated position of all the
        drawLines();
        node_list.forEach(function(n){
            n.draw();
        });

    }

    setInterval(run, 15);
}

window.addEventListener("resize", function() {
    canvas.width = window.innerWidth * .49;
});
