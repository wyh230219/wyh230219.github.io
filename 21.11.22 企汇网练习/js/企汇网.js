var one = document.querySelectorAll('.o');
var _x = document.querySelectorAll('._x');
for(let i = 0; i < one.length; i++) {
    one[i].onmouseover = function () {
        for(let k = 0; k < one.length; k++) {
            one[k].className = ' o';
            _x[k].className = 'x_s _x';
        }
        this.className = 'one o';
        _x[i].className = 'xs _x';
    }
}


    var _xiala = document.getElementById('_xiala');
    var select = document.getElementById('select');
    _xiala.onmouseover = function () {
        select.className = 'xiala db';
    }
    _xiala.onmouseout = function () {
        select.className = 'xiala dn';
    }
    select.onmouseover = function () {
        this.className = 'xiala db';
    }
    select.onmouseout = function () {
        this.className = 'xiala dn';
    }