function layoutcssmkr() {
    function y(s) {
        var c = '';

        function a(x, y, z, i = 1) {
            function b(n) {
                if (n == '-1') {
                    n++;
                }
                if (n < -200) {
                    n = n + 25;
                    return n;
                } else if (n < -100) {
                    n = n + 10;
                    return n;
                } else if (n < -50) {
                    n = n + 5;
                    return n;
                } else if (n < 50) {
                    n++;
                    return n;
                } else if (n < 100) {
                    n = n + 5;
                    return n;
                } else if (n < 200) {
                    n = n + 10;
                    return n;
                } else {
                    n = n + 25;
                    return n;
                }
            }

            var c = '';
            var m = 'm';
            while (i <= z) {
                if (i > 0) {
                    m = ''
                };
                c += '.' + x + s + '-' + m + Math.abs(i) + 'px{' + y + ':' + i + 'px}';
                i = b(i);
            }
            return c;
        }

        c += a("w", "width", 1200);
        c += a("minw", "min-width", 1200);
        c += a("maxw", "max-width", 1200);

        c += a("h", "height", 1200);
        c += a("minh", "min-height", 1200);
        c += a("maxh", "max-height", 1200);

        c += a("p", "padding", 300);
        c += a("pt", "padding-top", 300);
        c += a("pb", "padding-bottom", 300);
        c += a("pl", "padding-left", 300);
        c += a("pr", "padding-right", 300);

        c += a("m", "margin", 300, -100);
        c += a("mt", "margin-top", 300, -100);
        c += a("mb", "margin-bottom", 300, -100);
        c += a("ml", "margin-left", 300, -100);
        c += a("mr", "margin-right", 300, -100);

        c += a("br", "border-radius", 100);
        c += a("fs", "font-size", 100);
        c += a("lh", "line-height", 150);

        c += a("top", "top", 300, -300);
        c += a("bottom", "bottom", 300, -300);
        c += a("left", "left", 300, -300);
        c += a("right", "right", 300, -300);

        return c;
    }

    return y('') + '@media (min-width:576px){' + y('-sm') + '}@media (min-width:768px){' + y('-md') + '}@media (min-width:992px){' + y('-lg') + '}@media (min-width:1200px){' + y('-xl') + '}';
}

document.head.insertAdjacentHTML("beforeend", '<style>' + layoutcssmkr() + '</style>');
