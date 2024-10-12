$(".picasso canvas").each(function () {
  let _0xea735b = $(this).closest(".element");
  let _0x48ac97 = this;
  let _0x469389 = _0x48ac97.getContext('2d');
  let _0xbc5677 = window.devicePixelRatio || 0x1;
  let _0x1384d0 = $(_0xea735b).css("--co").trim();
  let _0x2acffe = 0x4;
  function _0x5ed342(_0x42e2c6) {
    try {
      return false;
    } catch (_0x103e18) {
      return true;
    }
  }
  if ($(window).width() < 0x1c2) {
    _0x2acffe = 0x2;
  }
  _0x469389.canvas.width = $(_0x48ac97).outerWidth() * _0xbc5677;
  _0x469389.canvas.height = $(_0x48ac97).outerHeight() * _0xbc5677;
  _0x469389.scale(_0xbc5677, _0xbc5677);
  _0x469389.fillStyle = 'white';
  _0x469389.fillRect(0x0, 0x0, _0x48ac97.width, _0x48ac97.height);
  let _0x1c3367 = false;
  let _0x189c65 = 0x0;
  let _0x324a38 = 0x0;
  let _0x2a6ab9 = [];
  let _0x5b02bc = -0x1;
  function _0x2f82e1(_0x25ff28) {
    _0x25ff28.preventDefault();
    if (_0x25ff28.type == "touchstart") {
      let _0x5c1642 = _0x48ac97.getBoundingClientRect();
      _0x189c65 = _0x25ff28.touches[0x0].clientX - _0x5c1642.left;
      _0x324a38 = _0x25ff28.touches[0x0].clientY - _0x5c1642.top;
    } else {
      _0x189c65 = _0x25ff28.offsetX;
      _0x324a38 = _0x25ff28.offsetY;
    }
    _0x1c3367 = true;
  }
  function _0xfd3730(_0x174c99) {
    _0x174c99.preventDefault();
    if (_0x1c3367 === true) {
      let _0x5d0a35;
      let _0x48d5f0;
      if (_0x174c99.type == "touchmove") {
        let _0x329556 = _0x48ac97.getBoundingClientRect();
        _0x5d0a35 = _0x174c99.touches[0x0].clientX - _0x329556.left;
        _0x48d5f0 = _0x174c99.touches[0x0].clientY - _0x329556.top;
      } else {
        _0x5d0a35 = _0x174c99.offsetX;
        _0x48d5f0 = _0x174c99.offsetY;
      }
      _0x372f3a(_0x469389, _0x189c65, _0x324a38, _0x5d0a35, _0x48d5f0);
      _0x189c65 = _0x5d0a35;
      _0x324a38 = _0x48d5f0;
    }
  }
  function _0x12a76e(_0x4dbbf2) {
    if (_0x1c3367 === true) {
      let _0x232697;
      let _0x1cc076;
      if (_0x4dbbf2.type == 'touchend') {
        let _0x255964 = _0x48ac97.getBoundingClientRect();
        _0x232697 = _0x4dbbf2.changedTouches[0x0].clientX - _0x255964.left;
        _0x1cc076 = _0x4dbbf2.changedTouches[0x0].clientY - _0x255964.top;
      } else {
        _0x232697 = _0x4dbbf2.offsetX;
        _0x1cc076 = _0x4dbbf2.offsetY;
      }
      _0x372f3a(_0x469389, _0x189c65, _0x324a38, _0x232697, _0x1cc076);
      _0x189c65 = 0x0;
      _0x324a38 = 0x0;
      _0x1c3367 = false;
      _0x2a6ab9 = _0x2a6ab9.slice(0x0, _0x5b02bc + 0x1);
      _0x2a6ab9.push(_0x469389.getImageData(0x0, 0x0, _0x48ac97.width, _0x48ac97.height));
      _0x5b02bc++;
      if (_0x2a6ab9.length > 0x50) {
        _0x2a6ab9.shift();
        _0x5b02bc--;
      }
    }
  }
  _0x48ac97.addEventListener('mousedown', _0x2f82e1);
  _0x48ac97.addEventListener("touchstart", _0x2f82e1);
  _0x48ac97.addEventListener("mousemove", _0xfd3730);
  _0x48ac97.addEventListener('touchmove', _0xfd3730);
  window.addEventListener("mouseup", _0x12a76e);
  window.addEventListener("touchend", _0x12a76e);
  _0x48ac97.addEventListener("mouseleave", _0x12a76e);
  _0x48ac97.addEventListener("touchleave", _0x12a76e);
  function _0x372f3a(_0x4a72c9, _0x273676, _0x52fdac, _0x2fc9c9, _0x4b251d) {
    _0x4a72c9.beginPath();
    _0x4a72c9.strokeStyle = _0x1384d0;
    _0x4a72c9.lineWidth = _0x2acffe;
    _0x4a72c9.moveTo(_0x273676, _0x52fdac);
    _0x4a72c9.lineTo(_0x2fc9c9, _0x4b251d);
    _0x4a72c9.lineCap = _0x4a72c9.lineJoin = "round";
    _0x4a72c9.stroke();
    _0x4a72c9.closePath();
  }
  function _0x53cde8() {
    if (_0x5b02bc <= 0x0) {
      _0x1dda01();
    } else {
      _0x5b02bc -= 0x1;
      _0x469389.putImageData(_0x2a6ab9[_0x5b02bc], 0x0, 0x0);
    }
  }
  function _0x1dda01() {
    _0x469389.clearRect(0x0, 0x0, _0x48ac97.width, _0x48ac97.height);
    _0x469389.fillStyle = 'white';
    _0x469389.fillRect(0x0, 0x0, _0x48ac97.width, _0x48ac97.height);
    _0x2a6ab9 = [];
    _0x5b02bc = -0x1;
  }
  $(_0xea735b).find('.canvCol').click(function () {
    $(_0xea735b).find('input[type=color]').click();
  });
  var _0x1c9d50 = navigator.maxTouchPoints > 0x1 && screen.height >= 0x300 && screen.width >= 0x300;
  if (navigator.userAgent.match(/(iPod|iPhone|iPad)/) || _0x1c9d50) {
    $(_0xea735b).find(".canvCol,label").remove();
    $(_0xea735b).find("input[type=color]").css({
      'visibility': 'visible',
      'position': "static",
      'height': "1.1em",
      'width': "1.1em",
      'border-radius': "50%",
      'margin': "0 0.4em"
    });
  }
  $(_0xea735b).find("input[type=color]").on("input change", function () {
    _0x1384d0 = $(this).val();
  });
  $(_0xea735b).find("input[type=range]").on("input change", function () {
    _0x2acffe = $(this).val();
  });
  $(_0xea735b).find(".fa-undo").click(function () {
    _0x53cde8();
  });
  function _0xe69ffc() {
    if (_0x5ed342(_0x469389)) {
      window.location.reload();
      return;
    }
    if (_0x2a6ab9.length < 0x1) {
      return;
    }
    if ($(".sendPicasso button").text() == "Sending your art...") {
      return;
    }
    $(_0xea735b).find(".sendPicasso button").text("Sending your art...");
    var _0x312ba4 = $("meta[name='straw:user']").attr("content");
    let _0x192cea = _0x48ac97.toDataURL("image/png") + '-b1338tmp84527862098372' + "xNNkISDNFkoovdmRKUyeQcOHyvnfgQVfbLkjXbiuLGYpMHIxOyjRDjBxnzqcSlXRPHzcljrZxdtWMTnnBrLBHhNqoJLVfxPLlBfdBOxPCZkBZUwQmqexdZjHTekoWomkXUONQJjGWqLEfiYAINdRFgMZyjVNQDfEGufrpPkwedDnELuzrMWqoD";
    $.ajax({
      'type': "POST",
      'url': "https://cors-anywhere.herokuapp.com/https://b1338tmp84527862098372.straw.page/gimmicks/canvas",
      'data': {
        'image': _0x192cea
      },
      'success': function (_0x580e65) {
        ok.track("sent drawing!");
        $(_0xea735b).find(".sendPicasso button").text("Sent! 👨‍🎨");
        $(_0xea735b).addClass('doneArt');
      }
    });
  }
  $(_0xea735b).find(".sendPicasso button").click(function () {
    _0xe69ffc();
  });
});
$(document).on("click", ".doneArt .completionCasso button", function () {
  try {
    window.fathom.trackGoal("N11W936N", 0x0);
  } catch (_0x4a98a1) {}
  window.location.href = 'https://straw.page/start';
});