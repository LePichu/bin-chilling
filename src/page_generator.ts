const tabSize = `        `
const template = await Deno.readTextFile("./src/template.html")
const mdFiles = await Deno.readDir("./md")
for await(const x of mdFiles) {
    let content = await Deno.readTextFile(`./md/${x.name}`)
    
}