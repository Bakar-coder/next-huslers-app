export default () => {
  const audioList1 = [
    {
      name: "Despacito",
      singer: "Luis Fonsi",
      cover:
        "http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg",
      musicSrc:
        "http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3",
    },
    {
      name: "Dorost Nemisham",
      singer: "Sirvan Khosravi",
      cover:
        "https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg",
      musicSrc:
        "https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3",
    },
  ];

  const options = {
    audioLists: audioList1,
    defaultPlayIndex: 0,
    theme: "auto",
    bounds: "body",
    clearPriorAudioLists: false,
    autoPlayInitLoadPlayList: false,
    preload: false,
    glassBg: false,
    remember: false,
    remove: true,
    defaultPosition: {
      right: 100,
      bottom: 120,
    },

    defaultPlayMode: "order",
    mode: "mini",
    once: false,
    autoPlay: false,
    toggleMode: true,
    showMiniModeCover: true,
    showMiniProcessBar: false,
    drag: true,
    seeked: true,
    showMediaSession: true,
    showProgressLoadBar: true,
    showPlay: true,
    showReload: true,
    showDownload: true,
    showPlayMode: true,
    showThemeSwitch: true,
    showLyric: true,
    showDestroy: true,
    extendsContent: null,
    defaultVolume: 1,
    playModeShowTime: 600,
    loadAudioErrorPlayNext: true,
    autoHiddenCover: false,
    spaceBar: true,
    locale: Locale.en_US,
    responsive: true,

    onAudioDownload(audioInfo) {
      console.log("audio download", audioInfo);
    },

    onAudioPlay(audioInfo) {
      console.log("audio playing", audioInfo);
    },

    onAudioPause(audioInfo) {
      console.log("audio pause", audioInfo);
    },

    onAudioSeeked(audioInfo) {
      console.log("audio seeked", audioInfo);
    },

    onAudioVolumeChange(currentVolume) {
      console.log("audio volume change", currentVolume);
    },

    onAudioEnded(currentPlayId, audioLists, audioInfo) {
      console.log("audio ended", currentPlayId, audioLists, audioInfo);
    },

    onAudioAbort(currentPlayId, audioLists, audioInfo) {
      console.log("audio abort", currentPlayId, audioLists, audioInfo);
    },

    onAudioProgress(audioInfo) {},

    onAudioReload(audioInfo) {
      console.log("audio reload:", audioInfo);
    },

    onAudioError(errMsg, currentPlayId, audioLists, audioInfo) {
      console.error(
        "audio load error",
        errMsg,
        currentPlayId,
        audioLists,
        audioInfo
      );
    },

    onAudioListsChange(currentPlayId, audioLists, audioInfo) {
      console.log("[currentPlayId] audio lists change:", currentPlayId);
      console.log("[audioLists] audio lists change:", audioLists);
      console.log("[audioInfo] audio lists change:", audioInfo);
    },

    onAudioPlayTrackChange(currentPlayId, audioLists, audioInfo) {
      console.log(
        "audio play track change:",
        currentPlayId,
        audioLists,
        audioInfo
      );
    },

    onAudioListsPanelChange(panelVisible) {
      console.log("audio lists panel visible:", panelVisible);
    },

    onAudioListsDragEnd(fromIndex, endIndex) {
      console.log("audio lists drag end:", fromIndex, endIndex);
    },

    onAudioLyricChange(lineNum, currentLyric) {
      console.log("audio lyric change:", lineNum, currentLyric);
    },

    getContainer() {
      return document.body;
    },

    getAudioInstance(audio) {
      console.log("audio instance", audio);
    },

    onBeforeDestroy(currentPlayId, audioLists, audioInfo) {
      console.log("currentPlayId: ", currentPlayId);
      console.log("audioLists: ", audioLists);
      console.log("audioInfo: ", audioInfo);
      return new Promise((resolve, reject) => {
        if (window.confirm("Are you confirm destroy the player?")) {
          resolve();
        } else {
          reject();
        }
      });
    },

    onDestroyed(currentPlayId, audioLists, audioInfo) {
      console.log("onDestroyed:", currentPlayId, audioLists, audioInfo);
    },

    onCoverClick(mode, audioLists, audioInfo) {
      console.log("onCoverClick: ", mode, audioLists, audioInfo);
    },
  };
};
