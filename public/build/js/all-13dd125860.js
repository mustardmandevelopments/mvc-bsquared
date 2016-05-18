"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _rollbarConfig = {
    accessToken: "bf36a50bcbe44d70a6be5b1ab5ef2456",
    captureUncaught: true,
    payload: {
        environment: "production"
    }
};
// Rollbar Snippet
!function (r) {
    function o(e) {
        if (t[e]) return t[e].exports;var n = t[e] = { exports: {}, id: e, loaded: !1 };return r[e].call(n.exports, n, n.exports, o), n.loaded = !0, n.exports;
    }var t = {};return o.m = r, o.c = t, o.p = "", o(0);
}([function (r, o, t) {
    "use strict";
    var e = t(1).Rollbar,
        n = t(2);_rollbarConfig.rollbarJsUrl = _rollbarConfig.rollbarJsUrl || "https://d37gvrvc0wt4s1.cloudfront.net/js/v1.8/rollbar.min.js";var a = e.init(window, _rollbarConfig),
        i = n(a, _rollbarConfig);a.loadFull(window, document, !_rollbarConfig.async, _rollbarConfig, i);
}, function (r, o) {
    "use strict";
    function t(r) {
        return function () {
            try {
                return r.apply(this, arguments);
            } catch (o) {
                try {
                    console.error("[Rollbar]: Internal error", o);
                } catch (t) {}
            }
        };
    }function e(r, o, t) {
        window._rollbarWrappedError && (t[4] || (t[4] = window._rollbarWrappedError), t[5] || (t[5] = window._rollbarWrappedError._rollbarContext), window._rollbarWrappedError = null), r.uncaughtError.apply(r, t), o && o.apply(window, t);
    }function n(r) {
        var o = function o() {
            var o = Array.prototype.slice.call(arguments, 0);e(r, r._rollbarOldOnError, o);
        };return o.belongsToShim = !0, o;
    }function a(r) {
        this.shimId = ++p, this.notifier = null, this.parentShim = r, this._rollbarOldOnError = null;
    }function i(r) {
        var o = a;return t(function () {
            if (this.notifier) return this.notifier[r].apply(this.notifier, arguments);var t = this,
                e = "scope" === r;e && (t = new o(this));var n = Array.prototype.slice.call(arguments, 0),
                a = { shim: t, method: r, args: n, ts: new Date() };return window._rollbarShimQueue.push(a), e ? t : void 0;
        });
    }function l(r, o) {
        if (o.hasOwnProperty && o.hasOwnProperty("addEventListener")) {
            var t = o.addEventListener;o.addEventListener = function (o, e, n) {
                t.call(this, o, r.wrap(e), n);
            };var e = o.removeEventListener;o.removeEventListener = function (r, o, t) {
                e.call(this, r, o && o._wrapped ? o._wrapped : o, t);
            };
        }
    }var p = 0;a.init = function (r, o) {
        var e = o.globalAlias || "Rollbar";if ("object" == _typeof(r[e])) return r[e];r._rollbarShimQueue = [], r._rollbarWrappedError = null, o = o || {};var i = new a();return t(function () {
            if (i.configure(o), o.captureUncaught) {
                i._rollbarOldOnError = r.onerror, r.onerror = n(i);var t,
                    a,
                    p = "EventTarget,Window,Node,ApplicationCache,AudioTrackList,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(",");for (t = 0; t < p.length; ++t) {
                    a = p[t], r[a] && r[a].prototype && l(i, r[a].prototype);
                }
            }return r[e] = i, i;
        })();
    }, a.prototype.loadFull = function (r, o, e, n, a) {
        var i = function i() {
            var o;if (void 0 === r._rollbarPayloadQueue) {
                var t, e, n, i;for (o = new Error("rollbar.js did not load"); t = r._rollbarShimQueue.shift();) {
                    for (n = t.args, i = 0; i < n.length; ++i) {
                        if (e = n[i], "function" == typeof e) {
                            e(o);break;
                        }
                    }
                }
            }"function" == typeof a && a(o);
        },
            l = !1,
            p = o.createElement("script"),
            c = o.getElementsByTagName("script")[0],
            s = c.parentNode;p.crossOrigin = "", p.src = n.rollbarJsUrl, p.async = !e, p.onload = p.onreadystatechange = t(function () {
            if (!(l || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState)) {
                p.onload = p.onreadystatechange = null;try {
                    s.removeChild(p);
                } catch (r) {}l = !0, i();
            }
        }), s.insertBefore(p, c);
    }, a.prototype.wrap = function (r, o) {
        try {
            var t;if (t = "function" == typeof o ? o : function () {
                return o || {};
            }, "function" != typeof r) return r;if (r._isWrap) return r;if (!r._wrapped) {
                r._wrapped = function () {
                    try {
                        return r.apply(this, arguments);
                    } catch (o) {
                        throw o._rollbarContext = t() || {}, o._rollbarContext._wrappedSource = r.toString(), window._rollbarWrappedError = o, o;
                    }
                }, r._wrapped._isWrap = !0;for (var e in r) {
                    r.hasOwnProperty(e) && (r._wrapped[e] = r[e]);
                }
            }return r._wrapped;
        } catch (n) {
            return r;
        }
    };for (var c = "log,debug,info,warn,warning,error,critical,global,configure,scope,uncaughtError".split(","), s = 0; s < c.length; ++s) {
        a.prototype[c[s]] = i(c[s]);
    }r.exports = { Rollbar: a, _rollbarWindowOnError: e };
}, function (r, o) {
    "use strict";
    r.exports = function (r, o) {
        return function (t) {
            if (!t && !window._rollbarInitialized) {
                var e = window.RollbarNotifier,
                    n = o || {},
                    a = n.globalAlias || "Rollbar",
                    i = window.Rollbar.init(n, r);i._processShimQueue(window._rollbarShimQueue || []), window[a] = i, window._rollbarInitialized = !0, e.processPayloads();
            }
        };
    };
}]);
// End Rollbar Snippet

/**
 *
 * Aaron Young, Megan Palmer, Lucas Mathis, Peter Atwater, Sherri Miller
 * Bob Fisher, Kathy Pratt, James Gibbs, Tanya Ulrich, Kyle Cleven, Jason Kessler-Holt
 * Source for Navigation: http://cssmenumaker.com/
 * Source for Hashing Algorithm: http://pajhome.org.uk/crypt/md5/sha512.html
 * Source for Back-End(Tutorial):http://www.wikihow.com/Create-a-Secure-Login-Script-in-PHP-and-MySQL
 * Source for Login Page: http://www.24psd.com/css3-login-form-template/
 * Inspired by: http://www.noahglushien.com/
 * FAQ Source: http://www.snyderplace.com/demos/collapsible.html
 *
 * CREATIVE COMMONS- All social media link and images used fall under CC
 * http://creativecommons.org/licenses/by/3.0/legalcode
 */
var hexcase = 0;var b64pad = "";function hex_sha512(s) {
    return rstr2hex(rstr_sha512(str2rstr_utf8(s)));
}
function b64_sha512(s) {
    return rstr2b64(rstr_sha512(str2rstr_utf8(s)));
}
function any_sha512(s, e) {
    return rstr2any(rstr_sha512(str2rstr_utf8(s)), e);
}
function hex_hmac_sha512(k, d) {
    return rstr2hex(rstr_hmac_sha512(str2rstr_utf8(k), str2rstr_utf8(d)));
}
function b64_hmac_sha512(k, d) {
    return rstr2b64(rstr_hmac_sha512(str2rstr_utf8(k), str2rstr_utf8(d)));
}
function any_hmac_sha512(k, d, e) {
    return rstr2any(rstr_hmac_sha512(str2rstr_utf8(k), str2rstr_utf8(d)), e);
}
function sha512_vm_test() {
    return hex_sha512("abc").toLowerCase() == "ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a" + "2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f";
}
function rstr_sha512(s) {
    return binb2rstr(binb_sha512(rstr2binb(s), s.length * 8));
}
function rstr_hmac_sha512(key, data) {
    var bkey = rstr2binb(key);if (bkey.length > 32) bkey = binb_sha512(bkey, key.length * 8);var ipad = Array(32),
        opad = Array(32);for (var i = 0; i < 32; i++) {
        ipad[i] = bkey[i] ^ 0x36363636;opad[i] = bkey[i] ^ 0x5C5C5C5C;
    }
    var hash = binb_sha512(ipad.concat(rstr2binb(data)), 1024 + data.length * 8);return binb2rstr(binb_sha512(opad.concat(hash), 1024 + 512));
}
function rstr2hex(input) {
    try {
        hexcase;
    } catch (e) {
        hexcase = 0;
    }
    var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";var output = "";var x;for (var i = 0; i < input.length; i++) {
        x = input.charCodeAt(i);output += hex_tab.charAt(x >>> 4 & 0x0F) + hex_tab.charAt(x & 0x0F);
    }
    return output;
}
function rstr2b64(input) {
    try {
        b64pad;
    } catch (e) {
        b64pad = '';
    }
    var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var output = "";var len = input.length;for (var i = 0; i < len; i += 3) {
        var triplet = input.charCodeAt(i) << 16 | (i + 1 < len ? input.charCodeAt(i + 1) << 8 : 0) | (i + 2 < len ? input.charCodeAt(i + 2) : 0);for (var j = 0; j < 4; j++) {
            if (i * 8 + j * 6 > input.length * 8) output += b64pad;else output += tab.charAt(triplet >>> 6 * (3 - j) & 0x3F);
        }
    }
    return output;
}
function rstr2any(input, encoding) {
    var divisor = encoding.length;var i, j, q, x, quotient;var dividend = Array(Math.ceil(input.length / 2));for (i = 0; i < dividend.length; i++) {
        dividend[i] = input.charCodeAt(i * 2) << 8 | input.charCodeAt(i * 2 + 1);
    }
    var full_length = Math.ceil(input.length * 8 / (Math.log(encoding.length) / Math.log(2)));var remainders = Array(full_length);for (j = 0; j < full_length; j++) {
        quotient = Array();x = 0;for (i = 0; i < dividend.length; i++) {
            x = (x << 16) + dividend[i];q = Math.floor(x / divisor);x -= q * divisor;if (quotient.length > 0 || q > 0) quotient[quotient.length] = q;
        }
        remainders[j] = x;dividend = quotient;
    }
    var output = "";for (i = remainders.length - 1; i >= 0; i--) {
        output += encoding.charAt(remainders[i]);
    }return output;
}
function str2rstr_utf8(input) {
    var output = "";var i = -1;var x, y;while (++i < input.length) {
        x = input.charCodeAt(i);y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;if (0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF) {
            x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);i++;
        }
        if (x <= 0x7F) output += String.fromCharCode(x);else if (x <= 0x7FF) output += String.fromCharCode(0xC0 | x >>> 6 & 0x1F, 0x80 | x & 0x3F);else if (x <= 0xFFFF) output += String.fromCharCode(0xE0 | x >>> 12 & 0x0F, 0x80 | x >>> 6 & 0x3F, 0x80 | x & 0x3F);else if (x <= 0x1FFFFF) output += String.fromCharCode(0xF0 | x >>> 18 & 0x07, 0x80 | x >>> 12 & 0x3F, 0x80 | x >>> 6 & 0x3F, 0x80 | x & 0x3F);
    }
    return output;
}
function str2rstr_utf16le(input) {
    var output = "";for (var i = 0; i < input.length; i++) {
        output += String.fromCharCode(input.charCodeAt(i) & 0xFF, input.charCodeAt(i) >>> 8 & 0xFF);
    }return output;
}
function str2rstr_utf16be(input) {
    var output = "";for (var i = 0; i < input.length; i++) {
        output += String.fromCharCode(input.charCodeAt(i) >>> 8 & 0xFF, input.charCodeAt(i) & 0xFF);
    }return output;
}
function rstr2binb(input) {
    var output = Array(input.length >> 2);for (var i = 0; i < output.length; i++) {
        output[i] = 0;
    }for (var i = 0; i < input.length * 8; i += 8) {
        output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << 24 - i % 32;
    }return output;
}
function binb2rstr(input) {
    var output = "";for (var i = 0; i < input.length * 32; i += 8) {
        output += String.fromCharCode(input[i >> 5] >>> 24 - i % 32 & 0xFF);
    }return output;
}
var sha512_k;function binb_sha512(x, len) {
    if (sha512_k == undefined) {
        sha512_k = new Array(new int64(0x428a2f98, -685199838), new int64(0x71374491, 0x23ef65cd), new int64(-1245643825, -330482897), new int64(-373957723, -2121671748), new int64(0x3956c25b, -213338824), new int64(0x59f111f1, -1241133031), new int64(-1841331548, -1357295717), new int64(-1424204075, -630357736), new int64(-670586216, -1560083902), new int64(0x12835b01, 0x45706fbe), new int64(0x243185be, 0x4ee4b28c), new int64(0x550c7dc3, -704662302), new int64(0x72be5d74, -226784913), new int64(-2132889090, 0x3b1696b1), new int64(-1680079193, 0x25c71235), new int64(-1046744716, -815192428), new int64(-459576895, -1628353838), new int64(-272742522, 0x384f25e3), new int64(0xfc19dc6, -1953704523), new int64(0x240ca1cc, 0x77ac9c65), new int64(0x2de92c6f, 0x592b0275), new int64(0x4a7484aa, 0x6ea6e483), new int64(0x5cb0a9dc, -1119749164), new int64(0x76f988da, -2096016459), new int64(-1740746414, -295247957), new int64(-1473132947, 0x2db43210), new int64(-1341970488, -1728372417), new int64(-1084653625, -1091629340), new int64(-958395405, 0x3da88fc2), new int64(-710438585, -1828018395), new int64(0x6ca6351, -536640913), new int64(0x14292967, 0xa0e6e70), new int64(0x27b70a85, 0x46d22ffc), new int64(0x2e1b2138, 0x5c26c926), new int64(0x4d2c6dfc, 0x5ac42aed), new int64(0x53380d13, -1651133473), new int64(0x650a7354, -1951439906), new int64(0x766a0abb, 0x3c77b2a8), new int64(-2117940946, 0x47edaee6), new int64(-1838011259, 0x1482353b), new int64(-1564481375, 0x4cf10364), new int64(-1474664885, -1136513023), new int64(-1035236496, -789014639), new int64(-949202525, 0x654be30), new int64(-778901479, -688958952), new int64(-694614492, 0x5565a910), new int64(-200395387, 0x5771202a), new int64(0x106aa070, 0x32bbd1b8), new int64(0x19a4c116, -1194143544), new int64(0x1e376c08, 0x5141ab53), new int64(0x2748774c, -544281703), new int64(0x34b0bcb5, -509917016), new int64(0x391c0cb3, -976659869), new int64(0x4ed8aa4a, -482243893), new int64(0x5b9cca4f, 0x7763e373), new int64(0x682e6ff3, -692930397), new int64(0x748f82ee, 0x5defb2fc), new int64(0x78a5636f, 0x43172f60), new int64(-2067236844, -1578062990), new int64(-1933114872, 0x1a6439ec), new int64(-1866530822, 0x23631e28), new int64(-1538233109, -561857047), new int64(-1090935817, -1295615723), new int64(-965641998, -479046869), new int64(-903397682, -366583396), new int64(-779700025, 0x21c0c207), new int64(-354779690, -840897762), new int64(-176337025, -294727304), new int64(0x6f067aa, 0x72176fba), new int64(0xa637dc5, -1563912026), new int64(0x113f9804, -1090974290), new int64(0x1b710b35, 0x131c471b), new int64(0x28db77f5, 0x23047d84), new int64(0x32caab7b, 0x40c72493), new int64(0x3c9ebe0a, 0x15c9bebc), new int64(0x431d67c4, -1676669620), new int64(0x4cc5d4be, -885112138), new int64(0x597f299c, -60457430), new int64(0x5fcb6fab, 0x3ad6faec), new int64(0x6c44198c, 0x4a475817));
    }
    var H = new Array(new int64(0x6a09e667, -205731576), new int64(-1150833019, -2067093701), new int64(0x3c6ef372, -23791573), new int64(-1521486534, 0x5f1d36f1), new int64(0x510e527f, -1377402159), new int64(-1694144372, 0x2b3e6c1f), new int64(0x1f83d9ab, -79577749), new int64(0x5be0cd19, 0x137e2179));var T1 = new int64(0, 0),
        T2 = new int64(0, 0),
        a = new int64(0, 0),
        b = new int64(0, 0),
        c = new int64(0, 0),
        d = new int64(0, 0),
        e = new int64(0, 0),
        f = new int64(0, 0),
        g = new int64(0, 0),
        h = new int64(0, 0),
        s0 = new int64(0, 0),
        s1 = new int64(0, 0),
        Ch = new int64(0, 0),
        Maj = new int64(0, 0),
        r1 = new int64(0, 0),
        r2 = new int64(0, 0),
        r3 = new int64(0, 0);var j, i;var W = new Array(80);for (i = 0; i < 80; i++) {
        W[i] = new int64(0, 0);
    }x[len >> 5] |= 0x80 << 24 - (len & 0x1f);x[(len + 128 >> 10 << 5) + 31] = len;for (i = 0; i < x.length; i += 32) {
        int64copy(a, H[0]);int64copy(b, H[1]);int64copy(c, H[2]);int64copy(d, H[3]);int64copy(e, H[4]);int64copy(f, H[5]);int64copy(g, H[6]);int64copy(h, H[7]);for (j = 0; j < 16; j++) {
            W[j].h = x[i + 2 * j];W[j].l = x[i + 2 * j + 1];
        }
        for (j = 16; j < 80; j++) {
            int64rrot(r1, W[j - 2], 19);int64revrrot(r2, W[j - 2], 29);int64shr(r3, W[j - 2], 6);s1.l = r1.l ^ r2.l ^ r3.l;s1.h = r1.h ^ r2.h ^ r3.h;int64rrot(r1, W[j - 15], 1);int64rrot(r2, W[j - 15], 8);int64shr(r3, W[j - 15], 7);s0.l = r1.l ^ r2.l ^ r3.l;s0.h = r1.h ^ r2.h ^ r3.h;int64add4(W[j], s1, W[j - 7], s0, W[j - 16]);
        }
        for (j = 0; j < 80; j++) {
            Ch.l = e.l & f.l ^ ~e.l & g.l;Ch.h = e.h & f.h ^ ~e.h & g.h;int64rrot(r1, e, 14);int64rrot(r2, e, 18);int64revrrot(r3, e, 9);s1.l = r1.l ^ r2.l ^ r3.l;s1.h = r1.h ^ r2.h ^ r3.h;int64rrot(r1, a, 28);int64revrrot(r2, a, 2);int64revrrot(r3, a, 7);s0.l = r1.l ^ r2.l ^ r3.l;s0.h = r1.h ^ r2.h ^ r3.h;Maj.l = a.l & b.l ^ a.l & c.l ^ b.l & c.l;Maj.h = a.h & b.h ^ a.h & c.h ^ b.h & c.h;int64add5(T1, h, s1, Ch, sha512_k[j], W[j]);int64add(T2, s0, Maj);int64copy(h, g);int64copy(g, f);int64copy(f, e);int64add(e, d, T1);int64copy(d, c);int64copy(c, b);int64copy(b, a);int64add(a, T1, T2);
        }
        int64add(H[0], H[0], a);int64add(H[1], H[1], b);int64add(H[2], H[2], c);int64add(H[3], H[3], d);int64add(H[4], H[4], e);int64add(H[5], H[5], f);int64add(H[6], H[6], g);int64add(H[7], H[7], h);
    }
    var hash = new Array(16);for (i = 0; i < 8; i++) {
        hash[2 * i] = H[i].h;hash[2 * i + 1] = H[i].l;
    }
    return hash;
}
function int64(h, l) {
    this.h = h;this.l = l;
}
function int64copy(dst, src) {
    dst.h = src.h;dst.l = src.l;
}
function int64rrot(dst, x, shift) {
    dst.l = x.l >>> shift | x.h << 32 - shift;dst.h = x.h >>> shift | x.l << 32 - shift;
}
function int64revrrot(dst, x, shift) {
    dst.l = x.h >>> shift | x.l << 32 - shift;dst.h = x.l >>> shift | x.h << 32 - shift;
}
function int64shr(dst, x, shift) {
    dst.l = x.l >>> shift | x.h << 32 - shift;dst.h = x.h >>> shift;
}
function int64add(dst, x, y) {
    var w0 = (x.l & 0xffff) + (y.l & 0xffff);var w1 = (x.l >>> 16) + (y.l >>> 16) + (w0 >>> 16);var w2 = (x.h & 0xffff) + (y.h & 0xffff) + (w1 >>> 16);var w3 = (x.h >>> 16) + (y.h >>> 16) + (w2 >>> 16);dst.l = w0 & 0xffff | w1 << 16;dst.h = w2 & 0xffff | w3 << 16;
}
function int64add4(dst, a, b, c, d) {
    var w0 = (a.l & 0xffff) + (b.l & 0xffff) + (c.l & 0xffff) + (d.l & 0xffff);var w1 = (a.l >>> 16) + (b.l >>> 16) + (c.l >>> 16) + (d.l >>> 16) + (w0 >>> 16);var w2 = (a.h & 0xffff) + (b.h & 0xffff) + (c.h & 0xffff) + (d.h & 0xffff) + (w1 >>> 16);var w3 = (a.h >>> 16) + (b.h >>> 16) + (c.h >>> 16) + (d.h >>> 16) + (w2 >>> 16);dst.l = w0 & 0xffff | w1 << 16;dst.h = w2 & 0xffff | w3 << 16;
}
function int64add5(dst, a, b, c, d, e) {
    var w0 = (a.l & 0xffff) + (b.l & 0xffff) + (c.l & 0xffff) + (d.l & 0xffff) + (e.l & 0xffff);var w1 = (a.l >>> 16) + (b.l >>> 16) + (c.l >>> 16) + (d.l >>> 16) + (e.l >>> 16) + (w0 >>> 16);var w2 = (a.h & 0xffff) + (b.h & 0xffff) + (c.h & 0xffff) + (d.h & 0xffff) + (e.h & 0xffff) + (w1 >>> 16);var w3 = (a.h >>> 16) + (b.h >>> 16) + (c.h >>> 16) + (d.h >>> 16) + (e.h >>> 16) + (w2 >>> 16);dst.l = w0 & 0xffff | w1 << 16;dst.h = w2 & 0xffff | w3 << 16;
}
/**
 *
 * Aaron Young, Megan Palmer, Lucas Mathis, Peter Atwater, Sherri Miller
 * Bob Fisher, Kathy Pratt, James Gibbs, Tanya Ulrich, Kyle Cleven, Jason Kessler-Holt
 * Source for Navigation: http://cssmenumaker.com/
 * Source for Hashing Algorithm: http://pajhome.org.uk/crypt/md5/sha512.html
 * Source for Back-End(Tutorial):http://www.wikihow.com/Create-a-Secure-Login-Script-in-PHP-and-MySQL
 * Source for Login Page: http://www.24psd.com/css3-login-form-template/
 * Inspired by: http://www.noahglushien.com/
 * FAQ Source: http://www.snyderplace.com/demos/collapsible.html
 *
 * CREATIVE COMMONS- All social media link and images used fall under CC
 * http://creativecommons.org/licenses/by/3.0/legalcode
 */
function formhash(form, password) {
    // Create a new element input, this will be our hashed password field.
    var p = document.createElement("input");

    // Add the new element to our form.
    form.appendChild(p);
    p.name = "p";
    p.type = "hidden";
    p.value = hex_sha512(password.value);

    // Make sure the plaintext password doesn't get sent.
    password.value = "";

    // Finally submit the form.
    form.submit();
}

function regformhash(form, uid, email, password, conf) {
    // Check each field has a value
    if (uid.value === '' || email.value === '' || password.value === '' || conf.value == '') {

        //alert('You must provide all the requested details. Please try again');
        return false;
    }

    // Check the username
    var re = /^\w+$/; // Regular expression

    if (!re.test(form.username.value)) {
        //alert("Username must contain only letters, numbers and underscores. Please try again");
        form.username.focus();
        return false;
    }

    // Check that the password is sufficiently long (min 6 chars)
    // The check is duplicated below, but this is included to give more
    // specific guidance to the user
    if (password.value.length < 6) {
        //alert('Passwords must be at least 6 characters long.  Please try again');
        form.password.focus();
        return false;
    }

    // At least one number, one lowercase and one uppercase letter
    // At least six characters

    re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (!re.test(password.value)) {
        //alert('Passwords must contain at least one number, one lowercase and one uppercase letter.  Please try again');
        return false;
    }

    // Check password and confirmation are the same
    if (password.value !== conf.value) {
        //alert('Your password and confirmation do not match. Please try again');
        form.password.focus();
        return false;
    }

    // Create a new element input, this will be our hashed password field.
    var p = document.createElement("input");

    // Add the new element to our form.
    form.appendChild(p);
    p.name = "p";
    p.type = "hidden";
    p.value = hex_sha512(password.value);

    // Make sure the plaintext password doesn't get sent.
    password.value = "";
    conf.value = "";

    // Finally submit the form.
    form.submit();
    return true;
}

function changepasswordhash(form, new_password, new_password2) {

    if (new_password.value == '' || new_password2.value == '') {
        alert('You must provide all the requested details. Please try again');
        return false;
    }

    if (new_password.value.length < 6) {
        alert('Passwords must be at least 6 characters long.  Please try again');
        form.new_password.focus();
        return false;
    }

    // At least one number, one lowercase and one uppercase letter
    // At least six characters

    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (!re.test(new_password.value)) {
        //alert('Passwords must contain at least one number, one lowercase and one uppercase letter.  Please try again');
        return false;
    }

    // Check password and confirmation are the same
    if (new_password.value != new_password2.value) {
        //alert('Your password and confirmation do not match. Please try again');
        form.new_password.focus();
        return false;
    }

    // Create a new element input, this will be our hashed password field.
    var p = document.createElement("input");

    // Add the new element to our form.
    form.appendChild(p);
    p.name = "p";
    p.type = "hidden";
    p.value = hex_sha512(new_password.value);

    // Make sure the plaintext password doesn't get sent.
    new_password.value = "";
    new_password2.value = "";

    // Finally submit the form.
    form.submit();
    return true;
}

!function (a, b) {
    a("Keen", "https://d26b395fwzu5fz.cloudfront.net/3.4.0/keen.min.js", b);
}(function (a, b, c) {
    var d, e, f;c["_" + a] = {}, c[a] = function (b) {
        c["_" + a].clients = c["_" + a].clients || {}, c["_" + a].clients[b.projectId] = this, this._config = b;
    }, c[a].ready = function (b) {
        c["_" + a].ready = c["_" + a].ready || [], c["_" + a].ready.push(b);
    }, d = ["addEvent", "setGlobalProperties", "trackExternalLink", "on"];for (var g = 0; g < d.length; g++) {
        var h = d[g],
            i = function i(a) {
            return function () {
                return this["_" + a] = this["_" + a] || [], this["_" + a].push(arguments), this;
            };
        };c[a].prototype[h] = i(h);
    }e = document.createElement("script"), e.async = !0, e.src = b, f = document.getElementsByTagName("script")[0], f.parentNode.insertBefore(e, f);
}, undefined);

var client = new Keen({
    projectId: "5713e93fd2eaaa572c3f835a", // String (required always)
    writeKey: "cd0d456d5d57db0ddf857aa6702349af9f6d37bfeb3438a942e8707ad17cc04a9909a1e092fe7ac356aa0a638f02b166ebd6d5a19d136df6b9cd4c10a1d80054eb75af526bb31b1ea5f248a10757e6f20275e994e017ee9f98f59bb6f47a2386", // String (required for sending data)
    readKey: "9157d65c133ab8fb63afab41f01890c61b3d7089273a9fc60fc6f701cde9c28ac577a4372f2aad1c3c990233fa1e1f784b9090f5d098e3c89ab42921fd8efc703e56585e4fd989450b62683d459cfdf3a8dc6897aa24056b4605016dcfab635f" // String (required for querying data)

    // protocol: "https",         // String (optional: https | http | auto)
    // host: "api.keen.io/3.0",   // String (optional)
    // requestType: "jsonp"       // String (optional: jsonp, xhr, beacon)
});
/**
 * Created by Aaron Young on 5/14/2016.
 */

UserForms = function UserForms() {

    // Properties

    this.setButtons = function (formID) {
        $("#" + formID + " button").button();
    };
};
//# sourceMappingURL=all.js.map