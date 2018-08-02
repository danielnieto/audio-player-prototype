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

            player.$progress = $("#viewer .progress");

            player.audio = new Audio(
                "http://www.noiseaddicts.com/samples_1w72b820/2541.mp3"
            );

            player.audio.playbackRate = 3;

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
        },
        updateProgress: function updateProgress(){
            var player = this;

            player.progress = (player.currentTime * 100) / player.duration;

            player.$progress.css("width", player.progress + "%");

            console.log(player.progress);
        }
    }
});
