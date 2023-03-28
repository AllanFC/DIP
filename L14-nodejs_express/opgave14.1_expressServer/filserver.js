import http from 'http'
import fs from 'fs/promises'
import path from 'path'

function generateHTMLLinks(files, path = "") {
    let links = '';
    for (let file of files) {
        links += `<a href="${path}${file}">${file}</a><br>\n`;
    }
    return links;
}


http.createServer(async (req, res) => {
    let __dirname = "L14-nodejs_express"
    if (req.url === '/') {
        let fileNames = await fs.readdir(__dirname + '/files');
        let html = generateHTMLLinks(fileNames);
        res.writeHead(200, {"Content-Type": "text/html"}); // OK
        res.write(html);
    } else {
        if(path.extname(__dirname + '\\files\\' + req.url) === ""){
            let fileNames = await fs.readdir(__dirname + '\\files\\' + req.url);
            let html = generateHTMLLinks(fileNames, req.url + "/");
            res.writeHead(200, {"Content-Type": "text/html"}); // OK
            res.write(html);
        }
        try {
            let sti = __dirname + '\\files\\' + req.url;
            let filData = await fs.readFile(sti);
            res.writeHead(200); // OK
            res.write(filData);
        } catch (e) {
            res.writeHead(404); // Not Found
            res.write(e.name + ": " + e.message);
        }    
    }  
}).listen(8181)