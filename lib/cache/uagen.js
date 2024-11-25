const fs = require('fs');
const count = process.argv[2];
const uafile = process.argv[3];
if (process.argv.length < 4) {
  console.log("usage node uagen count file\nusage node uagent 100 ua.txt");
  process.exit();
}
if (fs.existsSync(uafile)) {
  fs.unlinkSync(uafile);
  console.log(uafile + " deleted.");
}
const browsers = [{
  'name': "Mozilla"
}, {
  'name': "Chrome"
}, {
  'name': "Safari"
}, {
  'name': "Edge"
}, {
  'name': "Opera"
}, {
  'name': "Firefox"
}, {
  'name': "Internet Explorer"
}, {
  'name': "Brave"
}, {
  'name': "Vivaldi"
}, {
  'name': "UC Browser"
}, {
  'name': "Samsung Internet"
}, {
  'name': "Maxthon"
}, {
  'name': "Yandex Browser"
}, {
  'name': "360 Secure Browser"
}, {
  'name': "Avast Secure Browser"
}, {
  'name': "Cent Browser"
}, {
  'name': "Epic Privacy Browser"
}, {
  'name': "GreenBrowser"
}, {
  'name': "Lunascape"
}, {
  'name': "Torch Browser"
}, {
  'name': "Waterfox"
}, {
  'name': "Pale Moon"
}, {
  'name': "SeaMonkey"
}, {
  'name': "Midori"
}, {
  'name': "Konqueror"
}, {
  'name': "Netscape"
}, {
  'name': "Slimjet"
}, {
  'name': "IceCat"
}, {
  'name': "Qutebrowser"
}, {
  'name': "Otter Browser"
}];
const platforms = [{
  'name': "Windows NT",
  'version': ["10.0", "6.3", "6.2", "6.1", "6.0", "5.2", "5.1", "5.0", "4.0", "3.51", "3.5", "3.1", "3.11", "3.0", "2.11", "2.1", "2.0", "1.0"],
  'architecture': ["Win64", "Win32"]
}, {
  'name': "Macintosh",
  'version': ["Intel", "Intel Mac OS X 10_15_7", "Intel Mac OS X 10_14_6", "Intel Mac OS X 10_13_6", "Intel Mac OS X 10_12_6", "Intel Mac OS X 10_11_6", "PowerPC", "PPC Mac OS X 10_4_11", "PPC Mac OS X 10_5_8", "68K"],
  'architecture': ["x86_64", "x86"]
}, {
  'name': "X11",
  'version': ["Ubuntu", "Fedora", "Debian", "Red Hat", "Linux Mint", "Gentoo", "openSUSE", "Arch Linux", "Slackware", "CentOS", "Kali Linux", "Puppy Linux", "Raspbian", "Mandriva", "Elementary OS", "Zorin OS", "BackBox", "Chromium OS"],
  'architecture': ["x86_64", "x86"]
}, {
  'name': "Linux",
  'version': ["x86_64", "x86", "ARM", "ARM64"]
}, {
  'name': "Android",
  'version': ["Android 12", "Android 11", "Android 10", "Android 9", "Android 8", "Android 7", "Android 6", "Android 5", "Android 4", "Android 2"],
  'architecture': ["ARM", "ARM64", "x86", "x86_64"]
}, {
  'name': "Chrome OS",
  'version': ["13421.67.0", "13421.66.0", "13421.65.0", "13421.64.0", "13421.63.0", "13421.62.0", "13421.61.0", "13421.60.0"],
  'architecture': ["x86_64", "x86"]
}, {
  'name': "Windows Phone",
  'version': ["10.0", "8.1", "8.0", "7.5", "7.0"],
  'architecture': ["ARM"]
}, {
  'name': "BlackBerry",
  'version': ["10.3", "10.2", "10.1", "10.0", "7.1", "6.0"],
  'architecture': ["ARM", "x86"]
}, {
  'name': "Windows CE",
  'version': ["7.0", "6.0", "5.0"],
  'architecture': ["ARM", "x86"]
}, {
  'name': "Tizen",
  'version': ["4.0", "3.0", "2.4", "2.3"],
  'architecture': ["ARM"]
}, {
  'name': "Symbian",
  'version': ["Belle", "Anna", "S60"],
  'architecture': ["ARM", "x86"]
}, {
  'name': "webOS",
  'version': ["3.0", "2.2", "1.4", "1.0"],
  'architecture': ["ARM"]
}, {
  'name': "Bada",
  'version': ["2.0", "1.2", "1.0"],
  'architecture': ["ARM"]
}];
const languages = ["en-US", "en-GB", "fr-FR", "de-DE"];
function getRandomElement(_0x34375a) {
  return _0x34375a[Math.floor(Math.random() * _0x34375a.length)];
}
function getRandomPlatform() {
  const _0x11f6d0 = platforms[Math.floor(Math.random() * platforms.length)];
  const _0x460a49 = _0x11f6d0.name;
  let _0x17f4c9 = '';
  let _0x36092b = '';
  if (_0x11f6d0.version) {
    _0x17f4c9 = '/' + _0x11f6d0.version[Math.floor(Math.random() * _0x11f6d0.version.length)];
  }
  if (_0x11f6d0.architecture && _0x11f6d0.architecture.length > 0) {
    _0x36092b = "; " + _0x11f6d0.architecture[Math.floor(Math.random() * _0x11f6d0.architecture.length)];
  }
  return '' + _0x460a49 + _0x17f4c9 + _0x36092b;
}
function getRandomBrowser() {
  return browsers[Math.floor(Math.random() * browsers.length)];
}
const userAgents = Array.from({
  'length': count
}, () => {
  const _0x214688 = getRandomPlatform();
  const _0x26b73f = browsers[Math.floor(Math.random() * browsers.length)];
  const _0x446fc2 = Math.floor(Math.random() * 50) + 50;
  const _0x5458c0 = languages[Math.floor(Math.random() * languages.length)];
  return "Mozilla/5.0 (" + _0x214688 + "; " + _0x5458c0 + ") AppleWebKit/" + _0x446fc2 + ".0 (KHTML, like Gecko) " + _0x26b73f.name + '/' + _0x446fc2 + ".0 Safari/" + _0x446fc2 + '.0';
});
fs.writeFile(uafile, userAgents.join("\n"), _0x36ef0f => {
  if (_0x36ef0f) {
    throw _0x36ef0f;
  }
  console.log("Successfully generated " + count + " user agents");
});