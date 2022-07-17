// const icecast = require("icecast");
const express = require("express");
const router = express.Router();
// const url = 'http://87.118.104.139/radiogibsonaac';
// var wav = require('wav');

// let ice, fileWriter;

// ice = icecast.get(url, res => {
//     fileWriter = new wav.FileWriter(__dirname+'/recording.wav', {
//         channels: 1,
//         sampleRate: 16000,
//         bitDepth: 128
//     });
//     res.pipe(fileWriter);
// });

// setTimeout(()=>{
//     fileWriter.end();
//     ice.end();
// },5000);
router.post("/saveAudio", async (req, res) => {
  console.log(req.body);
  res.status(200).end().json({ message: "erht" });
});
module.exports = router;
