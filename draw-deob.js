function _arrayBufferToBase64(_0xbd9aac) {
  var _0xddd330 = "";
  var _0x2a69d4 = new Uint8Array(_0xbd9aac);
  var _0x24db58 = _0x2a69d4.byteLength;
  for (var _0x374f5a = 0; _0x374f5a < _0x24db58; _0x374f5a++) {
    _0xddd330 += String.fromCharCode(_0x2a69d4[_0x374f5a]);
  }
  return window.btoa(_0xddd330);
}
$(".picasso canvas").each(function () {
  let _0x3a0c0e = $(this).closest(".element");
  let _0x1cd1c9 = this;
  let _0x352d78 = _0x1cd1c9.getContext("2d");
  let _0x2845ef = window.devicePixelRatio || 1;
  let _0x2b640b = $(_0x3a0c0e).css("--co").trim();
  let _0x272d03 = 4;
  function _0x14fda5(_0x2952f6) {
    try {
      let _0xaeb710 = _0x2952f6.getImageData(0, 0, 1, 1);
      return false;
    } catch (_0x1522a3) {
      return true;
    }
  }
  if ($(window).width() < 450) {
    _0x272d03 = 2;
  }
  _0x352d78.canvas.width = $(_0x1cd1c9).outerWidth() * _0x2845ef;
  _0x352d78.canvas.height = $(_0x1cd1c9).outerHeight() * _0x2845ef;
  _0x352d78.scale(_0x2845ef, _0x2845ef);
  _0x352d78.fillStyle = "white";
  _0x352d78.fillRect(0, 0, _0x1cd1c9.width, _0x1cd1c9.height);
  let _0x1da02c = false;
  let _0x1888a5 = 0;
  let _0x2a8926 = 0;
  let _0x4aa2e8 = [];
  let _0x432021 = -1;
  let _0x56a357 = [];
  function _0x2359b5(_0x3a29c1) {
    _0x3a29c1.preventDefault();
    if (_0x3a29c1.type == "touchstart") {
      let _0x189b3d = _0x1cd1c9.getBoundingClientRect();
      _0x1888a5 = _0x3a29c1.touches[0].clientX - _0x189b3d.left;
      _0x2a8926 = _0x3a29c1.touches[0].clientY - _0x189b3d.top;
    } else {
      _0x1888a5 = _0x3a29c1.offsetX;
      _0x2a8926 = _0x3a29c1.offsetY;
    }
    _0x1da02c = true;
    _0x56a357.push({
      type: "start",
      x: _0x1888a5,
      y: _0x2a8926,
      color: _0x2b640b,
      size: _0x272d03
    });
  }
  function _0x232d58(_0x3c311a) {
    _0x3c311a.preventDefault();
    if (_0x1da02c === true) {
      let _0x43bbad;
      let _0x35bb3e;
      if (_0x3c311a.type == "touchmove") {
        let _0x295a20 = _0x1cd1c9.getBoundingClientRect();
        _0x43bbad = _0x3c311a.touches[0].clientX - _0x295a20.left;
        _0x35bb3e = _0x3c311a.touches[0].clientY - _0x295a20.top;
      } else {
        _0x43bbad = _0x3c311a.offsetX;
        _0x35bb3e = _0x3c311a.offsetY;
      }
      _0x23d690(_0x352d78, _0x1888a5, _0x2a8926, _0x43bbad, _0x35bb3e);
      _0x1888a5 = _0x43bbad;
      _0x2a8926 = _0x35bb3e;
      _0x56a357.push({
        type: "draw",
        x: _0x1888a5,
        y: _0x2a8926
      });
    }
  }
  function _0x38d48d(_0x22ee09) {
    if (_0x1da02c === true) {
      let _0x5e2d83;
      let _0x2f440d;
      if (_0x22ee09.type == "touchend") {
        let _0x291e09 = _0x1cd1c9.getBoundingClientRect();
        _0x5e2d83 = _0x22ee09.changedTouches[0].clientX - _0x291e09.left;
        _0x2f440d = _0x22ee09.changedTouches[0].clientY - _0x291e09.top;
      } else {
        _0x5e2d83 = _0x22ee09.offsetX;
        _0x2f440d = _0x22ee09.offsetY;
      }
      _0x23d690(_0x352d78, _0x1888a5, _0x2a8926, _0x5e2d83, _0x2f440d);
      _0x1888a5 = 0;
      _0x2a8926 = 0;
      _0x1da02c = false;
      _0x4aa2e8 = _0x4aa2e8.slice(0, _0x432021 + 1);
      _0x4aa2e8.push(_0x352d78.getImageData(0, 0, _0x1cd1c9.width, _0x1cd1c9.height));
      _0x432021++;
      if (_0x4aa2e8.length > 80) {
        _0x4aa2e8.shift();
        _0x432021--;
      }
    }
  }
  _0x1cd1c9.addEventListener("mousedown", _0x2359b5);
  _0x1cd1c9.addEventListener("touchstart", _0x2359b5);
  _0x1cd1c9.addEventListener("mousemove", _0x232d58);
  _0x1cd1c9.addEventListener("touchmove", _0x232d58);
  window.addEventListener("mouseup", _0x38d48d);
  window.addEventListener("touchend", _0x38d48d);
  _0x1cd1c9.addEventListener("mouseleave", _0x38d48d);
  _0x1cd1c9.addEventListener("touchleave", _0x38d48d);
  function _0x23d690(_0x6034f0, _0x339233, _0x4074f4, _0x274dda, _0x1d8368) {
    _0x6034f0.beginPath();
    _0x6034f0.strokeStyle = _0x2b640b;
    _0x6034f0.lineWidth = _0x272d03;
    _0x6034f0.moveTo(_0x339233, _0x4074f4);
    _0x6034f0.lineTo(_0x274dda, _0x1d8368);
    _0x6034f0.lineCap = _0x6034f0.lineJoin = "round";
    _0x6034f0.stroke();
    _0x6034f0.closePath();
  }
  function _0x211a6b() {
    if (_0x432021 <= 0) {
      _0x6cafc6();
    } else {
      _0x432021 -= 1;
      _0x352d78.putImageData(_0x4aa2e8[_0x432021], 0, 0);
      let _0x296849 = _0x56a357.map(_0xb0ebff => _0xb0ebff.type).lastIndexOf("start");
      _0x56a357 = _0x56a357.slice(0, _0x296849);
    }
  }
  function _0x6cafc6() {
    _0x352d78.clearRect(0, 0, _0x1cd1c9.width, _0x1cd1c9.height);
    _0x352d78.fillStyle = "white";
    _0x352d78.fillRect(0, 0, _0x1cd1c9.width, _0x1cd1c9.height);
    _0x4aa2e8 = [];
    _0x432021 = -1;
    _0x56a357 = [];
  }
  $(_0x3a0c0e).find(".canvCol").click(function () {
    $(_0x3a0c0e).find("input[type=color]").click();
  });
  var _0x5b0db3 = navigator.maxTouchPoints > 1 && screen.height >= 768 && screen.width >= 768;
  if (navigator.userAgent.match(/(iPod|iPhone|iPad)/) || _0x5b0db3) {
    $(_0x3a0c0e).find(".canvCol,label").remove();
    $(_0x3a0c0e).find("input[type=color]").css({
      visibility: "visible",
      position: "static",
      height: "1.1em",
      width: "1.1em",
      "border-radius": "50%",
      margin: "0 0.4em"
    });
  }
  $(_0x3a0c0e).find("input[type=color]").on("input change", function () {
    _0x2b640b = $(this).val();
  });
  $(_0x3a0c0e).find("input[type=range]").on("input change", function () {
    _0x272d03 = $(this).val();
  });
  $(_0x3a0c0e).find(".fa-undo").click(function () {
    _0x211a6b();
  });
  function _0x5e5eef() {
    if (_0x14fda5(_0x352d78)) {
      window.location.reload();
      return;
    }
    if (_0x4aa2e8.length < 1) {
      return;
    }
    if ($(".sendPicasso button").text() == "Sending your art...") {
      return;
    }
    $(_0x3a0c0e).find(".sendPicasso button").text("Sending your art...");
    var _0x41668c = $("meta[name='straw:user']").attr("content");
    let _0x377901 = _0x1cd1c9.toDataURL("image/png") + "-" + _0x41668c + "xNNkISDNFkoovdmRKUyeQcOHyvnfgQVfbLkjXbiuLGYpMHIxOyjRDjBxnzqcSlXRPHzcljrZxdtWMTnnBrLBHhNqoJLVfxPLlBfdBOxPCZkBZUwQmqexdZjHTekoWomkXUONQJjGWqLEfiYAINdRFgMZyjVNQDfEGufrpPkwedDnELuzrMWqoD";
    _0x377901 = _0x377901.slice(0, 189) + "iJ" + _0x377901.slice(189);
    try {
      let _0x1f582d = pako.deflate(JSON.stringify(_0x56a357));
      const _0xb2b917 = _arrayBufferToBase64(_0x1f582d);
      const _0x3577d3 = _0x1cd1c9.width / _0x2845ef;
      const _0x1ac094 = _0x1cd1c9.height / _0x2845ef;
      $.ajax({
        type: "POST",
        url: "/gimmicks/canvas/2",
        data: {
          comp: _0xb2b917,
          dims: {
            w: _0x1cd1c9.width,
            h: _0x1cd1c9.height,
            r: _0x2845ef
          }
        },
        success: function (_0x352250) {
          if (typeof ok !== "undefined" && ok) {
            ok.track("sent drawing!");
          }
          $(_0x3a0c0e).find(".sendPicasso button").text("Sent! 👨‍🎨");
          $(_0x3a0c0e).addClass("doneArt");
        },
        error: function (_0x2c1d3a) {
          console.error("AJAX error:", _0x2c1d3a);
          console.error("AJAX error:", JSON.stringify(_0x2c1d3a));
        }
      });
    } catch (_0x1c5148) {
      console.error("Error during compression or encoding:", _0x1c5148);
    }
  }
  $(_0x3a0c0e).find(".sendPicasso button").click(function () {
    _0x5e5eef();
  });
});
$(document).on("click", ".doneArt .completionCasso button", function () {
  try {
    window.fathom.trackGoal("N11W936N", 0);
  } catch (_0x198c46) {}
  window.location.href = "https://straw.page/start";
});
