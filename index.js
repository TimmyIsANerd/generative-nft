const express = require('express');
const app = express();
const { createAvatar } = require('@dicebear/avatars');
const style = require('@dicebear/open-peeps');
const Rarepress = require('rarepress');


const port = 3000

app.get('/', (req, res) => res.send('Hello World!'));



// (async () => {
//   const rarepress = new Rarepress();
//   await rarepress.init({ network: "mainnet" })
//   for(let i=0; i<100; i++) {
//     let svg = createAvatar(style, { seed: i.toString() });
//     let cid = await rarepress.fs.add(Buffer.from(svg))
//     let token = await rarepress.token.create({
//       metadata: {
//         name: `${i}`,
//         description: `${i}.svg`,
//         image: `/ipfs/${cid}`
//       }
//     })
//     await rarepress.fs.push(cid)
//     await rarepress.fs.push(token.uri)
//     let sent = await rarepress.token.send(token)
//     console.log(`[${i}] published: https://rarible.com/token/${sent.id}`)
//   }
// })();

app.listen(port, () => console.log(`Example app listening on port ${port}!`))