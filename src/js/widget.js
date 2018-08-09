var $ = require("jquery");

Class("AudioPlayer").inherits(Widget)({
    prototype: {
        audio: null,
        duration: null,
        currentTime: null,
        progress: 0,
        $progress: null,
        init: function init(config) {
            Widget.prototype.init.call(this, config);

            var player = this;

            var SVG = "https://uploads.codesandbox.io/uploads/user/a6f59428-f0d7-41bd-8f8d-53d125d25caf/1rRp-waveform-100.svg";

            player.audio = new Audio(
                "http://www.noiseaddicts.com/samples_1w72b820/2541.mp3"
            );

            player.audio.playbackRate = 1;

            player.audio.addEventListener("canplay", function(event) {
                player.duration = player.audio.duration;
            });

            player.audio.addEventListener("timeupdate", function(event) {
                player.currentTime = player.audio.currentTime;
                player.updateProgress();
            });

            player.$playButton = $("<button>Play</button>")
                .appendTo(player.element)
                .click(function() {
                    player.audio.play();
                });

            player.$pauseButton = $("<button>Pause</button>")
                .appendTo(player.element)
                .click(function() {
                    player.audio.pause();
                });

            var $waveformContainer = $("#waveform-container");

            $waveformContainer.load(SVG, function (response, status, xhr){
                if(status === "success"){
                    player.$progress = $waveformContainer.find("#progress");
                }
            });

        },
        updateProgress: function updateProgress(){
            var player = this;

            player.progress = (player.currentTime * 100) / player.duration;

            player.$progress.css("width", player.progress + "%");

        }
    }
});
