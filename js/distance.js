	
	// 地址距离
	function fD(a, b, c) {
	    for (; a > c;)
	        a -= c - b;
	    for (; a < b;)
	        a += c - b;
	    return a;
	};
	function jD(a, b, c) {
	    b != null && (a = Math.max(a, b));
	    c != null && (a = Math.min(a, c));
	    return a;
	};
	function yk(a) {
	    return Math.PI * a / 180
	};
	function Ce(a, b, c, d) {
	    var dO = 6370996.81;
	    return dO * Math.acos(Math.sin(c) * Math.sin(d) + Math.cos(c) * Math.cos(d) * Math.cos(b - a));
	};
	function getDistance(a, b) {
	    if (!a || !b)
	        return 0;
	    a.lng = fD(a.lng, -180, 180);
	    a.lat = jD(a.lat, -74, 74);
	    b.lng = fD(b.lng, -180, 180);
	    b.lat = jD(b.lat, -74, 74);
	    return Ce(yk(a.lng), yk(b.lng), yk(a.lat), yk(b.lat));
	};