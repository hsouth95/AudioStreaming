var express = require("express"),
    fs = require("fs"),
    app = express();

app.get("/play/:name", function (req, res) {
    // Decode the url file path
    var fileName = decodeURI(req.params.name),
        filePath = fileName + ".mp3";

    fs.access(filePath, fs.F_OK | fs.R_OK, function(err) {
            if (err) {
                console.log(err);
            } else {
                var stat = fs.statSync(filePath);

                res.writeHead(200,
                {
                    "Content-Type": "audio/mpeg",
                    "Content-Size": stat.size
                });

                var readStream = fs.createReadStream(filePath);
                readStream.pipe(res);
            }
        });
});

app.listen(80);

console.log("listening on 80");